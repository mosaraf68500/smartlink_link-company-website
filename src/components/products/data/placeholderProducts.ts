import type { CommodityPageData } from "../CommodityPage";
import { productImages } from "./productImages";

/**
 * PLACEHOLDER CONTENT — pending final copy from client, see
 * SMARTLINK_PROJECT.md.
 *
 * Every string below is deliberately obvious filler ("placeholder", "XX%")
 * so it can't be mistaken for real specifications. Search for
 * `placeholderPage(` to find every page still awaiting client content, and
 * replace each call with a full CommodityPageData object (as in limestone.ts).
 *
 * NOINDEX: each of these pages' `app/<slug>/page.tsx` sets
 * `robots: { index: false }` so search engines don't index the placeholder
 * text. When a page gets real content, ALSO delete that `robots` line from
 * its page.tsx — otherwise the finished page stays hidden from search.
 */
function placeholderPage(
  slug: string,
  productName: string,
  heading: string = productName,
): CommodityPageData {
  return {
    slug,
    category: "Products",
    name: heading,
    intro: `${productName} — content pending from client. This is placeholder text showing the page layout.`,
    images: productImages[slug],

    sourcing: {
      heading: "Overview",
      countries: [],
      paragraphs: [
        `Placeholder overview text for ${productName}. Final content, including sourcing countries and supply details, will be added once provided by the client.`,
      ],
    },

    specifications: {
      heading: "Specification",
      specs: [
        { label: "Parameter 1", value: "XX%" },
        { label: "Parameter 2", value: "XX%" },
        { label: "Parameter 3", value: "XX%" },
      ],
    },

    closing: {
      heading: "Reliable Supply",
      paragraphs: [
        `Smartlink Systems aims to supply ${productName} as part of our wider commodity sourcing network, serving industrial and commercial buyers across Bangladesh. Final details on sourcing, specifications, and supply capacity will be added once provided by the client.`,
      ],
    },

    cta: {
      text: `Interested in ${productName}? Contact Smartlink Systems for pricing, specifications, and bulk supply arrangements.`,
      buttonLabel: "Contact Us",
      buttonHref: "/contact",
    },
  };
}

export const clinkerData = placeholderPage("clinker", "Clinker");
// The H1 is the client's final SEO title; the body copy is still placeholder.
export const wheatData = placeholderPage(
  "wheat-supplier-importer-bangladesh",
  "Wheat",
  "Wheat Supplier & Importer in Bangladesh",
);
export const lentilsData = placeholderPage("lentils", "Lentils");
export const pulsesData = placeholderPage("pulses", "Pulses");
export const soyabeanSeedsData = placeholderPage("soyabean-seeds", "Soyabean Seeds");
export const canolaSeedsData = placeholderPage("canola-seeds", "Canola Seeds");
export const greenMungData = placeholderPage("green-mung", "Green Mung");
export const cottonData = placeholderPage("cotton", "Cotton");
