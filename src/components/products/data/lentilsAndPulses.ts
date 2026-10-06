import type { CommodityPageData } from "../CommodityPage";
import { productImages } from "./productImages";

/**
 * Combined Lentils + Pulses page (client decision: one product page).
 * Exact section order:
 * 1. Opening intro (no heading)
 * 2. Premium Product Portfolio (Lentils → Chickpeas → Peas → Beans & Specialty)
 * 3. Global Supply Solutions
 */
export const lentilsAndPulsesData: CommodityPageData = {
  slug: "lentils-pulses",
  category: "Products",
  name: "Lentils & Pulses Trading & Supply",
  images: productImages["lentils-pulses"],
  sections: [
    {
      countries: ["Australia", "India", "Africa", "Myanmar", "Pakistan"],
      paragraphs: [
        "Connecting reliable origins with growing global food markets, Smartlink Systems specializes in the sourcing, trading, and supply of a diversified portfolio of lentils, pulses, beans, and specialty crops from established producers and exporters across Australia, India, Africa, Myanmar, and Pakistan.",
        "We serve importers, wholesalers, food processors, distributors, and institutional buyers, with sourcing tailored to required grades, crop specifications, packaging, shipment size, and destination-market requirements.",
      ],
    },
    {
      heading: "Premium Product Portfolio",
      blocks: [
        { type: "subheading", text: "Lentils" },
        {
          type: "bullets",
          bullets: [
            "Red Lentils — Whole / Split",
            "Green Lentils — Large / Medium / Small",
            "Brown Lentils",
            "Yellow Lentils",
          ],
        },
        { type: "subheading", text: "Chickpeas" },
        {
          type: "bullets",
          bullets: [
            "Kabuli Chickpeas — Various Calibers",
            "Desi Chickpeas",
            "Split Chickpeas / Chana Dal",
          ],
        },
        { type: "subheading", text: "Peas" },
        {
          type: "bullets",
          bullets: [
            "Yellow Peas — Whole / Split",
            "Green Peas — Whole / Split",
            "Field Peas",
          ],
        },
        { type: "subheading", text: "Beans & Specialty Pulses" },
        {
          type: "bullets",
          bullets: [
            "Green Mung Beans",
            "Black Matpe / Urad",
            "Black-Eyed Beans / Cowpeas",
            "Pigeon Peas / Toor",
            "Kidney Beans",
            "White Beans",
          ],
        },
      ],
    },
    {
      heading: "Global Supply Solutions",
      paragraphs: [
        "Depending on origin and commodity, products are available in bulk or bagged shipments, supported by flexible international trade terms including FOB, CFR, and CIF.",
        "Smartlink Systems — Global Origins. Quality Commodities. Reliable Supply.",
      ],
    },
  ],
  cta: {
    text: "Looking for lentils, chickpeas, peas, or specialty pulses? Contact Smartlink Systems for grades, origins, and shipment arrangements.",
    buttonLabel: "Contact Us",
    buttonHref: "/contact",
  },
};
