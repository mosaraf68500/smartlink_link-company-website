import type { Metadata } from "next";
import CommodityPage from "@/src/components/products/CommodityPage";
import { cottonData } from "@/src/components/products/data/cotton";

const title =
  "Raw Cotton – Global Sourcing, Trading & Supply | Smartlink Systems";
const description =
  "Connecting the textile industry with established cotton-producing regions worldwide, Smartlink Systems specializes in the international sourcing, trading, and supply of Raw Cotton from India, USA, Africa, Afghanistan, Brazil, Argentina, and Kazakhstan.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/cotton" },
  openGraph: { title, description, url: "/cotton", type: "website" },
};

export default function Page() {
  return <CommodityPage data={cottonData} />;
}
