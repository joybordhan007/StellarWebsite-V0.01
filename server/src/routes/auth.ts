import { Router } from "express";
import {
  currentAdmin,
  endSession,
  findAdminByEmail,
  findAdminById,
  hashPassword,
  publicAdmin,
  requireAdmin,
  startSession,
  validatePassword,
  verifyPassword,
} from "../auth.js";
import { db } from "../db/index.js";
import { HttpError, rateLimit, readString } from "../http.js";

export const authRouter = Router();

authRouter.post("/login", rateLimit({ windowMs: 15 * 60 * 1000, max: 10 }), async (req, res) => {
  const email = readString(req.body, "email", { max: 191 });
  const password = readString(req.body, "password", { max: 200 });
  const admin = await findAdminByEmail(email);

  if (!admin || !(await verifyPassword(password, admin.password_hash))) {
    throw new HttpError(401, "Email or password is incorrect.");
  }
  startSession(res, admin);
  res.json({ admin: publicAdmin(admin) });
});

authRouter.post("/logout", (_req, res) => {
  endSession(res);
  res.json({ ok: true });
});

authRouter.get("/me", requireAdmin, (_req, res) => {
  res.json({ admin: currentAdmin(res) });
});

authRouter.put("/profile", requireAdmin, async (req, res) => {
  const name = readString(req.body, "name", { max: 191 });
  // Profile photo: an uploaded image (/uploads/...) or empty to remove it.
  const avatar = readString(req.body, "avatar", { max: 255, required: false }) || null;
  if (avatar && !avatar.startsWith("/uploads/")) throw new HttpError(400, "Upload the profile photo first.");
  await db().run("UPDATE admins SET name = ?, avatar = ? WHERE id = ?", [name, avatar, currentAdmin(res).id]);
  res.json({ admin: { ...currentAdmin(res), name, avatar } });
});

authRouter.put("/password", requireAdmin, async (req, res) => {
  const currentPassword = readString(req.body, "currentPassword", { max: 200 });
  const newPassword = readString(req.body, "newPassword", { max: 200 });
  validatePassword(newPassword);

  const admin = await findAdminById(currentAdmin(res).id);
  if (!admin || !(await verifyPassword(currentPassword, admin.password_hash))) {
    throw new HttpError(400, "Current password is incorrect.");
  }
  await db().run("UPDATE admins SET password_hash = ? WHERE id = ?", [
    await hashPassword(newPassword),
    admin.id,
  ]);
  res.json({ ok: true });
});
