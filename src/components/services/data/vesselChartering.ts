import type { ServicePageData } from "../ServicePage";
import { productImages } from "../../products/data/productImages";

export const vesselCharteringData: ServicePageData = {
  slug: "vessel-chartering",
  category: "Services",
  name: "International Bulk Vessel Chartering",
  tagline:
    "Connecting Global Cargo with the Right Vessel, Route & Freight Solution",
  intro:
    "Smartlink Systems delivers professional International Bulk Vessel Chartering & Maritime Logistics Solutions, connecting cargo owners, traders, importers and exporters with reliable vessel owners and operators across major shipping routes worldwide.\n\nBacked by practical experience in international bulk shipping and an extensive global network, we arrange suitable vessels for the safe, efficient and commercially competitive transportation of dry bulk and breakbulk commodities from origin to destination.",
  images: productImages["vessel-chartering"],

  sections: [
    {
      icon: "ship",
      heading: "Our Chartering Expertise",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "We provide chartering solutions for Handysize, Handymax, Supramax, Ultramax and Panamax vessels, carefully selected according to cargo quantity, loading and discharge port restrictions, draft limitations, laycan requirements and overall voyage economics.",
          ],
        },
        {
          type: "chips",
          items: [
            { label: "Handysize" },
            { label: "Handymax" },
            { label: "Supramax" },
            { label: "Ultramax" },
            { label: "Panamax" },
          ],
        },
        {
          type: "paragraphs",
          paragraphs: [
            "Our chartering support covers Voyage Charter, Time Charter, Vessel Nomination, Freight Negotiation, Laycan Planning, Fixture Coordination, Port & Agent Coordination, Loading/Discharging Arrangements, Shipping Documentation and Voyage Monitoring.",
          ],
        },
        {
          type: "checklist",
          items: [
            "Voyage Charter",
            "Time Charter",
            "Vessel Nomination",
            "Freight Negotiation",
            "Laycan Planning",
            "Fixture Coordination",
            "Port & Agent Coordination",
            "Loading/Discharging Arrangements",
            "Shipping Documentation",
            "Voyage Monitoring",
          ],
        },
      ],
    },
    {
      icon: "globe",
      heading: "Global Trade Routes",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "Through our network of shipowners, operators, chartering brokers, commodity exporters, importers, port agents and logistics partners, Smartlink Systems facilitates bulk cargo movements across major trade corridors connecting:",
          ],
        },
        {
          type: "chips",
          variant: "region",
          items: [
            { label: "Middle East" },
            { label: "South Asia" },
            { label: "Southeast Asia" },
            { label: "China" },
            { label: "Africa" },
            { label: "Europe" },
            { label: "Black Sea Region" },
            { label: "North & South America" },
          ],
        },
        {
          type: "paragraphs",
          paragraphs: [
            "We particularly support international shipments connecting global supply origins with Bangladesh and other South Asian markets.",
          ],
        },
      ],
    },
    {
      icon: "package",
      heading: "Commodities We Handle",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "Our chartering and shipping solutions are suitable for a broad range of commodities, including:",
          ],
        },
        {
          type: "chips",
          // Linked only where a route exists in the app. Wheat and Clinker
          // routes currently hold placeholder content.
          items: [
            { label: "Limestone", href: "/limestone" },
            { label: "Gabbro Aggregate", href: "/gabbro-aggregate" },
            { label: "Clinker", href: "/clinker" },
            { label: "Gypsum" },
            { label: "Coal", href: "/coal" },
            { label: "Wheat", href: "/wheat-supplier-importer-bangladesh" },
            { label: "Corn/Maize" },
            { label: "Grains" },
            { label: "Fertilizers" },
            { label: "Minerals" },
            { label: "Construction Materials" },
            { label: "Other Dry Bulk Cargoes" },
          ],
        },
      ],
    },
    {
      icon: "anchor",
      heading: "SMART CHARTERING • COMPETITIVE FREIGHT • GLOBAL REACH",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "At Smartlink Systems, our objective is simple — the right vessel, the right route, the right freight and the right schedule.",
            "From initial freight inquiry and vessel selection to final discharge, our team focuses on commercial efficiency, operational reliability, timely coordination and transparent communication throughout every stage of the shipment.",
          ],
        },
      ],
    },
  ],

  cta: {
    text: "Smartlink Systems — Your Reliable Partner for International Bulk Chartering, Ocean Freight & Maritime Logistics.",
    buttonLabel: "Contact Us",
    buttonHref: "/contact",
  },
};
