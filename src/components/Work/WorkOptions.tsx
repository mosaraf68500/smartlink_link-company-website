

// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { motion, type Variants } from "framer-motion";
// import workImage from "../../../public/images/work/rafi.png";
// import workImage1 from "../../../public/images/work/faruk.png";
// import workImage2 from "../../../public/images/work/tarikul.png";
// import workImage3 from "../../../public/images/work/sohan.png";
// import { Calender, IncreaseIcon, Profile, Support, Tag, UpperArrow } from "../ui/Icon";

// type WorkCard = {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
//   bg: string;
//   border: string;
//   titleColor: string;
//   descColor: string;
//   accentColor: string; 
// };

// function darkenHex(hex: string, amount = 0.18) {
//   const clean = hex.replace("#", "");
//   const num = parseInt(clean, 16);
//   const r = Math.max(0, (num >> 16) - Math.round(255 * amount));
//   const g = Math.max(0, ((num >> 8) & 0x00ff) - Math.round(255 * amount));
//   const b = Math.max(0, (num & 0x0000ff) - Math.round(255 * amount));
//   return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
// }

// const cards: WorkCard[] = [
//   {
//     icon: Calender,
//     title: "Need a Product?",
//     description: "Use our SaaS solutions.",
//     bg: "bg-[#FFD4EE]",
//     border: "border-[#FFFFFF14]",
//     titleColor: "text-[#A91E72]",
//     descColor: "text-[#595959]",
//     accentColor: "#A91E72",
//   },
//   {
//     icon: Profile,
//     title: "Need Extra Talent?",
//     description: "Hire our dedicated team.",
//     bg: "bg-[#C5E8FF]",
//     border: "border-[#FFFFFF14]",
//     titleColor: "text-[#166598]",
//     descColor: "text-[#595959]",
//     accentColor: "#166598",
//   },
//   {
//     icon: Tag,
//     title: "Need Something Custom?",
//     description: "We'll build it.",
//     bg: "bg-[#D3FEE8]",
//     border: "border-[#FFFFFF14]",
//     titleColor: "text-[#1DA05D]",
//     descColor: "text-[#595959]",
//     accentColor: "#1DA05D",
//   },
//   {
//     icon: IncreaseIcon,
//     title: "Need to Grow?",
//     description: "We'll manage your advertising and marketing.",
//     bg: "bg-[#FFFFFF05]",
//     border: "border-[#FFFFFF14]",
//     titleColor: "text-white",
//     descColor: "text-[#595959]",
//     accentColor: "#FFFFFF",
//   },
//   {
//     icon: Support,
//     title: "Need Long-Term Support?",
//     description: "We'll stay with you after launch.",
//     bg: "bg-[#D9D3FF]",
//     border: "border-[#FFFFFF14]",
//     titleColor: "text-[#301EA0]",
//     descColor: "text-[#595959]",
//     accentColor: "#301EA0",
//   },
// ];


// const containerVariants: Variants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.12,
//     },
//   },
// };

// const cardVariants: Variants = {
//   hidden: { opacity: 0, y: 30, scale: 0.96 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       duration: 0.5,
//       ease: [0.215, 0.61, 0.355, 1],
//     },
//   },
// };

// function Card({ card }: { card: WorkCard }) {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <motion.div
//       variants={cardVariants}
//       whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//       className={`flex h-auto min-h-[200px] sm:min-h-[220px] md:min-h-[243px] flex-col justify-between rounded-[12px] border p-5 sm:p-6 transition-shadow duration-300 hover:shadow-xl ${card.bg} ${card.border}`}
//     >
//       <div className="flex items-start justify-between">
//         <div className="h-8 w-8 [&>svg]:h-8 [&>svg]:w-8">{card.icon}</div>

//         {/* Arrow icon: same icon on every card, hidden by default, shown on hover */}
//         <motion.div
//           animate={{
//             opacity: isHovered ? 1 : 0,
//             x: isHovered ? 0 : -3,
//             y: isHovered ? 0 : 3,
//           }}
//           transition={{ duration: 0.2, ease: "easeOut" }}
//           className="h-5 w-5 [&>svg]:h-5 [&>svg]:w-5 cursor-pointer"
//         >
//           {UpperArrow(darkenHex(card.accentColor))}
//         </motion.div>
//       </div>
//       <div>
//         <div className={`font-jakarta h6-medium ${card.titleColor}`}>
//           {card.title}
//         </div>
//         <div className={`mt-1 font-jakarta title-regular ${card.descColor}`}>
//           {card.description}
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// const WorkOptions = () => {
//   return (
//     <motion.div
//       variants={containerVariants}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, margin: "-50px" }}
//       className="container mx-auto grid max-w-[1312px] grid-cols-1 gap-4 sm:gap-6  sm:grid-cols-2 md:grid-cols-3"
//     >
//       <Card card={cards[0]} />

//       {/* Image Card */}
//       <motion.div
//         variants={cardVariants}
//         whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
//         className="relative min-h-[200px] sm:min-h-[220px] md:min-h-[243px] overflow-hidden rounded-xl border border-black/5"
//       >
//         <Image
//           src={workImage}
//           alt="A team member reviewing documents at a desk"
//           fill
//           className="object-cover"
//           sizes="(min-width: 768px) 421px, (min-width: 640px) 50vw, 100vw"
//         />
//       </motion.div>

//       <Card card={cards[1]} />
//       <Card card={cards[2]} />
//       <Card card={cards[3]} />
//       <Card card={cards[4]} />
//     </motion.div>
//   );
// };

