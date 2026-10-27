import { Router } from "express";
import { requireAdmin } from "../auth.js";
import { db, now } from "../db/index.js";
import { HttpError, isEmail, rateLimit, readId, readString } from "../http.js";

type MessageRow = {
  id: number;
  name: string;
  email: string;
  data: string;
  is_read: number;
  created_at: string;
};

const FIELDS = ["firstName", "lastName", "email", "phone", "company", "message"] as const;

function toMessage(row: MessageRow) {
  return { ...row, data: JSON.parse(row.data) as Record<string, string>, is_read: Boolean(row.is_read) };
}

export const messagesRouter = Router();

// Public: the website contact form posts here.
messagesRouter.post("/", rateLimit({ windowMs: 10 * 60 * 1000, max: 5 }), async (req, res) => {
  // Honeypot field: real visitors never fill it in.
  if (readString(req.body, "_gotcha", { required: false })) {
    res.status(201).json({ ok: true });
    return;
  }

  const data: Record<string, string> = {};
  for (const field of FIELDS) {
    data[field] = readString(req.body, field, {
      required: field !== "company" && field !== "message",
      max: field === "message" ? 5000 : 191,
    });
  }
  if (!isEmail(data.email)) throw new HttpError(400, "Enter a valid email address.");

  const name = `${data.firstName} ${data.lastName}`.trim();
  await db().run("INSERT INTO messages (name, email, data, is_read, created_at) VALUES (?, ?, ?, 0, ?)", [
    name,
    data.email,
    JSON.stringify(data),
    now(),
  ]);
  res.status(201).json({ ok: true });
});

messagesRouter.get("/", requireAdmin, async (_req, res) => {
  const rows = await db().all<MessageRow>("SELECT * FROM messages ORDER BY id DESC LIMIT 1000");
  res.json({ messages: rows.map(toMessage) });
});

messagesRouter.patch("/:id", requireAdmin, async (req, res) => {
  const id = readId(req.params.id);
  const isRead = (req.body as { is_read?: unknown } | undefined)?.is_read;
  if (typeof isRead !== "boolean") throw new HttpError(400, "is_read must be true or false.");
  const { changes } = await db().run("UPDATE messages SET is_read = ? WHERE id = ?", [isRead ? 1 : 0, id]);
  if (!changes) throw new HttpError(404, "Message not found.");
  res.json({ ok: true });
});

messagesRouter.delete("/:id", requireAdmin, async (req, res) => {
  const { changes } = await db().run("DELETE FROM messages WHERE id = ?", [readId(req.params.id)]);
  if (!changes) throw new HttpError(404, "Message not found.");
  res.json({ ok: true });
});
