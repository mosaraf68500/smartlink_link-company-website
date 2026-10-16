import type { CommodityPageData } from "../CommodityPage";
import { productImages } from "./productImages";

export const soyabeanMealData: CommodityPageData = {
  slug: "soyabean-meal",
  category: "Products",
  name: "Soybean Meal (SBM) – Global Sourcing & Trading",
  images: productImages["soyabean-meal"],
  sections: [
    {
      countries: ["USA", "Brazil", "Argentina", "Tanzania", "Nigeria"],
      paragraphs: [
        "Delivering dependable plant-based protein solutions to the international animal-feed industry, Smartlink Systems specializes in the sourcing, trading, and supply of quality Soybean Meal (SBM) from major producing origins including USA, Brazil, Argentina, Tanzania, and Nigeria.",
        "Our soybean meal portfolio supports the nutritional requirements of poultry, dairy, livestock, aquaculture, and compound-feed industries. We work with established producers, exporters, feed mills, importers, and bulk buyers to arrange suitable grades based on protein requirements, origin, shipment volume, and commercial terms.",
      ],
    },
    {
      heading: "Premium Soybean Meal Portfolio",
      bullets: [
        "Hi-Pro Soybean Meal",
        "Low-Pro Soybean Meal",
        "Dehulled Soybean Meal",
        "Solvent-Extracted Soybean Meal",
        "Poultry & Livestock Feed Grade",
        "Dairy & Cattle Feed Grade",
        "Aquaculture Feed Grade",
        "GMO / Non-GMO – Subject to origin & certification",
      ],
    },
    {
      heading: "Typical Quality Parameters",
      specs: [
        { label: "Crude Protein", value: "44%–48%+" },
        { label: "Moisture", value: "Max. 11%–13%" },
        { label: "Crude Fiber", value: "As per grade & specification" },
        { label: "Crude Fat", value: "As per contractual specification" },
        { label: "Ash", value: "Within agreed limits" },
        { label: "Urease Activity", value: "As per buyer requirement" },
        {
          label: "Protein Solubility (KOH)",
          value: "As per contractual specification",
        },
        {
          label: "Aflatoxin / Mycotoxins",
          value: "As per destination requirements",
        },
        {
          label: "Packing",
          value: "Bulk / Jumbo Bags / PP Bags, subject to availability",
        },
        {
          label: "Inspection",
          value: "SGS / Intertek / Bureau Veritas or as mutually agreed",
        },
      ],
    },
    {
      heading: "Global Supply Solutions",
      paragraphs: [
        "Sourcing Origins: USA • Brazil • Argentina • Tanzania • Nigeria",
        "Smartlink Systems facilitates bulk vessel and containerized shipments under FOB, CFR, and CIF terms, with a strong focus on quality consistency, competitive sourcing, reliable documentation, and efficient international supply.",
        "From protein-grade selection and origin matching to inspection arrangements and shipment planning, we support poultry, dairy, livestock, aquaculture, and compound-feed buyers with Soybean Meal supply solutions structured around nutritional requirements, commercial terms, and delivery schedules.",
      ],
    },
  ],
  cta: {
    text: "Smartlink Systems — Quality Protein Ingredients. Global Origins. Reliable Feed Solutions.",
    buttonLabel: "Contact Us",
    buttonHref: "/contact",
  },
};
