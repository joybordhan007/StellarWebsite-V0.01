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

export type ProductCategory = {
  id: number;
  name: string;
  /** One single-colour icon; the site turns it black or white as needed. */
  icon: string;
  createdAt: string;
};
export type Product = {
  id: number;
  name: string;
  image: string;
  categoryId: number;
  createdAt: string;
  /** Hidden from the website when false. */
  active: boolean;
};
export type CatalogContent = {
  categories: ProductCategory[];
  products: Product[];
  /** Products shown in the Home "Fashion for every generation" carousel, in order. */
  homeProductIds: number[];
};

export type Capability = {
  id: number;
  name: string;
  subtitle: string;
  image: string;
  createdAt: string;
  active: boolean;
};
export type CapabilitiesContent = {
  items: Capability[];
  /** Capabilities shown in the Home "Ideas to impact" row (max 6), in order. */
  homeIds: number[];
};

export const ACHIEVEMENT_PAGES = ["home", "capabilities", "sustainability"] as const;
export type AchievementPage = (typeof ACHIEVEMENT_PAGES)[number];
export type Achievement = {
  id: number;
  icon: string;
  /** Counted-up number; null shows the label as a headline instead. */
  value: number | null;
  prefix: string;
  suffix: string;
  /** Line breaks are kept. */
  label: string;
  createdAt: string;
};
export type AchievementsContent = {
  items: Achievement[];
  /** Which achievements each page's stats bar shows, in order. */
  pages: Record<AchievementPage, number[]>;
};

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
  catalog: CatalogContent;
  capabilities: CapabilitiesContent;
  achievements: AchievementsContent;
  offices: OfficesContent;
  "privacy-policy": LegalContent;
  "terms-of-service": LegalContent;
};

export type ContentKey = keyof ContentMap;
