"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

// ================== Image Imports ==================
import hero01 from "../../../../public/images/heroimg/hero-01.png";
import hero02 from "../../../../public/images/heroimg/hero-02.png";
import hero03 from "../../../../public/images/heroimg/hero-03.png";
import hero04 from "../../../../public/images/heroimg/hero-04.png";
import hero05 from "../../../../public/images/heroimg/hero-05.png";
import hero06 from "../../../../public/images/heroimg/hero-06.png";
import hero07 from "../../../../public/images/heroimg/hero-07.png";
import hero08 from "../../../../public/images/heroimg/hero-08.png";

import hero09 from "../../../../public/images/heroimg/hero-09.png";
import hero10 from "../../../../public/images/heroimg/hero-10.png";
import hero11 from "../../../../public/images/heroimg/hero-11.png";
import hero12 from "../../../../public/images/heroimg/hero-12.png";
import hero13 from "../../../../public/images/heroimg/hero-13.png";
import hero14 from "../../../../public/images/heroimg/hero-14.png";
import hero15 from "../../../../public/images/heroimg/hero-15.png";
import hero16 from "../../../../public/images/heroimg/hero-16.png";

import hero17 from "../../../../public/images/heroimg/hero-17.png";
import hero18 from "../../../../public/images/heroimg/hero-18.png";
import hero19 from "../../../../public/images/heroimg/hero-19.png";
import hero20 from "../../../../public/images/heroimg/hero-20.png";
import hero21 from "../../../../public/images/heroimg/hero-21.png";
import hero22 from "../../../../public/images/heroimg/hero-22.png";
import hero23 from "../../../../public/images/heroimg/hero-23.png";
import hero24 from "../../../../public/images/heroimg/hero-24.png";

type GroupImages = {
  img1: StaticImageData; // Column 1, top-left (145px)
  img2: StaticImageData; // Column 1, top-right (flex-1)
  img3: StaticImageData; // Column 1, bottom row (full width, 150px)
  img4: StaticImageData; // Column 2, single tall tile
  img5: StaticImageData; // Column 3, single tall tile
  img6: StaticImageData; // Column 4, top row (150px)
  img7: StaticImageData; // Column 4, bottom-left (flex-1)
  img8: StaticImageData; // Column 4, bottom-right (flex-1)
};

const setOne: GroupImages = {
  img1: hero01,
  img2: hero02,
  img3: hero03,
  img4: hero04,
  img5: hero05,
  img6: hero06,
  img7: hero07,
  img8: hero08,
};

const setTwo: GroupImages = {
  img1: hero09,
  img2: hero10,
  img3: hero11,
  img4: hero12,
  img5: hero13,
  img6: hero14,
  img7: hero15,
  img8: hero16,
};

const setThree: GroupImages = {
  img1: hero17,
  img2: hero18,
  img3: hero19,
  img4: hero20,
  img5: hero21,
  img6: hero22,
  img7: hero23,
  img8: hero24,
};

function ImageGroup({ images }: { images: GroupImages }) {
  return (
    // কলামগুলোর মধ্যকার গ্যাপ 16px (gap-4)
    <div className="flex shrink-0 items-stretch gap-4">

      {/* Column 1: total height 410px (244px + 150px + 16px gap = 410px) */}
      <div className="flex h-[410px] w-[352px] shrink-0 flex-col gap-4">
        {/* Top row: 244px */}
        <div className="flex h-[244px] gap-4 shrink-0">
          <div className="relative h-full w-[145px] overflow-hidden">
            <Image
              src={images.img1}
              alt=""
              fill
              className="object-cover"
              sizes="145px"
            />
          </div>
          <div className="relative h-full flex-1 overflow-hidden">
            <Image
              src={images.img2}
              alt=""
              fill
              className="object-cover"
              sizes="191px"
            />
          </div>
        </div>
        {/* Bottom row: 150px */}
        <div className="relative h-[150px] w-full overflow-hidden shrink-0">
          <Image
            src={images.img3}
            alt=""
            fill
            className="object-cover"
            sizes="352px"
          />
        </div>
      </div>

      {/* Column 2: single tall tile (410px) */}
      <div className="relative h-[410px] w-[260px] shrink-0 overflow-hidden">
        <Image
          src={images.img4}
          alt=""
          fill
          className="object-cover"
          sizes="260px"
        />
      </div>

      {/* Column 3: single tall tile (410px) */}
      <div className="relative h-[410px] w-[260px] shrink-0 overflow-hidden">
        <Image
          src={images.img5}
          alt=""
          fill
          className="object-cover"
          sizes="260px"
        />
      </div>

      {/* Column 4: total height 410px (150px + 244px + 16px gap = 410px) */}
      <div className="flex h-[410px] w-[398px] shrink-0 flex-col gap-4">
        {/* Top row: 150px */}
        <div className="relative h-[150px] w-full overflow-hidden shrink-0">
          <Image
            src={images.img6}
            alt=""
            fill
            className="object-cover"
            sizes="398px"
          />
        </div>
        {/* Bottom row: 244px */}
        <div className="flex h-[244px] gap-4 shrink-0">
          <div className="relative h-full flex-1 overflow-hidden">
            <Image
              src={images.img7}
              alt=""
              fill
              className="object-cover"
              sizes="191px"
            />
          </div>
          <div className="relative h-full flex-1 overflow-hidden">
            <Image
              src={images.img8}
              alt=""
              fill
              className="object-cover"
              sizes="191px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------- */
/* Hero image marquee                 */
/* ---------------------------------- */

const HeroImage = () => {
  return (
    <div className="relative w-full overflow-hidden pt-[75px]">
      <div className="relative z-10 w-full overflow-hidden">
        {/* প্রতিটি ImageGroup সেটের মাঝেও 16px (gap-4) রাখা হয়েছে */}
        <motion.div
          className="flex w-max gap-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* First pass through all 3 sets... */}
          <ImageGroup images={setOne} />
          <ImageGroup images={setTwo} />
          <ImageGroup images={setThree} />
          {/* ...duplicated exactly once more so the -50% loop is seamless */}
          <ImageGroup images={setOne} />
          <ImageGroup images={setTwo} />
          <ImageGroup images={setThree} />
        </motion.div>
      </div>

      {/* Top-to-bottom overlay */}
      <div className="pointer-events-none absolute inset-0 z-30" />
    </div>
  );
};

export default HeroImage;
