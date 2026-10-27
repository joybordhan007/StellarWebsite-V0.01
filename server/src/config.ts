import "dotenv/config";
import path from "node:path";

const isProduction = process.env.NODE_ENV === "production";

function resolveFromServerRoot(value: string) {
  return path.resolve(process.cwd(), value);
}

const jwtSecret = process.env.JWT_SECRET ?? "";
if (isProduction && jwtSecret.length < 32) {
  throw new Error("JWT_SECRET must be set to at least 32 characters in production.");
}

export const config = {
  isProduction,
  port: Number(process.env.PORT ?? 3001),
  db: {
    client: (process.env.DB_CLIENT ?? "mysql") as "mysql" | "sqlite",
    host: process.env.DB_HOST ?? "localhost",
    port: Number(process.env.DB_PORT ?? 3306),
    user: process.env.DB_USER ?? "",
    password: process.env.DB_PASSWORD ?? "",
    name: process.env.DB_NAME ?? "",
    sqliteFile: resolveFromServerRoot(process.env.SQLITE_FILE ?? "./data/dev.sqlite"),
  },
  jwtSecret: jwtSecret || "development-only-secret-do-not-use-in-production",
  admin: {
    email: process.env.ADMIN_EMAIL ?? "",
    password: process.env.ADMIN_PASSWORD ?? "",
  },
  uploadDir: resolveFromServerRoot(process.env.UPLOAD_DIR ?? "./uploads"),
  clientDist: resolveFromServerRoot(process.env.CLIENT_DIST ?? "../dist"),
};
