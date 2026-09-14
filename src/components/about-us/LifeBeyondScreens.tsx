
// "use client";

// import Image from "next/image";
// import PrimaryButton from "../ui/PrimaryButton";
// import SectionHeader from "../shared/SectionHeader";
// import Link from "next/link";


// // big images
// import l1 from "../../../public/images/life/3menb.png"
// import l2 from "../../../public/images/life/accountb.png"
// import l3 from "../../../public/images/life/apub.png"
// import l4 from "../../../public/images/life/biadyb.png"
// import l5 from "../../../public/images/life/roommarketingb.png"
// import l6 from "../../../public/images/life/vangab.png"

// // small images
// import l7 from "../../../public/images/life/hapus.png"
// import l8 from "../../../public/images/life/mizanurs.png"
// import l9 from "../../../public/images/life/mosass.png"
// import l10 from "../../../public/images/life/shahriars.png"
// import l11 from "../../../public/images/life/tarikuls.png"
// import l12 from "../../../public/images/life/mosas.png"

// interface StripImage {
//   src: string;
//   alt: string;
//   height: number;
// }

// const images: StripImage[] = [
//   { src: "/culture/office-1.png", alt: "Office workspace", height: 400 },
//   { src: "/culture/team-1.png", alt: "Team member at desk", height: 280 },
//   { src: "/culture/team-2.png", alt: "Team member working", height: 400 },
//   { src: "/culture/team-3.png", alt: "Team member smiling", height: 280 },
//   { src: "/culture/office-2.png", alt: "Office interior", height: 400 },
// ];

// function Strip() {
//   const maxHeight = Math.max(...images.map((img) => img.height));

//   return (
//     <>
//       {images.map((img, i) => (
//         <div
//           key={i}
//           className="flex shrink-0 items-center justify-center"
//           style={{ height: maxHeight }}
//         >
//           <div
//             className="relative w-[300px] overflow-hidden"
//             style={{ height: img.height }}
//           >
//             <Image
//               src={img.src}
//               alt={img.alt}
//               fill
//               className="object-cover"
//               sizes="300px"
//             />
//           </div>
//         </div>
//       ))}
//     </>
//   );
// }

// export default function LifeBeyondScreens() {
//   return (
//     <section className="py-12 md:py-20">
//       <SectionHeader
//         title="Life Beyond the Screens"
//         description="Behind every product is a passionate team. Explore the people, culture, and moments that inspire how we collaborate, innovate, and grow together."
//         titleClassName="max-w-[500px]"
//       >
//         <Link href="#career">
//           <PrimaryButton>Join our team</PrimaryButton>
//         </Link>
//       </SectionHeader>

//       <div
//         className="relative mx-auto mt-12 w-full overflow-hidden"
//         style={{
//           maskImage:
//             "linear-gradient(to right, transparent, black 3%, black 97%, transparent)",
//           WebkitMaskImage:
//             "linear-gradient(to right, transparent, black 3%, black 97%, transparent)",
//         }}
//       >
//         <div className="marquee-track flex w-max gap-4 sm:gap-6">
//           <Strip />
//           <Strip />
//         </div>
//       </div>

//       <style jsx>{`
//         .marquee-track {
//           animation: marquee-scroll 30s linear infinite;
//           will-change: transform;
//           backface-visibility: hidden;
//         }
//         @keyframes marquee-scroll {
//           0% {
//             transform: translate3d(0, 0, 0);
//           }
//           100% {
//             transform: translate3d(-50%, 0, 0);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }


"use client";

import Image, { StaticImageData } from "next/image";
import SectionHeader from "../shared/SectionHeader";

// big images
import l1 from "../../../public/images/life/3menb.png";
import l2 from "../../../public/images/life/accountb.png";
import l3 from "../../../public/images/life/apub.png";
import l4 from "../../../public/images/life/biadyb.png";
import l5 from "../../../public/images/life/roommarketingb.png";
import l6 from "../../../public/images/life/vangab.png";

// small images
import l7 from "../../../public/images/life/hapus.png";
import l8 from "../../../public/images/life/mizanurs.png";
import l9 from "../../../public/images/life/mosass.png";
import l10 from "../../../public/images/life/shahriars.png";
import l11 from "../../../public/images/life/tarikuls.png";
import l12 from "../../../public/images/life/mosas.png";

interface StripImage {
  src: StaticImageData;
  alt: string;
  height: number;
}

const BIG_HEIGHT = 400;
const SMALL_HEIGHT = 280;

// Alternating big/small so the strip has the same up-down rhythm as
// before — big tiles use l1..l6, small tiles use l7..l12.
const images: StripImage[] = [
  { src: l1, alt: "Team members together", height: BIG_HEIGHT },
  { src: l7, alt: "Team member portrait", height: SMALL_HEIGHT },
  { src: l2, alt: "Account management", height: BIG_HEIGHT },
  { src: l8, alt: "Team member portrait", height: SMALL_HEIGHT },
  { src: l3, alt: "Office moment", height: BIG_HEIGHT },
  { src: l9, alt: "Team member portrait", height: SMALL_HEIGHT },
  { src: l4, alt: "Celebration at the office", height: BIG_HEIGHT },
  { src: l10, alt: "Team member portrait", height: SMALL_HEIGHT },
  { src: l5, alt: "Room marketing session", height: BIG_HEIGHT },
  { src: l11, alt: "Team member portrait", height: SMALL_HEIGHT },
  { src: l6, alt: "Team hangout", height: BIG_HEIGHT },
  { src: l12, alt: "Team member portrait", height: SMALL_HEIGHT },
];

function Strip() {
  const maxHeight = Math.max(...images.map((img) => img.height));

  return (
    <>
      {images.map((img, i) => (
        <div
          key={i}
          className="flex shrink-0 items-center justify-center"
          style={{ height: maxHeight }}
        >
          <div
            className="relative w-[300px] overflow-hidden"
            style={{ height: img.height }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="300px"
            />
          </div>
        </div>
      ))}
    </>
  );
}

export default function LifeBeyondScreens() {
  return (
    <section className="py-12 md:py-20 ">
      <div className="px-4 md:px-0">
      <SectionHeader
        title="Life Beyond the Screens"
        description="Behind every product is a passionate team. Explore the people, culture, and moments that inspire how we collaborate, innovate, and grow together."
        titleClassName="max-w-[500px]"
      />
      </div>


      <div
        className="relative mx-auto mt-12 w-full overflow-hidden "
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 3%, black 97%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 3%, black 97%, transparent)",
        }}
      >
        <div className="marquee-track flex w-max gap-4 sm:gap-6">
          <Strip />
          <Strip />
        </div>
      </div>

      <style jsx>{`
        .marquee-track {
          animation: marquee-scroll 30s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
        }
        @keyframes marquee-scroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
      `}</style>
    </section>
  );
}