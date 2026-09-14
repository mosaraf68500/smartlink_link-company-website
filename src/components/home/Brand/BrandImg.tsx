// import Image, { type StaticImageData } from "next/image";
// import rizik from "../../../../public/images/brand/Rizik.png";
// import jamuna from "../../../../public/images/brand/Jamuna.png";
// import azan from "../../../../public/images/brand/Azan.png";

// const localClients: {
//   name: string;
//   city: string;
//   result: string;
//   logo: StaticImageData;
// }[] = [
//   {
//     name: "Rizik",
//     city: "Barishal",
//     result: "Online orders increased after new website.",
//     logo: rizik,
//   },
//   {
//     name: "Azan",
//     city: "Barishal",
//     result: "More customers found them through Google after launch.",
//     logo: azan,
//   },
//   {
//     name: "Jamuna",
//     city: "Barishal",
//     result: "Fresh brand design helped them compete with bigger shops.",
//     logo: jamuna,
//   },
// ];

// const officePhotos = [
//   {
//     src: "/culture/office-1.png",
//     alt: "AdsFixter Barishal office workspace",
//     caption: "Our Barishal office",
//   },
//   {
//     src: "/culture/team-meeting.png",
//     alt: "AdsFixter team meeting in Barishal",
//     caption: "Team at work",
//   },
//   {
//     src: "/culture/team-1.png",
//     alt: "AdsFixter team member at Barishal office",
//     caption: "The people behind your project",
//   },
// ];

// const BrandImg = () => {
//   return (
//     <div className="container mx-auto mt-8 px-4 md:px-6">
//       <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
//         {localClients.map((client) => (
//           <div
//             key={client.name}
//             className="flex flex-col items-center rounded-2xl border border-[#E5E7EB] bg-white px-6 py-8 text-center"
//           >
//             <div className="relative mb-5 h-16 w-40 sm:h-20 sm:w-48">
//               <Image
//                 src={client.logo}
//                 alt={`${client.name} logo`}
//                 fill
//                 className="object-contain"
//                 sizes="(max-width: 640px) 160px, 192px"
//               />
//             </div>
//             <p className="font-bricolage text-lg font-medium text-[#112420]">
//               {client.name} — {client.city}
//             </p>
//             <p className="mt-2 font-jakarta text-sm text-[#626262] sm:text-base">
//               {client.result}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BrandImg;
// "use client";

// import Image, { type StaticImageData } from "next/image";
// import { motion } from "framer-motion";
// import one from "../../../../public/images/brand/1.svg";
// import two from "../../../../public/images/brand/2.svg";
// import three from "../../../../public/images/brand/3.svg";
// import four from "../../../../public/images/brand/4.svg";
// import five from "../../../../public/images/brand/5.svg";
// import six from "../../../../public/images/brand/6.png";
// import seven from "../../../../public/images/brand/7.svg";
// import eight from "../../../../public/images/brand/8.svg";
// import nine from "../../../../public/images/brand/9.png";
// import ten from "../../../../public/images/brand/10.png";
// import eleven from "../../../../public/images/brand/11.svg";
// import twelve from "../../../../public/images/brand/12.svg";
// import thirteen from "../../../../public/images/brand/13.svg";
// import fourteen from "../../../../public/images/brand/14.svg";
// import fifteen from "../../../../public/images/brand/15.svg";
// import sixteen from "../../../../public/images/brand/16.png";
// import seventeen from "../../../../public/images/brand/17.svg";

