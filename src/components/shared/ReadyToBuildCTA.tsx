// "use client";

// import Image from "next/image";
// import PinIcon from "../icons/PinIcon";

// export default function ReadyToBuildCTA() {
//   return (
//     <section className="container mx-auto px-4 md:px-6 py-16 sm:py-20">
//       <div
//         className="relative  flex w-full max-w-[1280px] p-8 md:p-16 gap-12  flex-col overflow-hidden lg:flex-row lg:items-center"
//         style={{
//           borderRadius: 32,
//           background: "#072B24",
//           boxShadow: "0px 12px 28px -12px #072B24",
//         }}
//       >
//         {/* Top-left corner grid lines */}
//         <svg
//           width="380"
//           height="213"
//           viewBox="0 0 536 300"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           className="pointer-events-none absolute left-0 opacity-30 top-0"
//         >
//           <g opacity="0.3">
//             <rect width="100" height="1" fill="#E5E5E8" />
//             <rect x="104" width="2" height="100" fill="#E5E5E8" />
//             <rect x="109" width="100" height="2" fill="#E5E5E8" />
//             <rect x="213" width="2" height="100" fill="#E5E5E8" />
//             <rect x="218" width="100" height="2" fill="#E5E5E8" />
//             <rect x="322" width="2" height="100" fill="#E5E5E8" />
//             <rect x="327" width="100" height="2" fill="#E5E5E8" />
//             <rect x="431" width="2" height="100" fill="#E5E5E8" />
//             <rect x="436" width="100" height="2" fill="#E5E5E8" />
//             <rect y="104" width="100" height="2" fill="#E5E5E8" />
//             <rect x="104" y="104" width="2" height="100" fill="#E5E5E8" />
//             <rect x="109" y="104" width="100" height="2" fill="#E5E5E8" />
//             <rect x="213" y="104" width="2" height="100" fill="#E5E5E8" />
//             <rect x="218" y="104" width="100" height="2" fill="#E5E5E8" />
//             <rect x="322" y="104" width="2" height="100" fill="#E5E5E8" />
//             <rect x="327" y="104" width="100" height="2" fill="#E5E5E8" />
//             <rect x="431" y="104" width="2" height="100" fill="#E5E5E8" />
//             <rect x="436" y="104" width="100" height="2" fill="#E5E5E8" />
//           </g>
//         </svg>

//         {/* Bottom-right corner grid lines */}
//         <svg
//           width="346"
//           height="136"
//           viewBox="0 0 489 192"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           className="pointer-events-none absolute -bottom-4 opacity-30 right-0"
//         >
//           <g opacity="0.3">
//             <rect x="57" y="-12.4922" width="2" height="100" fill="#E5E5E8" />
//             <rect x="166" y="-12.4922" width="2" height="100" fill="#E5E5E8" />
//             <rect x="275" y="-12.4922" width="2" height="100" fill="#E5E5E8" />
//             <rect x="384" y="-12.4922" width="2" height="100" fill="#E5E5E8" />
//             <rect x="-47" y="91.5078" width="100" height="2" fill="#E5E5E8" />
//             <rect x="57" y="91.5078" width="2" height="100" fill="#E5E5E8" />
//             <rect x="62" y="91.5078" width="100" height="2" fill="#E5E5E8" />
//             <rect x="166" y="91.5078" width="2" height="100" fill="#E5E5E8" />
//             <rect x="171" y="91.5078" width="100" height="2" fill="#E5E5E8" />
//             <rect x="275" y="91.5078" width="2" height="100" fill="#E5E5E8" />
//             <rect x="280" y="91.5078" width="100" height="2" fill="#E5E5E8" />
//             <rect x="384" y="91.5078" width="2" height="100" fill="#E5E5E8" />
//             <rect x="389" y="91.5078" width="100" height="2" fill="#E5E5E8" />
//           </g>
//         </svg>

//         {/* Left: copy */}
//         <div className="relative z-10 flex w-full flex-col items-start gap-8 lg:max-w-[520px] lg:flex-shrink-0">
//           <h2 className="font-bricolage h1 text-white">
//             Ready to Build What&apos;s Next?
//           </h2>
//           <p className="title-regular  text-[#cecece]">
//             Partner with AdsFixter to create digital products, brands, and
//             technology solutions that drive real business growth.
//           </p>
//           <button className="rounded-[6px] bg-white px-8 py-3 title-regular text-secondary transition-transform cursor-pointer duration-200 hover:scale-[1.02]">
//             Start Your Project
//           </button>
//         </div>

