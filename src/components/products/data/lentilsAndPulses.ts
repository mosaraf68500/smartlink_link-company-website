import type { CommodityPageData } from "../CommodityPage";
import { productImages } from "./productImages";

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
        "From grade selection and packaging requirements to shipment size and destination-market planning, Smartlink Systems coordinates competitive sourcing, consistent quality, reliable export documentation, and timely delivery — helping importers, wholesalers, food processors, distributors, and institutional buyers secure lentils, pulses, beans, and specialty crops with confidence.",
      ],
    },
  ],
  cta: {
    text: "Smartlink Systems — Global Origins. Quality Commodities. Reliable Supply.",
    buttonLabel: "Contact Us",
    buttonHref: "/contact",
  },
};
