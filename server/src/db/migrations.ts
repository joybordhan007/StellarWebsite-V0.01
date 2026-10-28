import type { Database } from "./index.js";

type Migration = { id: string; mysql: string[]; sqlite: string[] };

// Append new migrations to the end; never edit one that has shipped.
const migrations: Migration[] = [
  {
    id: "001_initial",
    mysql: [
      `CREATE TABLE admins (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(191) NOT NULL UNIQUE,
        name VARCHAR(191) NOT NULL,
        password_hash VARCHAR(100) NOT NULL,
        created_at VARCHAR(32) NOT NULL
      ) CHARACTER SET utf8mb4`,
      `CREATE TABLE content (
        content_key VARCHAR(64) PRIMARY KEY,
        data LONGTEXT NOT NULL,
        updated_at VARCHAR(32) NOT NULL,
        updated_by VARCHAR(191) NULL
      ) CHARACTER SET utf8mb4`,
      `CREATE TABLE messages (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(191) NOT NULL,
        email VARCHAR(191) NOT NULL,
        data LONGTEXT NOT NULL,
        is_read TINYINT NOT NULL DEFAULT 0,
        created_at VARCHAR(32) NOT NULL
      ) CHARACTER SET utf8mb4`,
      `CREATE TABLE media (
        id INT AUTO_INCREMENT PRIMARY KEY,
        filename VARCHAR(191) NOT NULL,
        original_name VARCHAR(255) NOT NULL,
        mime VARCHAR(100) NOT NULL,
        size INT NOT NULL,
        url VARCHAR(255) NOT NULL,
        created_at VARCHAR(32) NOT NULL
      ) CHARACTER SET utf8mb4`,
    ],
    sqlite: [
      `CREATE TABLE admins (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT NOT NULL UNIQUE,
        name TEXT NOT NULL,
        password_hash TEXT NOT NULL,
        created_at TEXT NOT NULL
      )`,
      `CREATE TABLE content (
        content_key TEXT PRIMARY KEY,
        data TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        updated_by TEXT
      )`,
      `CREATE TABLE messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        data TEXT NOT NULL,
        is_read INTEGER NOT NULL DEFAULT 0,
        created_at TEXT NOT NULL
      )`,
      `CREATE TABLE media (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        filename TEXT NOT NULL,
        original_name TEXT NOT NULL,
        mime TEXT NOT NULL,
        size INTEGER NOT NULL,
        url TEXT NOT NULL,
        created_at TEXT NOT NULL
      )`,
    ],
  },
  {
    id: "002_profiles_and_analytics",
    mysql: [
      "ALTER TABLE admins ADD COLUMN avatar VARCHAR(255) NULL",
      `CREATE TABLE page_views (
        id INT AUTO_INCREMENT PRIMARY KEY,
        path VARCHAR(255) NOT NULL,
        referrer VARCHAR(191) NOT NULL,
        device VARCHAR(16) NOT NULL,
        visitor CHAR(16) NOT NULL,
        day CHAR(10) NOT NULL,
        created_at VARCHAR(32) NOT NULL,
        INDEX page_views_day (day)
      ) CHARACTER SET utf8mb4`,
    ],
    sqlite: [
      "ALTER TABLE admins ADD COLUMN avatar TEXT",
      `CREATE TABLE page_views (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        path TEXT NOT NULL,
        referrer TEXT NOT NULL,
        device TEXT NOT NULL,
        visitor TEXT NOT NULL,
        day TEXT NOT NULL,
        created_at TEXT NOT NULL
      )`,
      "CREATE INDEX page_views_day ON page_views (day)",
    ],
  },
];

export async function migrate(db: Database) {
  await db.run(
    db.client === "mysql"
      ? "CREATE TABLE IF NOT EXISTS schema_migrations (id VARCHAR(100) PRIMARY KEY, applied_at VARCHAR(32) NOT NULL)"
      : "CREATE TABLE IF NOT EXISTS schema_migrations (id TEXT PRIMARY KEY, applied_at TEXT NOT NULL)",
  );
  const applied = new Set(
    (await db.all<{ id: string }>("SELECT id FROM schema_migrations")).map((row) => row.id),
  );

  for (const migration of migrations) {
    if (applied.has(migration.id)) continue;
    for (const statement of migration[db.client]) await db.run(statement);
    await db.run("INSERT INTO schema_migrations (id, applied_at) VALUES (?, ?)", [
      migration.id,
      new Date().toISOString(),
    ]);
    console.log(`Applied migration ${migration.id}`);
  }
}
