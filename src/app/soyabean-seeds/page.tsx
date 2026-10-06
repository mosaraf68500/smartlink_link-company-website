import type { Metadata } from "next";
import CommodityPage from "@/src/components/products/CommodityPage";
import { soyabeanSeedsData } from "@/src/components/products/data/soyabeanSeeds";

const title = "Soybean Trading & Global Sourcing | Smartlink Systems";
const description =
  "Smartlink Systems sources and supplies soybeans from USA, Canada, Brazil and Argentina for oilseed crushers, edible oil processors and feed manufacturers under FOB, CFR and CIF terms.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/soyabean-seeds" },
  openGraph: { title, description, url: "/soyabean-seeds", type: "website" },
};

export default function Page() {
  return <CommodityPage data={soyabeanSeedsData} />;
}
