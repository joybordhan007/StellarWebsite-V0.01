import cookieParser from "cookie-parser";
import express from "express";
import { ensureInitialAdmin, requireAdmin } from "./auth.js";
import { config } from "./config.js";
import { connectDatabase, db } from "./db/index.js";
import { errorHandler, HttpError } from "./http.js";
import { adminsRouter } from "./routes/admins.js";
import { authRouter } from "./routes/auth.js";
import { contentRouter } from "./routes/content.js";
import { mediaRouter } from "./routes/media.js";
import { messagesRouter } from "./routes/messages.js";
import { siteRouter } from "./site.js";

const app = express();

// cPanel / Passenger runs the app behind a proxy; trust it for client IPs and HTTPS.
app.set("trust proxy", 1);
app.disable("x-powered-by");
app.use((_req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader("X-Frame-Options", "SAMEORIGIN");
  next();
});
app.use(express.json({ limit: "2mb" }));
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/content", contentRouter);
app.use("/api/messages", messagesRouter);
app.use("/api/media", requireAdmin, mediaRouter);
app.use("/api/admins", requireAdmin, adminsRouter);

app.get("/api/stats", requireAdmin, async (_req, res) => {
  const count = async (sql: string) => Number((await db().all<{ count: number }>(sql))[0].count);
  res.json({
    messages: await count("SELECT COUNT(*) AS count FROM messages"),
    unreadMessages: await count("SELECT COUNT(*) AS count FROM messages WHERE is_read = 0"),
    media: await count("SELECT COUNT(*) AS count FROM media"),
    editedContent: await count("SELECT COUNT(*) AS count FROM content"),
    admins: await count("SELECT COUNT(*) AS count FROM admins"),
  });
});

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.use("/api", () => {
  throw new HttpError(404, "Not found.");
});

// Uploaded files: sandboxed so an uploaded SVG can't run scripts on this origin.
app.use(
  "/uploads",
  express.static(config.uploadDir, {
    maxAge: "365d",
    immutable: true,
    setHeaders: (res) => {
      res.setHeader("Content-Security-Policy", "default-src 'none'; style-src 'unsafe-inline'; sandbox");
    },
  }),
);

app.use(siteRouter());
app.use(errorHandler);

await connectDatabase();
await ensureInitialAdmin();

app.listen(config.port, () => {
  console.log(`Stellar server listening on port ${config.port} (${config.db.client})`);
});
