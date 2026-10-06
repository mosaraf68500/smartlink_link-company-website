import type { CommodityPageData } from "../CommodityPage";
import { productImages } from "./productImages";

export const coalData: CommodityPageData = {
  slug: "coal",
  category: "Products",
  name: "Global Coal Sourcing, Trading & Supply",
  images: productImages.coal,
  sections: [
    {
      paragraphs: [
        "Powering industries through global resources and dependable supply chains, Smartlink Systems connects Bangladesh's energy and industrial sectors with established international coal markets. As an experienced coal sourcing partner, trader and supplier in Bangladesh, we provide integrated procurement and supply solutions tailored to the requirements of large-scale industrial consumers.",
      ],
    },
    {
      heading: "Sourcing & Specifications",
      countries: ["Indonesia", "South Africa", "Australia"],
      paragraphs: [
        "Our international sourcing network extends across major coal-producing origins, including Indonesia, South Africa and Australia, enabling us to offer a diverse range of Thermal Coal, Steam Coal and Industrial Coal with specifications aligned to customers' operational requirements. Key quality parameters can include Gross Calorific Value (GCV/GAR), Total Moisture, Inherent Moisture, Ash Content, Total Sulphur, Volatile Matter and Fixed Carbon, subject to origin and contractual specifications.",
      ],
      specs: [
        { label: "Gross Calorific Value (GCV/GAR)" },
        { label: "Total Moisture" },
        { label: "Inherent Moisture" },
        { label: "Ash Content" },
        { label: "Total Sulphur" },
        { label: "Volatile Matter" },
        { label: "Fixed Carbon" },
      ],
    },
    {
      heading: "Serving Bangladesh's Core Industries",
      paragraphs: [
        "Smartlink Systems supplies and facilitates coal procurement for power generation, steel and re-rolling industries, brick manufacturing, cement and building-material industries, industrial boilers, manufacturing facilities and other energy-intensive operations throughout Bangladesh.",
        "Our capabilities extend beyond conventional trading. We coordinate the complete supply chain—from international sourcing, supplier selection and commercial negotiation to bulk vessel chartering, ocean freight, import coordination, cargo handling, inland waterway and road transportation, and final delivery to customers.",
      ],
      bullets: [
        "power generation",
        "steel and re-rolling industries",
        "brick manufacturing",
        "cement and building-material industries",
        "industrial boilers",
        "manufacturing facilities",
        "other energy-intensive operations",
      ],
    },
    {
      heading: "Your Strategic Coal Sourcing Partner",
      paragraphs: [
        "Backed by our experience in international commodity trading, bulk cargo logistics and industrial raw-material distribution, we focus on delivering the fundamentals that matter most: reliable sourcing, consistent specifications, competitive commercial terms, efficient logistics and dependable supply continuity.",
        "Whether the requirement involves a single bulk shipment or a long-term supply arrangement, Smartlink Systems strives to be the strategic link between global coal resources and Bangladesh's industrial demand.",
      ],
    },
  ],
  cta: {
    text: "Smartlink Systems — Global Resources. Strategic Sourcing. Reliable Supply. Contact us for coal sourcing, specifications, and bulk supply arrangements.",
    buttonLabel: "Contact Us",
    buttonHref: "/contact",
  },
};
