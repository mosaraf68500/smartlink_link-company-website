"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

/* —— Aggregate / ভুদার (stone, gabbro, limestone) —— */
import hero06 from "../../../../public/images/heroimg/hero-06.png";
import hero09 from "../../../../public/images/heroimg/hero-09.png";
import hero12 from "../../../../public/images/heroimg/hero-12.png";
import hero18 from "../../../../public/images/heroimg/hero-18.png";
import gabbro1 from "../../../../public/images/gabbro-aggregate/gabbro-1.jpeg";
import gabbro2 from "../../../../public/images/gabbro-aggregate/gabbro-2.jpeg";
import gabbro3 from "../../../../public/images/gabbro-aggregate/gabbro-3.jpeg";
import gabbro4 from "../../../../public/images/gabbro-aggregate/gabbro-4.jpeg";
import gabbro5 from "../../../../public/images/gabbro-aggregate/gabbro-5.jpeg";
import limestone1 from "../../../../public/images/limestone/limestone-1.jpeg";
import limestone2 from "../../../../public/images/limestone/limestone-2.jpeg";
import limestone3 from "../../../../public/images/limestone/limestone-3.jpeg";
import limestone4 from "../../../../public/images/limestone/limestone-4.jpeg";

/* —— Cotton —— */
import hero01 from "../../../../public/images/heroimg/hero-01.png";
import hero04 from "../../../../public/images/heroimg/hero-04.png";
import hero20 from "../../../../public/images/heroimg/hero-20.png";

/* —— Soyabean —— */
import hero05 from "../../../../public/images/heroimg/hero-05.png";
import hero07 from "../../../../public/images/heroimg/hero-07.png";
import hero10 from "../../../../public/images/heroimg/hero-10.png";
import soy1 from "../../../../public/images/soyabean-seeds/soyabean-seeds-1.jpeg";
import soy2 from "../../../../public/images/soyabean-seeds/soyabean-seeds-2.jpeg";
import soy3 from "../../../../public/images/soyabean-seeds/soyabean-seeds-3.jpeg";

/* —— Corn / DDGS —— */
import hero17 from "../../../../public/images/heroimg/hero-17.png";
import hero21 from "../../../../public/images/heroimg/hero-21.png";
import hero23 from "../../../../public/images/heroimg/hero-23.png";
import corn1 from "../../../../public/images/corn-ddgs/corn-ddgs-1.jpeg";
import corn2 from "../../../../public/images/corn-ddgs/corn-ddgs-2.jpeg";
import corn3 from "../../../../public/images/corn-ddgs/corn-ddgs-3.jpeg";
import corn4 from "../../../../public/images/corn-ddgs/corn-ddgs-4.jpeg";

/* —— Wheat —— */
import hero15 from "../../../../public/images/heroimg/hero-15.png";
import wheatBran1 from "../../../../public/images/wheat-bran/wheat-bran-1.jpeg";
import wheatBran2 from "../../../../public/images/wheat-bran/wheat-bran-2.jpeg";
import wheatBran3 from "../../../../public/images/wheat-bran/wheat-bran-3.jpeg";

/* —— Coal —— */
import hero22 from "../../../../public/images/heroimg/hero-22.png";
import hero24 from "../../../../public/images/heroimg/hero-24.png";

/* —— Shipping / vessels —— */
import hero03 from "../../../../public/images/heroimg/hero-03.png";
import hero11 from "../../../../public/images/heroimg/hero-11.png";
import hero13 from "../../../../public/images/heroimg/hero-13.png";
import hero14 from "../../../../public/images/heroimg/hero-14.png";
import hero19 from "../../../../public/images/heroimg/hero-19.png";
import ship1 from "../../../../public/images/bulk_chartering/bulk-chartering-1.jpeg";
import ship2 from "../../../../public/images/bulk_chartering/bulk-chartering-2.jpeg";
import ship3 from "../../../../public/images/bulk_chartering/bulk-chartering-3.jpeg";

type Slide = {
  src: StaticImageData;
  alt: string;
};

/**
 * Product groups stay consecutive in the marquee — never mixed.
 * Aggregate (ভুদার) first, then other products one after another.
 */
const productGroups: { label: string; slides: Slide[] }[] = [
  {
    label: "Aggregate",
    slides: [
      { src: gabbro1, alt: "Gabbro aggregate" },
      { src: gabbro2, alt: "Gabbro aggregate stockpile" },
      { src: gabbro3, alt: "Crushed gabbro" },
      { src: gabbro4, alt: "Gabbro aggregate close-up" },
      { src: gabbro5, alt: "Gabbro aggregate pile" },
      { src: limestone1, alt: "Limestone aggregate" },
      { src: limestone2, alt: "Crushed limestone" },
      { src: limestone3, alt: "Limestone stockpile" },
      { src: limestone4, alt: "Limestone close-up" },
      { src: hero06, alt: "Aggregate quarry stockpiles" },
      { src: hero09, alt: "Aggregate conveyor and piles" },
      { src: hero12, alt: "Aggregate quarry aerial" },
      { src: hero18, alt: "Aggregate processing site" },
    ],
  },
  {
    label: "Cotton",
    slides: [
      { src: hero04, alt: "Raw cotton in field" },
      { src: hero20, alt: "Cotton bolls" },
      { src: hero01, alt: "Cotton fiber" },
    ],
  },
  {
    label: "Soyabean",
    slides: [
      { src: hero05, alt: "Green soyabean pods" },
      { src: soy1, alt: "Soyabean seeds" },
      { src: soy2, alt: "Soyabean seeds close-up" },
      { src: soy3, alt: "Soyabean seeds bulk" },
      { src: hero07, alt: "Dried soyabeans" },
      { src: hero10, alt: "Soyabean seeds" },
    ],
  },
  {
    label: "Corn DDGS",
    slides: [
      { src: corn1, alt: "Corn DDGS" },
      { src: corn2, alt: "Corn kernels" },
      { src: corn3, alt: "Corn DDGS feed" },
      { src: corn4, alt: "Corn product" },
      { src: hero17, alt: "Corn kernels" },
      { src: hero23, alt: "Corn handling" },
      { src: hero21, alt: "Feed meal" },
    ],
  },
  {
    label: "Wheat",
    slides: [
      { src: hero15, alt: "Wheat crop" },
      { src: wheatBran1, alt: "Wheat bran" },
      { src: wheatBran2, alt: "Wheat bran close-up" },
      { src: wheatBran3, alt: "Wheat bran bulk" },
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
      { src: ship3, alt: "Bulk carrier" },
      { src: hero11, alt: "Bulk carrier at sea" },
      { src: hero14, alt: "Vessel aerial view" },
      { src: hero19, alt: "Bulk carrier sunrise" },
      { src: hero13, alt: "Bulk carrier" },
      { src: hero03, alt: "Port cargo handling" },
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
            duration: 100,
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
