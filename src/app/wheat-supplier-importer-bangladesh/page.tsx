import type { Metadata } from "next";
import CommodityPage from "@/src/components/products/CommodityPage";
import { wheatData } from "@/src/components/products/data/placeholderProducts";

// Title and keywords are final (client-provided); description is placeholder.
const title = "Wheat Supplier & Importer in Bangladesh | Smartlink Systems";
const description =
  "Smartlink Systems supplies and imports wheat for industrial and commercial buyers in Bangladesh. Full specifications and sourcing details coming soon.";

export const metadata: Metadata = {
  title,
  description,
  // Client-provided target keywords (SMARTLINK_PROJECT.md §7).
  keywords: [
    "Wheat Supplier Bangladesh",
    "Wheat Importer Bangladesh",
    "Russian Wheat Bangladesh",
    "Ukraine Wheat Supplier",
    "Canadian Wheat Bangladesh",
    "Milling Wheat Supplier",
    "Bulk Wheat Import Bangladesh",
    "Wheat Trading Company Bangladesh",
  ],
  // PLACEHOLDER page: keep out of search indexes. Remove this once real content replaces placeholderPage(...).
  robots: { index: false },
  alternates: { canonical: "/wheat-supplier-importer-bangladesh" },
  openGraph: { title, description, url: "/wheat-supplier-importer-bangladesh", type: "website" },
};

export default function Page() {
  return (
    <>
      {/* PLACEHOLDER CONTENT — pending final copy from client, see SMARTLINK_PROJECT.md */}
      <CommodityPage data={wheatData} />
    </>
  );
}
