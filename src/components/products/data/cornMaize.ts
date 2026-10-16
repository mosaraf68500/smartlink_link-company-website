import type { CommodityPageData } from "../CommodityPage";
import { productImages } from "./productImages";

export const cornMaizeData: CommodityPageData = {
  slug: "corn-maize",
  category: "Products",
  name: "Corn / Maize – Global Sourcing & Trading",
  images: productImages["corn-maize"],
  sections: [
    {
      countries: ["Africa", "India", "Brazil", "Argentina", "Pakistan"],
      paragraphs: [
        "Serving both the food-processing and animal-feed industries, Smartlink Systems specializes in the international sourcing, trading, and supply of quality Corn / Maize from established agricultural markets across Africa, India, Brazil, Argentina, and Pakistan.",
        "Our portfolio covers both Milling-Grade and Feed-Grade Maize, enabling us to serve flour and milling industries, starch processors, feed mills, poultry and livestock feed manufacturers, commodity importers, and bulk institutional buyers. Supply programs can be structured according to required origin, grade, specification, volume, shipment method, and destination.",
      ],
    },
    {
      heading: "Premium Maize Portfolio",
      blocks: [
        { type: "subheading", text: "Milling & Food Processing Grade" },
        {
          type: "bullets",
          bullets: [
            "Yellow Maize – Milling Grade",
            "White Maize – Milling Grade",
            "Food-Grade Maize",
            "Starch Processing Grade",
            "Current / Latest Crop",
          ],
        },
        { type: "subheading", text: "Animal Feed Grade" },
        {
          type: "bullets",
          bullets: [
            "Yellow Maize – Feed Grade",
            "Poultry Feed Maize",
            "Livestock Feed Maize",
            "Feed-Mill Grade Maize",
            "Bulk Feed Corn",
          ],
        },
      ],
    },
    {
      heading: "Typical Quality Parameters",
      specs: [
        { label: "Moisture", value: "As per contractual specification" },
        { label: "Protein", value: "As per origin & grade" },
        { label: "Test Weight", value: "As per buyer requirement" },
        { label: "Broken Kernels", value: "Within agreed tolerance" },
        { label: "Foreign Matter", value: "Within contractual limits" },
        { label: "Damaged / Discolored Kernels", value: "As per contract" },
        {
          label: "Aflatoxin",
          value: "As per destination and buyer requirements",
        },
        {
          label: "GMO / Non-GMO",
          value: "Subject to origin and certification",
        },
        { label: "Crop", value: "Current / Latest Crop" },
        {
          label: "Inspection",
          value: "SGS / Intertek / Bureau Veritas or as mutually agreed",
        },
      ],
    },
    {
      heading: "Global Supply Solutions",
      paragraphs: [
        "Sourcing Origins: Africa • India • Brazil • Argentina • Pakistan",
        "Smartlink Systems facilitates bulk vessel and containerized shipments under international trade terms including FOB, CFR, and CIF, with a focus on dependable sourcing, competitive commercial terms, quality assurance, and efficient shipment coordination.",
        "Whether the requirement is milling-grade or feed-grade maize, we help flour and milling industries, starch processors, feed mills, poultry and livestock feed manufacturers, and bulk institutional buyers structure supply programs around origin, grade, specification, volume, and destination — from enquiry through shipment coordination.",
      ],
    },
  ],
  cta: {
    text: "Smartlink Systems — Global Grain Sourcing. Consistent Quality. Reliable Supply.",
    buttonLabel: "Contact Us",
    buttonHref: "/contact",
  },
};
