import type { CommodityPageData } from "../CommodityPage";
import { productImages } from "./productImages";

/**
 * Exact client section order — every ### heading kept, nothing merged:
 * 1. Opening intro (no heading)
 * 2. Our Cotton Portfolio
 * 3. Major Sourcing Origins
 * 4. Typical Quality Parameters
 * 5. Quality Assurance & Inspection
 * 6. Packing & Shipment
 * 7. International Trade Terms
 * 8. Why Source Cotton Through Smartlink Systems?
 */
export const cottonData: CommodityPageData = {
  slug: "cotton",
  category: "Products",
  name: "Raw Cotton – Global Sourcing, Trading & Supply",
  images: productImages.cotton,
  sections: [
    {
      paragraphs: [
        "Connecting the textile industry with established cotton-producing regions worldwide, Smartlink Systems specializes in the international sourcing, trading, and supply of Raw Cotton for spinning mills, textile manufacturers, importers, and large-volume industrial buyers.",
        "Our sourcing network extends across India, USA, Africa, Afghanistan, Brazil, Argentina, and Kazakhstan, allowing us to offer buyers a diversified choice of origins, grades, staple lengths, and quality parameters according to individual spinning and production requirements.",
        "We understand that cotton purchasing depends not only on price and origin, but also on staple length, micronaire, strength, uniformity, color grade, trash content, moisture, contamination control, crop year, and shipment reliability. Our approach is therefore focused on matching the right cotton with each buyer's technical and commercial requirements.",
      ],
    },
    {
      heading: "Our Cotton Portfolio",
      paragraphs: ["Raw Cotton / Cotton Lint"],
      bullets: [
        "Medium Staple Cotton",
        "Long Staple Cotton",
        "Extra-Long Staple Cotton – subject to origin & availability",
        "Machine-Picked Cotton",
        "Hand-Picked Cotton",
        "Roller-Ginned Cotton",
        "Saw-Ginned Cotton",
        "Spinning-Grade Cotton",
        "Current / Latest Crop Cotton",
      ],
    },
    {
      heading: "Major Sourcing Origins",
      countries: [
        "India",
        "USA",
        "Brazil",
        "Africa",
        "Afghanistan",
        "Argentina",
        "Kazakhstan",
      ],
      paragraphs: [
        "India — Broad selection of spinning-grade cotton with different staple lengths and micronaire ranges.",
        "USA — Machine-picked cotton with internationally recognized classification and quality parameters.",
        "Brazil — Large-scale, export-oriented cotton suitable for modern high-capacity spinning operations.",
        "African Origins — Selected cotton from established producing countries, subject to seasonal availability and buyer requirements.",
        "Afghanistan — Cotton available according to crop, grade, specification, and export availability.",
        "Argentina — Selected raw cotton for international textile and spinning applications.",
        "Kazakhstan — Central Asian cotton sourced according to required grade and commercial availability.",
      ],
    },
    {
      heading: "Typical Quality Parameters",
      paragraphs: [
        "Cotton can be sourced against buyer-specific requirements covering:",
      ],
      specs: [
        { label: "Staple Length", value: "Approx. 26–32+ mm" },
        { label: "Micronaire", value: "Typically 3.5–4.9" },
        { label: "Strength", value: "As per buyer requirement" },
        { label: "Uniformity Index", value: "As per contractual specification" },
        { label: "Color Grade", value: "As per origin and classification" },
        { label: "Trash / Leaf Grade", value: "Within agreed tolerance" },
        { label: "Moisture", value: "As per contractual requirements" },
        { label: "Short Fiber Content", value: "As specified" },
        { label: "Contamination", value: "Controlled according to grade and origin" },
        { label: "Ginning", value: "Roller Ginned / Saw Ginned" },
        { label: "Crop Year", value: "Current / Latest Crop" },
        { label: "HVI Parameters", value: "Available subject to origin, supplier & contract" },
      ],
      note: "Specifications are indicative and can be customized according to buyer requirements and origin availability.",
    },
    {
      heading: "Quality Assurance & Inspection",
      paragraphs: [
        "For international transactions, quality and quantity can be verified through recognized inspection agencies such as SGS, Intertek, Bureau Veritas, or another mutually agreed independent surveyor, subject to contractual terms.",
        "Pre-shipment inspection, HVI testing, weight verification, and other quality documentation may be arranged where applicable.",
      ],
    },
    {
      heading: "Packing & Shipment",
      paragraphs: [
        "Cotton can be offered in standard export-pressed bales with bale weight, covering, strapping, marking, and container loading arranged according to origin and contractual requirements.",
        "Supply options may include:",
      ],
      bullets: [
        "Containerized Shipments",
        "Full Container Load (FCL)",
        "Large-Volume / Contract Supply",
        "Seasonal Supply Programs",
        "Spot & Forward Shipment – subject to availability",
      ],
    },
    {
      heading: "International Trade Terms",
      paragraphs: [
        "We facilitate cotton transactions under internationally recognized commercial terms, including FOB, CFR, and CIF, depending on origin, destination, shipment volume, and buyer requirements.",
        "Our commercial team works with buyers on origin selection, specification matching, supplier coordination, inspection, export documentation, shipment scheduling, and logistics, helping create a transparent and efficient procurement process from source to destination.",
      ],
    },
    {
      heading: "Why Source Cotton Through Smartlink Systems?",
      bullets: [
        "Multi-Origin Sourcing — Access to cotton from India, USA, Brazil, Africa, Afghanistan, Argentina, and Kazakhstan.",
        "Buyer-Specific Selection — Cotton can be sourced according to staple length, micronaire, strength, grade, spinning application, and other required parameters.",
        "Flexible Procurement — Support for spot purchases, regular shipments, and larger contractual supply programs.",
        "Quality-Focused Trading — Specifications and inspection requirements are agreed before shipment to help maintain transparency between supplier and buyer.",
        "International Logistics Support — Coordination from origin through shipment and delivery documentation.",
      ],
      note: "Smartlink Systems — Connecting Global Cotton Origins with the Textile Industry.",
    },
  ],
  cta: {
    text: "Looking for raw cotton for your spinning mill or textile operation? Contact Smartlink Systems for origin options, specifications, inspection arrangements, and supply programs.",
    buttonLabel: "Contact Us",
    buttonHref: "/contact",
  },
};
