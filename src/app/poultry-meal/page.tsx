import type { Metadata } from "next";
import CommodityPage from "@/src/components/products/CommodityPage";
import { poultryMealData } from "@/src/components/products/data/animalFeed";

const title = "Feed Grade Poultry Meal Supplier | Smartlink Systems";
const description =
  "Smartlink Systems supplies feed grade poultry meal (crude protein 60–65% min) sourced from Saudi Arabia, Egypt and China for poultry and livestock feed formulations.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/poultry-meal" },
  openGraph: { title, description, url: "/poultry-meal", type: "website" },
};

export default function Page() {
  return <CommodityPage data={poultryMealData} />;
}
