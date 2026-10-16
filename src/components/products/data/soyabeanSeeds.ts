import type { CommodityPageData } from "../CommodityPage";
import { productImages } from "./productImages";

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
        { type: "subheading", text: "Food & Industrial Soybeans" },
        {
          type: "bullets",
          bullets: [
            "Yellow Soybeans",
            "Non-GMO Soybeans — subject to origin and availability",
            "Food-Grade Soybeans — subject to specification",
            "Crushing-Grade Soybeans",
          ],
        },
        { type: "subheading", text: "Typical Quality Parameters" },
        {
          type: "bullets",
          bullets: [
            "Protein — As per origin & contract",
            "Oil Content — As per contractual specification",
            "Moisture — Controlled to agreed specification",
            "Foreign Matter — As per contract",
            "Damaged / Split Beans — Within agreed tolerance",
            "GMO / Non-GMO — Subject to origin and certification",
            "Crop — Current / Latest Crop",
          ],
        },
      ],
    },
    {
      heading: "Global Supply Solutions",
      paragraphs: [
        "We facilitate bulk vessel and containerized shipments, depending on volume, origin, and destination, under international trade terms including FOB, CFR, and CIF.",
        "Our supply approach combines origin matching, quality-parameter alignment, competitive commercial terms, and coordinated logistics — enabling oilseed crushers, edible oil processors, feed manufacturers, commodity importers, and industrial buyers to receive soybeans according to their required specification and delivery schedule.",
      ],
    },
  ],
  cta: {
    text: "Smartlink Systems — Connecting Global Soybean Origins with Reliable Markets.",
    buttonLabel: "Contact Us",
    buttonHref: "/contact",
  },
};
