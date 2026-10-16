import type { ServicePageData } from "../ServicePage";
import { productImages } from "../../products/data/productImages";

export const inlandWaterTransportData: ServicePageData = {
  slug: "inland-water-transport",
  category: "Services",
  name: "Inland Transportation & Logistics",
  tagline: "Your Cargo. Our Commitment. Your Business Advantage.",
  description:
    "Reliable Transportation. Optimized Logistics. Measurable Business Value.",
  images: productImages["inland-water-transport"],

  sections: [
    {
      heading: "End-to-End Inland Transportation",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "At Smartlink Systems, we understand that transportation is more than moving cargo from one location to another—it is a critical link in your supply chain that directly impacts operational efficiency, cost management, and business performance.",
            "We provide end-to-end inland transportation solutions, connecting Chittagong Port with industrial, commercial, and business destinations across Bangladesh. From bulk commodities and industrial raw materials to construction materials and commercial cargo, we coordinate transportation solutions tailored to your cargo requirements, delivery schedules, and operational priorities.",
          ],
        },
        {
          type: "chips",
          items: [
            { label: "Bulk Commodities" },
            { label: "Industrial Raw Materials" },
            { label: "Construction Materials" },
            { label: "Commercial Cargo" },
          ],
        },
      ],
    },
    {
      heading: "Delivering Value Beyond Transportation",
      blocks: [
        {
          type: "features",
          items: [
            {
              title: "Cost-Effective Logistics",
              description:
                "We work to optimize transportation arrangements and resource utilization, helping clients manage logistics costs while maintaining service reliability.",
            },
            {
              title: "Reliable Cargo Movement",
              description:
                "We prioritize careful coordination, delivery planning, and consistent communication to support dependable cargo transportation and minimize operational disruptions.",
            },
            {
              title: "Nationwide Transportation Reach",
              description:
                "With a focus on cargo movement from Chittagong to destinations throughout Bangladesh, we help businesses connect ports, industrial facilities, warehouses, and distribution points through dependable inland transport solutions.",
            },
            {
              title: "Tailored Transportation Solutions",
              description:
                "Every cargo movement has unique requirements. We align our transportation arrangements with the nature of the cargo, delivery destination, handling requirements, and client-specific operational needs.",
            },
          ],
        },
        {
          type: "subheading",
          text: "A Partner in Supply Chain Efficiency",
        },
        {
          type: "paragraphs",
          paragraphs: [
            "We work alongside our clients to simplify transportation coordination, improve logistics visibility through communication, and support the smooth flow of goods throughout their supply chains.",
          ],
        },
      ],
    },
    {
      heading: "Why Smartlink Systems?",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "We believe that effective logistics is built on trust, accountability, and consistent execution. Our commitment is to deliver transportation solutions that help businesses operate with greater confidence, manage logistics challenges, and maintain continuity across their supply chains.",
            "By combining a client-focused service approach with practical transportation coordination, Smartlink Systems strives to create lasting value for importers, manufacturers, distributors, traders, and industrial enterprises across Bangladesh.",
          ],
        },
        {
          type: "chips",
          items: [
            { label: "Importers" },
            { label: "Manufacturers" },
            { label: "Distributors" },
            { label: "Traders" },
            { label: "Industrial Enterprises" },
          ],
        },
      ],
    },
    {
      heading: "Your Business Moves Forward with Smartlink Systems",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "We move your cargo with purpose, coordinate every journey with care, and work to keep your supply chain moving.",
            "Smartlink Systems — Your Strategic Partner in Inland Transportation.",
          ],
        },
        {
          type: "chips",
          items: [
            { label: "Ocean Freight", href: "/vessel-chartering" },
            {
              label: "Stevedoring & Vessel Discharge",
              href: "/stevedoring",
            },
            { label: "Port & Jetty Material Handling", href: "/port-handling" },
            { label: "Inland Transportation & Logistics" },
            {
              label: "Land Logistics & Heavy Transportation",
              href: "/truck-transportation",
            },
          ],
        },
      ],
    },
  ],
};
