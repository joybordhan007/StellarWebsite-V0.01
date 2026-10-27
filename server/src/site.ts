import fs from "node:fs";
import path from "node:path";
import express, { Router } from "express";
import { config } from "./config.js";
import { getAllContent } from "./routes/content.js";

const DEV_SITE_URL = process.env.DEV_SITE_URL ?? "http://localhost:8443";

type SeoDocument ={ pages?: Record<string, { title?: string; description?: string }> };

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function setMeta(html: string, attribute: "name" | "property", key: string, value: string) {
  const tag = `<meta ${attribute}="${key}" content="${escapeHtml(value)}" />`;
  const pattern = new RegExp(`<meta[^>]*${attribute}="${key}"[^>]*>`, "i");
  return pattern.test(html) ? html.replace(pattern, tag) : html.replace("</head>", `  ${tag}\n</head>`);
}

/**
 * Serves the built website. Every page gets the edited content embedded as
 * window.__STELLAR_CONTENT__ (so it renders without a flash of default text)
 * and its SEO title/description, so search engines and link previews see them.
 */
export function siteRouter() {
  const router = Router();
  const indexFile = path.join(config.clientDist, "index.html");

  if (!fs.existsSync(indexFile)) {
    console.warn(
      config.isProduction
        ? `Website build not found at ${indexFile}. Run "pnpm build" in the project root.`
        : `API only: no website build found, which is fine in development. Open the site at ${DEV_SITE_URL}.`,
    );
    router.use((req, res) => {
      // In development the website is served by Vite; send visitors there instead of a dead end.
      if (!config.isProduction) return res.redirect(`${DEV_SITE_URL}${req.originalUrl}`);
      res.status(503).send("Website build not found. Run pnpm build in the project root.");
    });
    return router;
  }

  const template = fs.readFileSync(indexFile, "utf8");

  router.use(
    express.static(config.clientDist, {
      index: false,
      setHeaders: (res, filePath) => {
        // Hashed bundles never change; everything else should revalidate.
        if (filePath.includes(`${path.sep}assets${path.sep}`) && /-[\w-]{8}\.(js|css)$/.test(filePath)) {
          res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
        }
      },
    }),
  );

  router.get("/{*path}", async (req, res) => {
    const content = await getAllContent();
    const route = req.path.replace(/\/+$/, "") || "/";
    let html = template;

    const page = (content.seo as SeoDocument | undefined)?.pages?.[route];
    if (page?.title) {
      html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(page.title)}</title>`);
      html = setMeta(html, "property", "og:title", page.title);
    }
    if (page?.description) {
      html = setMeta(html, "name", "description", page.description);
      html = setMeta(html, "property", "og:description", page.description);
    }
    if (route.startsWith("/admin")) {
      html = setMeta(html, "name", "robots", "noindex, nofollow");
    }

    const payload = JSON.stringify(content).replace(/</g, "\\u003c");
    html = html.replace("</head>", `<script>window.__STELLAR_CONTENT__=${payload}</script>\n</head>`);

    res.set("Cache-Control", "no-cache");
    res.type("html").send(html);
  });

  return router;
}
