import type { Metadata } from "next";
import CommodityPage from "@/src/components/products/CommodityPage";
import { greenMungData } from "@/src/components/products/data/greenMung";

const title = "Green Mung Beans – Global Sourcing & Trading | Smartlink Systems";
const description =
  "Connecting quality pulse-producing regions with international food markets, Smartlink Systems specializes in the sourcing, trading, and supply of Green Mung Beans (Green Gram) from established origins including Tanzania, India, Nigeria, and Mozambique.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/green-mung" },
  openGraph: { title, description, url: "/green-mung", type: "website" },
};

export default function Page() {
  return <CommodityPage data={greenMungData} />;
}
