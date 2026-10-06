import type { CommodityPageData } from "../CommodityPage";
import { productImages } from "./productImages";

/**
 * Exact client section order:
 * 1. Opening intro (no heading)
 * 2. Product Portfolio (Food & Industrial Soybeans → Typical Quality Parameters)
 * 3. Global Supply Solutions
 */
export const soyabeanSeedsData: CommodityPageData = {
  slug: "soyabean-seeds",
  category: "Products",
  name: "Soybean Trading & Global Sourcing",
  images: productImages["soyabean-seeds"],
  sections: [
    {
      countries: ["USA", "Canada", "Brazil", "Argentina"],
      paragraphs: [
        "Building dependable supply channels across the world's major oilseed-producing regions, Smartlink Systems specializes in the sourcing, trading, and supply of quality soybeans from USA, Canada, Brazil, and Argentina.",
        "Our international sourcing network enables us to serve oilseed crushers, edible oil processors, feed manufacturers, commodity importers, and industrial buyers with solutions tailored to required origin, quality parameters, shipment volume, and commercial terms.",
      ],
    },
    {
      heading: "Product Portfolio",
      blocks: [
        { type: "paragraphs", paragraphs: ["Food & Industrial Soybeans"] },
        {
          type: "bullets",
          bullets: [
            "Yellow Soybeans",
            "Non-GMO Soybeans — subject to origin and availability",
            "Food-Grade Soybeans — subject to specification",
            "Crushing-Grade Soybeans",
          ],
        },
        {
          type: "specs",
          label: "Typical Quality Parameters",
          specs: [
            { label: "Protein", value: "As per origin & contract" },
            { label: "Oil Content", value: "As per contractual specification" },
            { label: "Moisture", value: "Controlled to agreed specification" },
            { label: "Foreign Matter", value: "As per contract" },
            { label: "Damaged / Split Beans", value: "Within agreed tolerance" },
            { label: "GMO / Non-GMO", value: "Subject to origin and certification" },
            { label: "Crop", value: "Current / Latest Crop" },
          ],
        },
      ],
    },
    {
      heading: "Global Supply Solutions",
      paragraphs: [
        "We facilitate bulk vessel and containerized shipments, depending on volume, origin, and destination, under international trade terms including FOB, CFR, and CIF.",
        "Smartlink Systems — Connecting Global Soybean Origins with Reliable Markets.",
      ],
    },
  ],
  cta: {
    text: "Looking for soybeans for crushing, food processing, or feed use? Contact Smartlink Systems for origins, specifications, and shipment arrangements.",
    buttonLabel: "Contact Us",
    buttonHref: "/contact",
  },
};
