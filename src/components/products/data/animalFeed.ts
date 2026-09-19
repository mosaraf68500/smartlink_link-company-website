import type {
  CommodityPageData,
  CommodityTextSection,
} from "../CommodityPage";
import { productImages } from "./productImages";

/**
 * Animal Feed Additives pages, structured like Limestone: Overview →
 * Specification → Reliable Supply (three alternating image+text sections,
 * one registry image each) → CTA. Specification values and intros are the
 * client's; the Reliable Supply paragraph is shared boilerplate with only the
 * product name swapped.
 */

const overview = (intro: string): NonNullable<CommodityPageData["sourcing"]> => ({
  heading: "Overview",
  countries: [],
  paragraphs: [intro],
});

const reliableSupply = (productName: string): CommodityTextSection => ({
  heading: "Reliable Supply",
  paragraphs: [
    `Smartlink Systems supplies ${productName} as part of our wider animal feed ingredient sourcing network, serving poultry, dairy, and livestock feed manufacturers across Bangladesh. We focus on consistent quality, competitive pricing, and dependable bulk supply.`,
  ],
});

export const wheatBranData: CommodityPageData = {
  slug: "wheat-bran",
  category: "Products",
  name: "Wheat Bran – Feed Grade",
  intro:
    "Smartlink Systems supplies quality Wheat Bran sourced from major international grain-producing markets. It is widely used as a nutritious and economical ingredient in poultry, dairy, cattle, and livestock feed.",
  images: productImages["wheat-bran"],

  sourcing: overview("Smartlink Systems supplies quality Wheat Bran sourced from major international grain-producing markets. It is widely used as a nutritious and economical ingredient in poultry, dairy, cattle, and livestock feed."),

  specifications: {
    heading: "Specification",
    specs: [
      { label: "Protein", value: "14% Min" },
      { label: "Moisture", value: "14% Max" },
      { label: "Fat", value: "4–5%" },
      { label: "Ash", value: "7% Max" },
    ],
  },

  closing: reliableSupply("Wheat Bran"),

  cta: {
    text: "Interested in feed-grade Wheat Bran? Contact Smartlink Systems for pricing, specifications, and bulk supply arrangements.",
    buttonLabel: "Contact Us",
    buttonHref: "/contact",
  },
};

export const cornDdgsData: CommodityPageData = {
  slug: "corn-ddgs",
  category: "Products",
  name: "DDGS – Distillers Dried Grains with Solubles",
  intro:
    "Our DDGS is sourced for use as a protein- and energy-rich ingredient in poultry, cattle, dairy, and livestock feed formulations.",
  images: productImages["corn-ddgs"],

  sourcing: overview("Our DDGS is sourced for use as a protein- and energy-rich ingredient in poultry, cattle, dairy, and livestock feed formulations."),

  specifications: {
    heading: "Specification",
    specs: [
      { label: "Crude Protein", value: "26–30% Min" },
      { label: "Moisture", value: "12% Max" },
      { label: "Crude Fat", value: "7–10%" },
      { label: "Crude Fiber", value: "8–10% Max" },
    ],
  },

  closing: reliableSupply("DDGS"),

  cta: {
    text: "Interested in DDGS for your feed formulations? Contact Smartlink Systems for pricing, specifications, and bulk supply arrangements.",
    buttonLabel: "Contact Us",
    buttonHref: "/contact",
  },
};

export const soyabeanMealData: CommodityPageData = {
  slug: "soyabean-meal",
  category: "Products",
  name: "Soybean Meal – SBM",
  intro:
    "We supply high-protein Soybean Meal (SBM) for poultry, aquaculture, dairy, and livestock feed manufacturers.",
  images: productImages["soyabean-meal"],

  sourcing: overview("We supply high-protein Soybean Meal (SBM) for poultry, aquaculture, dairy, and livestock feed manufacturers."),

  specifications: {
    heading: "Specification",
    specs: [
      { label: "Crude Protein", value: "46–48% Min" },
      { label: "Moisture", value: "12% Max" },
      { label: "Crude Fiber", value: "3.5–6% Max" },
      { label: "Ash", value: "6–7% Max" },
    ],
  },

  closing: reliableSupply("Soybean Meal (SBM)"),

  cta: {
    text: "Interested in Soybean Meal (SBM)? Contact Smartlink Systems for pricing, specifications, and bulk supply arrangements.",
    buttonLabel: "Contact Us",
    buttonHref: "/contact",
  },
};

export const poultryMealData: CommodityPageData = {
  slug: "poultry-meal",
  category: "Products",
  name: "Poultry Meal – Feed Grade",
  intro:
    "Premium animal-protein feed ingredient sourced from Saudi Arabia, Egypt & China, suitable for poultry and livestock feed formulations.",
  images: productImages["poultry-meal"],

  sourcing: overview("Premium animal-protein feed ingredient sourced from Saudi Arabia, Egypt & China, suitable for poultry and livestock feed formulations."),

  specifications: {
    heading: "Specification",
    specs: [
      { label: "Crude Protein", value: "60–65% Min" },
      { label: "Moisture", value: "8% Max" },
      { label: "Crude Fat", value: "10–15%" },
      { label: "Crude Ash", value: "15–18% Max" },
      { label: "Pepsin Digestibility", value: "85% Min" },
    ],
  },

  closing: reliableSupply("Poultry Meal"),

  cta: {
    text: "Interested in feed-grade Poultry Meal? Contact Smartlink Systems for pricing, specifications, and bulk supply arrangements.",
    buttonLabel: "Contact Us",
    buttonHref: "/contact",
  },
};

export const rapeseedMealData: CommodityPageData = {
  slug: "rapeseed-meal",
  category: "Products",
  name: "Rapeseed Meal – RSM",
  intro:
    "Rapeseed Meal (RSM) provides a cost-effective plant-based protein source for various livestock and feed formulations.",
  images: productImages["rapeseed-meal"],

  sourcing: overview("Rapeseed Meal (RSM) provides a cost-effective plant-based protein source for various livestock and feed formulations."),

  specifications: {
    heading: "Specification",
    specs: [
      { label: "Crude Protein", value: "34–38% Min" },
      { label: "Moisture", value: "12% Max" },
      { label: "Crude Fiber", value: "12–14% Max" },
    ],
  },

  closing: reliableSupply("Rapeseed Meal (RSM)"),

  cta: {
    text: "Interested in Rapeseed Meal (RSM)? Contact Smartlink Systems for pricing, specifications, and bulk supply arrangements.",
    buttonLabel: "Contact Us",
    buttonHref: "/contact",
  },
};
