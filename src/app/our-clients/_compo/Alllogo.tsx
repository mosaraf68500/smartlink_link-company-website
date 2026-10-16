"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Brand, BrandCategory, brandsData as defaultBrandsData } from "./Data";

interface AlllogoProps {
  brands?: Brand[];
}

const categories: ("All" | BrandCategory)[] = ["All", "Supplier", "Buyer"];

const Alllogo = ({ brands = defaultBrandsData }: AlllogoProps) => {
  const [activeCategory, setActiveCategory] = useState<"All" | BrandCategory>(
    "All",
  );

  const filteredBrands =
    activeCategory === "All"
      ? brands
      : brands.filter((brand) => brand.category === activeCategory);

  return (
    <div className="container section-padding">
      {/* Category Tabs — Supplier vs Buyer */}
      <div className="mb-13 flex flex-wrap overflow-hidden rounded-[9px] border border-[#E5E7EB]">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`min-w-[140px] flex-1 border-r border-[#E5E7EB] px-6 py-4 text-sm font-medium transition-colors last:border-r-0 md:text-base ${
              activeCategory === cat
                ? "bg-primary text-white"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            {cat === "All" ? "All" : `${cat}s`}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4 lg:grid-cols-5"
        >
          {filteredBrands.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{
                y: -6,
                scale: 1.03,
                boxShadow: "0 12px 28px rgba(17, 36, 32, 0.1)",
                borderColor: "rgba(17, 36, 32, 0.18)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 22,
                delay: Math.min(index * 0.04, 0.4),
              }}
              className="relative aspect-[2/1] w-full overflow-hidden rounded-[9px] border border-[#E5E7EB] bg-white"
            >
              <motion.div
                className="absolute inset-3 sm:inset-4"
                animate={{ y: [0, -2, 0] }}
                transition={{
                  duration: 3.2 + (index % 4) * 0.35,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.1,
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
      </AnimatePresence>

      {filteredBrands.length === 0 && (
        <p className="py-10 text-center text-gray-400">
          No logos found in this category yet.
        </p>
      )}
    </div>
  );
};

export default Alllogo;
