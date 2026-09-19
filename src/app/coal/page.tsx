import type { Metadata } from "next";
import CommodityPage from "@/src/components/products/CommodityPage";
import { coalData } from "@/src/components/products/data/coal";

const title = "Coal Supplier & Importer in Bangladesh | Smartlink Systems";
const description =
  "Smartlink Systems sources and supplies thermal, steam and industrial coal from Indonesia, South Africa and Australia to power, steel, brick, cement and boiler industries in Bangladesh, with bulk vessel chartering and full supply chain support.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/coal" },
  openGraph: { title, description, url: "/coal", type: "website" },
};

export default function Page() {
  return <CommodityPage data={coalData} />;
}
