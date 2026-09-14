// "use client";

// import SectionHeader from "../../shared/SectionHeader";
// import { services } from "./ServiceData";
// import { AdsPerformanceWidget } from "./AdsPerformanceWidget";
// import { DesignPreviewWidget } from "./DesignPreviewWidget";
// import { DevelopmentProgressWidget } from "./DevelopmentProgressWidget";

// const BulletDot = ({ outer, inner }: { outer: string; inner: string }) => (
//   <svg
//     width="12"
//     height="12"
//     viewBox="0 0 12 12"
//     fill="none"
//     className="mt-1 shrink-0"
//   >
//     <rect width="12" height="12" rx="6" fill={outer} />
//     <circle cx="6" cy="6" r="2.25" fill={inner} />
//   </svg>
// );

// const splitBullets = (bullets: string[]) => {
//   const left: string[] = [];
//   const right: string[] = [];

//   bullets.forEach((b, i) => {
//     (i % 2 === 0 ? left : right).push(b);
//   });

//   return [left, right];
// };

// const widgetByIndex = [
//   <AdsPerformanceWidget key="ads" />,
//   <DevelopmentProgressWidget key="dev" />,
//   <DesignPreviewWidget key="design" />,
// ];

// const ServiceMain = () => {
//   return (
//     <div className="bg-[#072B24]">
//       <div className="container py-20 md:py-25 mx-4 md:mx-0 ">
//         <SectionHeader
//           className="text-[#ffffff]"
//           title={
//             <>
//               Expert Services <br />
//               Real Business Impact.
//             </>
//           }
//           titleClassName="text-[#ffffff]"
//           description="Whether you need custom software, product design, marketing, or dedicated technical support, our team delivers solutions tailored to your business."
//           descriptionClassName="text-[#EFEFEF]"
//         />

//         <div className="grid grid-cols-1 mt-15 mx-4 md:mx-0 gap-6 lg:grid-cols-3 items-stretch">
//           {services.map((service, index) => {
//             const [left, right] = splitBullets(service.bullets);

//             return (
//               <div
//                 key={service.id}
//                 className="flex flex-col justify-between rounded-3xl p-4 sm:p-6 w-full h-full"
//                 style={{
//                   backgroundColor: service.bg,
//                   border: `1px solid ${service.border}`,
//                 }}
//               >
//                 <div>
//                   {/* Number */}
//                   <span
//                     className="flex h-9 w-9 items-center justify-center rounded-full border text-sm font-medium"
//                     style={{
//                       borderColor: service.border,
//                       color: service.badgeText,
//                     }}
//                   >
//                     {service.id}
//                   </span>

//                   {/* Title */}
//                   <h3 className="mt-4 h6-medium font-bricolage text-[#112420]">
//                     {service.title}
//                   </h3>

//                   {/* Description */}
//                   <p className="mt-3 text-[#595959] body-small-regular">
//                     {service.description}
//                   </p>

//                   {/* Bullets */}
//                   <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
//                     {[left, right].map((column, colIndex) => (
//                       <ul key={colIndex} className="flex flex-col gap-2">
//                         {column.map((item) => (
//                           <li
//                             key={item}
//                             className="flex items-start gap-2 caption-regular text-[#626262]"
//                           >
//                             <BulletDot
//                               outer={service.dotOuter}
//                               inner={service.dotInner}
//                             />
//                             <span className="break-words">{item}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Widget Container - Alignment with overflow-visible to keep borders intact */}
//                 <div className="mt-6 flex items-end justify-center w-full min-h-[260px] overflow-visible">
//                   <div className="w-full flex items-center justify-center">
//                     {widgetByIndex[index]}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceMain;


"use client";

import SectionHeader from "../../shared/SectionHeader";
import { services } from "./ServiceData";

const ServiceMain = () => {
  return (
    <div className="bg-[#072B24]">
      <div className="container py-20 md:py-25 px-4 sm:px-0 ">
        <SectionHeader
          className="text-[#ffffff]"
          title="How We Serve You"
          titleClassName="text-[#ffffff]"
          description="From sourcing to final delivery, we handle every step of your supply chain."
          descriptionClassName="text-[#EFEFEF]"
        />

        <div className="grid grid-cols-1 mt-15 mx-4 md:mx-0 gap-6 lg:grid-cols-3 items-stretch">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col gap-4 rounded-3xl p-6 sm:p-8 w-full h-full min-h-[220px]"
              style={{
                backgroundColor: service.bg,
                border: `1px solid ${service.border}`,
              }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/60">
                {service.icon}
              </div>

              <h3 className="h6-medium font-bricolage text-[#112420]">
                {service.title}
              </h3>

              <p className="text-[#595959] body-small-regular">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceMain;