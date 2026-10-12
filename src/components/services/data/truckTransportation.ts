import type { ServicePageData } from "../ServicePage";
import { productImages } from "../../products/data/productImages";

export const truckTransportationData: ServicePageData = {
  slug: "truck-transportation",
  category: "Services",
  name: "Truck Transportation Service",
  tagline:
    "Reliable road logistics connecting ports, jetties, and inland destinations across Bangladesh.",
  images: productImages["truck-transportation"],

  sections: [
    {
      heading: "Road Truck Logistics Across Bangladesh",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "Smartlink Systems provides Truck Transportation Service for domestic road delivery of bulk and commercial cargo across Bangladesh. After ocean freight, port handling, or inland water movement, trucking is often the final and most critical link to the buyer’s plant, warehouse, RMC site, or project yard.",
            "We arrange suitable road transport according to cargo type, packing, volume, route, and delivery window — with a clear focus on dependable movement from jetty, yard, or warehouse to final destination.",
          ],
        },
        {
          type: "chips",
          items: [
            { label: "Drum Truck" },
            { label: "Trailer Truck" },
            { label: "Road Delivery" },
            { label: "Last-Mile Logistics" },
          ],
        },
      ],
    },
    {
      heading: "Drum Truck Service",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "Our Drum Truck service supports cargo that requires drummed, bagged, or unitised handling for safer road movement and controlled discharge at the receiving point. This option is commonly used where product form, site access, or buyer receiving arrangements favour drum-based transport rather than open bulk trailers.",
            "Smartlink Systems coordinates drum truck allocation with loading point readiness, route practicality, and delivery timing so that cargo arrives in usable condition for industrial and commercial receivers.",
          ],
        },
        {
          type: "checklist",
          items: [
            "Drummed / unitised cargo movement",
            "Controlled loading and securing",
            "Site-access friendly delivery where suitable",
            "Coordination with warehouse / plant receiving",
            "Documentation and delivery follow-up",
          ],
        },
      ],
    },
    {
      heading: "Trailer Truck Service",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "Our Trailer Truck service is used for higher-volume road movements of dry bulk and industrial cargoes. Trailer trucks are arranged according to cargo weight, volume, route restrictions, and the receiving site’s unloading method — supporting efficient transfer from port, jetty, or stockyard to inland destinations.",
            "Whether the cargo comes from vessel discharge, inland water transport, or a local yard, trailer trucking helps complete the domestic supply chain with practical capacity and schedule coordination.",
          ],
        },
        {
          type: "checklist",
          items: [
            "High-volume bulk / industrial road haulage",
            "Trailer matching to cargo and route",
            "Jetty / yard to plant delivery",
            "Turnaround and unloading coordination",
            "Multi-drop or program deliveries where required",
          ],
        },
      ],
    },
    {
      heading: "Cargo We Move by Road",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "Truck Transportation Service supports the commodity portfolio Smartlink Systems sources and ships — keeping road delivery aligned with international freight and Bangladesh inland logistics.",
          ],
        },
        {
          type: "chips",
          items: [
            { label: "Clinker", href: "/clinker" },
            { label: "Limestone", href: "/limestone" },
            { label: "Gabbro / Aggregates", href: "/gabbro-aggregate" },
            { label: "Coal", href: "/coal" },
            { label: "Grains & Pulses", href: "/lentils-pulses" },
            { label: "Feed Ingredients", href: "/wheat-bran" },
            { label: "Other commercial cargo" },
          ],
        },
      ],
    },
    {
      heading: "Part of an End-to-End Supply Chain",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "Road trucking rarely stands alone. Smartlink Systems can arrange Truck Transportation Service as a standalone domestic movement or as the final stage of a complete logistics chain — from ocean freight and port handling through inland waterways to plant-gate delivery.",
          ],
        },
        {
          type: "chips",
          items: [
            { label: "Ocean Freight", href: "/vessel-chartering" },
            { label: "Port Handling", href: "/port-handling" },
            { label: "Inland Water Transport", href: "/inland-water-transport" },
            { label: "Truck Transportation" },
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
            "At Smartlink Systems, Truck Transportation Service is treated as a practical extension of commodity supply — matching the right vehicle type to the cargo and destination. Drum trucks and trailer trucks are arranged with attention to loading conditions, route feasibility, receiving capacity, and delivery reliability.",
            "Whether you need a single plant delivery or recurring road movements across Bangladesh, our focus remains clear coordination, suitable equipment, and dependable arrival at the destination that matters to your business.",
          ],
        },
      ],
    },
  ],
};
