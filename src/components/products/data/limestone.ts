import type { CommodityPageData } from "../CommodityPage";
import { productImages } from "./productImages";

export const limestoneData: CommodityPageData = {
  slug: "limestone",
  category: "Products",
  name: "Limestone Supplier, Importer & Exporter in Bangladesh",
  intro:
    "Smartlink Systems is a professional limestone supplier, importer, exporter, and bulk trading company in Bangladesh, supplying high-quality limestone to Ready-Mix Concrete (RMC) plants, cement industries, construction companies, industrial users, and major infrastructure and mega projects throughout Bangladesh.",
  images: productImages.limestone,

  sourcing: {
    heading: "Limestone Import from UAE, Oman, Thailand, China & India",
    countries: ["UAE", "Oman", "Thailand", "China", "India"],
    paragraphs: [
      "Smartlink Systems sources and supplies limestone from established quarries, manufacturers, and exporters in the UAE, Oman, Thailand, China, and India. Our diversified international sourcing network enables us to offer customers different limestone grades, sizes, chemical compositions, and commercial options according to their project requirements.",
      "We manage the complete international and domestic supply chain, including sourcing, import and export documentation, shipment coordination, port handling, customs-related logistics, warehousing, inland waterway transportation, road transportation, and final delivery to the customer's RMC plant, factory, project site, yard, or jetty.",
    ],
  },

  specifications: {
    heading: "Limestone Specifications",
    intro:
      "Depending on the country of origin, quarry, and buyer's technical requirements, we can arrange limestone with typical specifications including:",
    specs: [
      { label: "Calcium Carbonate (CaCO₃)", value: "90–98%" },
      { label: "Calcium Oxide (CaO)", value: "50–55%" },
      { label: "Magnesium Oxide (MgO)", value: "typically below 3%" },
      { label: "Silica (SiO₂)", value: "typically below 5%" },
    ],
    followUp:
      "Moisture, impurities, abrasion characteristics, gradation, and other technical parameters can be supplied according to the requirements of individual projects. Quality can be supported by a Certificate of Analysis (COA), laboratory test report, or other applicable quality documentation.",
    sizes: [
      "0–5 mm",
      "5–10 mm",
      "10–20 mm",
      "20–40 mm",
      "40–80 mm",
      "limestone chips",
      "limestone aggregates",
      "limestone lumps",
    ],
    sizesNote:
      "Customized sizing and grading can also be arranged based on RMC plant, construction, cement, and infrastructure project specifications.",
  },

  capability: {
    heading: "Bulk Limestone Supply for RMC Plants & Mega Projects",
    paragraphs: [
      "Smartlink Systems has the capability to arrange bulk limestone supply in Bangladesh for both regular industrial consumption and large-volume project requirements. We serve customers involved in Ready-Mix Concrete production, roads and highways, bridges, elevated expressways, airports, power plants, industrial facilities, cement production, and other major infrastructure developments.",
      "Our international sourcing network and local logistics capabilities allow us to provide customers with consistent quality, competitive pricing, dependable supply volumes, and scheduled delivery.",
    ],
    targetIndustries: [
      "Ready-Mix Concrete production",
      "roads and highways",
      "bridges",
      "elevated expressways",
      "airports",
      "power plants",
      "industrial facilities",
      "cement production",
      "other major infrastructure developments",
    ],
  },

  closing: {
    heading: "Your Reliable Limestone Supply Partner in Bangladesh",
    paragraphs: [
      "Whether you are looking for UAE limestone, Oman limestone, Thailand limestone, China limestone, or Indian limestone in Bangladesh, Smartlink Systems can provide an integrated sourcing, import, logistics, and delivery solution tailored to your requirements.",
      "With our experience in international trade, construction materials, bulk cargo handling, and domestic logistics, Smartlink Systems aims to be a trusted limestone supplier and importer in Bangladesh, connecting reliable global limestone sources with Bangladesh's growing RMC, construction, cement, industrial, and infrastructure sectors.",
    ],
  },

  cta: {
    text: "Looking for a reliable limestone supplier in Bangladesh? Contact Smartlink Systems for bulk limestone prices, technical specifications, project quotations, and long-term supply arrangements.",
    buttonLabel: "Contact Us",
    buttonHref: "/contact",
  },
};
