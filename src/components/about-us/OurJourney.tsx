"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import CountUp from "react-countup";
import SectionHeader from "../shared/SectionHeader";

const stats = [
  { label: "Founded in", end: 2023, suffix: "", separator: "" },
  { label: "Team Members", end: 30, suffix: "+", separator: "" },
  { label: "Active Users", end: 12, suffix: "K+", separator: "" },
];

// Same three paths that were sitting commented-out under the <Image> —
// now used to drive a slider instead of a single static image.
const journeyImages = [
  "/images/journey/j1.svg",
  "/images/journey/j2.png",
  "/images/journey/j3.png",
];
const SLIDE_INTERVAL_MS = 5000;

function JourneyImageSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % journeyImages.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative aspect-[8/7] w-full overflow-hidden">
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.01 }}
          transition={{ duration: 1.8, ease: [0.45, 0, 0.2, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={journeyImages[index]}
            alt="AdsFixter team meeting"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </motion.div>
      </AnimatePresence>


    </div>
  );
}

export default function OurJourney() {
  return (
    <section className="py-20 px-4 md:px-0">
      <SectionHeader
        title="From Fixing Ad Accounts to Building Software"
        description="We started with one job: getting our customers their blocked ad accounts back. Today we build the websites, apps and systems those businesses run on."
      />

      <div className="container px-4 md:px-6 mt-15 grid gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Left: image slider */}
        <JourneyImageSlider />

        {/* Right: copy + stats */}
        <div className="flex flex-col justify-between gap-10">
          <div className="flex flex-col gap-5">
            <p className="title-regular text-[#41504D]">
              AdsFixter started in 2023. Our first job was simple: help business
              owners get back their Facebook and Google ad accounts after they
              were restricted.
            </p>
            <p className="title-regular text-[#41504D]">
              Our customers kept asking for more. They needed a website. They
              needed a system to track their orders. They needed someone to
              pick up the phone when something stopped working.
            </p>
            <p className="title-regular text-[#41504D]">
              So we grew. Today we are a team of engineers, designers and
              marketers in Barishal. We build software, design brands, and run
              ad campaigns. We also make four of our own products: SyncBari,
              SiteBari, MetaBari and MailBari.
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-nowrap justify-between gap-4 sm:justify-start sm:gap-16">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="body-small-regular sm:title-regular text-gray whitespace-nowrap">
                  {stat.label}
                </span>
                <span className="font-bricolage h5 sm:h1 text-dark">
                  <CountUp
                    end={stat.end}
                    duration={2}
                    suffix={stat.suffix}
                    separator={stat.separator}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}