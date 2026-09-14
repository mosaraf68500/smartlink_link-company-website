"use client";

import { Search } from "lucide-react";

interface SearchBoxProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export default function SearchBox({
  placeholder = "Search",
  value,
  onChange,
  className = "",
}: SearchBoxProps) {
  return (
    <div
      className={`flex w-[392px] max-w-full items-center gap-2 ${className}`}
      style={{
        height: 48,
        borderRadius: 12,
        border: "1px solid #DFDFDF",
        background: "#FFFFFF",
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 16,
        paddingRight: 16,
      }}
    >
      <Search size={18} className="flex-shrink-0 text-dark" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="body-regular w-full bg-transparent text-dark outline-none placeholder:text-gray"
      />
    </div>
  );
}
