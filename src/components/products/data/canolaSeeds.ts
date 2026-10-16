import type { CommodityPageData } from "../CommodityPage";
import { productImages } from "./productImages";

export const canolaSeedsData: CommodityPageData = {
  slug: "canola-seeds",
  category: "Products",
  name: "Canola Seeds – Global Sourcing & Trading",
  images: productImages["canola-seeds"],
  sections: [
    {
      countries: ["Australia", "Pakistan", "India", "Africa"],
      paragraphs: [
        "Leveraging a diversified international oilseed sourcing network, Smartlink Systems specializes in the sourcing, trading, and supply of quality Canola Seeds from selected origins across Australia, Pakistan, India, and Africa.",
        "We connect established producers and exporters with oilseed crushers, edible oil processors, feed manufacturers, commodity importers, and industrial buyers, providing supply solutions tailored to required origin, quality parameters, shipment volume, and commercial terms.",
      ],
    },
    {
      heading: "Product & Quality Profile",
      blocks: [
        { type: "subheading", text: "Canola / Rapeseed" },
        {
          type: "bullets",
          bullets: [
            "Canola Seeds – Crushing Grade",
            "Rapeseed – Industrial / Crushing Grade",
            "GMO / Non-GMO – Subject to origin and certification",
            "Current / Latest Crop – Subject to seasonal availability",
          ],
        },
        {
          type: "specs",
          label: "Typical Quality Parameters",
          specs: [
            {
              label: "Oil Content",
              value: "As per origin & contractual specification",
            },
            { label: "Moisture", value: "Within agreed tolerance" },
            { label: "Foreign Matter", value: "As per contract" },
            { label: "Impurities", value: "Within agreed specification" },
            { label: "Damaged Seeds", value: "As per contractual tolerance" },
            { label: "Erucic Acid", value: "As per grade and specification" },
            {
              label: "Glucosinolate",
              value: "As per grade and buyer requirement",
            },
          ],
        },
      ],
    },
    {
      heading: "Global Supply Solutions",
      paragraphs: [
        "Smartlink Systems facilitates bulk and containerized shipments with flexible commercial terms including FOB, CFR, and CIF, subject to origin, volume, and destination.",
        "Our supply coordination covers competitive sourcing, consistent quality parameters, reliable export documentation, and efficient shipment planning — helping oilseed crushers, edible oil processors, feed manufacturers, and industrial buyers receive Canola Seeds according to their required specification and delivery schedule.",
      ],
    },
  ],
  cta: {
    text: "Smartlink Systems — Reliable Oilseed Sourcing. Global Reach. Consistent Supply.",
    buttonLabel: "Contact Us",
    buttonHref: "/contact",
  },
};
