import type { CommodityPageData } from "../CommodityPage";
import { productImages } from "./productImages";

/**
 * Exact client order:
 * H1 = "Connecting Global Clinker Supply with Growing Markets"
 * 1. Opening intro + origins
 * 2. Typical Clinker Specification + value props + note
 */
export const clinkerData: CommodityPageData = {
  slug: "clinker",
  category: "Products",
  name: "Connecting Global Clinker Supply with Growing Markets",
  images: productImages.clinker,
  sections: [
    {
      countries: [
        "Thailand",
        "Vietnam",
        "China",
        "UAE",
        "Oman",
        "Egypt",
        "Pakistan",
        "Indonesia",
      ],
      paragraphs: [
        "Smartlink Systems is an international supplier, exporter, and trader of Cement Clinker, connecting established producers with cement manufacturers and bulk buyers across global markets.",
        "Through our diversified sourcing network, we facilitate clinker supply from key origins including Thailand, Vietnam, China, UAE, Oman, Egypt, Pakistan, and Indonesia. Our focus is on competitive procurement, consistent quality, efficient vessel arrangements, and dependable end-to-end logistics for bulk shipments.",
      ],
    },
    {
      heading: "Typical Clinker Specification",
      specs: [
        { label: "C₃S", value: "50–65%" },
        { label: "C₂S", value: "10–25%" },
        { label: "C₃A", value: "5–12%" },
        { label: "MgO", value: "≤5.0%" },
        { label: "SO₃", value: "≤2.5%" },
        { label: "LOI", value: "≤1.5%" },
      ],
      bullets: [
        "Multi-Origin Sourcing",
        "Bulk Vessel Supply",
        "Competitive Commercial Terms",
        "Reliable Global Logistics",
      ],
      note: "Product specifications and commercial terms can be structured according to buyer requirements, destination, and selected origin.",
    },
  ],
  cta: {
    text: "Product specifications and commercial terms can be structured according to buyer requirements, destination, and selected origin.",
    buttonLabel: "Contact Us",
    buttonHref: "/contact",
  },
};
