type LegalPageProps = {
  title: string;
  intro: string;
  sections: { heading: string; content: string }[];
};

function LegalPage({ title, intro, sections }: LegalPageProps) {
  return (
    <div className="legal-page">
      <main className="legal-content">
        <p className="legal-eyebrow">STELLAR MANUFACTURING LTD.</p>
        <h1>{title}</h1>
        <p className="legal-updated">Last updated: October 13, 2026</p>
        <p className="legal-intro">{intro}</p>
        {sections.map(({ heading, content }) => (
          <section key={heading}>
            <h2>{heading}</h2>
            <p>{content}</p>
          </section>
        ))}
        <p className="legal-placeholder-note">
          This page contains placeholder text for review and can be replaced with
          approved legal content.
        </p>
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
        <p>Copyright © 2026 STELLAR MANUFACTURING LTD.</p>
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
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This sample policy explains how Stellar Manufacturing Ltd. may collect, use, and protect information when you visit our website or contact our team."
      sections={[
        {
          heading: "Information we collect",
          content:
            "We may receive information you choose to provide, such as your name, business contact details, and the contents of an enquiry.",
        },
        {
          heading: "How we use information",
          content:
            "Information may be used to respond to enquiries, provide requested services, maintain our website, and improve our communications.",
        },
        {
          heading: "Sharing and retention",
          content:
            "We do not sell personal information. Information may be shared with service providers who help us operate our business and is retained only as needed for those purposes.",
        },
        {
          heading: "Your choices and contact",
          content:
            "You may contact us to ask about, correct, or request deletion of information you have provided, subject to applicable requirements.",
        },
      ]}
    />
  );
}

export function TermsOfService() {
  return (
    <LegalPage
      title="Terms of Service"
      intro="These sample terms describe general conditions for using the Stellar Manufacturing Ltd. website. Replace this draft with terms reviewed and approved for your business."
      sections={[
        {
          heading: "Website use",
          content:
            "You may use this website to learn about our company, products, and services. You agree not to misuse the site or interfere with its operation.",
        },
        {
          heading: "Website information",
          content:
            "Website content is provided for general information. Product, production, and service details may change and should be confirmed with our team.",
        },
        {
          heading: "Intellectual property",
          content:
            "Unless otherwise noted, website text, graphics, and branding belong to Stellar Manufacturing Ltd. or its licensors and may not be reused without permission.",
        },
        {
          heading: "Updates and contact",
          content:
            "We may update these terms from time to time. Continued use of the website after an update means that you accept the revised terms.",
        },
      ]}
    />
  );
}
