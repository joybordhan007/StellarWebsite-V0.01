import { Router } from "express";
import { type Admin, currentAdmin, findAdminByEmail, hashPassword, validatePassword } from "../auth.js";
import { db, now } from "../db/index.js";
import { HttpError, isEmail, readId, readString } from "../http.js";

export const adminsRouter = Router();

adminsRouter.get("/", async (_req, res) => {
  const admins = await db().all<Admin>(
    "SELECT id, email, name, created_at FROM admins ORDER BY id",
  );
  res.json({ admins });
});

adminsRouter.post("/", async (req, res) => {
  const email = readString(req.body, "email", { max: 191 }).toLowerCase();
  const name = readString(req.body, "name", { max: 191 });
  const password = readString(req.body, "password", { max: 200 });
  if (!isEmail(email)) throw new HttpError(400, "Enter a valid email address.");
  validatePassword(password);
  if (await findAdminByEmail(email)) throw new HttpError(409, "An admin with this email already exists.");

  const createdAt = now();
  const { insertId } = await db().run(
    "INSERT INTO admins (email, name, password_hash, created_at) VALUES (?, ?, ?, ?)",
    [email, name, await hashPassword(password), createdAt],
  );
  res.status(201).json({ admin: { id: insertId, email, name, created_at: createdAt } });
});

adminsRouter.delete("/:id", async (req, res) => {
  const id = readId(req.params.id);
  if (id === currentAdmin(res).id) throw new HttpError(400, "You can't delete your own account.");
  const { changes } = await db().run("DELETE FROM admins WHERE id = ?", [id]);
  if (!changes) throw new HttpError(404, "Admin not found.");
  res.json({ ok: true });
});
