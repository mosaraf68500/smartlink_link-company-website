import type { Metadata } from "next";
import CommodityPage from "@/src/components/products/CommodityPage";
import { cottonData } from "@/src/components/products/data/placeholderProducts";

// PLACEHOLDER metadata — replace after keyword research (SMARTLINK_PROJECT.md §4).
const title = "Cotton Supplier in Bangladesh | Smartlink Systems";
const description =
  "Smartlink Systems supplies cotton to industrial and commercial buyers in Bangladesh. Full specifications and sourcing details coming soon.";

export const metadata: Metadata = {
  title,
  description,
  // PLACEHOLDER page: keep out of search indexes. Remove this once real content replaces placeholderPage(...).
  robots: { index: false },
  alternates: { canonical: "/cotton" },
  openGraph: { title, description, url: "/cotton", type: "website" },
};

export default function Page() {
  return (
    <>
      {/* PLACEHOLDER CONTENT — pending final copy from client, see SMARTLINK_PROJECT.md */}
      <CommodityPage data={cottonData} />
    </>
  );
}
