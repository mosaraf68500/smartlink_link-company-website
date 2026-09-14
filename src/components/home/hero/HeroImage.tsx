// "use client";
// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import bannerImage1 from "../../../../public/images/banner/Rectangle 1.png";
// import bannerImage2 from "../../../../public/images/banner/Rectangle 2.png";
// import bannerImage3 from "../../../../public/images/banner/Rectangle 3.png";
// import bannerImage4 from "../../../../public/images/banner/Rectangle 5.png";
// import bannerImage5 from "../../../../public/images/banner/Rectangle 6.png";
// import bannerImage6 from "../../../../public/images/banner/Rectangle 7.png";
// import bannerImage7 from "../../../../public/images/banner/Rectangle 8.png";
// import bannerImage8 from "../../../../public/images/banner/Rectangle 9.png";

// // ==================new image ==================

// // h-[410px] w-[352px]
// // w-[145px] photo gulo hobe , row 1= pic 1 and 2
// // import akash from "../../../../public/images/banner/heroimg/";
// import saf from "../../../../public/images/heroimg/saf.png";
// import sitebarialap from "../../../../public/images/heroimg/sitebarialap.png";
// import shahriar from "../../../../public/images/heroimg/shahriar.png";
// import omar from "../../../../public/images/heroimg/omar.png";
// import naim from "../../../../public/images/heroimg/naim.png";
// import akash from "../../../../public/images/heroimg/akash.png";
// // {/* Bottom row: 150px (244 + 150 + 16 gap = 410px) */} h-[150px]
  
// import rafi from "../../../../public/images/heroimg/raficover.png";
// import samnerrom from "../../../../public/images/heroimg/samnerrroom.png";
// import intern from "../../../../public/images/heroimg/intern.png";






// // {/* Column 2: single tall tile (410px) */ } and
// //       {/* Column 3: single tall tile (410px) */}
// import rooms from "../../../../public/images/heroimg/roomacounts.png";
// import tarikul from "../../../../public/images/heroimg/tarikulful.png";
// import lacchi from "../../../../public/images/heroimg/lacchi.png";
// import roomm from "../../../../public/images/heroimg/roomm.png";
// import biday from "../../../../public/images/heroimg/cakebiday.png";
// import monir from "../../../../public/images/heroimg/monirful.png";

// import cake from "../../../../public/images/heroimg/birthday.png";
// import tariql from "../../../../public/images/heroimg/tarikul.png";
// import nion from "../../../../public/images/heroimg/nion.png";
// import abdullah from "../../../../public/images/heroimg/abdullah.png";

// //       {/* Column 4: total height 410px */}       {/* Top row: 150px */}
// import sobuj from "../../../../public/images/heroimg/sobuj.png";
// import samnerrrom from "../../../../public/images/heroimg/roommain.png";



// // {/* Bottom row: 244px */}  sizes="190px"
// import hafsaeva from "../../../../public/images/heroimg/hafsaeva.png";
// import mosa from "../../../../public/images/heroimg/mosa.png";
// import iran from "../../../../public/images/heroimg/iran.png";
// import bayjid from "../../../../public/images/heroimg/baizid.png";

// function ImageGroup() {
//   return (
//     <div className="flex shrink-0 items-stretch gap-3 px-1.5">
//       {/* Column 1: total height 410px */}
//       <div className="flex  h-[410px] w-[352px] shrink-0 flex-col gap-4">
//         {/* Top row: 244px */}
//         <div className="flex border-black h-[244px] gap-4 shrink-0">
//           <div className="relative h-full w-[145px] overflow-hidden">
//             <Image
//               src={bannerImage1}
//               alt=""
//               fill
//               className="object-cover"
//               sizes="145px"
//             />
//           </div>
//           <div className="relative  h-full flex-1 overflow-hidden">
//             <Image
//               src={bannerImage2}
//               alt=""
//               fill
//               className="object-cover"
//               sizes="190px"
//             />
//           </div>
//         </div>
//         {/* Bottom row: 150px (244 + 150 + 16 gap = 410px) */}
//         <div className="relative border-8 h-[150px] w-full overflow-hidden shrink-0">
//           <Image
//             src={bannerImage3}
//             alt=""
//             fill
//             className="object-cover"
//             sizes="352px"
//           />
//         </div>
//       </div>

