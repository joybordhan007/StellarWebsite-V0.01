import productCategories from "../data/productCategories.json";
import { defaultVersatility } from "./pageDefaults";
import type { AchievementsContent, CapabilitiesContent, CatalogContent, Product } from "./types";

// Built-in catalogue, capabilities and achievements, taken from the original Figma pages.

const CREATED_AT = "2026-10-13T00:00:00.000Z";

const categories = productCategories.map((category, index) => ({
  id: index + 1,
  name: category.label,
  icon: category.icon,
  createdAt: CREATED_AT,
}));

const products: Product[] = productCategories.flatMap((category, index) =>
  category.files.map((file, fileIndex) => ({
    id: 0,
    name: category.names[fileIndex] ?? "",
    image: file,
    categoryId: index + 1,
    createdAt: CREATED_AT,
    active: true,
  })),
);
products.forEach((product, index) => {
  product.id = index + 1;
});

/** Finds a default product by its category ("shirt") and image path, for the Home carousel. */
function productId(categoryKey: string, image: string) {
  const categoryId = productCategories.findIndex((category) => category.id === categoryKey) + 1;
  const product = products.find((item) => item.categoryId === categoryId && item.image === image);
  if (!product) throw new Error(`Default product ${categoryKey} ${image} not found`);
  return product.id;
}

export const defaultCatalog: CatalogContent = {
  categories,
  products,
  // The nine photos the Home carousel showed in the Figma design.
  homeProductIds: [
    productId("shirt", "/assets/products/shirt/resort-shirt.webp"),
    productId("shorts", "/assets/products/knits/crew-neck-2.webp"),
    productId("pant", "/assets/products/pant/men-bottom-7.webp"),
    productId("dress", "/assets/products/dress/womens-wrap-dress.webp"),
    productId("skirts", "/assets/products/skirts/skirts.webp"),
    productId("sets", "/assets/products/sets/women-sets-2.webp"),
    productId("pant", "/assets/products/pant/boy-kid-bottom.webp"),
    productId("shirt", "/assets/products/shirt/boy-stripe-shirt.webp"),
    productId("sets", "/assets/products/sets/babies-sets.webp"),
  ],
};

const capability = (id: number, name: string, subtitle: string, image: string) => ({
  id,
  name,
  subtitle,
  image,
  createdAt: CREATED_AT,
  active: true,
});

export const defaultCapabilities: CapabilitiesContent = {
  items: [
    capability(1, "Design & Product Development", "Trend insights, design support and technical expertise to bring ideas to life.", "/assets/capabilities/design-and-product-development.jpg"),
    capability(2, "Sourcing & Materials", "Responsible sourcing of quality fabrics and trims with full traceability.", "/assets/capabilities/sourcing-and-materials.jpg"),
    capability(3, "Cutting", "Precision cutting with advanced equipment to improve efficiency and reduce waste.", "/assets/capabilities/cutting.jpg"),
    capability(4, "Manufacturing", "State-of-the-art facilities with skilled teams delivering consistent quality at scale.", "/assets/common/manufacturing.jpg"),
    capability(5, "Washing & Finishing", "Advanced washing and finishing capabilities for diverse looks and performance", "/assets/capabilities/washing-and-finishing.png"),
    capability(6, "Quality Assurance", "Rigorous in-line and final inspection to meet global standards.", "/assets/capabilities/quality-assurance.jpg"),
    capability(7, "Packing & Logistics", "Efficient packing, compliance and global logistics support for on-time delivery.", "/assets/common/packing-and-logistics.jpg"),
    capability(8, "Sustainability", "Integrated sustainable practices across our operations to protect people and the planet.", "/assets/capabilities/sustainability.jpg"),
  ],
  homeIds: [1, 2, 3, 4, 5, 6],
  versatility: defaultVersatility,
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
