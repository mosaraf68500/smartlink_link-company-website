import type { CommodityPageData } from "../CommodityPage";
import { productImages } from "./productImages";

export const rapeseedMealData: CommodityPageData = {
  slug: "rapeseed-meal",
  category: "Products",
  name: "Rapeseed Meal (RSM) – Global Sourcing & Trading",
  images: productImages["rapeseed-meal"],
  sections: [
    {
      paragraphs: [
        "Expanding our portfolio of plant-based protein ingredients, Smartlink Systems specializes in the international sourcing, trading, and supply of quality Rapeseed Meal (RSM) for the animal-feed industry. We connect reliable producers and exporters with feed mills, dairy farms, livestock producers, poultry-feed manufacturers, commodity importers, and bulk buyers across international markets.",
        "Rapeseed Meal is a valuable protein-rich co-product of the rapeseed oil extraction process and is widely utilized in balanced animal-feed formulations. Our sourcing programs can be tailored according to required protein level, nutritional parameters, origin, shipment volume, and commercial terms.",
      ],
    },
    {
      heading: "Premium Rapeseed Meal Portfolio",
      bullets: [
        "Rapeseed Meal – Feed Grade",
        "Solvent-Extracted Rapeseed Meal",
        "High-Protein Rapeseed Meal",
        "Canola Meal – Subject to origin & specification",
        "Dairy & Cattle Feed Grade",
        "Poultry Feed Grade – Subject to formulation requirements",
        "Bulk & Bagged Supply",
      ],
    },
    {
      heading: "Typical Quality Parameters",
      specs: [
        { label: "Crude Protein", value: "Approx. 34%–38%+" },
        { label: "Moisture", value: "As per contractual specification" },
        { label: "Crude Fiber", value: "As per grade & origin" },
        { label: "Crude Fat", value: "As per contractual specification" },
        { label: "Ash", value: "Within agreed tolerance" },
        {
          label: "Glucosinolate",
          value: "As per product grade & specification",
        },
        { label: "Erucic Acid", value: "Where applicable" },
        {
          label: "Aflatoxin / Mycotoxins",
          value: "As per contractual and destination requirements",
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
        "Smartlink Systems facilitates bulk vessel and containerized shipments under FOB, CFR, and CIF terms, focusing on consistent quality, competitive sourcing, reliable documentation, and efficient international logistics.",
        "We work with feed mills, dairy farms, livestock producers, poultry-feed manufacturers, commodity importers, and bulk buyers to arrange Rapeseed Meal according to required protein level, nutritional parameters, origin preference, and shipment volume — delivering a practical end-to-end plant-protein sourcing solution.",
      ],
    },
  ],
  cta: {
    text: "Smartlink Systems — Quality Plant Protein. Reliable Sourcing. Global Feed Solutions.",
    buttonLabel: "Contact Us",
    buttonHref: "/contact",
  },
};
