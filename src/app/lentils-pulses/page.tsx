import type { Metadata } from "next";
import CommodityPage from "@/src/components/products/CommodityPage";
import { lentilsAndPulsesData } from "@/src/components/products/data/lentilsAndPulses";

const title = "Lentils & Pulses Trading & Supply | Smartlink Systems";
const description =
  "Smartlink Systems sources and supplies lentils, chickpeas, peas, beans and specialty pulses from Australia, India, Africa, Myanmar and Pakistan under FOB, CFR and CIF terms.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/lentils-pulses" },
  openGraph: { title, description, url: "/lentils-pulses", type: "website" },
};

export default function Page() {
  return <CommodityPage data={lentilsAndPulsesData} />;
}
