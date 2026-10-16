import type { ServicePageData } from "../ServicePage";
import { productImages } from "../../products/data/productImages";

export const truckTransportationData: ServicePageData = {
  slug: "truck-transportation",
  category: "Services",
  name: "Land Logistics & Heavy Transportation",
  tagline: "Powering Projects. Moving Materials. Driving Progress.",
  description: "Heavy-Duty Transportation Solutions for Demanding Industries.",
  images: productImages["truck-transportation"],

  sections: [
    {
      heading: "Land Logistics Across Bangladesh",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "Smartlink Systems provides comprehensive land logistics solutions designed to support construction, infrastructure development, industrial operations, and large-scale commercial projects across Bangladesh. We facilitate the transportation of bulk materials, aggregates, sand, stone, cement, steel, heavy equipment, and other project cargo through suitable transport arrangements tailored to our clients' operational requirements.",
            "Our land logistics services encompass dump trucks, tippers, flatbed and other suitable trailers, and heavy-duty transportation solutions to facilitate efficient material movement between ports, quarries, industrial facilities, construction sites, and project locations nationwide.",
          ],
        },
        {
          type: "chips",
          items: [
            { label: "Dump Trucks" },
            { label: "Tippers" },
            { label: "Flatbed Trailers" },
            { label: "Heavy-Duty Transport" },
          ],
        },
      ],
    },
    {
      heading: "Dump Trucks & Tippers",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "Transportation of sand, stone chips, aggregates, soil, and other bulk materials for construction, infrastructure, and industrial applications.",
          ],
        },
        {
          type: "chips",
          items: [
            { label: "Sand" },
            { label: "Stone Chips" },
            { label: "Aggregates" },
            { label: "Soil" },
            { label: "Bulk Materials" },
          ],
        },
      ],
    },
    {
      heading: "Trailers & Heavy Cargo Transportation",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "Transportation solutions for heavy equipment, steel structures, industrial machinery, oversized cargo, and project materials, subject to vehicle capacity and applicable transport requirements.",
          ],
        },
        {
          type: "checklist",
          items: [
            "Heavy equipment movement",
            "Steel structures",
            "Industrial machinery",
            "Oversized / project cargo",
            "Capacity-matched vehicle arrangements",
          ],
        },
      ],
    },
    {
      heading: "Construction & Infrastructure Logistics",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "Supporting contractors, developers, and infrastructure companies with material transportation arrangements that align with project schedules and site requirements.",
            "Facilitating the movement of industrial raw materials, bulk commodities, and commercial cargo between ports, warehouses, factories, and designated delivery points.",
          ],
        },
        {
          type: "chips",
          items: [
            { label: "Contractors" },
            { label: "Developers" },
            { label: "Infrastructure Companies" },
            { label: "Industrial Cargo" },
            { label: "Commercial Cargo" },
          ],
        },
      ],
    },
    {
      heading: "Creating Value for Your Business",
      blocks: [
        {
          type: "features",
          items: [
            {
              title: "Operational Efficiency",
              description:
                "Transportation arrangements designed around cargo requirements, project schedules, and site logistics.",
            },
            {
              title: "Cost Optimization",
              description:
                "Practical transport planning to help clients manage logistics expenditure and improve resource utilization.",
            },
            {
              title: "Flexible Capacity",
              description:
                "Vehicle arrangements suited to different cargo types, volumes, and transportation requirements.",
            },
            {
              title: "Project-Focused Coordination",
              description:
                "Responsive communication and transportation planning to support continuity across demanding project operations.",
            },
            {
              title: "Nationwide Reach",
              description:
                "Connecting key commercial, industrial, and construction destinations throughout Bangladesh.",
            },
          ],
        },
      ],
    },
    {
      heading: "Your Logistics. Our Responsibility.",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "At Smartlink Systems, we recognize that efficient land transportation is essential to project execution and business continuity. Our focus is on providing dependable transportation coordination, practical logistics solutions, and client-oriented service that helps keep materials moving and projects progressing.",
            "From bulk material transportation to heavy-duty project cargo, we aim to be a trusted logistics partner for construction companies, infrastructure developers, industrial enterprises, and commodity traders.",
            "Smartlink Systems — Moving Materials. Supporting Industries. Delivering Progress.",
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
            {
              label: "Inland Transportation & Logistics",
              href: "/inland-water-transport",
            },
            { label: "Land Logistics & Heavy Transportation" },
            {
              label: "Heavy Equipment Rental",
              href: "/heavy-equipment-rental",
            },
          ],
        },
      ],
    },
  ],
};