//       {/* Column 2: single tall tile (410px) */}
//       <div className="relative  h-[410px]  w-[260px] shrink-0 overflow-hidden">
//         <Image
//           src={bannerImage4}
//           alt=""
//           fill
//           className="object-cover"
//           sizes="260px"
//         />
//       </div>

//       {/* Column 3: single tall tile (410px) */}
//       <div className="relative  h-[410px] w-[260px] shrink-0 overflow-hidden">
//         <Image
//           src={bannerImage5}
//           alt=""
//           fill
//           className="object-cover"
//           sizes="260px"
//         />
//       </div>

//       {/* Column 4: total height 410px */}
//       <div className="flex h-[410px]  w-[398px] shrink-0 flex-col gap-4">
//         {/* Top row: 150px */}
//         <div className="relative  h-[150px] w-full overflow-hidden shrink-0">
//           <Image
//             src={bannerImage6}
//             alt=""
//             fill
//             className="object-cover"
//             sizes="398px"
//           />
//         </div>
//         {/* Bottom row: 244px */}
//         <div className="flex h-[244px] gap-3 shrink-0">
//           <div className="relative  h-full flex-1 overflow-hidden">
//             <Image
//               src={bannerImage7}
//               alt=""
//               fill
//               className="object-cover"
//               sizes="190px"
//             />
//           </div>
//           <div className="relative h-full flex-1 overflow-hidden">
//             <Image
//               src={bannerImage8}
//               alt=""
//               fill
//               className="object-cover"
//               sizes="190px"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ---------------------------------- */
// /* Hero image marquee                 */
// /* ---------------------------------- */

// const HeroImage = () => {
//   return (
//     <div className="relative w-full overflow-hidden pt-[75px]">
//       <div className="relative z-10 w-full overflow-hidden">
//         <motion.div
//           className="flex w-max"
//           animate={{ x: ["0%", "-50%"] }}
//           transition={{
//             duration: 40,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//         >
//           <ImageGroup />
//           <ImageGroup />
//           <ImageGroup />
//           <ImageGroup />
//         </motion.div>
//       </div>

//       {/* Top-to-bottom overlay */}
//       <div
//         className="pointer-events-none absolute inset-0 z-30"
//         style={{
//           background:
//             "linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0) 80%)",
//         }}
//       />
//     </div>
//   );
// };

// export default HeroImage;
// "use client";
// import React from "react";
// import Image, { StaticImageData } from "next/image";
// import { motion } from "framer-motion";

// // ==================new image ==================

// // h-[410px] w-[352px]
// // w-[145px] photo gulo hobe , row 1= pic 1 and 2
// import saf from "../../../../public/images/heroimg/saf.png";
// import sitebarialap from "../../../../public/images/heroimg/sitebarialap.png";
// import shahriar from "../../../../public/images/heroimg/shahriar.png";
// import omar from "../../../../public/images/heroimg/omar.png";
// import naim from "../../../../public/images/heroimg/naim.png";
// import akash from "../../../../public/images/heroimg/akash.png";
// // {/* Bottom row: 150px (244 + 150 + 16 gap = 410px) */} h-[150px]

// import rafi from "../../../../public/images/heroimg/raficover.png";
// import samnerrom from "../../../../public/images/heroimg/samnerrroom.png";
// import intern from "../../../../public/images/heroimg/intern.png";

// // {/* Column 2: single tall tile (410px) */ } and
// //       {/* Column 3: single tall tile (410px) */}
// import rooms from "../../../../public/images/heroimg/roomacounts.png";
// import tarikul from "../../../../public/images/heroimg/tarikulful.png";
// import lacchi from "../../../../public/images/heroimg/lacchi.png";
// import roomm from "../../../../public/images/heroimg/roomm.png";
// import biday from "../../../../public/images/heroimg/cakebiday.png";
// import monir from "../../../../public/images/heroimg/monirful.png";

// import cake from "../../../../public/images/heroimg/birthday.png";
// import tariql from "../../../../public/images/heroimg/tarikul.png";
// import nion from "../../../../public/images/heroimg/nion.png";
// import abdullah from "../../../../public/images/heroimg/abdullah.png";

