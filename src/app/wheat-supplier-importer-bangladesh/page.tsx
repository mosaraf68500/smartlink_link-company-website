import type { Metadata } from "next";
import CommodityPage from "@/src/components/products/CommodityPage";
import { wheatData } from "@/src/components/products/data/wheat";

const title = "Wheat Supplier & Importer in Bangladesh | Smartlink Systems";
const description =
  "Smartlink Systems sources and supplies milling and feed-grade wheat from Brazil, Argentina, USA, Canada, Bulgaria, Romania, Ukraine, Russia and India under FOB, CFR and CIF terms.";

export const metadata: Metadata = {
  title,
  description,
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
  alternates: { canonical: "/wheat-supplier-importer-bangladesh" },
  openGraph: {
    title,
    description,
    url: "/wheat-supplier-importer-bangladesh",
    type: "website",
  },
};

export default function Page() {
  return <CommodityPage data={wheatData} />;
}
