"use client";

import React from "react";
import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";
import aeFlag from "../../../../public/flags/ae.png";
import omFlag from "../../../../public/flags/om.png";
import thFlag from "../../../../public/flags/th.png";
import cnFlag from "../../../../public/flags/cn.png";
import inFlag from "../../../../public/flags/in.png";
import saFlag from "../../../../public/flags/sa.png";
import egFlag from "../../../../public/flags/eg.png";
import idFlag from "../../../../public/flags/id.png";
import zaFlag from "../../../../public/flags/za.png";
import auFlag from "../../../../public/flags/au.png";

type CountryFlag = {
  name: string;
  flagSrc: StaticImageData;
};

const sourceCountriesRow1: CountryFlag[] = [
  { name: "UAE", flagSrc: aeFlag },
  { name: "Oman", flagSrc: omFlag },
  { name: "Thailand", flagSrc: thFlag },
  { name: "China", flagSrc: cnFlag },
  { name: "India", flagSrc: inFlag },
];

const sourceCountriesRow2: CountryFlag[] = [
  { name: "Saudi Arabia", flagSrc: saFlag },
  { name: "Egypt", flagSrc: egFlag },
  { name: "Indonesia", flagSrc: idFlag },
  { name: "South Africa", flagSrc: zaFlag },
  { name: "Australia", flagSrc: auFlag },
];

function FlagPill({ name, flagSrc }: CountryFlag) {
  return (
    <div className="mx-2 sm:mx-3 flex shrink-0 items-center gap-2.5 rounded-full border border-[#E2E2E2] bg-white px-4 py-2.5 sm:gap-3 sm:px-5 sm:py-3">
      <div className="relative h-6 w-6 shrink-0 overflow-hidden rounded-full sm:h-8 sm:w-8">
        <Image
          src={flagSrc}
          alt={`${name} flag`}
          fill
          className="object-cover"
          sizes="32px"
        />
      </div>
      <span className="whitespace-nowrap font-jakarta text-sm text-[#112420] sm:text-base">
        {name}
      </span>
    </div>
  );
}

function ToolRow({
  items,
  direction,
  bottomBorder,
}: {
  items: CountryFlag[];
  direction: "ltr" | "rtl";
  bottomBorder?: boolean;
}) {
  const animate =
    direction === "ltr" ? { x: ["-50%", "0%"] } : { x: ["0%", "-50%"] };

  return (
    <div
      className={`relative w-full overflow-hidden ${
        bottomBorder ? "border-b border-[#E2E2E2]" : ""
      }`}
    >
      <motion.div
        className="flex w-max items-center py-3"
        animate={animate}
        transition={{
          duration: 100,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <FlagPill key={i} name={item.name} flagSrc={item.flagSrc} />
        ))}
      </motion.div>

      {/* Wider Left Edge Shadow/Fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-32 md:w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />

      {/* Wider Right Edge Shadow/Fade */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-32 md:w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />
    </div>
  );
}

const SectionTools = () => {
  return (
    <div className="">
      <div className="">
        <ToolRow items={sourceCountriesRow1} direction="ltr" />
        <ToolRow items={sourceCountriesRow2} direction="rtl" bottomBorder />
      </div>
    </div>
  );
};

export default SectionTools;