import React from "react";
import OfficeCard from "../contact/OfficeCard";
import { offices } from "../contact/officesData";

const GlobalOffices = () => {
  const [corporate, uae, plant] = offices;

  return (
    <div
      className="py-14 sm:py-16 "
      style={{ backgroundColor: "var(--color-complementary)" }}
    >
      <div className="mt-8 container flex px-4 md:px-6 flex-col gap-6 sm:mt-10 lg:gap-8">
        <OfficeCard office={corporate} size="lg" />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          <OfficeCard office={uae} size="sm" />
          <OfficeCard office={plant} size="sm" />
        </div>
      </div>
    </div>
  );
};

export default GlobalOffices;
