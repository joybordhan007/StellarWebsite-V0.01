# Stellar server (backend + admin dashboard)

Node.js (Express + TypeScript) app. একটাই app তিনটা কাজ করে:

- ওয়েবসাইট serve করে (root-এর `pnpm build` থেকে আসা `dist/` ফোল্ডার)
- `/api/...` — ডাটাবেস, লগইন, ছবি আপলোড, কন্টাক্ট মেসেজ
- `/admin` — অ্যাডমিন ড্যাশবোর্ড

ডাটাবেস: hosting-এ **MySQL**। নিজের কম্পিউটারে টেস্টের জন্য **SQLite** (Node 22.13+ এ built-in, কিছু install করতে হয় না)।

---

## নিজের কম্পিউটারে চালানো (development)

```bash
# 1) server
cd server
pnpm install
cp .env.example .env
#    .env এ বদলান: NODE_ENV=development, DB_CLIENT=sqlite,
#    ADMIN_EMAIL / ADMIN_PASSWORD (প্রথম লগইনের জন্য)
pnpm dev                     # http://localhost:3001  (or from the project root: pnpm server)

# 2) website (অন্য terminal এ, project root থেকে)
echo API_PROXY=http://localhost:3001 > .env.local
pnpm dev                     # http://localhost:8443/admin
```

`.env.local` এ `API_PROXY` না থাকলে website নিজের default কন্টেন্ট দিয়ে চলে (Figma Make preview এভাবেই চলে)।

---

## cPanel hosting এ deploy (Setup Node.js App)

### ১. ডাটাবেস বানান
cPanel → **MySQL® Databases**:
1. একটা database বানান (যেমন `youruser_stellar`)
2. একটা user বানান, শক্ত password দিন
3. user কে database এ add করুন → **ALL PRIVILEGES**

Table গুলো app প্রথমবার চালু হলে নিজেই বানাবে।

### ২. নিজের কম্পিউটারে build করুন
```bash
pnpm build                   # project root → dist/
cd server && pnpm build      # → server/dist/
```
> লাইভে যাওয়ার আগে `.figma/make/site.json` এ `"robots": { "index": true }` করে তারপর build করুন, না হলে Google সাইট index করবে না।

### ৩. ফাইল আপলোড করুন
File Manager দিয়ে home folder এ একটা ফোল্ডার (যেমন `stellar/`) বানিয়ে এই structure এ আপলোড করুন:

```
stellar/
  dist/            ← root এর dist ফোল্ডার
  server/
    dist/          ← server/dist
    app.cjs
    package.json
```
`node_modules`, `.env`, `data/`, `uploads/` আপলোড করবেন না।

### ৪. Node.js App বানান
cPanel → **Setup Node.js App** → **Create Application**:

| Setting | Value |
| --- | --- |
| Node.js version | 20 বা তার বেশি (22 হলে ভালো) |
| Application mode | Production |
| Application root | `stellar/server` |
| Application URL | আপনার domain |
| Application startup file | `app.cjs` |

**Environment variables** এ এগুলো যোগ করুন (`.env.example` দেখুন):

| Name | Value |
| --- | --- |
| `NODE_ENV` | `production` |
| `DB_CLIENT` | `mysql` |
| `DB_HOST` | `localhost` |
| `DB_NAME` / `DB_USER` / `DB_PASSWORD` | ধাপ ১ এর তথ্য |
| `JWT_SECRET` | কমপক্ষে ৩২ অক্ষরের random লেখা |
| `ADMIN_EMAIL` / `ADMIN_PASSWORD` | প্রথম অ্যাডমিন অ্যাকাউন্ট |
| `CLIENT_DIST` | `../dist` |

তারপর **Run NPM Install** → **Restart**।

### ৫. লগইন
`https://আপনার-domain/admin` এ যান, লগইন করুন, এবং **Admin users → My account** থেকে password বদলে ফেলুন।

---

## Update করা
নতুন কোড build করে `dist/` ও `server/dist/` আবার আপলোড করুন, তারপর cPanel এ **Restart** চাপুন।
Restart জরুরি: server চালু হওয়ার সময় website এর `index.html` মনে রাখে।

## Backup
দুটো জিনিস backup রাখুন: **MySQL database** (cPanel → Backup / phpMyAdmin export) এবং **`server/uploads/`** ফোল্ডার (আপলোড করা ছবি)।
