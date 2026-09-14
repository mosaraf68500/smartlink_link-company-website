import {

  DotProps,
} from "recharts";
import { Globe2, Anchor, Warehouse } from "lucide-react";

export const services = [
  {
    id: "01",
    bg: "#FBD4EE",
    border: "#F7BFE4",
    icon: <Globe2 size={28} color="#B23FA0" />,
    title: "Bulk Sourcing & Trading",
    description:
      "Connecting you with trusted global suppliers for construction materials, grains, and feed ingredients.",
  },
  {
    id: "02",
    bg: "#FDEECF",
    border: "#E7C889",
    icon: <Anchor size={28} color="#A17A22" />,
    title: "Shipping & Vessel Chartering",
    description:
      "End-to-end vessel chartering and freight coordination across major global trade routes.",
  },
  {
    id: "03",
    bg: "#D9D3FF",
    border: "#B3A9F3",
    icon: <Warehouse size={28} color="#5B4FCF" />,
    title: "Port Handling & Logistics",
    description:
      "From port to final delivery — we manage the full in-country logistics chain.",
  },
];
export interface CustomActiveDotProps extends DotProps {
  cx?: number;
  cy?: number;
}
export const avatars = [
  "https://i.pravatar.cc/40?img=12",
  "https://i.pravatar.cc/40?img=32",
  "https://i.pravatar.cc/40?img=45",
  "https://i.pravatar.cc/40?img=60",
];
export  const chartData = [
  { month: "Jan", spend: 30, recovery: 30 },
  { month: "Feb", spend: 35, recovery: 40 },
  { month: "Mar", spend: 32, recovery: 50 },
  { month: "Apr", spend: 35, recovery: 40 },
  { month: "May", spend: 38, recovery: 48 },
  { month: "Jun", spend: 37, recovery: 42 },
  { month: "July", spend: 40, recovery: 22 },
  { month: "Aug", spend: 32, recovery: 35 },
  { month: "Sep", spend: 28, recovery: 50 },
  { month: "Oct", spend: 36, recovery: 45 },
  { month: "Nob", spend: 38, recovery: 42 },
  { month: "Dec", spend: 30, recovery: 40 },
];
