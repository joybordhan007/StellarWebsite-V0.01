import fs from "node:fs";
import type { RequestHandler } from "express";
import { config } from "./config.js";
import { db, now } from "./db/index.js";

// The website's images were renamed from Figma export names (/assets/1-641/3b80a.svg) to
// meaningful ones (/assets/common/stellar-logo-white.svg). Content saved in the dashboard before
// that still holds old paths, and old URLs may be cached or linked elsewhere.

function loadRenames(): Record<string, string> {
  if (!fs.existsSync(config.assetRenamesFile)) return {};
  return JSON.parse(fs.readFileSync(config.assetRenamesFile, "utf8"));
}

const renames = loadRenames();
// Longest first, so no old path is replaced inside a longer one.
const oldPaths = Object.keys(renames).sort((a, b) => b.length - a.length);

/** Rewrites old asset paths inside saved content documents. Safe to run on every start. */
export async function rewriteStoredAssetPaths() {
  if (!oldPaths.length) return;
  const rows = await db().all<{ content_key: string; data: string }>("SELECT content_key, data FROM content");
  for (const row of rows) {
    let data = row.data;
    for (const old of oldPaths) if (data.includes(old)) data = data.split(old).join(renames[old]);
    if (data === row.data) continue;
    await db().run("UPDATE content SET data = ?, updated_at = ? WHERE content_key = ?", [data, now(), row.content_key]);
    console.log(`Updated renamed image paths in saved content: ${row.content_key}`);
  }
}

/** Permanently redirects requests for an old asset URL to its new name. */
export const redirectRenamedAssets: RequestHandler = (req, res, next) => {
  const target = req.method === "GET" || req.method === "HEAD" ? renames[req.path] : undefined;
  if (!target) return next();
  res.redirect(301, target);
};
