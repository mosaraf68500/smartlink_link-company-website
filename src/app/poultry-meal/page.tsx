import type { Metadata } from "next";
import CommodityPage from "@/src/components/products/CommodityPage";
import { poultryMealData } from "@/src/components/products/data/poultryMeal";

const title = "Poultry Meal – Global Sourcing & Trading | Smartlink Systems";
const description =
  "Providing high-protein feed ingredient solutions for the international animal nutrition industry, Smartlink Systems specializes in the sourcing, trading, and supply of quality Poultry Meal from selected producers and exporters across Saudi Arabia, Nigeria, India, and Egypt.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/poultry-meal" },
  openGraph: { title, description, url: "/poultry-meal", type: "website" },
};

export default function Page() {
  return <CommodityPage data={poultryMealData} />;
}
