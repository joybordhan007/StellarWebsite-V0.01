import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { Router } from "express";
import multer from "multer";
import { config } from "../config.js";
import { db, now } from "../db/index.js";
import { HttpError, readId } from "../http.js";

const ALLOWED_TYPES: Record<string, string> = {
  "image/jpeg": ".jpg",
  "image/png": ".png",
  "image/webp": ".webp",
  "image/gif": ".gif",
  "image/svg+xml": ".svg",
  "image/avif": ".avif",
};
const MAX_FILE_BYTES = 10 * 1024 * 1024;

type MediaRow = {
  id: number;
  filename: string;
  original_name: string;
  mime: string;
  size: number;
  url: string;
  created_at: string;
};

fs.mkdirSync(config.uploadDir, { recursive: true });

const upload = multer({
  storage: multer.diskStorage({
    destination: config.uploadDir,
    filename: (_req, file, done) =>
      done(null, `${Date.now()}-${crypto.randomBytes(6).toString("hex")}${ALLOWED_TYPES[file.mimetype]}`),
  }),
  limits: { fileSize: MAX_FILE_BYTES, files: 1 },
  fileFilter: (_req, file, done) => {
    if (ALLOWED_TYPES[file.mimetype]) done(null, true);
    else done(new HttpError(400, "Only JPG, PNG, WebP, GIF, AVIF and SVG images can be uploaded."));
  },
});

export const mediaRouter = Router();

mediaRouter.get("/", async (_req, res) => {
  const media = await db().all<MediaRow>("SELECT * FROM media ORDER BY id DESC");
  res.json({ media });
});

mediaRouter.post("/", upload.single("file"), async (req, res) => {
  const file = req.file;
  if (!file) throw new HttpError(400, "Choose an image to upload.");

  const url = `/uploads/${file.filename}`;
  const createdAt = now();
  const originalName = file.originalname.slice(0, 255);
  const { insertId } = await db().run(
    "INSERT INTO media (filename, original_name, mime, size, url, created_at) VALUES (?, ?, ?, ?, ?, ?)",
    [file.filename, originalName, file.mimetype, file.size, url, createdAt],
  );
  res.status(201).json({
    media: {
      id: insertId,
      filename: file.filename,
      original_name: originalName,
      mime: file.mimetype,
      size: file.size,
      url,
      created_at: createdAt,
    },
  });
});

mediaRouter.delete("/:id", async (req, res) => {
  const id = readId(req.params.id);
  const [row] = await db().all<MediaRow>("SELECT * FROM media WHERE id = ?", [id]);
  if (!row) throw new HttpError(404, "File not found.");

  await db().run("DELETE FROM media WHERE id = ?", [id]);
  await fs.promises.rm(path.join(config.uploadDir, path.basename(row.filename)), { force: true });
  res.json({ ok: true });
});
