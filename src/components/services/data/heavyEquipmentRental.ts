import type { ServicePageData } from "../ServicePage";

export const heavyEquipmentRentalData: ServicePageData = {
  slug: "heavy-equipment-rental",
  category: "Services",
  name: "Heavy Equipment Rental Solutions",
  tagline: "The Right Equipment. Greater Productivity. Smarter Project Economics.",
  // Images from public/images/heavy-equipment-rental/
  images: [
    "/images/heavy-equipment-rental/he-rental-1.jpg",
    "/images/heavy-equipment-rental/he-rental-2.jpg",
    "/images/heavy-equipment-rental/he-rental-3.jpg",
    "/images/heavy-equipment-rental/he-rental-4.jpg",
  ],

  sections: [
    {
      heading: "Heavy Equipment for Demanding Projects",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "At Smartlink Systems, we deliver comprehensive heavy equipment rental solutions designed to support construction, infrastructure development, industrial operations, road construction, and large-scale material handling projects across Bangladesh.",
            "We understand that equipment availability, project timelines, and operational costs directly influence project performance. Our rental solutions help clients access the machinery they need while reducing the capital commitment associated with equipment ownership.",
            "From earthmoving and excavation to heavy lifting, road construction, demolition, and specialized material handling, Smartlink Systems is committed to delivering practical equipment solutions tailored to the demands of your project.",
          ],
        },
        {
          type: "chips",
          items: [
            { label: "Construction" },
            { label: "Infrastructure" },
            { label: "Industrial Operations" },
            { label: "Road Construction" },
            { label: "Material Handling" },
          ],
        },
      ],
    },
    {
      heading: "Our Equipment Portfolio",
      blocks: [
        {
          type: "subheading",
          text: "Earthmoving & Excavation",
        },
        {
          type: "chips",
          items: [
            { label: "Wheel Loaders" },
            { label: "Excavators" },
            { label: "Long-Reach Boom Excavators" },
          ],
        },
        {
          type: "subheading",
          text: "Lifting & Heavy Construction",
        },
        {
          type: "chips",
          items: [
            { label: "Mobile Cranes" },
            { label: "Tower Cranes" },
          ],
        },
        {
          type: "subheading",
          text: "Road Construction & Infrastructure",
        },
        {
          type: "chips",
          items: [
            { label: "Asphalt Paver Machines" },
            { label: "Water Tankers" },
            { label: "Water Tanks" },
          ],
        },
        {
          type: "subheading",
          text: "Industrial & Material Handling",
        },
        {
          type: "chips",
          items: [
            { label: "Material Handlers" },
            { label: "Hydraulic Pumps" },
          ],
        },
        {
          type: "subheading",
          text: "Demolition & Specialized Machinery",
        },
        {
          type: "chips",
          items: [
            { label: "Demolition Machines" },
            { label: "Specialized Heavy Equipment" },
          ],
        },
        {
          type: "paragraphs",
          paragraphs: [
            "Equipment availability and specifications are subject to project requirements.",
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
              title: "Cost-Effective Equipment Access",
              description:
                "Reduce the need for substantial upfront investment in heavy machinery while allocating capital more efficiently across your project.",
            },
            {
              title: "Equipment for Diverse Project Requirements",
              description:
                "Access a broad range of machinery for excavation, lifting, road construction, demolition, material handling, and infrastructure development through one rental partner.",
            },
            {
              title: "Flexible Rental Arrangements",
              description:
                "Discuss rental solutions based on your project scope, duration, equipment requirements, and operational needs.",
            },
            {
              title: "Productivity-Focused Solutions",
              description:
                "Select machinery suited to your application to support efficient operations, minimize avoidable delays, and maintain project momentum.",
            },
            {
              title: "One Partner. Multiple Equipment Solutions.",
              description:
                "Simplify equipment sourcing by coordinating your machinery requirements through a single service provider.",
            },
          ],
        },
      ],
    },
    {
      heading: "Your Project. Our Equipment. Shared Success.",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "Whether you are undertaking a high-rise construction project, developing roads and highways, executing industrial works, or managing demanding material-handling operations, Smartlink Systems is your equipment rental partner for projects that demand reliability, efficiency, and performance.",
            "We help you access the right machinery, manage equipment costs, and move your projects forward with confidence.",
            "Let's power your next project. Contact Smartlink Systems today to discuss your heavy equipment requirements and request a customized rental quotation.",
          ],
        },
        {
          type: "chips",
          items: [
            {
              label: "Land Logistics & Heavy Transportation",
              href: "/truck-transportation",
            },
            {
              label: "Port & Jetty Material Handling",
              href: "/port-handling",
            },
            {
              label: "Inland Transportation & Logistics",
              href: "/inland-water-transport",
            },
            { label: "Contact Us", href: "/contact" },
          ],
        },
      ],
    },
  ],
};
