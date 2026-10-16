import type { Metadata } from "next";
import CommodityPage from "@/src/components/products/CommodityPage";
import { soyabeanMealData } from "@/src/components/products/data/soyabeanMeal";

const title =
  "Soybean Meal (SBM) – Global Sourcing & Trading | Smartlink Systems";
const description =
  "Delivering dependable plant-based protein solutions to the international animal-feed industry, Smartlink Systems specializes in the sourcing, trading, and supply of quality Soybean Meal (SBM) from major producing origins including USA, Brazil, Argentina, Tanzania, and Nigeria.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/soyabean-meal" },
  openGraph: { title, description, url: "/soyabean-meal", type: "website" },
};

export default function Page() {
  return <CommodityPage data={soyabeanMealData} />;
}
