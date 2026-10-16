import type { Metadata } from "next";
import CommodityPage from "@/src/components/products/CommodityPage";
import { lentilsAndPulsesData } from "@/src/components/products/data/lentilsAndPulses";

const title = "Lentils & Pulses Trading & Supply | Smartlink Systems";
const description =
  "Connecting reliable origins with growing global food markets, Smartlink Systems specializes in the sourcing, trading, and supply of lentils, pulses, beans, and specialty crops from Australia, India, Africa, Myanmar, and Pakistan.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/lentils-pulses" },
  openGraph: { title, description, url: "/lentils-pulses", type: "website" },
};

export default function Page() {
  return <CommodityPage data={lentilsAndPulsesData} />;
}
