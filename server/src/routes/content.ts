import { Router } from "express";
import { currentAdmin, requireAdmin } from "../auth.js";
import { db, now } from "../db/index.js";
import { HttpError } from "../http.js";

// Content documents are JSON blobs keyed by name ("site", "products", ...).
// Only edited documents are stored; the website ships its own defaults.
const KEY_PATTERN = /^[a-z0-9-]{1,64}$/;
const MAX_DOCUMENT_BYTES = 1_000_000;

let cache: Record<string, unknown> | undefined;

export async function getAllContent() {
  if (!cache) {
    const rows = await db().all<{ content_key: string; data: string }>(
      "SELECT content_key, data FROM content",
    );
    cache = Object.fromEntries(rows.map((row) => [row.content_key, JSON.parse(row.data)]));
  }
  return cache;
}

function readKey(key: string | string[] | undefined) {
  if (typeof key !== "string" || !KEY_PATTERN.test(key)) throw new HttpError(400, "Invalid content key.");
  return key;
}

export const contentRouter = Router();

contentRouter.get("/", async (_req, res) => {
  res.set("Cache-Control", "no-cache");
  res.json({ content: await getAllContent() });
});

contentRouter.get("/:key", async (req, res) => {
  const all = await getAllContent();
  res.set("Cache-Control", "no-cache");
  res.json({ data: all[readKey(req.params.key)] ?? null });
});

contentRouter.get("/:key/meta", requireAdmin, async (req, res) => {
  const rows = await db().all<{ updated_at: string; updated_by: string | null }>(
    "SELECT updated_at, updated_by FROM content WHERE content_key = ?",
    [readKey(req.params.key)],
  );
  res.json({ meta: rows[0] ?? null });
});

contentRouter.put("/:key", requireAdmin, async (req, res) => {
  const key = readKey(req.params.key);
  const body = (req.body ?? {}) as { data?: unknown; baseUpdatedAt?: unknown };
  const data = body.data;
  if (data === undefined) throw new HttpError(400, "data is required.");

  // Optimistic locking: the dashboard sends the version it edited (null = never saved).
  if ("baseUpdatedAt" in body) {
    const [current] = await db().all<{ updated_at: string }>(
      "SELECT updated_at FROM content WHERE content_key = ?",
      [key],
    );
    if ((current?.updated_at ?? null) !== body.baseUpdatedAt) {
      throw new HttpError(409, "Someone else changed this in the meantime. The latest version has been loaded — please make your change again.");
    }
  }

  const json = JSON.stringify(data);
  if (Buffer.byteLength(json) > MAX_DOCUMENT_BYTES) throw new HttpError(413, "Content is too large.");

  const updatedAt = now();
  const updatedBy = currentAdmin(res).email;
  const { changes } = await db().run(
    "UPDATE content SET data = ?, updated_at = ?, updated_by = ? WHERE content_key = ?",
    [json, updatedAt, updatedBy, key],
  );
  if (!changes) {
    await db().run(
      "INSERT INTO content (content_key, data, updated_at, updated_by) VALUES (?, ?, ?, ?)",
      [key, json, updatedAt, updatedBy],
    );
  }
  cache = undefined;
  res.json({ data, meta: { updated_at: updatedAt, updated_by: updatedBy } });
});

/** Removes the stored document so the website falls back to its built-in default. */
contentRouter.delete("/:key", requireAdmin, async (req, res) => {
  await db().run("DELETE FROM content WHERE content_key = ?", [readKey(req.params.key)]);
  cache = undefined;
  res.json({ ok: true });
});
