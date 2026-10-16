import type { CommodityPageData } from "../CommodityPage";
import { productImages } from "./productImages";

export const cornDdgsData: CommodityPageData = {
  slug: "corn-ddgs",
  category: "Products",
  name: "Corn DDGS – Global Sourcing & Trading",
  images: productImages["corn-ddgs"],
  sections: [
    {
      countries: ["India", "Brazil", "USA", "Argentina", "Tanzania"],
      paragraphs: [
        "Supporting the global animal-feed industry with dependable protein and energy ingredients, Smartlink Systems specializes in the international sourcing, trading, and supply of quality Corn DDGS (Distillers Dried Grains with Solubles) from established producers across India, Brazil, USA, Argentina, and Tanzania.",
        "Our Corn DDGS portfolio is sourced to meet the requirements of poultry, dairy, cattle, aquaculture, and compound-feed industries. We work with feed mills, importers, distributors, and bulk buyers to arrange suitable origins and specifications based on nutritional requirements, commercial terms, and shipment volumes.",
      ],
    },
    {
      heading: "Premium Corn DDGS Portfolio",
      bullets: [
        "Corn DDGS – Feed Grade",
        "High-Protein Corn DDGS",
        "Golden / Light-Colored DDGS",
        "Poultry & Livestock Feed Grade",
        "Dairy & Cattle Feed Grade",
        "Aquaculture Feed Grade – subject to specification",
        "Bulk & Bagged Supply",
      ],
    },
    {
      heading: "Typical Quality Parameters",
      specs: [
        { label: "Crude Protein", value: "26%–30%+" },
        { label: "Moisture", value: "Max. 10%–12%" },
        { label: "Crude Fat", value: "As per origin & specification" },
        { label: "Crude Fiber", value: "As per contractual specification" },
        { label: "Ash", value: "Within agreed specification" },
        {
          label: "Color",
          value: "Golden Yellow to Light Brown, subject to origin",
        },
        {
          label: "Aflatoxin / Mycotoxins",
          value: "As per contractual and destination requirements",
        },
        {
          label: "GMO / Non-GMO",
          value: "Subject to origin and certification",
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
        "Sourcing Origins: India • Brazil • USA • Argentina • Tanzania",
        "Smartlink Systems facilitates containerized and bulk shipments under FOB, CFR, and CIF terms, focusing on dependable sourcing, consistent feed quality, competitive commercial terms, and efficient international shipment coordination.",
        "Our team works with feed mills, importers, distributors, and bulk buyers to align nutritional specifications, packing options, inspection requirements, and shipment volumes — supporting poultry, dairy, cattle, aquaculture, and compound-feed applications with reliable Corn DDGS supply.",
      ],
    },
  ],
  cta: {
    text: "Smartlink Systems — Global Feed Ingredients. Reliable Origins. Consistent Supply.",
    buttonLabel: "Contact Us",
    buttonHref: "/contact",
  },
};
