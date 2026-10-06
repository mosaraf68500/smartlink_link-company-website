import type { Metadata } from "next";
import CommodityPage from "@/src/components/products/CommodityPage";
import { clinkerData } from "@/src/components/products/data/clinker";

const title = "Cement Clinker Supplier & Trader | Smartlink Systems";
const description =
  "Smartlink Systems supplies Cement Clinker from Thailand, Vietnam, China, UAE, Oman, Egypt, Pakistan and Indonesia — competitive procurement, bulk vessel supply and end-to-end logistics.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/clinker" },
  openGraph: { title, description, url: "/clinker", type: "website" },
};

export default function Page() {
  return <CommodityPage data={clinkerData} />;
}
