import type { CommodityPageData } from "../CommodityPage";
import { productImages } from "./productImages";

export const wheatBranData: CommodityPageData = {
  slug: "wheat-bran",
  category: "Products",
  name: "Wheat Bran – Global Sourcing & Trading",
  images: productImages["wheat-bran"],
  sections: [
    {
      countries: [
        "Tanzania",
        "Angola",
        "Uganda",
        "Mozambique",
        "Nigeria",
        "Kenya",
        "India",
      ],
      paragraphs: [
        "With an established sourcing network across major wheat-processing markets, Smartlink Systems specializes in the international sourcing, trading, and supply of quality Wheat Bran for Animal Feed. We source from Tanzania, Angola, Uganda, Mozambique, Nigeria, Kenya, and India, connecting reliable producers with feed mills, importers, distributors, and large-volume buyers.",
        "Our wheat bran portfolio includes products from established brands and suppliers such as Agrico, Azam, MeTL, 21st Century, Atakum, Rose Bien, Azania, and Super, subject to origin, season, and availability.",
      ],
    },
    {
      heading: "Premium Wheat Bran Portfolio",
      bullets: [
        "Feed-Grade Wheat Bran",
        "Premium Wheat Bran",
        "Pellet-Grade / Feed-Mill Wheat Bran",
        "Fine & Coarse Wheat Bran",
        "Current Production / Fresh Stock",
        "Bulk & Bagged Supply",
        "Private-Label / Customized Packing — subject to availability",
      ],
    },
    {
      heading: "Typical Quality Parameters",
      specs: [
        { label: "Crude Protein", value: "13%–17%" },
        { label: "Moisture", value: "Max. 12%–14%" },
        { label: "Crude Fiber", value: "As per contractual specification" },
        { label: "Crude Fat", value: "As per origin & grade" },
        { label: "Ash", value: "As per contractual specification" },
        { label: "Foreign Matter", value: "Within agreed tolerance" },
        {
          label: "Packing",
          value: "40 KG / 45 KG / 50 KG PP Bags or as agreed",
        },
        {
          label: "Inspection",
          value: "SGS / Intertek / Bureau Veritas or as mutually agreed",
        },
      ],
    },
    {
      heading: "Brands & Origins",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "Brands: Agrico • Azam • MeTL • 21st Century • Atakum • Rose Bien • Azania • Super",
            "Sourcing Origins: Tanzania • Angola • Uganda • Mozambique • Nigeria • Kenya • India",
            "Smartlink Systems facilitates containerized and bulk-volume supply under international trade terms including FOB, CFR, and CIF, with a focus on competitive sourcing, consistent quality, reliable documentation, and efficient shipment coordination.",
            "Working with established brands and origins, we help feed mills, importers, distributors, and large-volume buyers arrange Wheat Bran according to grade, packing preference, inspection requirements, and delivery schedule — supporting dependable animal-feed ingredient supply from source to destination.",
          ],
        },
      ],
    },
  ],
  cta: {
    text: "Smartlink Systems — Trusted Feed Ingredients. Reliable Origins. Global Supply.",
    buttonLabel: "Contact Us",
    buttonHref: "/contact",
  },
};
