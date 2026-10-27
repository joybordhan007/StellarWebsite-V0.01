import { Card, ContentEditorFrame, TextField, useContentDoc } from "../ui";

const PAGE_NAMES: Record<string, string> = {
  "/": "Home",
  "/about": "About us",
  "/capabilities": "Our capabilities",
  "/design-path": "Design path",
  "/factories": "Our factories",
  "/factories/goodearth": "GoodEarth Apparels",
  "/factories/progress": "Progress Apparels",
  "/factories/knit-gallery": "Knit Gallery",
  "/sustainability": "Sustainability",
  "/products": "Products",
  "/contact": "Let's talk (contact)",
  "/privacy-policy": "Privacy policy",
  "/terms-of-service": "Terms of service",
};

export default function SeoEditor() {
  const doc = useContentDoc("seo");
  const pages = doc.draft?.pages ?? {};

  const update = (path: string, field: "title" | "description", value: string) =>
    doc.setDraft({ pages: { ...pages, [path]: { ...pages[path], [field]: value } } });

  return (
    <ContentEditorFrame
      description="The title shown in browser tabs and search results, and the short description search engines and link previews use. Titles work best under 60 characters, descriptions under 160."
      doc={doc}
      title="SEO"
    >
      {Object.keys(PAGE_NAMES).map((path) => (
        <Card description={path} key={path} title={PAGE_NAMES[path]}>
          <TextField
            label="Page title"
            maxLength={60}
            onChange={(value) => update(path, "title", value)}
            value={pages[path]?.title ?? ""}
          />
          <TextField
            label="Description"
            maxLength={160}
            multiline
            onChange={(value) => update(path, "description", value)}
            rows={2}
            value={pages[path]?.description ?? ""}
          />
        </Card>
      ))}
    </ContentEditorFrame>
  );
}
