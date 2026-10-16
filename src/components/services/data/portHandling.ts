import type { ServicePageData } from "../ServicePage";
import { productImages } from "../../products/data/productImages";

export const portHandlingData: ServicePageData = {
  slug: "port-handling",
  category: "Services",
  name: "Port & Jetty Material Handling",
  tagline: "Strategic Access. Efficient Handling. Seamless Cargo Movement.",
  description: "Integrated Jetty Operations & Bulk Cargo Logistics in Bangladesh.",
  images: productImages["port-handling"],

  sections: [
    {
      heading: "BIWTA-Licensed Jetty Operations in Rupganj",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "Smartlink Systems provides port and jetty material handling solutions through its BIWTA-licensed jetty facility in Rupganj, Bangladesh. Strategically positioned to support inland waterway transportation and regional industrial connectivity, our facility offers a practical logistics point for cargo handling, material transfer, and the distribution of bulk commodities to industrial and commercial destinations.",
            "We support the movement of construction materials, aggregates, sand, stone chips, clinker, cement-related materials, and other suitable bulk commodities through coordinated jetty operations and inland transportation arrangements. By connecting waterborne cargo movement with road logistics, we aim to simplify material handling, improve supply chain coordination, and support the operational requirements of our clients.",
          ],
        },
        {
          type: "chips",
          items: [
            { label: "BIWTA-Licensed Jetty" },
            { label: "Rupganj" },
            { label: "Bulk Commodities" },
            { label: "Construction Materials" },
            { label: "Aggregates" },
          ],
        },
      ],
    },
    {
      heading: "Our Core Capabilities",
      blocks: [
        {
          type: "features",
          items: [
            {
              title: "Jetty Infrastructure & Cargo Access",
              description:
                "A BIWTA-licensed jetty facility in Rupganj, providing a designated point for eligible cargo-handling and inland waterway logistics operations.",
            },
            {
              title: "Bulk Material Handling",
              description:
                "Facilitating the handling and transfer of suitable bulk commodities, including construction materials, aggregates, and industrial raw materials, subject to cargo characteristics and available handling facilities.",
            },
            {
              title: "Inland Waterway Logistics",
              description:
                "Supporting cargo movement through Bangladesh's inland waterways by coordinating suitable vessel access, cargo transfer, and onward transportation arrangements.",
            },
            {
              title: "Integrated Road Transportation",
              description:
                "Connecting jetty operations with dump trucks, tippers, trailers, and other suitable transport options to facilitate cargo delivery to construction sites, industrial facilities, warehouses, and commercial destinations.",
            },
            {
              title: "Supply Chain Coordination",
              description:
                "Helping clients coordinate cargo discharge, material transfer, storage arrangements where available, and onward distribution to support smoother logistics operations.",
            },
          ],
        },
      ],
    },
    {
      heading: "Creating Value for Our Clients",
      blocks: [
        {
          type: "features",
          items: [
            {
              title: "Strategic Location",
              description:
                "A Rupganj-based jetty facility serving relevant industrial, commercial, and construction supply chains.",
            },
            {
              title: "Multimodal Connectivity",
              description:
                "Integration of inland waterway cargo movement with road transportation arrangements.",
            },
            {
              title: "Operational Coordination",
              description:
                "A coordinated approach to cargo handling and onward delivery planning.",
            },
            {
              title: "Flexible Logistics Solutions",
              description:
                "Transportation and handling arrangements tailored to cargo type, volume, destination, and project requirements.",
            },
            {
              title: "Business-Focused Service",
              description:
                "Solutions designed to support efficient material flow, improve logistics coordination, and help clients manage transportation complexity.",
            },
          ],
        },
      ],
    },
    {
      heading: "An Integrated Logistics Partner",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "At Smartlink Systems, we understand that effective material handling requires more than a jetty facility. It requires coordination between cargo access, handling operations, transportation, and final delivery.",
            "Our Rupganj jetty strengthens our ability to support customers seeking practical logistics solutions for bulk commodities, construction materials, and industrial cargo. By bringing jetty-based operations and inland transportation together, we aim to provide a more coordinated logistics experience for businesses operating across Bangladesh.",
            "Smartlink Systems — Connecting Waterways, Infrastructure & Industry.",
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
            { label: "Port & Jetty Material Handling" },
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