// export default WorkOptions;



"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import workImage from "../../../public/images/work/ship-01.png";
import workImage1 from "../../../public/images/work/ship-02.png";
import workImage2 from "../../../public/images/work/ship-03.png";
import { UpperArrow } from "../ui/Icon";
import { Boxes, Ship, ClipboardList, CalendarClock, Route } from "lucide-react";

type WorkCard = {
  icon: React.ReactNode;
  title: string;
  description: string;
  bg: string;
  border: string;
  titleColor: string;
  descColor: string;
  accentColor: string;
};

function darkenHex(hex: string, amount = 0.18) {
  const clean = hex.replace("#", "");
  const num = parseInt(clean, 16);
  const r = Math.max(0, (num >> 16) - Math.round(255 * amount));
  const g = Math.max(0, ((num >> 8) & 0x00ff) - Math.round(255 * amount));
  const b = Math.max(0, (num & 0x0000ff) - Math.round(255 * amount));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}

const cards: WorkCard[] = [
  {
    icon: <Boxes size={40} color="#A91E72" strokeWidth={2.5} />,
    title: "Need Raw Materials?",
    description: "We source and supply in bulk — Limestone, Grain, Feed Ingredients & more.",
    bg: "bg-[#FFD4EE]",
    border: "border-[#FFFFFF14]",
    titleColor: "text-[#A91E72]",
    descColor: "text-[#595959]",
    accentColor: "#A91E72",
  },
  {
    icon: <Ship size={40} color="#166598" strokeWidth={2.5} />,
    title: "Need Bulk Shipping?",
    description: "We arrange vessel chartering & full logistics coordination.",
    bg: "bg-[#C5E8FF]",
    border: "border-[#FFFFFF14]",
    titleColor: "text-[#166598]",
    descColor: "text-[#595959]",
    accentColor: "#166598",
  },
  {
    icon: <ClipboardList size={40} color="#1DA05D" strokeWidth={2.5} />,
    title: "Need a Custom Order?",
    description: "Tell us your specs — we'll source to match.",
    bg: "bg-[#D3FEE8]",
    border: "border-[#FFFFFF14]",
    titleColor: "text-[#1DA05D]",
    descColor: "text-[#595959]",
    accentColor: "#1DA05D",
  },
  {
    icon: <CalendarClock size={40} color="#000000" strokeWidth={2.5} />,
    title: "Need Long-Term Supply?",
    description: "Scheduled contracts for consistent, dependable delivery.",
    bg: "bg-[#FFFFFF05]",
    border: "border-[#FFFFFF14]",
    titleColor: "text-black",
    descColor: "text-[#595959]",
    accentColor: "#FFFFFF",
  },
  {
    icon: <Route size={40} color="#301EA0" strokeWidth={2.5} />,
    title: "Need Full Supply-Chain Support?",
    description: "From sourcing to final delivery — we handle it end-to-end.",
    bg: "bg-[#D9D3FF]",
    border: "border-[#FFFFFF14]",
    titleColor: "text-[#301EA0]",
    descColor: "text-[#595959]",
    accentColor: "#301EA0",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

function Card({ card }: { card: WorkCard }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`flex h-auto min-h-[200px] sm:min-h-[220px] md:min-h-[243px] flex-col justify-between rounded-[12px] border p-5 sm:p-6 transition-shadow duration-300 hover:shadow-xl ${card.bg} ${card.border}`}
    >
      <div className="flex items-start justify-between">
        <div className="h-8 w-8 [&>svg]:h-8 [&>svg]:w-8">{card.icon}</div>

        {/* Arrow icon: same icon on every card, hidden by default, shown on hover */}
        <motion.div
          animate={{
            opacity: isHovered ? 1 : 0,
            x: isHovered ? 0 : -3,
            y: isHovered ? 0 : 3,
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="h-5 w-5 [&>svg]:h-5 [&>svg]:w-5 cursor-pointer"
        >
          {UpperArrow(darkenHex(card.accentColor))}
        </motion.div>
      </div>
      <div>
        <div className={`font-jakarta h6-medium ${card.titleColor}`}>
          {card.title}
        </div>
        <div className={`mt-1 font-jakarta title-regular ${card.descColor}`}>
          {card.description}
        </div>
      </div>
    </motion.div>
  );
}

// Same tile, same size/position/border/rounded corners as before —
// only difference is the single static <Image> is now replaced with
// an auto-rotating slider through all 4 work images.
const workImages = [workImage, workImage1, workImage2];
const SLIDE_INTERVAL_MS = 3000;

function WorkImageSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % workImages.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
      className="relative min-h-[200px] sm:min-h-[220px] md:min-h-[243px] overflow-hidden rounded-xl border border-black/5"
    >
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={workImages[index]}
            alt="A bulk cargo vessel at sea"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 421px, (min-width: 640px) 50vw, 100vw"
          />
        </motion.div>
      </AnimatePresence>


    </motion.div>
  );
}

const WorkOptions = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="container mx-auto grid max-w-[1312px] grid-cols-1 gap-4 sm:gap-6  sm:grid-cols-2 md:grid-cols-3"
    >
      <Card card={cards[0]} />

      {/* Image Card — now a slider through all 4 work images */}
      <WorkImageSlider />

      <Card card={cards[1]} />
      <Card card={cards[2]} />
      <Card card={cards[3]} />
      <Card card={cards[4]} />
    </motion.div>
  );
};

export default WorkOptions;