import type { Metadata } from "next";
import {
  Geist_Mono,
  Plus_Jakarta_Sans,
  Bricolage_Grotesque,
} from "next/font/google";
import "./globals.css";
import Navbar from "../components/shared/Navbar";
import BackToTop from "../components/ui/BackToTop";
import SmoothScroll from "../components/SmoothScroll";
import StickyContactBar from "../components/StickyContactBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NextFooter from "../components/shared/NextFooter";
const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Smartlink Systems",
  description: "Smartlink Systems - Shipping, Logistics & Commercial Trading",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jakartaSans.variable} ${bricolageGrotesque.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar></Navbar>
        <SmoothScroll>{children}</SmoothScroll>
        <ToastContainer position="top-right" autoClose={3000} />
        <BackToTop showAfter={1200} />
        <NextFooter></NextFooter>
        <StickyContactBar />
      </body>
    </html>
  );
}
