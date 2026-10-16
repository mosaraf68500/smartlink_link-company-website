import type { Metadata } from "next";
import CommodityPage from "@/src/components/products/CommodityPage";
import { clinkerData } from "@/src/components/products/data/clinker";

const title =
  "Connecting Global Clinker Supply with Growing Markets | Smartlink Systems";
const description =
  "Smartlink Systems is an international supplier, exporter, and trader of Cement Clinker, connecting established producers with cement manufacturers and bulk buyers across global markets.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/clinker" },
  openGraph: { title, description, url: "/clinker", type: "website" },
};

export default function Page() {
  return <CommodityPage data={clinkerData} />;
}
