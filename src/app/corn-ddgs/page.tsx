import type { Metadata } from "next";
import CommodityPage from "@/src/components/products/CommodityPage";
import { cornDdgsData } from "@/src/components/products/data/cornDdgs";

const title = "Corn DDGS – Global Sourcing & Trading | Smartlink Systems";
const description =
  "Supporting the global animal-feed industry with dependable protein and energy ingredients, Smartlink Systems specializes in the international sourcing, trading, and supply of quality Corn DDGS from established producers across India, Brazil, USA, Argentina, and Tanzania.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/corn-ddgs" },
  openGraph: { title, description, url: "/corn-ddgs", type: "website" },
};

export default function Page() {
  return <CommodityPage data={cornDdgsData} />;
}