//         {/* Right: image collage — flex/grid based, no absolute except pin */}
//         <div className="relative z-10 flex w-full flex-1 justify-center lg:justify-end">
//           <div className="flex w-full flex-col gap-5 sm:w-[400px]">
//             {/* Top row: sticky note + two images */}
//             <div className="">
//               {/* Sticky note — small overlap on top-left corner only */}
//               <div
//                 className="absolute top-0 left-20 flex p-4 md:p-0 h-[150px] w-[150px] md:h-[200px] md:w-[200px] flex-shrink-0 flex-col justify-center gap-1"
//                 style={{
//                   transform: "rotate(19.29deg)",
//                   background: "#F5D949",
//                   zIndex: 1000,
//                 }}
//               >
//                 <div
//                   className="absolute left-1/2 -top-0"
//                   style={{ transform: "translateX(-50%) rotate(-19.29deg)" }}
//                 >
//                   <PinIcon size={40} />
//                 </div>

//                 <div className="flex justify-center items-center flex-col">
//                   <p className="font-bricolage h2 text-dark">10+</p>
//                   <p className="font-bricolage h6-medium text-dark">
//                     Tech Stack
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="flex w-[266px] gap-[14px] sm:w-[380px] sm:gap-5">
//               <div className="relative h-[161px] w-[155px] flex-shrink-0 overflow-hidden sm:h-[200px] sm:w-[190px]">
//                 <Image
//                   src="/cta/office-team1.png"
//                   alt="Team working at desks"
//                   fill
//                   className="object-cover"
//                   sizes="180px"
//                 />
//               </div>

//               <div className="relative h-[161px] w-[155px] flex-shrink-0 overflow-hidden sm:h-[200px] sm:w-[190px]">
//                 <Image
//                   src="/cta/office-team2.png"
//                   alt="Team collaborating in office"
//                   fill
//                   className="object-cover"
//                   sizes="180px"
//                 />
//               </div>
//             </div>

//             {/* Bottom image */}
//             <div className="relative h-[113px] w-[320px] overflow-hidden sm:h-[161px] sm:w-[400px]">
//               <Image
//                 src="/cta/woman-office.png"
//                 alt="Team member at desk"
//                 fill
//                 className="object-cover"
//                 sizes="380px"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import PinIcon from "../icons/PinIcon";
import Link from "next/link";

interface ReadyToBuildCTAProps {
  bgColor?: string;
}

