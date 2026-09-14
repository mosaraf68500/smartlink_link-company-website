"use client";

import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import type { Value } from "react-phone-number-input";

interface PhoneInputFieldProps {
  value: string;
  onChange: (value: string) => void;
  hasError?: boolean;
}

export default function PhoneInputField({
  value,
  onChange,
  hasError,
}: PhoneInputFieldProps) {
  return (
    <div
      className={`phone-input-wrapper flex h-[50px] w-full items-center rounded-[6px] border px-3 transition-all duration-200
        ${
          hasError
            ? "border-primary focus-within:ring-2 focus-within:ring-primary/20"
            : "border-[#E2E2E2] focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/15"
        }`}
    >
      <PhoneInput
        international
        defaultCountry="BD"
        placeholder="1XXXXXXXXX"
        value={value as Value}
        onChange={(val) => onChange(val || "")}
        className="w-full"
      />
    </div>
  );
}
