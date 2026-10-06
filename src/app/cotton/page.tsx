import type { Metadata } from "next";
import CommodityPage from "@/src/components/products/CommodityPage";
import { cottonData } from "@/src/components/products/data/cotton";

const title = "Raw Cotton Supplier & Trader | Smartlink Systems";
const description =
  "Smartlink Systems sources and supplies raw cotton from India, USA, Brazil, Africa, Afghanistan, Argentina and Kazakhstan for spinning mills, textile manufacturers and industrial buyers — FOB, CFR and CIF.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/cotton" },
  openGraph: { title, description, url: "/cotton", type: "website" },
};

export default function Page() {
  return <CommodityPage data={cottonData} />;
}
