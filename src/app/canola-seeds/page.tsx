import type { Metadata } from "next";
import CommodityPage from "@/src/components/products/CommodityPage";
import { canolaSeedsData } from "@/src/components/products/data/canolaSeeds";

const title = "Canola Seeds – Global Sourcing & Trading | Smartlink Systems";
const description =
  "Smartlink Systems sources and supplies Canola Seeds from Australia, Pakistan, India and Africa for oilseed crushers, edible oil processors and feed manufacturers under FOB, CFR and CIF terms.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/canola-seeds" },
  openGraph: { title, description, url: "/canola-seeds", type: "website" },
};

export default function Page() {
  return <CommodityPage data={canolaSeedsData} />;
}
