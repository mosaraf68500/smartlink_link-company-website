"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Brand, BrandCategory, brandsData as defaultBrandsData } from "./Data";

interface AlllogoProps {
  brands?: Brand[];
}

const categories: ("All" | BrandCategory)[] = [
  "All",
  "Digital Marketing",
  "Web Development",
  "Graphics Design",
  "UI/UX Design",
];

const Alllogo = ({ brands = defaultBrandsData }: AlllogoProps) => {
  const [activeCategory, setActiveCategory] = useState<"All" | BrandCategory>("All");

  const filteredBrands =
    activeCategory === "All"
      ? brands
      : brands.filter((brand) => brand.category === activeCategory);

  return (
    <div className="container section-padding">
      {/* Category Tabs */}
      <div className="flex flex-wrap border border-[#E5E7EB] rounded-[9px] overflow-hidden mb-13">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`flex-1 min-w-[140px] px-6 py-4 text-sm md:text-base font-medium border-r last:border-r-0 border-[#E5E7EB] transition-colors ${
              activeCategory === cat
                ? "bg-primary text-white"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Brand Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4"
        >
          {filteredBrands.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.04, y: -4 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className="flex items-center justify-center bg-white p-4 w-full h-[100px] sm:h-[120px] rounded-[9px] border border-[#E5E7EB]"
            >
              <Image
                src={brand.image}
                alt={brand.name}
                className="max-h-12 sm:max-h-16 w-auto object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {filteredBrands.length === 0 && (
        <p className="text-center text-gray-400 py-10">No brands found in this category.</p>
      )}
    </div>
  );
};

export default Alllogo;