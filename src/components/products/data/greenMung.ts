import type { CommodityPageData } from "../CommodityPage";
import { productImages } from "./productImages";

/**
 * Exact client section order:
 * 1. Opening intro (no heading)
 * 2. Premium Product Portfolio
 * 3. Typical Quality Parameters
 * 4. Global Supply Solutions
 */
export const greenMungData: CommodityPageData = {
  slug: "green-mung",
  category: "Products",
  name: "Green Mung Beans – Global Sourcing & Trading",
  images: productImages["green-mung"],
  sections: [
    {
      countries: ["Tanzania", "India", "Nigeria", "Mozambique"],
      paragraphs: [
        "Connecting quality pulse-producing regions with international food markets, Smartlink Systems specializes in the sourcing, trading, and supply of Green Mung Beans (Green Gram) from established origins including Tanzania, India, Nigeria, and Mozambique.",
        "Through our international sourcing network, we serve importers, food processors, wholesalers, distributors, and bulk commodity buyers, offering supply programs tailored to required grade, size, purity, crop, packaging, and destination.",
      ],
    },
    {
      heading: "Premium Product Portfolio",
      paragraphs: ["Green Mung Beans / Green Gram"],
      bullets: [
        "Machine-Cleaned Green Mung Beans",
        "Sortex-Cleaned Green Mung Beans",
        "Premium Food-Grade Mung Beans",
        "Processing-Grade Mung Beans",
        "Whole Green Mung Beans",
        "Current / Latest Crop",
      ],
    },
    {
      heading: "Typical Quality Parameters",
      specs: [
        { label: "Purity", value: "Up to 99%+ subject to grade" },
        { label: "Moisture", value: "As per contractual specification" },
        { label: "Foreign Matter", value: "Within agreed tolerance" },
        { label: "Damaged / Discolored Beans", value: "As per contract" },
        { label: "Bean Size", value: "Customized to buyer requirements" },
        { label: "Quality & Inspection", value: "As mutually agreed" },
        { label: "Packing", value: "PP/Jute Bags or as required" },
      ],
    },
    {
      heading: "Global Supply Solutions",
      paragraphs: [
        "Smartlink Systems facilitates containerized and bulk commercial shipments, subject to origin and volume, with international trade terms including FOB, CFR, and CIF.",
        "Smartlink Systems — Quality Pulses. Trusted Origins. Reliable Global Supply.",
      ],
    },
  ],
  cta: {
    text: "Looking for Green Mung Beans for food processing or wholesale supply? Contact Smartlink Systems for grades, specifications, and shipment arrangements.",
    buttonLabel: "Contact Us",
    buttonHref: "/contact",
  },
};
