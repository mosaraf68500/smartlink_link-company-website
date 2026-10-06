import type { CommodityPageData } from "../CommodityPage";
import { productImages } from "./productImages";

/**
 * Exact client section order:
 * 1. Opening intro (no heading)
 * 2. Typical Wheat Specifications (+ closing tagline)
 *
 * URL slug kept as `/wheat-supplier-importer-bangladesh` (client SEO brief).
 */
export const wheatData: CommodityPageData = {
  slug: "wheat-supplier-importer-bangladesh",
  category: "Products",
  name: "Wheat Trading & Supply",
  images: productImages["wheat-supplier-importer-bangladesh"],
  sections: [
    {
      countries: [
        "Brazil",
        "Argentina",
        "USA",
        "Canada",
        "Bulgaria",
        "Romania",
        "Ukraine",
        "Russia",
        "India",
      ],
      paragraphs: [
        "With access to some of the world's leading wheat-producing regions, Smartlink Systems provides reliable international sourcing and trading solutions for milling and feed-grade wheat. Our supply network covers key origins including Brazil, Argentina, USA, Canada, Bulgaria, Romania, Ukraine, Russia, and India, enabling us to respond to diverse quality, volume, and commercial requirements.",
        "We serve flour mills, feed manufacturers, industrial buyers, commodity traders, and bulk importers, focusing on dependable sourcing, competitive commercial terms, consistent quality, and efficient shipment coordination.",
      ],
    },
    {
      heading: "Typical Wheat Specifications",
      paragraphs: [
        "Final specifications are subject to origin, crop, and contractual requirements.",
      ],
      specs: [
        { label: "Protein", value: "10.5%–14.0%" },
        { label: "Moisture", value: "Max. 12.5%–14.0%" },
        { label: "Test Weight", value: "76–80 kg/HL" },
        { label: "Foreign Matter", value: "Max. 1.0%–2.0%" },
        { label: "Wet Gluten", value: "As per buyer requirement" },
        { label: "Falling Number", value: "As per contractual specification" },
        { label: "Crop", value: "Current / Latest Crop" },
        { label: "Shipment", value: "Bulk Vessel or Containerized" },
        { label: "Trade Terms", value: "FOB / CFR / CIF" },
      ],
      note: "Smartlink Systems — Global Origins. Reliable Sourcing. Efficient Supply.",
    },
  ],
  cta: {
    text: "Looking for milling or feed-grade wheat? Contact Smartlink Systems for origins, specifications, and bulk or containerized shipment arrangements.",
    buttonLabel: "Contact Us",
    buttonHref: "/contact",
  },
};
