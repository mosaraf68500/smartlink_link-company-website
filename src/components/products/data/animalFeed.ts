import type { CommodityPageData } from "../CommodityPage";
import { productImages } from "./productImages";

/**
 * Animal Feed Additives pages still awaiting full client rewrite use ordered
 * `sections`. Rapeseed, Poultry, Soybean Meal, and Corn DDGS live in their
 * own data files.
 */

export const wheatBranData: CommodityPageData = {
  slug: "wheat-bran",
  category: "Products",
  name: "Wheat Bran – Feed Grade",
  images: productImages["wheat-bran"],
  sections: [
    {
      heading: "Overview",
      paragraphs: [
        "Smartlink Systems supplies quality Wheat Bran sourced from major international grain-producing markets. It is widely used as a nutritious and economical ingredient in poultry, dairy, cattle, and livestock feed.",
      ],
    },
    {
      heading: "Specification",
      specs: [
        { label: "Protein", value: "14% Min" },
        { label: "Moisture", value: "14% Max" },
        { label: "Fat", value: "4–5%" },
        { label: "Ash", value: "7% Max" },
      ],
    },
    {
      heading: "Reliable Supply",
      paragraphs: [
        "Smartlink Systems supplies Wheat Bran as part of our wider animal feed ingredient sourcing network, serving poultry, dairy, and livestock feed manufacturers across Bangladesh. We focus on consistent quality, competitive pricing, and dependable bulk supply.",
      ],
    },
  ],
  cta: {
    text: "Interested in feed-grade Wheat Bran? Contact Smartlink Systems for pricing, specifications, and bulk supply arrangements.",
    buttonLabel: "Contact Us",
    buttonHref: "/contact",
  },
};
