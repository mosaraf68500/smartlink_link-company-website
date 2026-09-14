"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";

interface CustomSelectProps {
  options: string[]; // real options, without placeholder
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

export function CustomSelect({
  options,
  placeholder,
  value,
  onChange,
}: CustomSelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={`w-full h-[50px] rounded-[6px] border px-4 py-3 text-sm text-left outline-none transition-all duration-200 flex items-center justify-between
          ${
            open
              ? "border-primary ring-2 ring-primary/15"
              : "border-[#E2E2E2] hover:border-[#c9c9c9]"
          }`}
      >
        <span className={value ? "text-dark" : "text-gray"}>
          {value || placeholder}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 text-gray"
        >
          <ChevronDown size={16} />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute z-20 mt-2 w-full overflow-hidden rounded-[10px] border border-[#E2E2E2] bg-white p-1.5 shadow-[0px_8px_24px_0px_#00000014]"
          >
            {options.map((opt) => {
              const active = value === opt;
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => {
                    onChange(opt);
                    setOpen(false);
                  }}
                  className={`body-small-regular flex w-full items-center justify-between gap-2 rounded-[6px] px-3 py-2.5 text-left transition-colors duration-150
                    ${
                      active
                        ? "bg-primary/10 text-primary"
                        : "text-dark hover:bg-[#F7F7F7]"
                    }`}
                >
                  {opt}
                  {active && <Check size={15} className="flex-shrink-0" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
