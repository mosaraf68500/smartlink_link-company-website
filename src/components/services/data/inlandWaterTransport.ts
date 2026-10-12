import type { ServicePageData } from "../ServicePage";
import { productImages } from "../../products/data/productImages";

export const inlandWaterTransportData: ServicePageData = {
  slug: "inland-water-transport",
  category: "Services",
  name: "Inland Water Transport",
  tagline: "River-Based Cargo Movement Across Bangladesh",
  images: productImages["inland-water-transport"],

  sections: [
    {
      heading: "Bangladesh Inland Waterways",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "Smartlink Systems provides Inland Water Transport services for river-based cargo movement across Bangladesh. We use the country’s inland waterways to move bulk and commercial cargo efficiently between key river ports, jetties, and industrial destinations — supporting businesses and commercial supply chains that depend on reliable domestic logistics.",
            "Our focus is practical: connect coastal and river gateways with inland markets through coordinated barge and lighterage movements, so cargo continues smoothly after ocean discharge or before final truck delivery.",
          ],
        },
        {
          type: "chips",
          items: [
            { label: "River Cargo Transport" },
            { label: "Lighterage / Barge" },
            { label: "Jetty Delivery" },
            { label: "Domestic Supply Chain" },
          ],
        },
      ],
    },
    {
      heading: "Key Destinations We Connect",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "We arrange inland water transport linking major commercial destinations across Bangladesh. Subject to draft, cargo type, barge availability, and seasonal river conditions, our coverage includes routes serving:",
          ],
        },
        {
          type: "chips",
          variant: "region",
          items: [
            { label: "Chattogram" },
            { label: "Dhaka" },
            { label: "Meghna" },
            { label: "Noapara" },
            { label: "Khulna" },
            { label: "Bhairab" },
            { label: "Ashuganj" },
          ],
        },
        {
          type: "paragraphs",
          paragraphs: [
            "These river corridors are central to moving construction materials, agricultural commodities, energy cargoes, and industrial goods between coastal discharge points and inland factories, warehouses, RMC plants, and project sites.",
          ],
        },
      ],
    },
    {
      heading: "Cargo We Move by River",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "Inland Water Transport supports the same commodity families Smartlink Systems sources and ships internationally — keeping the domestic leg of the supply chain aligned with ocean freight and port handling.",
          ],
        },
        {
          type: "chips",
          items: [
            { label: "Clinker", href: "/clinker" },
            { label: "Limestone", href: "/limestone" },
            { label: "Gabbro / Aggregates", href: "/gabbro-aggregate" },
            { label: "Coal", href: "/coal" },
            { label: "Wheat & Grains", href: "/wheat-supplier-importer-bangladesh" },
            { label: "Feed Ingredients", href: "/wheat-bran" },
            { label: "Other dry bulk" },
          ],
        },
      ],
    },
    {
      heading: "How Inland Water Transport Fits Your Supply Chain",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "For many Bangladesh-bound cargoes, the journey does not end at the ocean berth. Inland waterways often provide a cost-effective and practical path to move volume cargo closer to the buyer’s plant or project — especially where road congestion, axle limits, or delivery distance make trucking alone less efficient.",
            "Smartlink Systems can coordinate Inland Water Transport as a standalone domestic movement or as part of an end-to-end chain:",
          ],
        },
        {
          type: "checklist",
          items: [
            "Ocean freight arrival and discharge planning",
            "Port handling / ship-to-shore coordination",
            "Lighterage and barge loading",
            "River voyage to destination jetty",
            "Jetty discharge and receiving",
            "Truck handover for final delivery",
          ],
        },
        {
          type: "chips",
          items: [
            { label: "Ocean Freight", href: "/vessel-chartering" },
            { label: "Port Handling", href: "/port-handling" },
            { label: "Inland Water Transport" },
            { label: "Truck Transportation", href: "/truck-transportation" },
          ],
        },
      ],
    },
    {
      heading: "Operational Coordination",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "Every inland water movement depends on matching cargo, barge capacity, river draft, jetty readiness, and receiving arrangements. We work to keep these factors aligned so that domestic river logistics remain commercially disciplined and operationally clear.",
          ],
        },
        {
          type: "checklist",
          items: [
            "Cargo quantity and packaging / bulk form",
            "Origin jetty / load point readiness",
            "Destination jetty and draft conditions",
            "Barge / lighter suitability and availability",
            "Voyage window and river conditions",
            "Loading and discharge productivity",
            "Quantity control and documentation",
            "Handover to trucking or warehouse",
          ],
        },
      ],
    },
    {
      heading: "Our Approach",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "Smartlink Systems treats Inland Water Transport as a core Bangladesh logistics capability — not an afterthought. By connecting Chattogram, Dhaka, Meghna, Noapara, Khulna, Bhairab, Ashuganj, and other river destinations with our chartering and port-handling services, we help keep cargo moving from international origin through to local delivery.",
            "Whether you need a single barge movement or recurring river supply into industrial destinations, our focus remains efficient waterway utilisation, clear coordination, and dependable cargo arrival where your business needs it.",
          ],
        },
      ],
    },
  ],
};
