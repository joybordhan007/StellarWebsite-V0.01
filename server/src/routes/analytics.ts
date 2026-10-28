import crypto from "node:crypto";
import { Router } from "express";
import { requireAdmin } from "../auth.js";
import { config } from "../config.js";
import { db, now } from "../db/index.js";
import { rateLimit, readString } from "../http.js";

const BOT_PATTERN = /bot|crawl|spider|slurp|headless|lighthouse|preview|facebookexternalhit/i;

function deviceOf(userAgent: string) {
  if (/ipad|tablet|(android(?!.*mobile))/i.test(userAgent)) return "tablet";
  if (/mobi|iphone|android/i.test(userAgent)) return "mobile";
  return "desktop";
}

/** Referring site's host, or "" for direct visits and links within this site. */
function referrerHost(value: string, ownHost: string) {
  try {
    const host = new URL(value).hostname.replace(/^www\./, "");
    return host && host !== ownHost.replace(/^www\./, "") ? host.slice(0, 191) : "";
  } catch {
    return "";
  }
}

function dayOf(date: Date) {
  return date.toISOString().slice(0, 10);
}

export const analyticsRouter = Router();

/**
 * Public: the website reports each page view. No cookies; a visitor is a hash of
 * IP + browser + day, so the same person counts once per day and can't be tracked across days.
 */
analyticsRouter.post("/track", rateLimit({ windowMs: 60 * 1000, max: 120 }), async (req, res) => {
  const userAgent = req.get("user-agent") ?? "";
  const path = readString(req.body, "path", { max: 255 });
  if (!path.startsWith("/") || path.startsWith("/admin") || BOT_PATTERN.test(userAgent)) {
    res.status(204).end();
    return;
  }
  const date = new Date();
  const day = dayOf(date);
  const visitor = crypto
    .createHash("sha256")
    .update(`${day}|${req.ip}|${userAgent}|${config.jwtSecret}`)
    .digest("hex")
    .slice(0, 16);
  const referrer = referrerHost(readString(req.body, "referrer", { max: 500, required: false }), req.hostname);

  await db().run(
    "INSERT INTO page_views (path, referrer, device, visitor, day, created_at) VALUES (?, ?, ?, ?, ?, ?)",
    [path, referrer, deviceOf(userAgent), visitor, day, now()],
  );
  res.status(204).end();
});

type DayRow = { day: string; views: number; visitors: number };
type CountRow = { label: string; count: number };

/** Admin: traffic and enquiry report for the last `days` days (7, 30 or 90), with the period before for comparison. */
analyticsRouter.get("/reports", requireAdmin, async (req, res) => {
  const days = [7, 30, 90].includes(Number(req.query.days)) ? Number(req.query.days) : 30;
  const today = new Date();
  const start = new Date(today);
  start.setUTCDate(start.getUTCDate() - (days - 1));
  const previousStart = new Date(start);
  previousStart.setUTCDate(previousStart.getUTCDate() - days);
  const from = dayOf(start);
  const previousFrom = dayOf(previousStart);

  // The visitor hash already includes the day, so distinct hashes = daily unique visitors summed.
  const totals = async (fromDay: string, toDay: string) => {
    const [row] = await db().all<{ views: number; visitors: number }>(
      "SELECT COUNT(*) AS views, COUNT(DISTINCT visitor) AS visitors FROM page_views WHERE day >= ? AND day < ?",
      [fromDay, toDay],
    );
    const [messages] = await db().all<{ count: number }>(
      "SELECT COUNT(*) AS count FROM messages WHERE SUBSTR(created_at, 1, 10) >= ? AND SUBSTR(created_at, 1, 10) < ?",
      [fromDay, toDay],
    );
    return { views: Number(row.views), visitors: Number(row.visitors), messages: Number(messages.count) };
  };

  const tomorrow = new Date(today);
  tomorrow.setUTCDate(tomorrow.getUTCDate() + 1);
  const end = dayOf(tomorrow);

  const daily = await db().all<DayRow>(
    "SELECT day, COUNT(*) AS views, COUNT(DISTINCT visitor) AS visitors FROM page_views WHERE day >= ? GROUP BY day",
    [from],
  );
  const dailyMessages = await db().all<{ day: string; count: number }>(
    "SELECT SUBSTR(created_at, 1, 10) AS day, COUNT(*) AS count FROM messages WHERE SUBSTR(created_at, 1, 10) >= ? GROUP BY SUBSTR(created_at, 1, 10)",
    [from],
  );
  const top = (column: string) =>
    db().all<CountRow>(
      `SELECT ${column} AS label, COUNT(*) AS count FROM page_views WHERE day >= ? GROUP BY ${column} ORDER BY count DESC LIMIT 8`,
      [from],
    );

  // One entry per day, including days without visits.
  const series = Array.from({ length: days }, (_, index) => {
    const date = new Date(start);
    date.setUTCDate(date.getUTCDate() + index);
    const day = dayOf(date);
    const row = daily.find((entry) => entry.day === day);
    const messages = dailyMessages.find((entry) => entry.day === day);
    return { day, views: Number(row?.views ?? 0), visitors: Number(row?.visitors ?? 0), messages: Number(messages?.count ?? 0) };
  });

  const toCounts = (rows: CountRow[]) => rows.map((row) => ({ label: row.label, count: Number(row.count) }));

  res.json({
    days,
    current: await totals(from, end),
    previous: await totals(previousFrom, from),
    series,
    pages: toCounts(await top("path")),
    referrers: toCounts(await top("referrer")),
    devices: toCounts(await top("device")),
  });
});
