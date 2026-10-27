// Shapes of the editable content documents. The admin dashboard edits these,
// the server stores them as JSON, and the website renders them.

export type NavigationItem = { href: string; label: string };

export type SiteContent = {
  companyName: string;
  tagline: string;
  phone: string;
  email: string;
  footerAddresses: string[];
  social: { facebook: string; youtube: string; linkedin: string };
  copyright: string;
  /** Inbox that receives contact form emails (via FormSubmit). */
  contactFormEmail: string;
  navigation: NavigationItem[];
};

export type SeoPage = { title: string; description: string };
export type SeoContent = { pages: Record<string, SeoPage> };

export type ProductItem = { image: string; name: string };
export type ProductCategory = { id: string; label: string; icon: string; items: ProductItem[] };
export type ProductsContent = { categories: ProductCategory[] };

export type Office = {
  id: string;
  name: string;
  addresses: string[];
  phone: string;
  email: string;
  website: string;
  hours: string;
};
export type OfficesContent = { offices: Office[] };

export type LegalContent = {
  title: string;
  intro: string;
  updated: string;
  sections: { heading: string; content: string }[];
  /** Optional note shown at the end of the page. */
  note: string;
};

export type ContentMap = {
  site: SiteContent;
  seo: SeoContent;
  products: ProductsContent;
  offices: OfficesContent;
  "privacy-policy": LegalContent;
  "terms-of-service": LegalContent;
};

export type ContentKey = keyof ContentMap;
