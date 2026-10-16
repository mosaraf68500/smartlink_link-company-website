import type { ServicePageData } from "../ServicePage";
import { productImages } from "../../products/data/productImages";

export const vesselCharteringData: ServicePageData = {
  slug: "vessel-chartering",
  category: "Services",
  name: "International Bulk Chartering & Maritime Logistics",
  tagline: "Connecting Cargo, Vessels & Global Markets",
  images: productImages["vessel-chartering"],

  sections: [
    {
      heading: "Dry Bulk Chartering",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "We arrange suitable vessels according to cargo type, quantity, loading and discharge ports, draft restrictions, laycan, loading/discharging rates, and other operational requirements.",
            "Our chartering coverage includes:",
          ],
        },
        {
          type: "chips",
          items: [
            { label: "Handysize" },
            { label: "Handymax" },
            { label: "Supramax / Ultramax" },
            { label: "Panamax / Kamsarmax" },
            { label: "Larger bulk carriers (subject to cargo & route)" },
          ],
        },
        {
          type: "paragraphs",
          paragraphs: [
            "Chartering can be arranged on Voyage Charter, Time Charter, COA (Contract of Affreightment), or other mutually agreed structures.",
          ],
        },
        {
          type: "chips",
          items: [
            { label: "Voyage Charter" },
            { label: "Time Charter" },
            { label: "COA (Contract of Affreightment)" },
          ],
        },
      ],
    },
    {
      heading: "Commodities We Handle",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "Our bulk chartering solutions are suitable for a broad range of dry bulk cargoes, including:",
            "Agricultural Commodities",
          ],
        },
        {
          type: "chips",
          items: [
            { label: "Wheat", href: "/wheat-supplier-importer-bangladesh" },
            { label: "Corn / Maize", href: "/corn-maize" },
            { label: "Soybeans", href: "/soyabean-seeds" },
            { label: "Pulses & other grains", href: "/lentils-pulses" },
            { label: "Animal Feed Ingredients", href: "/wheat-bran" },
          ],
        },
        {
          type: "paragraphs",
          paragraphs: ["Construction & Industrial Materials"],
        },
        {
          type: "chips",
          items: [
            { label: "Limestone", href: "/limestone" },
            { label: "Gabbro / Aggregates", href: "/gabbro-aggregate" },
            { label: "Clinker", href: "/clinker" },
            { label: "Gypsum" },
            { label: "Slag" },
            { label: "Silica Sand" },
          ],
        },
        {
          type: "paragraphs",
          paragraphs: ["Energy & Raw Materials"],
        },
        {
          type: "chips",
          items: [
            { label: "Coal", href: "/coal" },
            { label: "Petcoke" },
            { label: "Minerals and other dry bulk commodities" },
          ],
        },
      ],
    },
    {
      heading: "Chartering & Freight Solutions",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "Smartlink Systems assists clients throughout the chartering process, including:",
          ],
        },
        {
          type: "checklist",
          items: [
            "Vessel sourcing and tonnage identification",
            "Freight indications and market enquiries",
            "Cargo and vessel matching",
            "Laycan coordination",
            "Charter-party negotiation support",
            "Loading and discharge rate coordination",
            "Demurrage and despatch term coordination",
            "Port and draft requirement review",
            "Voyage and shipment follow-up",
            "Documentation coordination",
            "Shipowner, charterer and agent communication",
            "Discharge and inland logistics planning",
          ],
        },
      ],
    },
    {
      heading: "International Trade Routes",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "Through our international business network, we support bulk cargo movements across major trading regions, including Asia, Middle East, Africa, Black Sea, Europe, North America, and South America, subject to vessel availability, sanctions/compliance requirements, port restrictions, and prevailing market conditions.",
            "We can support both single-voyage requirements and regular shipment programs, including long-term cargo movements where COA or dedicated freight arrangements are commercially suitable.",
          ],
        },
        {
          type: "chips",
          variant: "region",
          items: [
            { label: "Asia" },
            { label: "Middle East" },
            { label: "Africa" },
            { label: "Black Sea" },
            { label: "Europe" },
            { label: "North America" },
            { label: "South America" },
          ],
        },
      ],
    },
    {
      heading: "Commodity-to-Destination Logistics",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "Our capabilities extend beyond ocean freight. Where required, Smartlink Systems can coordinate the cargo movement from load port to discharge port and onward to the buyer’s project, warehouse, factory, or processing facility.",
            "Depending on the location and cargo, logistics coordination may include:",
          ],
        },
        {
          type: "checklist",
          items: [
            "Ocean Freight",
            "Stevedoring & Vessel Discharge",
            "Port & Jetty Material Handling",
            "Inland Transportation & Logistics",
            "Land Logistics & Heavy Transportation",
            "Final Delivery",
          ],
        },
        {
          type: "paragraphs",
          paragraphs: [
            "This integrated approach is particularly valuable for bulk commodities where freight, discharge productivity, port conditions, storage, and inland transportation can materially affect the final landed cost.",
          ],
        },
      ],
    },
    {
      heading: "Commercial & Operational Focus",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "Every chartering requirement is evaluated based on key commercial and operational factors such as:",
          ],
        },
        {
          type: "checklist",
          items: [
            "Cargo quantity and specification",
            "Load and discharge ports",
            "Laycan / shipment window",
            "Vessel size and suitability",
            "Port draft and dimensional restrictions",
            "Loading and discharging productivity",
            "Freight basis",
            "Demurrage / Despatch",
            "Weather and congestion exposure",
            "Bunker and voyage considerations",
            "Cargo handling requirements",
            "Applicable maritime and trade compliance",
          ],
        },
        {
          type: "paragraphs",
          paragraphs: [
            "Our objective is to develop a commercially efficient shipping solution while maintaining clear coordination among cargo interests, shipowners, operators, port agents, surveyors, stevedores, and inland logistics partners.",
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
            "At Smartlink Systems, bulk chartering is treated as an integral part of the commodity supply chain—not simply as vessel booking. By combining commodity trading knowledge, freight coordination, port operations, and inland logistics experience, we work to provide practical shipping solutions from origin to final destination.",
            "Whether the requirement involves a single bulk shipment, recurring monthly cargoes, or a long-term commodity supply program, our focus remains on competitive freight, suitable tonnage, operational efficiency, transparent communication, and dependable execution.",
          ],
        },
      ],
    },
  ],
};
