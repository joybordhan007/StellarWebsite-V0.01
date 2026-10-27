import { useContent } from "../content/ContentProvider";

function LegalPage({ contentKey }: { contentKey: "privacy-policy" | "terms-of-service" }) {
  const { title, intro, updated, sections, note } = useContent(contentKey);
  const site = useContent("site");

  return (
    <div className="legal-page">
      <main className="legal-content">
        <p className="legal-eyebrow">{site.companyName}</p>
        <h1>{title}</h1>
        <p className="legal-updated">Last updated: {updated}</p>
        <p className="legal-intro">{intro}</p>
        {sections.map(({ heading, content }, index) => (
          <section key={index}>
            <h2>{heading}</h2>
            <p>{content}</p>
          </section>
        ))}
        {note && <p className="legal-placeholder-note">{note}</p>}
      </main>
      <footer className="legal-footer">
        <nav aria-label="Footer navigation">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/capabilities">Our Capabilities</a>
          <a href="/design-path">Design path</a>
          <a href="/factories">Our Factories</a>
          <a href="/sustainability">Sustainability</a>
          <a href="/products">Products</a>
          <a href="/contact">Contact Us</a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
        </nav>
        <p>{site.copyright}</p>
        <p>
          Website designed and developed by{" "}
          <a href="http://designops.agency" rel="noreferrer" target="_blank">
            DesignOps
          </a>
        </p>
      </footer>
    </div>
  );
}

export function PrivacyPolicy() {
  return <LegalPage contentKey="privacy-policy" />;
}

export function TermsOfService() {
  return <LegalPage contentKey="terms-of-service" />;
}