export default function ReadyToBuildCTA({
  bgColor = "#072B24",
}: ReadyToBuildCTAProps) {
  return (
    <section className="container mx-auto px-4 md:px-0 section-padding !pb-0">
      <div
        className="relative  flex w-full mx-auto max-w-[1280px] p-8 md:p-16 gap-12  flex-col overflow-hidden lg:flex-row lg:items-center"
        style={{
          borderRadius: 32,
          background: bgColor,
          boxShadow: `0px 12px 28px -12px ${bgColor}`,
        }}
      >
        {/* Top-left corner grid lines */}
        <svg
          width="380"
          height="213"
          viewBox="0 0 536 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none absolute left-0 opacity-30 -top-4"
        >
          <g opacity="0.3">
            <rect width="100" height="1" fill="#E5E5E8" />
            <rect x="104" width="2" height="100" fill="#E5E5E8" />
            <rect x="109" width="100" height="2" fill="#E5E5E8" />
            <rect x="213" width="2" height="100" fill="#E5E5E8" />
            <rect x="218" width="100" height="2" fill="#E5E5E8" />
            <rect x="322" width="2" height="100" fill="#E5E5E8" />
            <rect x="327" width="100" height="2" fill="#E5E5E8" />
            <rect x="431" width="2" height="100" fill="#E5E5E8" />
            <rect x="436" width="100" height="2" fill="#E5E5E8" />
            <rect y="104" width="100" height="2" fill="#E5E5E8" />
            <rect x="104" y="104" width="2" height="100" fill="#E5E5E8" />
            <rect x="109" y="104" width="100" height="2" fill="#E5E5E8" />
            <rect x="213" y="104" width="2" height="100" fill="#E5E5E8" />
            <rect x="218" y="104" width="100" height="2" fill="#E5E5E8" />
            <rect x="322" y="104" width="2" height="100" fill="#E5E5E8" />
            <rect x="327" y="104" width="100" height="2" fill="#E5E5E8" />
            <rect x="431" y="104" width="2" height="100" fill="#E5E5E8" />
            <rect x="436" y="104" width="100" height="2" fill="#E5E5E8" />
          </g>
        </svg>

        {/* Bottom-right corner grid lines */}
        <svg
          width="346"
          height="136"
          viewBox="0 0 489 192"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none absolute -bottom-4 opacity-30 right-0"
        >
          <g opacity="0.3">
            <rect x="57" y="-12.4922" width="2" height="100" fill="#E5E5E8" />
            <rect x="166" y="-12.4922" width="2" height="100" fill="#E5E5E8" />
            <rect x="275" y="-12.4922" width="2" height="100" fill="#E5E5E8" />
            <rect x="384" y="-12.4922" width="2" height="100" fill="#E5E5E8" />
            <rect x="-47" y="91.5078" width="100" height="2" fill="#E5E5E8" />
            <rect x="57" y="91.5078" width="2" height="100" fill="#E5E5E8" />
            <rect x="62" y="91.5078" width="100" height="2" fill="#E5E5E8" />
            <rect x="166" y="91.5078" width="2" height="100" fill="#E5E5E8" />
            <rect x="171" y="91.5078" width="100" height="2" fill="#E5E5E8" />
            <rect x="275" y="91.5078" width="2" height="100" fill="#E5E5E8" />
            <rect x="280" y="91.5078" width="100" height="2" fill="#E5E5E8" />
            <rect x="384" y="91.5078" width="2" height="100" fill="#E5E5E8" />
            <rect x="389" y="91.5078" width="100" height="2" fill="#E5E5E8" />
          </g>
        </svg>

        {/* Left: copy */}
        <div className="relative z-10 flex w-full flex-col items-start gap-8 lg:max-w-[520px] lg:flex-shrink-0">
          <h2 className="font-bricolage h1 text-white">
            Ready to Move Your Next Shipment?
          </h2>
          <p className="title-regular  text-[#cecece]">
            Partner with Smartlink Systems for reliable sourcing, shipping,
            and logistics solutions that keep your business moving forward.
          </p>
          <Link  href="/contact">         <button className="rounded-[6px] bg-white px-8 py-3 title-regular text-secondary transition-transform cursor-pointer duration-200 hover:scale-[1.02]">
            Get a Quote
          </button></Link>
  
        </div>

        {/* Right: image collage — flex/grid based, no absolute except pin */}
        <div className="relative z-10 flex w-full flex-1 justify-center lg:justify-end">
          <div className="flex w-full flex-col gap-5 sm:w-[400px]">
            {/* Top row: sticky note + two images */}
            <div className="">
              {/* Sticky note — small overlap on top-left corner only */}
              <div
                className="absolute top-0 left-20 flex p-4 md:p-0 h-[150px] w-[150px] md:h-[200px] md:w-[200px] flex-shrink-0 flex-col justify-center gap-1"
                style={{
                  transform: "rotate(19.29deg)",
                  background: "#F5D949",
                  zIndex: 1000,
                }}
              >
                <div
                  className="absolute left-1/2 -top-0"
                  style={{ transform: "translateX(-50%) rotate(-19.29deg)" }}
                >
                  <PinIcon size={40} />
                </div>

                <div className="flex justify-center items-center flex-col">
                  <p className="font-bricolage h2 text-dark">10+</p>
                  <p className="font-bricolage h6-medium text-dark">
                    Years in Trade
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-[266px] gap-[14px] sm:w-[380px] sm:gap-5">
              {/* TODO: placeholder Adsfixter staff photo (shows code on a
                  monitor) — pending real Smartlink Systems photography */}
              <div className="relative h-[161px] w-[155px] flex-shrink-0 overflow-hidden sm:h-[200px] sm:w-[190px]">
                <Image
                  src="/images/cta/bai.png"
                  alt="Team working at desks"
                  fill
                  className="object-cover"
                  sizes="180px"
                />
              </div>

              {/* TODO: placeholder Adsfixter staff photo — pending real
                  Smartlink Systems photography */}
              <div className="relative h-[161px] w-[155px] flex-shrink-0 overflow-hidden sm:h-[200px] sm:w-[190px]">
                <Image
                  src="/images/cta/imam.png"
                  alt="Team collaborating in office"
                  fill
                  className="object-cover"
                  sizes="180px"
                />
              </div>
            </div>

            {/* Bottom image */}
            {/* TODO: placeholder Adsfixter staff photo — pending real
                Smartlink Systems photography */}
            <div className="relative h-[113px] w-[320px] overflow-hidden sm:h-[161px] sm:w-[400px]">
              <Image
                src="/images/cta/mosa.png"
                alt="Team member at desk"
                fill
                className="object-cover"
                sizes="380px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
