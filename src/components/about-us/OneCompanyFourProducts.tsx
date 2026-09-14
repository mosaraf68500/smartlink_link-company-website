"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";
import SectionHeader from "../shared/SectionHeader";

interface Product {
  name: string;
  tagline: string;
  description: string;
}

const products: Product[] = [
  {
    name: "SyncBari",
    tagline: "Workspace & Team Collaboration",
    description:
      "Manage inbox, projects, tasks, files, meetings, and team communication from one unified workspace.",
  },
  {
    name: "SiteBari",
    tagline: "No-Code E-commerce Shop Builder",
    description:
      "Launch beautiful, responsive E-commerce  websites without writing a single line of code.",
  },
  {
    name: "MetaBari",
    tagline: "Advertising Infrastructure OS",
    description:
      "Run an ad account rental business end to end — ad accounts, client wallets, USD treasury, vendor settlement, and billing in one platform.",
  },
  {
    name: "MailBari",
    tagline: "Business email",
    description:
      "Professional email on your own domain, with deliverability handled for you.",
  },
];

export default function OneCompanyFourProducts() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="py-8 md:py-20 px-4 md:px-0">
      <SectionHeader
        title={
          <>
            One Company.
            <br />
            Four Powerful Products.
          </>
        }
        description="Instead of building disconnected tools, we've created an ecosystem where every product works seamlessly together."
        titleClassName="!max-w-[648px] "
      />

      {/* Product summary row */}
      <div className="container mt-10 px-4 md:px-6 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
        {products.map((product) => (
          <div key={product.name} className="flex flex-col gap-2">
            <h3 className="h6-medium text-dark font-jakarta">{product.name}</h3>
            <p className="body-medium text-primary font-jakarta">
              {product.tagline}
            </p>
            <p className="body-small-regular text-gray font-jakarta w-full md:max-w-[270px] text-justify">
              {" "}
              {product.description}
            </p>
          </div>
        ))}
      </div>

      {/* Video showcase */}
      <div className="container px-4 md:px-6 mt-10">
        <button
          type="button"
          onClick={() => setIsVideoOpen(true)}
          className="group relative block aspect-[940/430] w-full overflow-hidden rounded-[24px]"
        >
          <Image
            src="/images/work/team-meeting.png"
            alt="AdsFixter team collaborating"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(min-width: 1024px) 1200px, 100vw"
          />
          <span className="absolute inset-0 bg-black/10" />
          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 md:h-30 md:w-30 -translate-x-1/2 -translate-y-1/2 items-center cursor-pointer justify-center rounded-full bg-primary text-white transition-transform duration-300 group-hover:scale-105">
            <span className="h6-medium">Play</span>
          </span>
        </button>
      </div>

      {/* Video modal */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <button
            type="button"
            onClick={() => setIsVideoOpen(false)}
            className="absolute right-6 top-6 text-white"
            aria-label="Close video"
          >
            <X size={28} />
          </button>

          <div
            className="aspect-video w-full max-w-4xl overflow-hidden rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src="/about/company-intro.mp4"
              controls
              autoPlay
              className="h-full w-full"
            />
          </div>
        </div>
      )}
    </section>
  );
}
