import { defaultAchievements, defaultCapabilities, defaultCatalog } from "./collectionDefaults";
import { defaultAbout, defaultBrands, defaultFactories, defaultSustainability } from "./pageDefaults";
import seoDefaults from "./seoDefaults.json";
import type { ContentMap, LegalContent } from "./types";

// Built-in content: what the website shows until an admin edits it.

const placeholderNote =
  "This page contains placeholder text for review and can be replaced with approved legal content.";

const privacyPolicy: LegalContent = {
  title: "Privacy Policy",
  intro:
    "This sample policy explains how Stellar Manufacturing Ltd. may collect, use, and protect information when you visit our website or contact our team.",
  updated: "October 13, 2026",
  sections: [
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
  ],
  note: placeholderNote,
};

const termsOfService: LegalContent = {
  title: "Terms of Service",
  intro:
    "These sample terms describe general conditions for using the Stellar Manufacturing Ltd. website. Replace this draft with terms reviewed and approved for your business.",
  updated: "October 13, 2026",
  sections: [
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
  ],
  note: placeholderNote,
};

export const defaultContent: ContentMap = {
  site: {
    companyName: "STELLAR MANUFACTURING LTD.",
    tagline:
      "We are a sustainable clothing and garment manufacturer, driven by responsible practices, empowered people and a healthier planet.",
    phone: "+880 1704-166654",
    email: "info@stellar-mfg.com",
    footerAddresses: [
      "Bangladesh Office: House-441, Road-07, Baridhara DOHS Dhaka-1206",
      "India Office: PDS Tower, 5th Floor, Plot No. 222, Udyog Vihar Phase -1, Industrial Complex Dundahera, Gurgaon – 122016, Haryana, India",
    ],
    socialLinks: [
      { id: 1, platform: "facebook", url: "https://www.facebook.com/goodearthapparels" },
      { id: 2, platform: "youtube", url: "https://www.youtube.com/@GoodEarthApparelsLimited" },
      { id: 3, platform: "linkedin", url: "https://www.linkedin.com/company/goodearthapparels/posts/?feedView=all" },
    ],
    footer: {
      quickLinksTitle: "Quick Links",
      quickLinks: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Our Capabilities", href: "/capabilities" },
        { label: "Design path", href: "/design-path" },
        { label: "Our Factories", href: "/factories" },
        { label: "Sustainability", href: "/sustainability" },
        { label: "Products", href: "/products" },
      ],
      supportTitle: "Support",
      supportLinks: [
        { label: "Contact Us", href: "/contact" },
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Service", href: "/terms-of-service" },
      ],
      contactTitle: "Contact Info",
      creditText: "Website designed and developed by",
      creditLinkLabel: "DesignOps",
      creditUrl: "http://designops.agency",
    },
    copyright: "Copyright © 2026 STELLAR MANUFACTURING LTD.",
    contactFormEmail: "info@stellar-mfg.com",
    navigation: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About us" },
      { href: "/capabilities", label: "Our capabilities" },
      { href: "/design-path", label: "Design path" },
      { href: "/factories", label: "Our factories" },
      { href: "/sustainability", label: "Sustainability" },
      { href: "/products", label: "Products" },
    ],
  },
  // Also copied into the build as seo-defaults.json, so the server sets the right title before any edit.
  seo: seoDefaults,
  catalog: defaultCatalog,
  capabilities: defaultCapabilities,
  achievements: defaultAchievements,
  factories: defaultFactories,
  brands: defaultBrands,
  about: defaultAbout,
  sustainability: defaultSustainability,
  offices: {
    offices: [
      {
        id: "head-office-bangladesh",
        name: "Head Office Bangladesh",
        addresses: ["House-441, Road-07, Baridhara DOHS, Dhaka-1206"],
        phone: "+880 2 1234 5678",
        email: "info@stellar-mfg.com",
        website: "www.stellar-mfg.com",
        hours: "Fri, 9:00 AM – 6:00 PM (BST)",
      },
      {
        id: "india-office",
        name: "India Office",
        addresses: [
          "PDS Tower, 5th Floor, Plot No. 222, Udyog Vihar Phase -1, Industrial Complex Dundahera, Gurgaon – 122016, Haryana, India",
          "Unit No. 1031 & 1032, Solitaire Corporate Park, Andheri Ghatkopar Link Road, Andheri (East), Mumbai – 400093, Maharashtra, India.",
        ],
        phone: "+880 2 1234 5678",
        email: "info@stellar-mfg.com",
        website: "www.stellar-mfg.com",
        hours: "Fri, 9:00 AM – 6:00 PM (BST)",
      },
      {
        id: "goodearth-apparels",
        name: "GoodEarth Apparels Bangladesh",
        addresses: ["Tepirbari, Telihati, Sreepur, Gazipur, Bangladesh. PO: Gazipur-1740."],
        phone: "+88 09601 121 600",
        email: "info@stellar-mfg.com",
        website: "www.goodearthapparels.com",
        hours: "Fri, 9:00 AM – 6:00 PM (BST)",
      },
      {
        id: "progress-apparels",
        name: "Progress Apparels Bangladesh",
        addresses: ["MS-SFB # 1 & 2, Adamjee EPZ, Narayanganj, Dhaka."],
        phone: "+880 2 1234 5678",
        email: "info@stellar-mfg.com",
        website: "www.progress-mfg.com",
        hours: "Fri, 9:00 AM – 6:00 PM (BST)",
      },
      {
        id: "knit-gallery",
        name: "Knit Gallery India",
        addresses: [
          "SF No. 217/1, 217/2A, 217/2B, 217/2C & 218/1A, Door No. 3-353, Dharapuram Road, Gudimangalam Nal Road Tirupur, Tamil Nadu, 642201, India",
        ],
        phone: "+880 2 1234 5678",
        email: "info@stellar-mfg.com",
        website: "www.stellar-mfg.com",
        hours: "Fri, 9:00 AM – 6:00 PM (BST)",
      },
    ],
  },
  "privacy-policy": privacyPolicy,
  "terms-of-service": termsOfService,
};
