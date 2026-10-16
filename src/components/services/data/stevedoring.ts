import type { ServicePageData } from "../ServicePage";
import { productImages } from "../../products/data/productImages";

export const stevedoringData: ServicePageData = {
  slug: "stevedoring",
  category: "Services",
  name: "Stevedoring & Vessel Discharge Services",
  tagline: "Faster Discharge. Efficient Cargo Transfer. Optimized Vessel Turnaround.",
  description:
    "Your Strategic Partner for High-Speed Stevedoring Operations in Bangladesh.",
  images: productImages.stevedoring,

  sections: [
    {
      heading: "High-Speed Stevedoring Across Bangladesh",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "At Smartlink Systems, we specialize in efficient stevedoring and bulk cargo discharge operations, facilitating the transfer of cargo from mother vessels to lighter vessels with a strong focus on speed, safety, and operational efficiency.",
            "In the demanding world of maritime logistics, every hour matters. Our operational approach prioritizes rapid cargo handling, coordinated vessel operations, and efficient discharge planning to help minimize vessel turnaround time and reduce avoidable operational delays.",
            "From bulk commodities and industrial raw materials to construction materials and other suitable cargo, we aim to deliver responsive stevedoring solutions tailored to vessel schedules, cargo characteristics, and client requirements.",
          ],
        },
        {
          type: "chips",
          items: [
            { label: "Mother-to-Lighter Transfer" },
            { label: "Bulk Cargo Discharge" },
            { label: "Vessel Turnaround" },
            { label: "Stevedoring Coordination" },
          ],
        },
      ],
    },
    {
      heading: "Our Core Stevedoring Capabilities",
      blocks: [
        {
          type: "features",
          items: [
            {
              title: "Mother Vessel-to-Lighter Vessel Cargo Transfer",
              description:
                "Efficient coordination of cargo discharge from mother vessels into lighter vessels to facilitate onward transportation through inland waterways.",
            },
            {
              title: "High-Speed Bulk Cargo Discharge",
              description:
                "A performance-driven approach to bulk cargo unloading, with a focus on maximizing operational efficiency and maintaining consistent discharge progress.",
            },
            {
              title: "Vessel Turnaround Optimization",
              description:
                "Coordinated discharge planning and operational execution designed to minimize avoidable delays and support faster vessel turnaround.",
            },
            {
              title: "Operational & Equipment Coordination",
              description:
                "Organized stevedoring operations and appropriate equipment arrangements based on cargo type, vessel requirements, and site conditions.",
            },
            {
              title: "Integrated Cargo Logistics",
              description:
                "Coordination with lighter vessel operators, jetty facilities, and inland transportation providers to support seamless cargo movement throughout the logistics chain.",
            },
          ],
        },
      ],
    },
    {
      heading: "Why Smartlink Systems?",
      blocks: [
        {
          type: "features",
          items: [
            {
              title: "Speed-Driven Operations",
              description:
                "We prioritize efficient cargo discharge and timely operational execution.",
            },
            {
              title: "Reduced Turnaround Time",
              description:
                "Our focus is on minimizing avoidable delays and improving vessel productivity.",
            },
            {
              title: "Coordinated Cargo Transfer",
              description:
                "We facilitate smooth cargo movement between mother vessels and lighter vessels.",
            },
            {
              title: "Client-Focused Execution",
              description:
                "Our operational approach is aligned with cargo requirements, vessel schedules, and client priorities.",
            },
            {
              title: "Integrated Logistics Capability",
              description:
                "Our broader inland transportation and jetty operations support a more connected cargo-handling solution.",
            },
          ],
        },
      ],
    },
    {
      heading: "Setting a Higher Standard in Stevedoring",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "At Smartlink Systems, we understand that stevedoring performance directly influences vessel productivity, shipping costs, and the efficiency of the entire supply chain.",
            "Our commitment is to deliver responsive, efficient, and professionally coordinated cargo discharge services that help shipowners, charterers, vessel operators, importers, and commodity traders move cargo with greater confidence.",
            "Smartlink Systems — Faster Discharge. Smarter Operations. Stronger Logistics Performance.",
          ],
        },
        {
          type: "chips",
          items: [
            { label: "Ocean Freight", href: "/vessel-chartering" },
            { label: "Stevedoring & Vessel Discharge" },
            {
              label: "Port & Jetty Material Handling",
              href: "/port-handling",
            },
            {
              label: "Inland Transportation & Logistics",
              href: "/inland-water-transport",
            },
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