// //       {/* Column 4: total height 410px */}       {/* Top row: 150px */}
// import sobuj from "../../../../public/images/heroimg/sobuj.png";
// import samnerrrom from "../../../../public/images/heroimg/roommain.png";

// // {/* Bottom row: 244px */}  sizes="190px"
// import hafsaeva from "../../../../public/images/heroimg/hafsaeva.png";
// import mosa from "../../../../public/images/heroimg/mosa.png";
// import iran from "../../../../public/images/heroimg/iran.png";
// import bayjid from "../../../../public/images/heroimg/baizid.png";


// type GroupImages = {
//   img1: StaticImageData; // Column 1, top-left (145px)
//   img2: StaticImageData; // Column 1, top-right (flex-1)
//   img3: StaticImageData; // Column 1, bottom row (full width, 150px)
//   img4: StaticImageData; // Column 2, single tall tile
//   img5: StaticImageData; // Column 3, single tall tile
//   img6: StaticImageData; // Column 4, top row (150px)
//   img7: StaticImageData; // Column 4, bottom-left (flex-1)
//   img8: StaticImageData; // Column 4, bottom-right (flex-1)
// };

// const setOne: GroupImages = {
//   img1: saf,
//   img2: nion,
//   img3: rafi,
//   img4: rooms,
//   img5: tarikul,
//   img6: sitebarialap,
//   img7: hafsaeva,
//   img8: mosa,
// };

// const setTwo: GroupImages = {
//   img1: shahriar,
//   img2: omar,
//   img3: samnerrom,
//   img4: lacchi,
//   img5: roomm,
//   img6: sobuj,
//   img7: iran,
//   img8: bayjid,
// };

// const setThree: GroupImages = {
//   img1: naim,
//   img2: akash,
//   img3: intern,
//   img4: biday,
//   img5: monir,
//   img6: samnerrom,
//   img7: abdullah,
//   img8: cake,
// };

// // samnerrrom kept available as a spare too, in case you'd rather swap
// // it in for one of the slots above (e.g. in place of `sobuj`).
// void samnerrrom;

// function ImageGroup({ images }: { images: GroupImages }) {
//   return (
//     <div className="flex shrink-0 items-stretch gap-3 px-1.5">
//       {/* Column 1: total height 410px */}
//       <div className="flex  h-[410px] w-[352px] shrink-0 flex-col gap-4">
//         {/* Top row: 244px */}
//         <div className="flex border-black h-[244px] gap-4 shrink-0">
//           <div className="relative h-full w-[145px] overflow-hidden">
//             <Image
//               src={images.img1}
//               alt=""
//               fill
//               className="object-cover"
//               sizes="145px"
//             />
//           </div>
//           <div className="relative  h-full flex-1 overflow-hidden">
//             <Image
//               src={images.img2}
//               alt=""
//               fill
//               className="object-cover"
//               sizes="190px"
//             />
//           </div>
//         </div>
//         {/* Bottom row: 150px (244 + 150 + 16 gap = 410px) */}
//         <div className="relative  h-[150px] w-full overflow-hidden shrink-0">
//           <Image
//             src={images.img3}
//             alt=""
//             fill
//             className="object-cover"
//             sizes="352px"
//           />
//         </div>
//       </div>

//       {/* Column 2: single tall tile (410px) */}
//       <div className="relative  h-[410px]  w-[260px] shrink-0 overflow-hidden">
//         <Image
//           src={images.img4}
//           alt=""
//           fill
//           className="object-cover"
//           sizes="260px"
//         />
//       </div>

//       {/* Column 3: single tall tile (410px) */}
//       <div className="relative  h-[410px] w-[260px] shrink-0 overflow-hidden">
//         <Image
//           src={images.img5}
//           alt=""
//           fill
//           className="object-cover"
//           sizes="260px"
//         />
//       </div>

