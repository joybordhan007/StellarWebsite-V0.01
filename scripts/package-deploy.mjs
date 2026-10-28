// Builds the website and the server, then zips exactly what the hosting needs:
//   deploy/stellar.zip → stellar/dist/ (website) + stellar/server/ (app.cjs, package.json, dist/)
// Upload it to the hosting's home folder and extract it there (cPanel File Manager → Extract).
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";

const root = path.resolve(import.meta.dirname, "..");
const run = (command, cwd = root) => execSync(command, { cwd, stdio: "inherit" });

/** [path inside the zip, file on disk] for every file under `dir`. */
function listFiles(dir, prefix) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    const name = `${prefix}/${entry.name}`;
    return entry.isDirectory() ? listFiles(full, name) : [[name, full]];
  });
}

/** Minimal ZIP writer (deflate, no zip64): enough for a few hundred MB of site files. */
function writeZip(target, files) {
  const out = fs.openSync(target, "w");
  const central = [];
  let offset = 0;
  const write = (buffer) => {
    fs.writeSync(out, buffer);
    offset += buffer.length;
  };

  for (const [name, file] of files) {
    const data = fs.readFileSync(file);
    const compressed = zlib.deflateRawSync(data);
    const stored = compressed.length >= data.length;
    const body = stored ? data : compressed;
    const nameBytes = Buffer.from(name, "utf8");
    const crc = zlib.crc32(data);

    const local = Buffer.alloc(30);
    local.writeUInt32LE(0x04034b50, 0);
    local.writeUInt16LE(20, 4); // version needed
    local.writeUInt16LE(0x0800, 6); // UTF-8 names
    local.writeUInt16LE(stored ? 0 : 8, 8);
    local.writeUInt32LE(crc >>> 0, 14);
    local.writeUInt32LE(body.length, 18);
    local.writeUInt32LE(data.length, 22);
    local.writeUInt16LE(nameBytes.length, 26);

    const header = Buffer.alloc(46);
    header.writeUInt32LE(0x02014b50, 0);
    header.writeUInt16LE(20, 4);
    header.writeUInt16LE(20, 6);
    header.writeUInt16LE(0x0800, 8);
    header.writeUInt16LE(stored ? 0 : 8, 10);
    header.writeUInt32LE(crc >>> 0, 16);
    header.writeUInt32LE(body.length, 20);
    header.writeUInt32LE(data.length, 24);
    header.writeUInt16LE(nameBytes.length, 28);
    header.writeUInt32LE(offset, 42);
    central.push(Buffer.concat([header, nameBytes]));

    write(Buffer.concat([local, nameBytes]));
    write(body);
  }

  const directory = Buffer.concat(central);
  const end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0);
  end.writeUInt16LE(files.length, 8);
  end.writeUInt16LE(files.length, 10);
  end.writeUInt32LE(directory.length, 12);
  end.writeUInt32LE(offset, 16);
  write(directory);
  write(end);
  fs.closeSync(out);
}

run("pnpm build");
run("pnpm build", path.join(root, "server"));

const serverFiles = ["app.cjs", "package.json", ".env.example", "README.md", "asset-renames.json"].map((name) => [
  `stellar/server/${name}`,
  path.join(root, "server", name),
]);
const files = [
  ...listFiles(path.join(root, "dist"), "stellar/dist"),
  ...listFiles(path.join(root, "server", "dist"), "stellar/server/dist"),
  ...serverFiles,
];

fs.rmSync(path.join(root, "deploy"), { recursive: true, force: true });
fs.mkdirSync(path.join(root, "deploy"));
const target = path.join(root, "deploy", "stellar.zip");
writeZip(target, files);
console.log(`\nReady to upload (${files.length} files): ${target}`);
