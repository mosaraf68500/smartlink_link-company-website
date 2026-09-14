// import React from "react";
// import PrimaryButton from "../../ui/PrimaryButton";
// import { ArrowIcon, CompanyIcon } from "../../ui/Icon";


// const HeroContent = () => {
//   return (
//     <div className="mx-auto flex max-w-5xl flex-col items-center px-4 pt-12 sm:pt-20 md:pt-25 text-center">
//       <h1 className="font-bricolage h1 text-[#112420]">
//         Software. Strategy. Growth.
//         <br />
//         Everything Your Business Needs.
//       </h1>

//       <p className="mt-4 max-w-4xl font-jakarta title-regular text-[#626262]">
//         From powerful SaaS products to custom software, UI/UX design, web
//         development, cloud solutions, and growth services—we help businesses
//         build, operate, and scale with confidence.
//       </p>

//       <div className="mt-9 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 w-full sm:w-auto">
//         <PrimaryButton icon={ArrowIcon}>Talk To Our Experts</PrimaryButton>

//         <PrimaryButton className="!bg-[#FEFAF9] !text-[#F74608] border border-[#FABEAA]" icon={CompanyIcon}>
//           Company Deck
//         </PrimaryButton>
//       </div>
//     </div>
//   );
// };

// export default HeroContent;

import React from "react";
import PrimaryButton from "../../ui/PrimaryButton";
import { ArrowIcon, CompanyIcon } from "../../ui/Icon";
import Link from "next/link";

const HeroContent = () => {
  return (
    /* 
      - Mobile: pt-[110px] (Navbar ~60px + 50px Gap)
      - Tablet: pt-[130px] (Navbar ~70px + 60px Gap)
      - Desktop (md+): pt-[150px] (Navbar ~80px + 70px Gap)
    */
    <div className="mx-auto flex max-w-5xl flex-col items-center px-4 pt-[110px] sm:pt-[130px] md:pt-[170px] text-center">
      <h1 className="font-bricolage h1 text-[#112420]">
        Global Sourcing. Reliable Delivery. Every Time.
      </h1>

      <p className="mt-4 max-w-4xl font-jakarta title-regular text-[#626262]">
        From bulk commodity sourcing to vessel chartering, port handling, and
        end-to-end logistics — we connect Bangladesh&apos;s industries with
        trusted global supply chains.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 w-full sm:w-auto">
        <Link href='/contact'>       <PrimaryButton icon={ArrowIcon}>Talk To Our Experts</PrimaryButton></Link>


        <PrimaryButton className="!bg-[#FEFAF9] !text-primary border border-[#FABEAA]" icon={CompanyIcon}>
          Request a Quote
        </PrimaryButton>
      </div>
    </div>
  );
};

export default HeroContent;