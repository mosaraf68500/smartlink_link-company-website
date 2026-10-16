import type { Metadata } from "next";
import CommodityPage from "@/src/components/products/CommodityPage";
import { wheatBranData } from "@/src/components/products/data/animalFeed";

const title = "Wheat Bran – Global Sourcing & Trading | Smartlink Systems";
const description =
  "With an established sourcing network across major wheat-processing markets, Smartlink Systems specializes in the international sourcing, trading, and supply of quality Wheat Bran for Animal Feed from Tanzania, Angola, Uganda, Mozambique, Nigeria, Kenya, and India.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/wheat-bran" },
  openGraph: { title, description, url: "/wheat-bran", type: "website" },
};

export default function Page() {
  return <CommodityPage data={wheatBranData} />;
}
