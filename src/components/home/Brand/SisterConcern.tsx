"use client";
import React from "react";
import { motion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import SectionHeader from "../../shared/SectionHeader";

import protonTrading from "../../../../public/images/sister-concern/proton-trading.jpeg";
import eliteInternational from "../../../../public/images/sister-concern/elite-international.jpeg";
import eliteAutomobiles from "../../../../public/images/sister-concern/elite-automobiles.jpg";
import starTradeLogistics from "../../../../public/images/sister-concern/star-trade-logistics.jpg";

type SisterBrand = {
  id: number;
  name: string;
  image: StaticImageData;
};

const sisterConcerns: SisterBrand[] = [
  { id: 1, name: "Proton Trading Limited", image: protonTrading },
  { id: 2, name: "Elite International", image: eliteInternational },
  { id: 3, name: "Elite Automobiles", image: eliteAutomobiles },
  { id: 4, name: "Star Trade & Logistics", image: starTradeLogistics },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 280,
      damping: 22,
    },
  },
};

const SisterConcern = () => {
  return (
    <section className="section-padding">
      <SectionHeader
        title="Sister Concerns"
        description="Companies within our group that strengthen our reach across trading, automobiles, and logistics — working together under shared standards of reliability and service."
      />

      <div className="container mx-auto mt-10 sm:mt-12 sm:px-0">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={containerVariants}
          className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4"
        >
          {sisterConcerns.map((brand, index) => (
            <motion.div
              key={brand.id}
              variants={itemVariants}
              whileHover={{
                y: -6,
                scale: 1.03,
                boxShadow: "0 12px 28px rgba(17, 36, 32, 0.1)",
                borderColor: "rgba(17, 36, 32, 0.18)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 360, damping: 20 }}
              className="relative aspect-[2/1] w-full overflow-hidden rounded-[9px] border border-[#E5E7EB] bg-white"
            >
              <motion.div
                className="absolute inset-2.5 sm:inset-3.5"
                animate={{ y: [0, -2, 0] }}
                transition={{
                  duration: 3.2 + (index % 4) * 0.35,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.12,
                }}
              >
                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  quality={95}
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 220px"
                  className="object-contain object-center"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SisterConcern;
