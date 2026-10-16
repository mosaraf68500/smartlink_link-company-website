import type { Metadata } from "next";
import CommodityPage from "@/src/components/products/CommodityPage";
import { soyabeanSeedsData } from "@/src/components/products/data/soyabeanSeeds";

const title = "Soybean Trading & Global Sourcing | Smartlink Systems";
const description =
  "Building dependable supply channels across the world's major oilseed-producing regions, Smartlink Systems specializes in the sourcing, trading, and supply of quality soybeans from USA, Canada, Brazil, and Argentina.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/soyabean-seeds" },
  openGraph: { title, description, url: "/soyabean-seeds", type: "website" },
};

export default function Page() {
  return <CommodityPage data={soyabeanSeedsData} />;
}
