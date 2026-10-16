import type { Metadata } from "next";
import CommodityPage from "@/src/components/products/CommodityPage";
import { canolaSeedsData } from "@/src/components/products/data/canolaSeeds";

const title = "Canola Seeds – Global Sourcing & Trading | Smartlink Systems";
const description =
  "Leveraging a diversified international oilseed sourcing network, Smartlink Systems specializes in the sourcing, trading, and supply of quality Canola Seeds from selected origins across Australia, Pakistan, India, and Africa.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/canola-seeds" },
  openGraph: { title, description, url: "/canola-seeds", type: "website" },
};

export default function Page() {
  return <CommodityPage data={canolaSeedsData} />;
}