// const localClients: {
//   name: string;
//   result: string;
//   logo: StaticImageData;
// }[] = [
//   {
//     name: "Rijik Limited",
//     result: "rijiklimited.com",
//     logo: one,
//   },
//   {
//     name: "Azan Food",
//     result: "azanfood.com",
//     logo: two,
//   },
//   {
//     name: "Jamima Mart",
//     result: "jamimamart.com",
//     logo: three,
//   },
//   {
//     name: "FOLLOW FASHION",
//     result: "followfashion.com.bd",
//     logo: four,
//   },
//   {
//     name: "Glamify BD",
//     result: "glamifybd.com",
//     logo: five,
//   },
//   {
//     name: "Skynet Academy",
//     result: "skynetcyberacademy.com",
//     logo: six,
//   },
//   {
//     name: "ENZO TIMELESS",
//     result: "enzotimeless.com",
//     logo: seven,
//   },
//   {
//     name: "Fellas Fashion",
//     result: "fellasbd.com",
//     logo: eight,
//   },
//   {
//     name: "Gulshan Brand",
//     result: "gulshanbrand.com",
//     logo: nine,
//   },
//   {
//     name: "Fashion Zone",
//     result: "fashionzonebd.com",
//     logo: ten,
//   },
//   {
//     name: "Dighal",
//     result: "dighalbd.com",
//     logo: eleven,
//   },
//   {
//     name: "Vidmox",
//     result: "vidmox.online",
//     logo: twelve,
//   },
//   {
//     name: "Rayhan Shop",
//     result: "rayhanshop.org",
//     logo: thirteen,
//   },
//   {
//     name: "Silverozze",
//     result: "silverozze.com",
//     logo: fourteen,
//   },
//   {
//     name: "Strategix Digital",
//     result: "strategix.digital",
//     logo: fifteen,
//   },
//   {
//     name: "Unimax Ind. Ltd.",
//     result: "unimax.com.bd",
//     logo: sixteen,
//   },
//   {
//     name: "Sports Arena",
//     result: "thesportsarena.xyz",
//     logo: seventeen,
//   },
// ];

// const BrandImg = () => {
//   // Infinite seamless loop-er jonno 4 bar repeat kora hoyeche
//   const duplicatedClients = [
//     ...localClients,
//     ...localClients,
//     ...localClients,
//     ...localClients,
//   ];

//   return (
//     <div className="mx-auto mt-8 w-full overflow-hidden px-4 md:px-6">
// <motion.div
//   className="flex w-max gap-6 md:gap-8"
//   animate={{ x: ["-50%", "0%"] }}
//   transition={{
//     ease: "linear",
//     duration: 60, // 25 এর জায়গায় 60 বা 80 দিলে অনেক স্লো ও স্মুথ হয়ে যাবে
//     repeat: Infinity,
//   }}
// >
//         {duplicatedClients.map((client, index) => (
//           <div
//             key={`${client.name}-${index}`}
//             className="flex min-w-[280px] flex-shrink-0 flex-col items-center rounded-2xl border border-[#E5E7EB] bg-white px-6 py-8 text-center sm:min-w-[350px]"
//           >
//             <div className="relative mb-5 h-16 w-40 sm:h-20 sm:w-48">
//               <Image
//                 src={client.logo}
//                 alt={`${client.name} logo`}
//                 fill
//                 className="object-contain"
//                 sizes="(max-width: 640px) 160px, 192px"
//               />
//             </div>
//             <p className="font-bricolage text-lg font-medium text-[#112420]">
//               {client.name}
//             </p>
//             <p className="mt-2 font-jakarta text-sm text-[#626262] sm:text-base">
//               {client.result}
//             </p>
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default BrandImg;

"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