//       {/* Column 4: total height 410px */}
//       <div className="flex h-[410px]  w-[398px] shrink-0 flex-col gap-4">
//         {/* Top row: 150px */}
//         <div className="relative  h-[150px] w-full overflow-hidden shrink-0">
//           <Image
//             src={images.img6}
//             alt=""
//             fill
//             className="object-cover"
//             sizes="398px"
//           />
//         </div>
//         {/* Bottom row: 244px */}
//         <div className="flex h-[244px] gap-3 shrink-0">
//           <div className="relative  h-full flex-1 overflow-hidden">
//             <Image
//               src={images.img7}
//               alt=""
//               fill
//               className="object-cover"
//               sizes="190px"
//             />
//           </div>
//           <div className="relative h-full flex-1 overflow-hidden">
//             <Image
//               src={images.img8}
//               alt=""
//               fill
//               className="object-cover"
//               sizes="190px"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ---------------------------------- */
// /* Hero image marquee                 */
// /* ---------------------------------- */

// const HeroImage = () => {
//   return (
//     <div className="relative w-full overflow-hidden pt-[75px]">
//       <div className="relative z-10 w-full overflow-hidden">
//         <motion.div
//           className="flex w-max"
//           animate={{ x: ["0%", "-50%"] }}
//           transition={{
//             duration: 40,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//         >
//           {/* First pass through all 3 sets... */}
//           <ImageGroup images={setOne} />
//           <ImageGroup images={setTwo} />
//           <ImageGroup images={setThree} />
//           {/* ...duplicated exactly once more so the -50% loop is seamless */}
//           <ImageGroup images={setOne} />
//           <ImageGroup images={setTwo} />
//           <ImageGroup images={setThree} />
//         </motion.div>
//       </div>

//       {/* Top-to-bottom overlay */}
//       <div
//         className="pointer-events-none absolute inset-0 z-30"
//         // style={{
//         //   background:
//         //     "linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0) 80%)",
//         // }}
//       />
//     </div>
//   );
// };

// export default HeroImage;




"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

// ================== Image Imports ==================
import saf from "../../../../public/images/heroimg/saf.png";
import sitebarialap from "../../../../public/images/heroimg/sitebarialap.png";
import shahriar from "../../../../public/images/heroimg/shahriar.png";
import omar from "../../../../public/images/heroimg/omar.png";
import naim from "../../../../public/images/heroimg/naim.png";
import akash from "../../../../public/images/heroimg/akash.png";

import rafi from "../../../../public/images/heroimg/raficover.png";
import samnerrom from "../../../../public/images/heroimg/samnerrroom.png";
import intern from "../../../../public/images/heroimg/intern.png";

import rooms from "../../../../public/images/heroimg/roomacounts.png";
import tarikul from "../../../../public/images/heroimg/tarikulful.png";
import lacchi from "../../../../public/images/heroimg/lacchi.png";
import roomm from "../../../../public/images/heroimg/roomm.png";
import biday from "../../../../public/images/heroimg/cakebiday.png";
import monir from "../../../../public/images/heroimg/monirful.png";

import cake from "../../../../public/images/heroimg/birthday.png";
import nion from "../../../../public/images/heroimg/nion.png";
import abdullah from "../../../../public/images/heroimg/abdullah.png";

import sobuj from "../../../../public/images/heroimg/sobuj.png";
import samnerrrom from "../../../../public/images/heroimg/roommain.png";

import hafsaeva from "../../../../public/images/heroimg/hafsaeva.png";
import mosa from "../../../../public/images/heroimg/mosa.png";
import iran from "../../../../public/images/heroimg/iran.png";
import bayjid from "../../../../public/images/heroimg/baizid.png";

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
  img1: saf,
  img2: nion,
  img3: rafi,
  img4: rooms,
  img5: tarikul,
  img6: intern,
  img7: hafsaeva,
  img8: mosa,
};

const setTwo: GroupImages = {
  img1: shahriar,
  img2: omar,
  img3: samnerrom,
  img4: lacchi,
  img5: roomm,
  img6: sobuj,
  img7: iran,
  img8: bayjid,
};

const setThree: GroupImages = {
  img1: naim,
  img2: akash,
  img3: intern,
  img4: biday,
  img5: monir,
  img6: samnerrom,
  img7: abdullah,
  img8: cake,
};

void samnerrrom;

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
        {/* প্রতিটি ImageGroup সেটের মাঝেও 16px (gap-4) রাখা হয়েছে */}
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