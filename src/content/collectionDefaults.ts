import productCategories from "../data/productCategories.json";
import type { AchievementsContent, CapabilitiesContent, CatalogContent, Product } from "./types";

// Built-in catalogue, capabilities and achievements, taken from the original Figma pages.

const CREATED_AT = "2026-10-13T00:00:00.000Z";

const categories = productCategories.map((category, index) => ({
  id: index + 1,
  name: category.label,
  icon: `/assets/1-4402/${category.icon}`,
  createdAt: CREATED_AT,
}));

const products: Product[] = productCategories.flatMap((category, index) =>
  category.files.map((file, fileIndex) => ({
    id: 0,
    name: category.names[fileIndex] ?? "",
    image: `/assets/${category.assetFolder}/${file}`,
    categoryId: index + 1,
    createdAt: CREATED_AT,
    active: true,
  })),
);
products.forEach((product, index) => {
  product.id = index + 1;
});

/** Finds a default product by its category ("shirt") and image file, for the Home carousel. */
function productId(categoryKey: string, file: string) {
  const categoryId = productCategories.findIndex((category) => category.id === categoryKey) + 1;
  const product = products.find((item) => item.categoryId === categoryId && item.image.endsWith(`/${file}`));
  if (!product) throw new Error(`Default product ${categoryKey}/${file} not found`);
  return product.id;
}

export const defaultCatalog: CatalogContent = {
  categories,
  products,
  // The nine photos the Home carousel showed in the Figma design.
  homeProductIds: [
    productId("shirt", "28bae.png"),
    productId("shorts", "eda4d.jpg"),
    productId("pant", "80798.jpg"),
    productId("dress", "cf5d9.jpg"),
    productId("skirts", "177d2.jpg"),
    productId("sets", "66387.jpg"),
    productId("pant", "2dc9c.jpg"),
    productId("shirt", "9fc73.jpg"),
    productId("sets", "142d3.png"),
  ],
};

const capability = (id: number, name: string, subtitle: string, file: string) => ({
  id,
  name,
  subtitle,
  image: `/assets/1-1333/${file}`,
  createdAt: CREATED_AT,
  active: true,
});

export const defaultCapabilities: CapabilitiesContent = {
  items: [
    capability(1, "Design & Product Development", "Trend insights, design support and technical expertise to bring ideas to life.", "ffe01.jpg"),
    capability(2, "Sourcing & Materials", "Responsible sourcing of quality fabrics and trims with full traceability.", "c9d14.jpg"),
    capability(3, "Cutting", "Precision cutting with advanced equipment to improve efficiency and reduce waste.", "f48ce.jpg"),
    capability(4, "Manufacturing", "State-of-the-art facilities with skilled teams delivering consistent quality at scale.", "82597.jpg"),
    capability(5, "Washing & Finishing", "Advanced washing and finishing capabilities for diverse looks and performance", "97305.png"),
    capability(6, "Quality Assurance", "Rigorous in-line and final inspection to meet global standards.", "d57b1.jpg"),
    capability(7, "Packing & Logistics", "Efficient packing, compliance and global logistics support for on-time delivery.", "d90b2.jpg"),
    capability(8, "Sustainability", "Integrated sustainable practices across our operations to protect people and the planet.", "7cfa7.jpg"),
  ],
  homeIds: [1, 2, 3, 4, 5, 6],
};

const achievement = (
  id: number,
  icon: string,
  value: number | null,
  label: string,
  { prefix = "", suffix = "" }: { prefix?: string; suffix?: string } = {},
) => ({ id, icon: `/assets/achievements/${icon}.svg`, value, prefix, suffix, label, createdAt: CREATED_AT });

export const defaultAchievements: AchievementsContent = {
  items: [
    achievement(1, "annual-sales", 150, "Annual Sales", { prefix: "$", suffix: "M" }),
    achievement(2, "employees", 10200, "Employees", { suffix: "+" }),
    achievement(3, "capacity", 26, "Pieces Capacity\n/ Year", { suffix: "M+" }),
    achievement(4, "locations", 3, "Manufacturing\nLocations"),
    achievement(5, "sustainable-future", null, "A MORE\nSUSTAINABLE\nTOMORROW"),
    achievement(6, "locations", 3, "Manufacturing\nFacilities"),
    achievement(7, "capacity", 75, "Pieces Annual\nCapacity", { suffix: "M+" }),
    achievement(8, "global-brands", 50, "Global Brands", { suffix: "+" }),
    achievement(9, "sustainable-future", 100, "Commitment to\na Cleaner Future", { suffix: "%" }),
    achievement(10, "solar-power", 1, "Solar Power Installed", { suffix: " MW" }),
    achievement(11, "co2", 25000, "Tonnes CO₂ Avoided (annually)", { suffix: "+" }),
    achievement(12, "fresh-water", 40, "Lower Fresh Water Consumption", { suffix: "%" }),
    achievement(13, "recycling", 70, "Waste Recycled", { suffix: "%" }),
    achievement(14, "employees-team", 10200, "Employees", { suffix: "+" }),
  ],
  pages: {
    home: [1, 2, 3, 4, 5],
    capabilities: [6, 2, 7, 8, 9],
    sustainability: [10, 11, 12, 13, 14],
  },
};
