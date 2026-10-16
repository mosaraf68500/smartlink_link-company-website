"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Brand,
  buyerBrands,
  supplierBrands,
} from "@/src/app/our-clients/_compo/Data";
import Image from "next/image";

const PREVIEW_COUNT = 8;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.08,
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

function LogoGrid({ brands, label }: { brands: Brand[]; label: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h3
        variants={itemVariants}
        className="mb-4 text-center font-bricolage text-lg font-semibold text-[#112420] sm:text-xl"
      >
        {label}
      </motion.h3>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4 lg:grid-cols-4"
      >
        {brands.map((brand, index) => (
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
              className="absolute inset-3 sm:inset-4"
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
                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 180px"
                className="object-contain object-center"
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

const NewBrand = () => {
  const previewSuppliers = supplierBrands.slice(0, PREVIEW_COUNT);
  const previewBuyers = buyerBrands.slice(0, PREVIEW_COUNT);

  return (
    <div className="container mx-auto mt-15 sm:mt-10 sm:px-0">
      <div className="flex flex-col gap-10 sm:gap-12">
        <LogoGrid brands={previewSuppliers} label="Suppliers" />
        <LogoGrid brands={previewBuyers} label="Buyers" />
      </div>

      <motion.div
        className="mt-10 flex justify-center"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.15 }}
      >
        <Link
          href="/our-clients"
          className="flex h6-medium items-center gap-2 text-primary"
        >
          <motion.span
            className="flex items-center gap-2"
            whileHover={{ x: 6 }}
            transition={{ type: "spring", stiffness: 400, damping: 12 }}
          >
            See More
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowRight size={18} />
            </motion.span>
          </motion.span>
        </Link>
      </motion.div>
    </div>
  );
};

export default NewBrand;
