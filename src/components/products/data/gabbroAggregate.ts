import type { CommodityPageData } from "../CommodityPage";
import { productImages } from "./productImages";

export const gabbroAggregateData: CommodityPageData = {
  slug: "gabbro-aggregate",
  category: "Products",
  name: "Gabbro Aggregate Supplier & Importer in Bangladesh",
  intro:
    "Smartlink Systems is a professional Gabbro Aggregate supplier, importer, exporter, and bulk construction materials trading company in Bangladesh, supplying high-quality crushed Gabbro stone and aggregates to Ready-Mix Concrete (RMC) plants, construction companies, infrastructure contractors, and major mega projects across Bangladesh.",
  images: productImages["gabbro-aggregate"],

  sourcing: {
    heading: "UAE & Oman Gabbro Aggregate Supply",
    countries: ["UAE", "Oman"],
    paragraphs: [
      "Smartlink Systems sources and supplies premium-quality Gabbro Aggregate from the UAE and Oman, working with established quarries, crushing plants, manufacturers, and exporters. Our international sourcing network enables us to arrange bulk quantities of Gabbro Aggregate according to the required size, gradation, physical properties, and project specifications.",
      "We manage the complete supply chain, including international sourcing, import and export documentation, vessel and shipment coordination, port handling, customs-related logistics, jetty operations, warehousing, inland waterway transportation, road transportation, and final delivery to RMC plants, batching plants, project sites, yards, and jetties throughout Bangladesh.",
    ],
  },

  specifications: {
    heading: "Gabbro Aggregate Specifications & Available Sizes",
    intro:
      "Gabbro is a dense and durable igneous rock widely used as a construction aggregate where strength, durability, abrasion resistance, and consistent grading are important. Depending on the quarry and project specifications, Smartlink Systems can arrange Gabbro Aggregate in various sizes, including:",
    // No fixed numeric spec table was provided for Gabbro (unlike Limestone) —
    // the client copy only lists quality-parameter names in prose, held in
    // `followUp` below. The template skips rendering the spec table when
    // `specs` is empty.
    specs: [],
    followUp:
      "Typical quality parameters may include Specific Gravity, Water Absorption, Aggregate Crushing Value (ACV), Aggregate Impact Value (AIV), Los Angeles Abrasion (LAA), Flakiness Index, Elongation Index, and Sieve Analysis / Gradation. Actual values depend on the quarry and shipment and can be supported by relevant laboratory test reports, Certificates of Analysis (COA), or quality certificates where applicable.",
    sizes: [
      "0–5 mm – Gabbro Dust / Fine Aggregate",
      "5–10 mm – Small Aggregate",
      "10–20 mm – Coarse Aggregate",
      "5–20 mm – Mixed / Graded Aggregate",
      "20–40 mm – Large Aggregate",
      "40–60 mm – Heavy Construction Aggregate",
    ],
    sizesNote:
      "Customized sizes and gradations can also be arranged according to the buyer's technical requirements.",
  },

  capability: {
    heading: "Gabbro Aggregate for RMC Plants & Mega Projects",
    paragraphs: [
      "Smartlink Systems supplies bulk Gabbro Aggregate in Bangladesh for a wide range of construction and infrastructure applications, including Ready-Mix Concrete (RMC), high-strength concrete, roads and highways, bridges, elevated expressways, airports, railway infrastructure, power plants, industrial facilities, commercial developments, and other mega projects.",
      "Our ability to coordinate international sourcing and local logistics enables us to support both regular monthly requirements and large-volume project-based supply contracts.",
    ],
    targetIndustries: [
      "Ready-Mix Concrete (RMC)",
      "high-strength concrete",
      "roads and highways",
      "bridges",
      "elevated expressways",
      "airports",
      "railway infrastructure",
      "power plants",
      "industrial facilities",
      "commercial developments",
      "other mega projects",
    ],
  },

  closing: {
    heading: "Reliable Bulk Gabbro Aggregate Supply in Bangladesh",
    paragraphs: [
      "From overseas quarry to final project delivery, Smartlink Systems focuses on consistent material quality, competitive pricing, reliable supply volumes, proper gradation, and scheduled delivery. Our logistics capabilities allow us to arrange delivery by suitable inland waterway and road transportation according to the customer's location and project requirements.",
      "Whether you are looking for UAE Gabbro Aggregate, Oman Gabbro Aggregate, 10–20 mm Gabbro Stone, 5–20 mm Gabbro Aggregate, or bulk construction aggregate in Bangladesh, Smartlink Systems can provide an integrated sourcing, import, logistics, and delivery solution.",
      "With our international supplier network, local market experience, and construction material logistics capabilities, Smartlink Systems aims to be a trusted Gabbro Aggregate supplier and importer in Bangladesh for RMC plants, contractors, and major infrastructure projects.",
    ],
  },

  cta: {
    text: "Looking for Gabbro Aggregate in Bangladesh? Contact Smartlink Systems for current prices, technical specifications, sieve analysis, bulk quotations, and long-term project supply arrangements.",
    buttonLabel: "Contact Us",
    buttonHref: "/contact",
  },
};
