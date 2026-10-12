import type { ServicePageData } from "../ServicePage";
import { productImages } from "../../products/data/productImages";

export const portHandlingData: ServicePageData = {
  slug: "port-handling",
  category: "Services",
  name: "Port Handling (ZD Service)",
  tagline: "From Ship to Shore — Reliable Discharge & Cargo Handling",
  images: productImages["port-handling"],

  sections: [
    {
      heading: "Ship Discharge & Port Operations",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "Smartlink Systems provides Port Handling (ZD Service) for dry bulk and break-bulk cargoes arriving at Bangladesh ports and jetties. Once a vessel reaches the discharge berth, our focus is clear: unload cargo safely, efficiently, and with full coordination between ship, terminal, stevedores, surveyors, and inland logistics partners.",
            "Whether the shipment involves construction materials, agricultural commodities, energy cargoes, or industrial raw materials, we manage the critical ship-to-shore interface so that discharge productivity, documentation, and onward movement stay aligned with commercial timelines.",
          ],
        },
        {
          type: "chips",
          items: [
            { label: "Ship Discharge" },
            { label: "Stevedoring Coordination" },
            { label: "Jetty & Berth Operations" },
            { label: "Cargo Handling" },
            { label: "ZD Port Service" },
          ],
        },
      ],
    },
    {
      heading: "What We Coordinate at the Port",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "Port handling is more than crane work. It is a sequence of operational steps that must stay synchronized from arrival notice through final cargo release. Smartlink Systems coordinates the practical activities that determine how quickly and cleanly cargo leaves the vessel.",
          ],
        },
        {
          type: "checklist",
          items: [
            "Vessel arrival and berth coordination support",
            "Ship-to-shore discharge planning",
            "Stevedoring and labour arrangement coordination",
            "Grab, conveyor, and equipment utilisation planning",
            "Cargo tally, draft survey, and inspection liaison",
            "Shore receiving, stacking, and temporary storage",
            "Jetty and terminal communication",
            "Documentation and port paperwork follow-up",
            "Lighterage / barge transfer where required",
            "Truck loading and inland dispatch planning",
          ],
        },
      ],
    },
    {
      heading: "Cargoes We Handle",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "Our Port Handling (ZD Service) supports the same commodity families we source and charter worldwide — so discharge operations remain connected to the full Smartlink supply chain.",
          ],
        },
        {
          type: "paragraphs",
          paragraphs: ["Construction & Industrial Materials"],
        },
        {
          type: "chips",
          items: [
            { label: "Clinker", href: "/clinker" },
            { label: "Limestone", href: "/limestone" },
            { label: "Gabbro / Aggregates", href: "/gabbro-aggregate" },
            { label: "Gypsum & Slag" },
          ],
        },
        {
          type: "paragraphs",
          paragraphs: ["Agricultural & Feed Commodities"],
        },
        {
          type: "chips",
          items: [
            { label: "Wheat", href: "/wheat-supplier-importer-bangladesh" },
            { label: "Pulses & Grains", href: "/lentils-pulses" },
            { label: "Oilseeds", href: "/soyabean-seeds" },
            { label: "Animal Feed Ingredients", href: "/wheat-bran" },
          ],
        },
        {
          type: "paragraphs",
          paragraphs: ["Energy & Bulk Raw Materials"],
        },
        {
          type: "chips",
          items: [
            { label: "Coal", href: "/coal" },
            { label: "Petcoke" },
            { label: "Minerals & other dry bulk" },
          ],
        },
      ],
    },
    {
      heading: "Discharge Productivity & Cost Control",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "At the discharge port, productivity directly affects demurrage exposure, landed cost, and delivery schedules. We work to keep operations commercially disciplined by aligning vessel capability, shore receiving rate, equipment availability, and cargo characteristics before and during discharge.",
            "Key factors we monitor throughout the operation include:",
          ],
        },
        {
          type: "checklist",
          items: [
            "Agreed discharge rate vs. actual productivity",
            "Berth congestion and weather exposure",
            "Cargo condition and handling method",
            "Shore space, conveyor, and truck turnaround",
            "Draft survey and quantity reconciliation",
            "Demurrage / despatch implications",
            "Safety, spill control, and cargo care",
            "Handover readiness for inland transport",
          ],
        },
      ],
    },
    {
      heading: "From Port to Final Destination",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "Port handling does not end when cargo leaves the ship. Where required, Smartlink Systems continues coordination beyond the berth — connecting discharge with lighterage, inland water transport, trucking, warehousing, and delivery to project sites, factories, RMC plants, or buyer yards.",
            "This end-to-end approach is especially valuable for bulk commodities, where every hour at berth and every transfer step can influence total cost and delivery reliability.",
          ],
        },
        {
          type: "chips",
          items: [
            { label: "Ocean Freight", href: "/vessel-chartering" },
            { label: "Port Handling (ZD)" },
            { label: "Stevedoring" },
            { label: "Lighterage / IWT", href: "/inland-water-transport" },
            { label: "Truck Transport" },
            { label: "Final Delivery" },
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
            "Smartlink Systems treats Port Handling (ZD Service) as an operational extension of commodity trading and vessel chartering — not as an isolated activity. Clear communication among shipowners, agents, stevedores, surveyors, receivers, and inland partners remains central to every discharge.",
            "Whether you need support for a single vessel call or a recurring import program, our focus stays on safe unloading, commercial discipline, transparent coordination, and dependable movement of cargo from ship to shore — and onward to destination.",
          ],
        },
      ],
    },
  ],
};
