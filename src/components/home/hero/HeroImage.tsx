"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

/* —— Aggregate / ভুদার (stone, gabbro, limestone) —— */
import gabbro1 from "../../../../public/images/gabbro-aggregate/gabbro-1.jpeg";
import limestone1 from "../../../../public/images/limestone/limestone-1.jpeg";

/* —— Cotton —— */
import hero01 from "../../../../public/images/heroimg/hero-01.png";
import hero04 from "../../../../public/images/heroimg/hero-04.png";

/* —— Soyabean —— */
import soy1 from "../../../../public/images/soyabean-seeds/soyabean-seeds-1.jpeg";
import soy2 from "../../../../public/images/soyabean-seeds/soyabean-seeds-2.jpeg";

/* —— Corn / DDGS —— */
import corn1 from "../../../../public/images/corn-ddgs/corn-ddgs-1.jpeg";
import corn2 from "../../../../public/images/corn-ddgs/corn-ddgs-2.jpeg";

/* —— Wheat —— */
import wheatBran1 from "../../../../public/images/wheat-bran/wheat-bran-1.jpeg";
import wheatBran2 from "../../../../public/images/wheat-bran/wheat-bran-2.jpeg";

/* —— Coal —— */
import hero22 from "../../../../public/images/heroimg/hero-22.png";
import hero24 from "../../../../public/images/heroimg/hero-24.png";

/* —— Shipping / vessels —— */
import ship1 from "../../../../public/images/bulk_chartering/bulk-chartering-1.jpeg";
import ship2 from "../../../../public/images/bulk_chartering/bulk-chartering-2.jpeg";

type Slide = {
  src: StaticImageData;
  alt: string;
};

/**
 * Product groups stay consecutive in the marquee — never mixed.
 * Aggregate (ভুদার) first, then other products one after another.
 * Exactly 2 slides per product / service group.
 */
const productGroups: { label: string; slides: Slide[] }[] = [
  {
    label: "Aggregate",
    slides: [
      { src: gabbro1, alt: "Gabbro aggregate" },
      { src: limestone1, alt: "Limestone aggregate" },
    ],
  },
  {
    label: "Cotton",
    slides: [
      { src: hero04, alt: "Raw cotton in field" },
      { src: hero01, alt: "Cotton fiber" },
    ],
  },
  {
    label: "Soyabean",
    slides: [
      { src: soy1, alt: "Soyabean seeds" },
      { src: soy2, alt: "Soyabean seeds close-up" },
    ],
  },
  {
    label: "Corn DDGS",
    slides: [
      { src: corn1, alt: "Corn DDGS" },
      { src: corn2, alt: "Corn kernels" },
    ],
  },
  {
    label: "Wheat",
    slides: [
      { src: wheatBran1, alt: "Wheat bran" },
      { src: wheatBran2, alt: "Wheat bran close-up" },
    ],
  },
  {
    label: "Coal",
    slides: [
      { src: hero24, alt: "Coal" },
      { src: hero22, alt: "Coal chunks" },
    ],
  },
  {
    label: "Shipping",
    slides: [
      { src: ship1, alt: "Bulk vessel chartering" },
      { src: ship2, alt: "Ocean freight" },
    ],
  },
];

const slides: Slide[] = productGroups.flatMap((group) => group.slides);

/** Same width & height for every tile — no uneven collage sizing. */
const TILE_CLASS =
  "relative h-[280px] w-[220px] shrink-0 overflow-hidden rounded-md sm:h-[320px] sm:w-[250px] md:h-[360px] md:w-[280px]";

function SlideTile({ slide }: { slide: Slide }) {
  return (
    <div className={TILE_CLASS}>
      <Image
        src={slide.src}
        alt={slide.alt}
        fill
        quality={90}
        className="object-cover object-center"
        sizes="(max-width: 640px) 220px, (max-width: 768px) 250px, 280px"
      />
    </div>
  );
}

const HeroImage = () => {
  return (
    <div className="relative w-full overflow-hidden pt-[75px]">
      <div className="relative z-10 w-full overflow-hidden">
        <motion.div
          className="flex w-max gap-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            // Fewer slides → shorter track; keep roughly the same px/s as before (~43 slides @ 100s).
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Duplicate once for seamless -50% loop */}
          {slides.map((slide, i) => (
            <SlideTile key={`a-${i}`} slide={slide} />
          ))}
          {slides.map((slide, i) => (
            <SlideTile key={`b-${i}`} slide={slide} />
          ))}
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-30" />
    </div>
  );
};

export default HeroImage;
