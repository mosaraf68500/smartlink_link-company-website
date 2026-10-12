import type { Metadata } from "next";
import ServicePage from "@/src/components/services/ServicePage";
import { portHandlingData } from "@/src/components/services/data/portHandling";

const title = "Port Handling (ZD Service) | Smartlink Systems";
const description =
  "Smartlink Systems Port Handling (ZD Service) — ship discharge, stevedoring, jetty operations, and cargo handling from vessel to shore, with coordination through to inland delivery.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "port handling Bangladesh",
    "ZD service",
    "ship discharge",
    "stevedoring",
    "bulk cargo unloading",
    "jetty operations",
    "port logistics",
  ],
  alternates: { canonical: "/port-handling" },
  openGraph: { title, description, url: "/port-handling", type: "website" },
};

export default function Page() {
  return <ServicePage data={portHandlingData} />;
}
