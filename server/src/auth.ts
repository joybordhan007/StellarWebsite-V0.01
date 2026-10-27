import bcrypt from "bcryptjs";
import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { config } from "./config.js";
import { db, now } from "./db/index.js";
import { HttpError } from "./http.js";

export const SESSION_COOKIE = "stellar_admin";
const SESSION_DAYS = 7;

export type Admin = { id: number; email: string; name: string; created_at: string };
type AdminRow = Admin & { password_hash: string };

export function hashPassword(password: string) {
  return bcrypt.hash(password, 12);
}

export function verifyPassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}

export function validatePassword(password: string) {
  if (password.length < 8) throw new HttpError(400, "Password must be at least 8 characters.");
}

export async function findAdminByEmail(email: string) {
  const rows = await db().all<AdminRow>("SELECT * FROM admins WHERE email = ?", [email.toLowerCase()]);
  return rows[0];
}

export async function findAdminById(id: number) {
  const rows = await db().all<AdminRow>("SELECT * FROM admins WHERE id = ?", [id]);
  return rows[0];
}

export function publicAdmin({ id, email, name, created_at }: Admin): Admin {
  return { id, email, name, created_at };
}

export function startSession(res: Response, admin: Admin) {
  const token = jwt.sign({ sub: String(admin.id) }, config.jwtSecret, {
    expiresIn: `${SESSION_DAYS}d`,
  });
  res.cookie(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: config.isProduction,
    maxAge: SESSION_DAYS * 24 * 60 * 60 * 1000,
    path: "/",
  });
}

export function endSession(res: Response) {
  res.clearCookie(SESSION_COOKIE, { path: "/" });
}

/** Rejects the request unless it carries a valid session for an admin that still exists. */
export async function requireAdmin(req: Request, res: Response, next: NextFunction) {
  const token = req.cookies?.[SESSION_COOKIE];
  if (typeof token !== "string") throw new HttpError(401, "Please log in.");

  let adminId: number;
  try {
    const payload = jwt.verify(token, config.jwtSecret) as { sub?: string };
    adminId = Number(payload.sub);
  } catch {
    throw new HttpError(401, "Your session has expired. Please log in again.");
  }

  const admin = await findAdminById(adminId);
  if (!admin) throw new HttpError(401, "Please log in.");
  res.locals.admin = publicAdmin(admin);
  next();
}

export function currentAdmin(res: Response) {
  return res.locals.admin as Admin;
}

export async function ensureInitialAdmin() {
  const [{ count }] = await db().all<{ count: number }>("SELECT COUNT(*) AS count FROM admins");
  if (Number(count) > 0) return;

  const { email, password } = config.admin;
  if (!email || !password) {
    console.warn("No admin account exists. Set ADMIN_EMAIL and ADMIN_PASSWORD and restart.");
    return;
  }
  await db().run("INSERT INTO admins (email, name, password_hash, created_at) VALUES (?, ?, ?, ?)", [
    email.toLowerCase(),
    "Administrator",
    await hashPassword(password),
    now(),
  ]);
  console.log(`Created first admin account ${email}.`);
}
