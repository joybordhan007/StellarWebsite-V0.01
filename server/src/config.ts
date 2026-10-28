import "dotenv/config";
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const isProduction = process.env.NODE_ENV === "production";

// The server folder (this file lives in src/ or, when built, dist/), so relative
// paths work whatever directory the hosting starts the app from.
const serverRoot = fileURLToPath(new URL("..", import.meta.url));

function resolveFromServerRoot(value: string) {
  return path.resolve(serverRoot, value);
}

const dataDir = resolveFromServerRoot("./data");

/** JWT_SECRET from the environment, or a random one generated once and kept in data/. */
function loadJwtSecret() {
  const fromEnv = process.env.JWT_SECRET ?? "";
  if (fromEnv) {
    if (isProduction && fromEnv.length < 32) throw new Error("JWT_SECRET must be at least 32 characters.");
    return fromEnv;
  }
  const file = path.join(dataDir, "jwt-secret");
  if (fs.existsSync(file)) return fs.readFileSync(file, "utf8").trim();
  const secret = crypto.randomBytes(48).toString("base64url");
  fs.mkdirSync(dataDir, { recursive: true });
  fs.writeFileSync(file, secret, { mode: 0o600 });
  return secret;
}

export const config = {
  isProduction,
  port: Number(process.env.PORT ?? 3001),
  db: {
    client: (process.env.DB_CLIENT ?? "sqlite") as "mysql" | "sqlite",
    host: process.env.DB_HOST ?? "localhost",
    port: Number(process.env.DB_PORT ?? 3306),
    user: process.env.DB_USER ?? "",
    password: process.env.DB_PASSWORD ?? "",
    name: process.env.DB_NAME ?? "",
    sqliteFile: resolveFromServerRoot(process.env.SQLITE_FILE ?? "./data/stellar.sqlite"),
  },
  jwtSecret: loadJwtSecret(),
  admin: {
    email: process.env.ADMIN_EMAIL ?? "",
    password: process.env.ADMIN_PASSWORD ?? "",
  },
  uploadDir: resolveFromServerRoot(process.env.UPLOAD_DIR ?? "./uploads"),
  clientDist: resolveFromServerRoot(process.env.CLIENT_DIST ?? "../dist"),
  /** Old → new asset paths from the 2026-10 asset rename (see assetRenames.ts). */
  assetRenamesFile: resolveFromServerRoot("./asset-renames.json"),
};
