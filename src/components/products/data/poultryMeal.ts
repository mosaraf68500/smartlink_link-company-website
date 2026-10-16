import type { CommodityPageData } from "../CommodityPage";
import { productImages } from "./productImages";

/**
 * Global Supply Solutions + closing tagline still pending —
 * user message cut off at "### Global". Paste remainder when ready.
 */
export const poultryMealData: CommodityPageData = {
  slug: "poultry-meal",
  category: "Products",
  name: "Poultry Meal – Global Sourcing & Trading",
  images: productImages["poultry-meal"],
  sections: [
    {
      countries: ["Saudi Arabia", "Nigeria", "India", "Egypt"],
      paragraphs: [
        "Providing high-protein feed ingredient solutions for the international animal nutrition industry, Smartlink Systems specializes in the sourcing, trading, and supply of quality Poultry Meal from selected producers and exporters across Saudi Arabia, Nigeria, India, and Egypt.",
        "Our poultry meal portfolio is developed for aquaculture, pet food, poultry, livestock, and compound-feed manufacturers, with sourcing tailored to required protein levels, nutritional parameters, processing standards, shipment volumes, and destination-market requirements.",
      ],
    },
    {
      heading: "Premium Poultry Meal Portfolio",
      bullets: [
        "High-Protein Poultry Meal",
        "Feed-Grade Poultry Meal",
        "Rendered Poultry Meal",
        "Poultry By-Product Meal",
        "Aquaculture Feed Grade",
        "Pet Food Grade – Subject to specification & certification",
        "Customized Protein Grades – Subject to origin and availability",
      ],
    },
    {
      heading: "Typical Quality Parameters",
      specs: [
        { label: "Crude Protein", value: "55%–65%+" },
        { label: "Moisture", value: "As per contractual specification" },
        { label: "Crude Fat", value: "As per grade & origin" },
        { label: "Ash", value: "Within agreed specification" },
        { label: "Calcium & Phosphorus", value: "As per buyer requirement" },
        { label: "Digestibility", value: "Subject to product grade" },
        {
          label: "Microbiological Parameters",
          value: "As per destination requirements",
        },
        {
          label: "Salmonella",
          value: "As per contractual and regulatory requirements",
        },
        {
          label: "Packing",
          value: "PP Bags / Jumbo Bags / Bulk, subject to availability",
        },
        {
          label: "Inspection",
          value: "SGS / Intertek / Bureau Veritas or as mutually agreed",
        },
      ],
    },
  ],
  cta: {
    text: "Contact Smartlink Systems",
    buttonLabel: "Contact Us",
    buttonHref: "/contact",
  },
};
