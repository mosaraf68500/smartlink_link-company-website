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

function LogoGrid({ brands, label }: { brands: Brand[]; label: string }) {
  return (
    <div>
      <h3 className="mb-4 font-bricolage text-lg font-semibold text-[#112420] sm:text-xl">
        {label}
      </h3>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4 lg:grid-cols-4">
        {brands.map((brand, index) => (
          <motion.div
            key={brand.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.04,
              y: -4,
            }}
            whileTap={{ scale: 0.98 }}
            transition={{
              duration: 0.3,
              delay: index * 0.03,
            }}
            className="relative aspect-[2/1] w-full overflow-hidden rounded-[9px] border border-[#E5E7EB] bg-white"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0"
            >
              <Image
                src={brand.image}
                alt={brand.name}
                fill
                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 180px"
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
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

      {/* See More Button */}
      <div className="mt-10 flex justify-center">
        <Link
          href="/our-clients"
          className="flex h6-medium items-center gap-2 text-primary"
        >
          <motion.span
            className="flex items-center gap-2"
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            See More
            <ArrowRight size={18} />
          </motion.span>
        </Link>
      </div>
    </div>
  );
};

export default NewBrand;