import logo1 from "../../../../public/images/brand/Logo/Logo 01.png";
import logo2 from "../../../../public/images/brand/Logo/Logo 02.png";
import logo3 from "../../../../public/images/brand/Logo/Logo 03.png";
import logo4 from "../../../../public/images/brand/Logo/Logo 04.png";
import logo5 from "../../../../public/images/brand/Logo/Logo 05.png";
import logo6 from "../../../../public/images/brand/Logo/Logo 06.png";
import logo7 from "../../../../public/images/brand/Logo/Logo 07.png";
import logo8 from "../../../../public/images/brand/Logo/Logo 08.png";
import logo9 from "../../../../public/images/brand/Logo/Logo 09.png";
import logo10 from "../../../../public/images/brand/Logo/Logo 10.png";
import logo11 from "../../../../public/images/brand/Logo/Logo 11.png";
import logo12 from "../../../../public/images/brand/Logo/Logo 12.png";
import logo13 from "../../../../public/images/brand/Logo/Logo 13.png";
import logo14 from "../../../../public/images/brand/Logo/Logo 14.png";
import logo15 from "../../../../public/images/brand/Logo/Logo 15.png";
import logo16 from "../../../../public/images/brand/Logo/Logo 16.png";
import logo17 from "../../../../public/images/brand/Logo/Logo 17.png";
import logo18 from "../../../../public/images/brand/Logo/Logo 18.png";
import logo19 from "../../../../public/images/brand/Logo/Logo 19.png";
import logo20 from "../../../../public/images/brand/Logo/Logo 20.png";
import logo21 from "../../../../public/images/brand/Logo/Logo 21.png";
import logo22 from "../../../../public/images/brand/Logo/Logo 22.png";
import logo23 from "../../../../public/images/brand/Logo/Logo 23.png";
import logo24 from "../../../../public/images/brand/Logo/Logo 24.png";
import logo25 from "../../../../public/images/brand/Logo/Logo 25.png";
import logo26 from "../../../../public/images/brand/Logo/Logo 26.png";
import logo27 from "../../../../public/images/brand/Logo/Logo 27.png";
import logo28 from "../../../../public/images/brand/Logo/Logo 28.png";
import logo29 from "../../../../public/images/brand/Logo/Logo 29.png";
import logo30 from "../../../../public/images/brand/Logo/Logo 30.png";
import logo31 from "../../../../public/images/brand/Logo/Logo 31.png";
import logo32 from "../../../../public/images/brand/Logo/Logo 32.png";

const allLogos: StaticImageData[] = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  logo12,
  logo13,
  logo14,
  logo15,
  logo16,
  logo17,
  logo18,
  logo20,
  logo21,
  logo22,
  logo23,
  logo24,
  logo25,
  logo26,
  logo27,
  logo28,
  logo29,
  logo30,
  logo31,
];

const rows: StaticImageData[][] = [
  allLogos.slice(0, 10),
  allLogos.slice(11, 20),
  allLogos.slice(21, 30),
];

// ১ম সারি: ltr (বাম থেকে ডানে)
// ২য় সারি: rtl (ডান থেকে বামে)
const directions: ("ltr" | "rtl")[] = ["ltr", "rtl"];

function LogoRow({
  logos,
  direction,
  speed,
}: {
  logos: StaticImageData[];
  direction: "ltr" | "rtl";
  speed: number;
}) {
  const REPEAT = 4;
  const trackLogos = Array.from({ length: REPEAT }, () => logos).flat();
  const shiftPercent = 100 / REPEAT;

  return (
    <div
      className="relative w-full overflow-hidden py-3 container"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 80%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 80%, transparent)",
      }}
    >
      <motion.div
        className="flex w-max items-center gap-[20px] sm:gap-14"
        animate={{
          x:
            direction === "rtl"
              ? ["0%", `-${shiftPercent}%`]
              : [`-${shiftPercent}%`, "0%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        {trackLogos.map((logo, i) => (
          <div key={i} className="relative h-6 w-24 shrink-0 sm:h-8 sm:w-30">
            <Image
              src={logo}
              alt=""
              fill
              className="object-contain"
              sizes="144px"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

const BrandImg = () => {
  return (
    <div className="mx-auto mt-8  flex w-full flex-col gap-6 overflow-hidden">
      {rows.map((rowLogos, i) => (
        <LogoRow
          key={i}
          logos={rowLogos}
          direction={directions[i]}
          speed={32 + i * 5}
        />
      ))}
    </div>
  );
};

export default BrandImg;