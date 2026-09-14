"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { brandsData } from "@/src/app/our-clients/_compo/Data";
import Image from "next/image";


const NewBrand = () => {
  return (
    <div className="container mx-auto  sm:px-0 mt-15 sm:mt-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
        {brandsData.slice(0, 15).map((brand, index) => (
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
            className="flex items-center justify-center bg-white p-4 w-full h-[100px] sm:h-[120px] rounded-[9px] border border-[#E5E7EB] "
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src={brand.image}
                alt={brand.name}
                className="max-h-12 sm:max-h-16 w-auto object-contain"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* See More Button */}
      <div className="flex justify-center mt-10">
        <Link
          href="/our-clients"
          className="flex items-center gap-2 h6-medium text-primary"
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