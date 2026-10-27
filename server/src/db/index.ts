import fs from "node:fs";
import path from "node:path";
import { config } from "../config.js";
import { migrate } from "./migrations.js";

export type RunResult = { insertId: number; changes: number };

export interface Database {
  client: "mysql" | "sqlite";
  all<T>(sql: string, params?: unknown[]): Promise<T[]>;
  run(sql: string, params?: unknown[]): Promise<RunResult>;
}

async function connectMysql(): Promise<Database> {
  const mysql = await import("mysql2/promise");
  const pool = mysql.createPool({
    host: config.db.host,
    port: config.db.port,
    user: config.db.user,
    password: config.db.password,
    database: config.db.name,
    connectionLimit: 5,
    charset: "utf8mb4",
  });

  return {
    client: "mysql",
    async all<T>(sql: string, params: unknown[] = []) {
      const [rows] = await pool.query(sql, params);
      return rows as T[];
    },
    async run(sql: string, params: unknown[] = []) {
      const [result] = await pool.query(sql, params);
      const header = result as { insertId?: number; affectedRows?: number };
      return { insertId: header.insertId ?? 0, changes: header.affectedRows ?? 0 };
    },
  };
}

// Default: Node's built-in SQLite — one file in server/data, created automatically,
// so the hosting needs no database setup at all.
async function connectSqlite(): Promise<Database> {
  let DatabaseSync: typeof import("node:sqlite").DatabaseSync;
  try {
    ({ DatabaseSync } = await import("node:sqlite"));
  } catch {
    throw new Error(
      `SQLite needs Node.js 22.13 or newer (this is ${process.version}). Choose a newer Node.js version for the app, or set DB_CLIENT=mysql.`,
    );
  }
  fs.mkdirSync(path.dirname(config.db.sqliteFile), { recursive: true });
  const sqlite = new DatabaseSync(config.db.sqliteFile);

  type SqliteParam = string | number | null;
  const toParams = (params: unknown[]) =>
    params.map((value) => (typeof value === "boolean" ? Number(value) : value)) as SqliteParam[];

  return {
    client: "sqlite",
    async all<T>(sql: string, params: unknown[] = []) {
      return sqlite.prepare(sql).all(...toParams(params)) as T[];
    },
    async run(sql: string, params: unknown[] = []) {
      const result = sqlite.prepare(sql).run(...toParams(params));
      return { insertId: Number(result.lastInsertRowid), changes: Number(result.changes) };
    },
  };
}

let database: Database | undefined;

export async function connectDatabase() {
  database = config.db.client === "sqlite" ? await connectSqlite() : await connectMysql();
  await migrate(database);
  return database;
}

export function db() {
  if (!database) throw new Error("Database is not connected yet.");
  return database;
}

export function now() {
  return new Date().toISOString();
}
