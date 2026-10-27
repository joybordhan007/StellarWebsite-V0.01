// Starts the website (Vite, port 8443) and the backend (port 3001) together.
// Ctrl+C stops both. The website talks to the backend through API_PROXY in .env.local.
import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const envLocal = path.join(root, ".env.local");
if (!fs.existsSync(envLocal) || !fs.readFileSync(envLocal, "utf8").includes("API_PROXY=")) {
  fs.appendFileSync(envLocal, "API_PROXY=http://localhost:3001\n");
}

const children = [
  spawn("pnpm server", { cwd: root, stdio: "inherit", shell: true }),
  spawn("pnpm dev", { cwd: root, stdio: "inherit", shell: true }),
];
const stopAll = () => children.forEach((child) => child.kill());
process.on("SIGINT", stopAll);
process.on("SIGTERM", stopAll);
children.forEach((child) => child.on("exit", (code) => code && stopAll()));

console.log("\nWebsite + dashboard: http://localhost:8443  (admin: http://localhost:8443/admin)\n");
