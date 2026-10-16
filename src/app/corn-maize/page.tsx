import type { Metadata } from "next";
import CommodityPage from "@/src/components/products/CommodityPage";
import { cornMaizeData } from "@/src/components/products/data/cornMaize";

const title = "Corn / Maize – Global Sourcing & Trading | Smartlink Systems";
const description =
  "Serving both the food-processing and animal-feed industries, Smartlink Systems specializes in the international sourcing, trading, and supply of quality Corn / Maize from established agricultural markets across Africa, India, Brazil, Argentina, and Pakistan.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/corn-maize" },
  openGraph: { title, description, url: "/corn-maize", type: "website" },
};

export default function Page() {
  return <CommodityPage data={cornMaizeData} />;
}
