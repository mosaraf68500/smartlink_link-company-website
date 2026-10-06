import type { Metadata } from "next";
import CommodityPage from "@/src/components/products/CommodityPage";
import { cornDdgsData } from "@/src/components/products/data/cornDdgs";

const title = "Corn DDGS – Global Sourcing & Trading | Smartlink Systems";
const description =
  "Smartlink Systems sources and supplies Corn DDGS from India, Brazil, USA, Argentina and Tanzania — 26%–30%+ crude protein — for poultry, dairy, cattle and aquaculture feed under FOB, CFR and CIF terms.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/corn-ddgs" },
  openGraph: { title, description, url: "/corn-ddgs", type: "website" },
};

export default function Page() {
  return <CommodityPage data={cornDdgsData} />;
}
