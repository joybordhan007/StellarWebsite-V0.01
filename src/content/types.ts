// Shapes of the editable content documents. The admin dashboard edits these,
// the server stores them as JSON, and the website renders them.

export type NavigationItem = { href: string; label: string };

export const SOCIAL_PLATFORMS = [
  "facebook",
  "youtube",
  "linkedin",
  "instagram",
  "x",
  "tiktok",
  "pinterest",
  "whatsapp",
  "website",
] as const;
export type SocialPlatform = (typeof SOCIAL_PLATFORMS)[number];
export type SocialLink = { id: number; platform: SocialPlatform; url: string };
export type FooterLink = { label: string; href: string };

export type SiteContent = {
  companyName: string;
  tagline: string;
  phone: string;
  email: string;
  footerAddresses: string[];
  socialLinks: SocialLink[];
  footer: {
    quickLinksTitle: string;
    quickLinks: FooterLink[];
    supportTitle: string;
    supportLinks: FooterLink[];
    contactTitle: string;
    creditText: string;
    creditLinkLabel: string;
    creditUrl: string;
  };
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
export type VersatilityItem = { thumb: string; thumbBackground: string; name: string; note: string };
export type VersatilityColumn = {
  image: string;
  imageBackground: string;
  title: string;
  tagline: string;
  /** Up to 5 rows fit in a column. */
  items: VersatilityItem[];
};
export type Versatility = { eyebrow: string; heading: string; intro: string; columns: VersatilityColumn[] };

export type CapabilitiesContent = {
  items: Capability[];
  /** The "Versatility across categories" section of the Our Capabilities page. */
  versatility: Versatility;
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

/** Crop box in % of the 240×120 tile, for logos placed exactly as in the design. */
export type LogoBox = { left: number; top: number; width: number; height: number };
export type Logo = {
  id: number;
  image: string;
  name: string;
  /** contain: whole tile · cover: fills the tile · padded: contained with breathing room. */
  fit: "contain" | "cover" | "padded";
  box: LogoBox | null;
};

export type FactoryStat = { icon: string; value: string; label: string };
export type FactoryMixShare = { label: string; percent: number };
export type FactoryFeature = { icon: string; label: string };
export type FactoryGalleryItem = { image: string; caption: string };
export type FactoryDistance = { icon: string; text: string };
export type Factory = {
  id: number;
  /** URL: /factories/<slug>. */
  slug: string;
  name: string;
  location: string;
  country: string;
  certification: string;
  specialty: string;
  image: string;
  active: boolean;
  createdAt: string;
  /** Pin position on the About page world map, in % of the map. */
  mapPosition: { x: number; y: number };
  sustainabilityHighlights: string[];
  overview: { eyebrow: string; heading: string; description: string };
  /** Exactly six (two rows of three). */
  stats: FactoryStat[];
  productMix: FactoryMixShare[];
  keyStrengths: string[];
  gallery: FactoryGalleryItem[];
  /** Exactly six (two rows of three). */
  features: FactoryFeature[];
  legalName: string;
  region: string;
  address: string;
  mapQuery: string;
  distances: FactoryDistance[];
  certifications: Logo[];
};
export type FactoriesContent = { items: Factory[] };

export type BrandsContent = { logos: Logo[] };

export type JourneyMilestone = { image: string; year: string; text: string };
export type AboutContent = {
  journey: { eyebrow: string; heading: string; intro: string; milestones: JourneyMilestone[] };
};

export type SustainabilityContent = { certifications: Logo[] };

export type ContentMap = {
  site: SiteContent;
  seo: SeoContent;
  catalog: CatalogContent;
  capabilities: CapabilitiesContent;
  achievements: AchievementsContent;
  factories: FactoriesContent;
  brands: BrandsContent;
  about: AboutContent;
  sustainability: SustainabilityContent;
  offices: OfficesContent;
  "privacy-policy": LegalContent;
  "terms-of-service": LegalContent;
};

export type ContentKey = keyof ContentMap;
