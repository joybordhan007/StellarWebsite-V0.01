@AGENTS.md

# Stellar Manufacturing Website

> **Maintenance rule:** After finishing every feature or meaningful change, update this file —
> add the feature to **What's built**, record any new choice in **Decisions**, and add a line to
> **Changelog** (date + one-line summary). Keep the sections accurate; delete what is no longer true.

## Project

Marketing website for **Stellar Manufacturing**, a sustainable clothing and garment manufacturer
(head office in Dhaka, Bangladesh; offices in India). The site presents the company, its
capabilities, design process, factories (GoodEarth Apparels, Progress Apparels, Knit Gallery),
sustainability work and product range, and collects leads through a contact form.

The design was built in Figma and exported via **Figma Make**; pages are pixel-faithful
translations of Figma frames (`data-node-id` / `data-name` attributes reference the source nodes).

An **admin dashboard** (`/admin`) backed by a Node.js server lets the owner manage content
without touching code. Layout is never editable from the dashboard — only content.

## Stack

| Area | Choice |
| --- | --- |
| UI | React 19 + TypeScript 5.7 |
| Build / dev | Vite 8 (dev server on `$PORT`, default 8443 — already running) |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`), plus hand-written global CSS in `src/index.css` |
| Formatting | oxfmt (`pnpm format`) |
| Toolchain | Node 22, pnpm 10 (`.mise.toml`) |
| Backend | `server/` — Node.js + Express 5 + TypeScript, its own `package.json` |
| Database | Node built-in SQLite (default, file in `server/data/`, needs Node 22.13+); MySQL optional (`DB_CLIENT=mysql`, `mysql2`) |
| Auth | bcryptjs password hashes + JWT in an httpOnly cookie (`stellar_admin`, 7 days) |
| Uploads | multer → `server/uploads/`, served at `/uploads` |
| Hosting | Static preview on Figma Make; production on cPanel "Setup Node.js App" (Passenger) |
| Contact email | FormSubmit AJAX endpoint (recipient editable in dashboard) |
| Browser testing | Playwright MCP (`.mcp.json`) |

No router library, no state library.

## Structure

- `src/App.tsx` — custom client-side router, desktop + mobile headers, page scaling canvas; renders
  `AdminApp` instead of the site for `/admin*`
- `src/pages/*.tsx` — one file per page (Figma-exported markup, Tailwind arbitrary values)
- `src/pages/LegalPages.tsx` — exports `PrivacyPolicy` and `TermsOfService` (named exports)
- `src/components/Footer.tsx` — the one shared footer (was copied into every page before)
- `src/components/CountUpValue.tsx` — animated number counter for stats
- `src/components/AchievementsBar.tsx` — the shared stats bar (Home, Capabilities, Sustainability)
- `src/components/LogoMarquee.tsx` — scrolling 240×120 logo row (brands, certifications) + `LogoImage`
- `src/pages/FactoryPage.tsx` — one data-driven page for every factory (`/factories/<slug>`); replaced
  GoodEarth/Progress/KnitGallery.tsx
- `src/components/PageReveal.tsx` — page fade-in + scroll reveal wrapper (styles at end of `index.css`);
  also applies the phone/tablet layout
- `src/components/mobileFlow.ts` — phone/tablet reflow (≤1023px) of the 1920px pages (see Decisions)
- `src/components/SustainabilityStories.tsx` — the four Sustainability report sections (text,
  highlights, column/bar charts with a grow-in animation); exports `chartAxis`
- `src/content/` — editable content: `types.ts` (document shapes), `defaults.ts` (built-in
  content), `seoDefaults.json` (built-in page titles/descriptions, also emitted into the build), `collectionDefaults.ts` (catalog, capabilities, achievements), `pageDefaults.ts`
  (factories, brands, about, versatility, sustainability — generated once from the Figma pages),
  `ContentProvider.tsx` (`useContent(key)`, `mergeContent`, `useBackendAvailable()`)
- `src/data/productCategories.json` — source of the default product catalogue
- `public/assets/achievements/*.svg` — achievement icons, each composed into one file from the
  Figma layer pieces (so the dashboard can swap them with a single upload)
- `public/assets/factories/icons/*.png` — factory stat / product-mix / distance icons, rasterised
  (4x, transparent) from the Figma layer stacks
- `public/assets/sustainability/*.svg` — Environmental performance icons that had an inset in Figma,
  composed into plain 32×32 files
- `public/assets/social/*.svg` — footer social icons, one per platform (Phosphor-style 1.5px stroke)
- `src/admin/` — dashboard: `AdminApp.tsx` (login, layout, sections), `api.ts`, `AdminContext.tsx`
  (session, toasts), `ui.tsx` (form controls, image picker, `useContentDoc`, save bar),
  `components.tsx` (Modal, FormModal, `useConfirm`, DataTable, Toggle, ActionMenu, LinkTabs, `useLiveContent`,
  Avatar; `DataTable dense` = 40px rows), `ImageTable.tsx` (compact image/logo list with photo and
  logo adapters), `charts.tsx` (LineChart, ColumnChart, BarList for Overview), `pages/*`
- `server/src/` — `index.ts` (app), `config.ts` (env), `db/` (driver + migrations), `auth.ts`,
  `routes/` (auth, content, messages, media, analytics), `site.ts` (serves `dist/` + injects content/SEO)
- `server/app.cjs` — cPanel/Passenger startup file; `server/README.md` — dev + deployment guide (Bangla)
- `scripts/package-deploy.mjs` — `pnpm deploy:package`: builds site + server into `deploy/stellar.zip`
- `public/assets/<figma-node-id>/` — exported images/SVGs, grouped by Figma frame (e.g. `1-641` = Home)
- `config/` — was `.figma/make/` (renamed at the owner's request): `site.json` (page title,
  description, robots — currently `index: false`, read by `vite.config.ts`), `dev.json` and the
  Figma Make platform hook scripts (`dev`, `deploy`, `install` …). Figma Make looks for these in
  `.figma/make/`, so its preview/deploy no longer finds them; production (cPanel) is unaffected.

## Routes

| Path | Page | Notes |
| --- | --- | --- |
| `/` | Home | |
| `/about` | About | |
| `/capabilities` | Capabilities | |
| `/design-path` | DesignPath | |
| `/factories`, `/factories/<slug>` | FactoryPage | slugs `goodearth`, `progress`, `knit-gallery`; unknown or hidden → first visible factory |
| `/sustainability` | Sustainability | longest page (~9963px) |
| `/products` | Products | dynamic height via `onHeightChange` |
| `/contact` | Contact | form + office tabs + map |
| `/privacy-policy`, `/terms-of-service` | LegalPages | |
| `/admin`, `/admin/*` | AdminApp | overview, messages, products (+ `/categories`), capabilities (+ `/versatility`, `/versatility/<n>` category editor), achievements, factories (+ `/<id>` editor), brands, about, sustainability (+ `/reports`, `/reports/<id>`), offices, footer, site, seo, legal, profile |

Unknown paths fall back to Home.

### API (`server/`)

Public: `GET /api/content`, `GET /api/content/:key`, `POST /api/messages`, `POST /api/auth/login`,
`POST /api/track`, `GET /api/health`. Admin (cookie): `PUT|DELETE /api/content/:key`,
`GET /api/content/:key/meta`, `GET|PATCH|DELETE /api/messages`, `GET|POST|DELETE /api/media`,
`GET /api/auth/me`, `PUT /api/auth/profile` (name + avatar), `PUT /api/auth/password`,
`GET /api/stats`, `GET /api/reports?days=7|30|90`.

## Decisions

- **Fixed 1920px design canvas, scaled down.** Pages are laid out at 1920px wide with absolute
  positions from Figma. `App` scales the whole `.design-scale` wrapper by
  `min(1, viewportWidth / 1920)` and sets the outer canvas height from each route's `height`
  value. `viewportWidth` is `documentElement.clientWidth` (no scrollbar, kept current with a
  ResizeObserver), so the canvas never overflows sideways; phone vs desktop uses
  `matchMedia(MOBILE_QUERY)`, the same query as the CSS, so header and layout always agree. When a page's layout height changes, update its `height` in `routes` (`App.tsx`).
- **Hand-rolled router instead of react-router.** A document-level click handler intercepts
  same-origin `<a>` clicks, uses `history.pushState`, and swaps the page in a `startTransition`.
  Modifier-clicks and `target` links pass through. Hash links scroll to the target once it renders.
  The dashboard uses the same mechanism (plain `<a href="/admin/...">`).
- **Code-split pages + hover prefetch.** Every page is `React.lazy`; nav links prefetch the page
  chunk on pointer-enter/focus (`prefetchLinkProps`). The dashboard and each of its sections are
  separate chunks, so visitors never download admin code.
- **"Partner with us" / "Let's talk" CTAs go to `/contact` globally**, detected by button text
  (`isContactCta`), so Figma-exported buttons don't each need wiring. Disabled on `/admin`.
- **One factory page, many factories.** The three near-identical Figma factory pages became
  `FactoryPage`, rendered from the `factories` document (hero and header stay shared). Its tabs are
  real links (the old invisible `FactoryHotspots` overlay is gone); scroll position is preserved
  when switching between `/factories/*`. Fixed-count blocks stay fixed: 6 stats, 6 product-mix
  items; the key-strengths panel tightens (gap 22px) above 4 strengths, as GoodEarth's design did.
  The donut is drawn from the percentages (the Figma image did not match its own numbers). The
  gallery shows 7 at a time and its arrows scroll when there are more.
- **Factories feed the rest of the site.** Home “A global footprint”, Sustainability “Three
  factories” cards, the About world map (pins from `mapPosition` in %, top-left of the pin; legend
  grouped by `country`; Facilities/Countries counted) all come from visible factories.
- **Logos are data, not screenshots.** Brand and certification logos keep their original files
  plus the design's crop box (`box`, % of the tile); uploads use `fit` contain/padded/cover. All
  logo rows use `LogoMarquee` (two copies, -50% loop, duration = 2s × count).
- **Page views are counted without cookies.** `POST /api/track` stores path, referrer host,
  device and a daily visitor hash (IP + UA + day + secret); bots and `/admin` are skipped. The site
  only reports when the backend answered (`useBackendAvailable`), so the Figma preview stays quiet.
- **Admin users and Media library pages were removed** at the owner's request. One admin (seeded
  from env) manages the site; uploads still go through `/api/media`, but there is no library picker —
  every image field is Upload / Replace only.
- **Sidebar is grouped** (General · Catalog · Company · Site). Site settings and SEO are not in the
  menu (owner's choice) but their routes still work: `/admin/site`, `/admin/seo`. My profile opens
  from the account card (photo, name, email) at the bottom of the sidebar.
- **Image lists are compact tables.** Factory gallery, factory certifications, brand logos and
  sustainability certifications all use `ImageTable`: image, inline-editable name (saves on blur /
  Enter), upload date (`uploadedAt`; built-in images show “Original”), ⋮ Move up / Move down /
  Reupload / Delete, and the Add button on the heading. Reuploading a logo drops its design crop
  box and uses `fit: "padded"`; there is no per-logo layout picker any more.
- **Versatility admin = categories table → category page.** `/admin/capabilities/versatility` lists the
  5 category columns (name, subtitle, image, ⋮ Edit / Move); `/versatility/<n>` (1-based) edits the
  category image, name and subtitle on top and its subcategories (≤ 5: image, title, optional
  subtitle; add/edit popup, move, delete) below. Section text is in an “Edit section text” popup.
  Saves immediately (`useLiveContent`). On the website every column always draws 5 rows, so all
  category cards are the same height.
- **Tailwind classes must not touch a `${…}`.** `size-[44px]${x}` is not detected by Tailwind's
  scanner (the Versatility thumbnails rendered 0×0 because of it); always leave a space.
- **Sustainability card rows stretch.** Three factories, Environmental performance and Milestones
  rows use `items-stretch`, so every card takes the tallest card's height. Environmental cards are
  capped at 4 and milestones at 5 (what fits the fixed-width rows of the absolute page layout).
- **Footer admin edits only** the description, social links and the contact column. The Quick
  links / Support columns and the copyright + credit line still render from `site.footer` and
  `site.copyright` defaults but have no editor (owner's choice).
- **Phones and tablets reflow instead of shrinking.** At ≤1023px (`MOBILE_MAX_WIDTH`) the canvas is
  not scaled; `applyMobileFlow` measures the page once in its 1920px layout and sets `data-m*`
  markers that CSS under `.m-flow` (index.css) turns into one column: top-level sections stack in
  desktop order; wide/text absolute blocks join the flow, full-size photo layers stay behind as
  backgrounds; rows of wide blocks stack, rows of small ones wrap 2-up (icon + text rows are left
  alone, hairline dividers hidden); paddings ≥48px → 16px (32px ≥640px), big gaps and headings
  shrink, long nowrap text wraps. It reruns on DOM changes (MutationObserver) and removing `.m-flow`
  restores desktop exactly. It rebuilds only on structural DOM changes (not text changes such as
  the counters). Hand overrides: `data-mobile="hide | stack | wrap | full | keep"`
  (used by the footer, Versatility columns/empty rows, charts). Wide one-cell `grid-cols-[max-content]`
  wrappers are fitted to the column; centred one-line text keeps its wrapped lines centred. The hamburger `MobileHeader`
  replaces the desktop header at the same breakpoint; its menu closes on navigation and Escape.
  Phone hero (`markHero`): 50svh (360–540px), text block at the bottom over the photo, lines joined
  into one paragraph, slogan box as a one-line strip. Photo-only rows wrap two per row; heading rows
  spread with `justify-between` stack (`data-mhead`); stacked columns drop their own vertical padding;
  `sticky` is off; words never break mid-word.
- **No sticky scroll effect on the report sections** (owner's choice, removed after trying it):
  they are four plain 864px frames and reveal like any other section.
- **Page changes are a light fade, in one frame.** The scroll to the top happens in a layout effect
  after the new page commits (never while the old one is still shown), the dynamic height resets
  inside the same transition, and `.page-reveal` fades from 0.55 opacity over 0.3s.
- **Default SEO reaches the server.** The build emits `dist/seo-defaults.json` (Vite plugin
  `emitSeoDefaults`); `server/src/site.ts` uses a saved `seo` entry if there is one, else the
  default, so every page's HTML has its own title/description for search engines and link previews.
- **Images are sized to their use.** Raster assets were shrunk in place (same name and format) to
  2.5× their largest on-screen size measured at 1920/820/390px, e.g. 2000px Versatility thumbnails
  shown at 44px. The product photos (`product-mix/*`, 4–7 MB PNG) are shown up to ~740px on phones
  and were left as they are; converting them to WebP/JPEG would need new file names.
- **Report charts are data, not Figma drawings.** `sustainability.stories[].charts`: type
  `columns` (stacked by series) or `bars` (horizontal, values shown); rows keep values per series
  id; axis end/step 0 = automatic. Default chart values were read off the Figma bar heights and do
  not all match the figures in the text — the owner should enter the real numbers. Content is
  vertically centred in every section (owner’s choice); a single chart card is 613px tall;
  only the two-chart card (water) puts its charts on white boxes. Bars grow in when a chart first
  scrolls into view (`.sustainability-data-chart` / `-bar`, IntersectionObserver in the component).
- **Assets referenced by path constants** at the top of each page (`assetPathPrefix`), served
  from `public/assets`, not imported. Images inside `src/pages` get `loading="lazy"` +
  `decoding="async"` automatically (Vite plugin `lazyLoadPageImages`).
- **Scroll reveal is generic, not per-page markup.** `PageReveal` (wraps every page in `App`)
  finds the content blocks of each top-level section at runtime and fades/slides them in as
  they scroll into view. Only blocks below the fold at load are hidden, so nothing on screen
  flickers. It uses an rAF scroll check (not IntersectionObserver) so blocks the visitor jumped
  past or at the very bottom still reveal. Reveal classes are removed afterwards so elements'
  own hover transitions keep working. Blocks with their own transform/animation only fade.
- **Motion respects `prefers-reduced-motion`** (reveal, marquees and count-ups are disabled).
- **Backend language: TypeScript on Node.js** — same language as the site, shared content types,
  and the owner's hosting runs Node.js apps.
- **Database: SQLite by default, MySQL optional.** The owner can't create databases on the
  hosting, so production uses Node's built-in SQLite (one file in `server/data/`, created on first
  start; needs Node 22.13+). `DB_CLIENT=mysql` still works. SQL is kept portable; migrations are
  plain SQL per driver in `server/src/db/migrations.ts`, applied on startup; append new ones,
  never edit shipped ones.
- **Zero-config deploy.** Paths resolve from the server folder (not the cwd); `JWT_SECRET` is
  generated into `data/jwt-secret` when not set; the only required settings are `ADMIN_EMAIL`
  and `ADMIN_PASSWORD`. `pnpm deploy:package` produces one zip to upload and extract
  (own minimal ZIP writer — Git Bash's tar can't write zips).
- **Content = JSON documents with built-in defaults.** The server stores only edited documents
  (`content` table, keyed `site`, `seo`, `catalog`, `capabilities`, `achievements`, `offices`,
  `privacy-policy`, `terms-of-service`). The site renders `mergeContent(defaults, stored)`: stored fields win, two
  levels deep (so `seo.pages`/`site.social` keep missing entries), lists replaced whole. With no
  backend (Figma Make preview) the site shows defaults unchanged.
- **No flash of default content.** The production server embeds stored content into the HTML as
  `window.__STELLAR_CONTENT__` and rewrites `<title>`/description/OG tags per route from `seo`.
  Without it (dev) `ContentProvider` fetches `/api/content`. The server caches `index.html` at
  startup, so **restart after each deploy**.
- **Page text is wired into content per page, step by step.** Pages are Figma markup with literal
  text; making them editable means replacing literals with `useContent(...)` fields. Done so far:
  footer, navigation labels, SEO, products + categories, Home carousel, capabilities (+ Home
  "Ideas to impact", Versatility), achievements bars, factories (+ Home/Sustainability cards and
  About map), brand logos, About journey, sustainability certifications, environmental performance,
  milestones and the four report sections, offices, legal pages. DOM-patching tricks were
  rejected as fragile.
- **Records live inside content documents.** Products, categories, capabilities and achievements
  are arrays with numeric `id`, `createdAt` and (where relevant) `active`, inside one document per
  area. The dashboard saves each action immediately (`useLiveContent`), sending `baseUpdatedAt`;
  the server answers 409 if the document changed since it was loaded (optimistic locking), so two
  admins can't silently overwrite each other. New IDs are max+1.
- **Home sections are references, not copies.** `catalog.homeProductIds` (Fashion for every
  generation) and `capabilities.homeIds` (Ideas to impact, max 6) list which records the Home page
  shows and in what order. Hidden (`active: false`) records are skipped everywhere.
- **Achievements: one list, per-page order.** `achievements.pages.{home,capabilities,sustainability}`
  are ordered id lists, so one stat (e.g. Employees) can appear on several pages. `value: null`
  renders the label as a headline ("A MORE SUSTAINABLE TOMORROW").
- **Category icons are recoloured by CSS.** One uploaded icon; the Products tabs apply
  `brightness(0)` (black) or `brightness(0) invert(1)` (white, selected tab).
- **Variable-length sections push the page.** The Home carousel's loop distance and duration
  come from the card count (CSS vars, needs at least 3 cards to loop). The Capabilities grid
  measures its height against the 8-card design (975px) and moves the sections below by the
  difference (`margin-top`), reporting the new page height via `onHeightChange` (now available to
  every page).
- **One shared Footer.** The ten identical per-page footers were replaced with
  `components/Footer.tsx`, driven by the `site` document.
- **Contact form writes to both the inbox and email.** It POSTs to `/api/messages` (stored for the
  dashboard) and to FormSubmit (email to `site.contactFormEmail`) in parallel; success if either
  works. Without a backend it behaves exactly as before. A hidden `_gotcha` honeypot drops bots.
- **Uploads are sandboxed.** `/uploads` responses carry `Content-Security-Policy: sandbox` so an
  uploaded SVG can't run script on the site's origin. Images only, 10 MB max.
- **Dashboard layout tokens:** content has 24px side margins (full width), cards 6px radius,
  16px between cards and between sections.
- **Partial-document editors hide “Restore original”** (`allowReset={false}`): a factory, the
  footer, site settings and Versatility edit part of a bigger document, so resetting would wipe more.
- **Overview charts follow the dataviz rules:** validated categorical slots (views #2a78d6,
  visitors #eb6834, enquiries #6250d6), one axis, hover tooltips, a table view.
- **Password fields show/hide themselves.** `TextField` with `type="password"` renders its own eye
  button (independent state per field, `aria-pressed`); Edge's built-in reveal icon is hidden in
  `.admin-root` so there is only one.
- **Admin UI uses system fonts** (`.admin-root`): the site's Figma fonts are one weight per
  family with `font-synthesis: none`, so Tailwind weights wouldn't render.
- **Dev proxy is opt-in.** Vite proxies `/api` and `/uploads` only when `API_PROXY` is set
  (e.g. in `.env.local`), so the Figma Make preview never logs proxy errors.
- **pnpm only.** `package-lock.json` was removed; Figma Make scripts use pnpm.
- **Search indexing is off** (`robots.index: false`) while the site is in development; flip it in
  `config/site.json` before the production build.

## What's built

- All 12 public routes above, matched to the Figma design
- Desktop header: logo, primary nav with active state (factories group highlighted), scroll
  state style, animated "Let's talk" roll button
- Mobile header with toggleable nav; phone/tablet one-column layout for every page
- Client-side navigation with prefetch, back/forward support, hash-scroll, per-route document title
- Animated stat counters (`CountUpValue`) on Home, Capabilities, Sustainability — start when visible
- Logo / certification / fashion-card marquees
- Factory pages (GoodEarth, Progress, Knit Gallery) from one data-driven component, with a
  scrollable photo gallery and computed product-mix donut
- Products page with category tabs (empty categories hidden), auto black/white tab icons, page
  height adapts to the number of products
- Home: "Fashion for every generation" carousel from chosen products (name only, no subtitle);
  "Ideas to impact" from chosen capabilities (name only); VIEW ALL links go to the full lists
- Capabilities page cards from the dashboard (4 per row, sections below move with the row count)
- Shared achievements bar on Home, Capabilities and Sustainability (fixed the broken CO₂ label)
- Home “A global footprint”, Sustainability “Three factories”, About world map and legend driven
  by the factories; Home brand logos, About journey, Capabilities Versatility and Sustainability
  certifications, Environmental performance cards, Next milestones and the four report sections
  (Powered by the sun … Offcuts become new yarn, with charts) driven by content
- Footer fully editable: description, social links (any of 9 platforms), link columns, contact
  info, copyright and credit
- Cookie-less page-view tracking for the dashboard reports
- Contact page: form (inbox + email, honeypot), office list with selectable office and map address
- Privacy Policy and Terms of Service pages
- Smooth motion site-wide: page fade-in on route change, staggered scroll reveal of section
  blocks, lazy images fade in when loaded
- **Backend** (`server/`): MySQL/SQLite, migrations, first-admin seeding from env, login with rate
  limiting, content API, message inbox API, image uploads, admin user management, stats, production
  static serving with content/SEO injection, cPanel entry file and deployment guide
- **Admin dashboard** (`/admin`): login; overview (stats, latest messages, shortcuts); messages
  inbox (read/unread, reply by email, delete); products with two tabs — Products (table with
  category filter, search, status + home toggles, ⋮ view/edit/delete, add/edit popups, arrange home
  carousel) and Product categories (table, ⋮ edit/move/delete, add/edit popup with icon preview);
  capabilities (table, status + home toggles (max 6), ⋮ view/edit/move/delete, popups, arrange
  home) + Versatility tab; achievements (table, popup with live preview, per-page bars); factories
  (table with status toggle and ⋮ view/edit; editor for every section incl. click-to-place map pin
  and certification logos); brand logos; sustainability (Environmental performance cards and Next milestones tables with
  add/edit popups and image/icon upload, certification logos; Reports tab: each report section's
  background, icon, title, text, highlights table and chart cards with series + data tables); Versatility categories table + category page;
  About journey; offices; footer (description, social links, contact column); legal pages; my
  profile (photo, name, admin ID, password with a show/hide eye on each field); site settings and SEO via direct URL only. Overview: traffic and
  enquiry reports (7/30/90 days, deltas, daily charts, top pages, sources, devices) plus content
  counts and latest messages. Unsaved-changes bar, last-saved info.

### Not yet editable (next steps)

Remaining hero/section text and images inside the Figma pages (Design Path, page heroes, the
factory hero, and the other Home/About/Capabilities/Sustainability sections). Each needs its literals moved
into a content document + an editor section. Email notifications are still via FormSubmit (SMTP
via nodemailer would remove the activation step).

## Development

- Site + backend together: `pnpm dev:all` (website/dashboard on 8443, API on 3001).
- Site only: `pnpm dev` (already running in Figma Make).
- With backend: see `server/README.md` — `pnpm server` from the root (SQLite, port 3001) and
  `API_PROXY=http://localhost:3001` in `.env.local` (Vite restarts itself when it changes), then
  open `/admin` on port 8443. Without both, `/admin` shows "Admin dashboard unavailable". In
  development, non-API requests to port 3001 redirect to the Vite site (`DEV_SITE_URL`).
- Checks: `npx tsc --noEmit -p .` (site) and `cd server && pnpm typecheck`.
- Deploy: `pnpm deploy:package` → upload `deploy/stellar.zip` (steps in `server/README.md`).

## Changelog

- 2026-10-12 → 2026-10-13 — Initial build from Figma: all pages, routing, headers, count-ups,
  marquees, factory hotspots, products categories, contact form, legal pages, metadata/favicon.
- 2026-10-27 — Added this CLAUDE.md project overview.
- 2026-10-27 — Scroll reveal + page fade + image fade (`src/components/PageReveal.tsx`).
  Cleanup: removed 24 unreferenced assets, 28 unused image constants, committed Playwright
  debug snapshots (now gitignored) and the duplicate npm lockfile. Type-check and build clean.
- 2026-10-27 — Backend (`server/`, Express + MySQL/SQLite) and admin dashboard (`/admin`).
  Content layer (`src/content/`) with defaults; footer, nav labels, SEO, products, offices, legal
  pages and contact form now driven by it. Shared Footer replaced 10 copies (−1,240 lines).
- 2026-10-27 — Dashboard redesign (24px margins, 6px cards, 16px gaps) with tables, popups,
  toggles and ⋮ menus. Products split into Products / Product categories; capabilities and
  achievements editable; Home carousel + "Ideas to impact" driven by them; shared achievements bar
  (11 composed icons). Optimistic locking on content saves. SQLite is now the production default,
  JWT secret auto-generated, `pnpm deploy:package` builds the upload zip. Removed 55 unused assets.
- 2026-10-28 — Factories: one FactoryPage + Factories admin (list, status, full editor, map pin,
  certifications); Home/Sustainability factory cards and About map from factories. Brand logos,
  About journey, Versatility, Sustainability certifications and the whole footer editable. Admin
  profile (avatar, name, ID, password); Admin users and Media library pages removed. Overview
  reporting with cookie-less page-view tracking (migration 002). Count-ups show final values under
  reduced motion. Removed 159 unused assets.
- 2026-10-28 — Dashboard tidy-up: grouped sidebar (Site settings, SEO, My profile out of the menu;
  profile via the account card), no Library picker, compact 40px image tables (ImageTable) for the
  factory gallery, factory certifications, brand logos and sustainability certifications, footer
  editor reduced to description, social links and contact column.
- 2026-10-28 — Versatility admin rebuilt as a categories table + per-category page with a subcategory
  table (fixed the 0×0 subcategory thumbnails on the website, columns equal height again).
  Sustainability: Environmental performance and Our next milestones moved into the
  `sustainability` document with dashboard tables; all three card rows stretch to equal height.
- 2026-10-28 — Sustainability report sections (sun, carbon, water, waste) data-driven with charts and
  a Reports admin tab; sticky stacking scroll animation. Phone/tablet layout (≤1023px) for the whole
  site via mobileFlow reflow instead of scaling the 1920px canvas.
- 2026-10-28 — Report sections matched to the Figma frames again (positions, card heights, bar
  styling), chart bar grow-in animation restored, phone fixes (no clipped text, fitted photo/map grids).
- 2026-10-28 — Report sections: content centred in all four; fixed the scroll effect shifting it up
  by half its height (double -50% translate), which cut it off under the header.
- 2026-10-28 — Mobile: menu closes after navigation; compact half-screen heroes; factory tabs, photo
  rows, heading rows, stacked-column spacing and word wrapping tidied for phones and tablets.
- 2026-10-28 — Removed the sticky scroll effect from the report sections; smoother page changes.
  Renamed `.figma/make` → `config/`. Audit: 101 unused assets removed, 61 oversized images shrunk
  (74 MB → 5 MB), default SEO titles now in the server HTML, no sideways overflow from the scrollbar,
  phone layout no longer rebuilt on counter ticks, password form username hint, server engine
  Node ≥22.13, unused `formatBytes`/`isMobileViewport` removed.
- 2026-10-28 — My profile: show/hide eye on the three change-password fields.
