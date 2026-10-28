# Stellar server (backend + admin dashboard)

Node.js (Express + TypeScript) app. একটাই app তিনটা কাজ করে:

- ওয়েবসাইট serve করে (root-এর `pnpm build` থেকে আসা `dist/` ফোল্ডার)
- `/api/...` — ডাটাবেস, লগইন, ছবি আপলোড, কন্টাক্ট মেসেজ
- `/admin` — অ্যাডমিন ড্যাশবোর্ড

ডাটাবেস: **SQLite** — `server/data/` ফোল্ডারে একটা ফাইল, app প্রথমবার চালু হলে নিজেই তৈরি হয়। hosting-এ কোনো ডাটাবেস বানাতে হয় না (Node.js 22.13+ লাগে)। চাইলে `DB_CLIENT=mysql` দিয়ে MySQL-ও চালানো যায়।

---

## নিজের কম্পিউটারে চালানো (development)

```bash
# 1) server
cd server
pnpm install
cp .env.example .env
#    .env এ বদলান: NODE_ENV=development,
#    ADMIN_EMAIL / ADMIN_PASSWORD (প্রথম লগইনের জন্য)
pnpm dev                     # http://localhost:3001  (or from the project root: pnpm server)

# 2) website (অন্য terminal এ, project root থেকে)
echo API_PROXY=http://localhost:3001 > .env.local
pnpm dev                     # http://localhost:8443/admin
```

`.env.local` এ `API_PROXY` না থাকলে website নিজের default কন্টেন্ট দিয়ে চলে (Figma Make preview এভাবেই চলে)।

---

## cPanel hosting এ deploy (Setup Node.js App)

ডাটাবেস বা কোনো গোপন key বানাতে হবে না — app নিজেই সব তৈরি করে।

### ১. Upload ফাইল বানান (নিজের কম্পিউটারে, project root থেকে)
```bash
pnpm deploy:package          # → deploy/stellar.zip
```
> লাইভে যাওয়ার আগে `config/site.json` এ `"robots": { "index": true }` করে নিন, না হলে Google সাইট index করবে না।

### ২. আপলোড করুন
cPanel → **File Manager** → home folder এ `stellar.zip` আপলোড করুন → ফাইলে right-click → **Extract**।
এতে `stellar/dist` (ওয়েবসাইট) আর `stellar/server` (app) তৈরি হবে।

### ৩. Node.js App বানান
cPanel → **Setup Node.js App** → **Create Application**:

| Setting | Value |
| --- | --- |
| Node.js version | **22** বা তার বেশি (তালিকায় সবচেয়ে নতুনটা) |
| Application mode | Production |
| Application root | `stellar/server` |
| Application URL | আপনার domain |
| Application startup file | `app.cjs` |

**Environment variables** এ শুধু এই দুটো যোগ করুন:

| Name | Value |
| --- | --- |
| `ADMIN_EMAIL` | আপনার email (প্রথম লগইন) |
| `ADMIN_PASSWORD` | একটা শক্ত password |

(`NODE_ENV=production` cPanel নিজেই দেয়। বাকি সব setting এর default ঠিক আছে — `.env.example` দেখুন।)

তারপর **Create** → **Run NPM Install** → **Restart**।

### ৪. লগইন
`https://আপনার-domain/admin` এ যান, লগইন করুন, এবং **My profile** থেকে password বদলে ফেলুন।

---

## Update করা
`pnpm deploy:package` চালিয়ে নতুন `stellar.zip` আপলোড করে Extract করুন (পুরোনো ফাইল replace হবে;
`server/data` আর `server/uploads` এ হাত পড়ে না), তারপর cPanel এ **Restart** চাপুন।
Restart জরুরি: server চালু হওয়ার সময় website এর `index.html` মনে রাখে।

## Backup
দুটো ফোল্ডার backup রাখলেই সব থাকে: **`stellar/server/data/`** (ডাটাবেস) আর **`stellar/server/uploads/`** (আপলোড করা ছবি)।
