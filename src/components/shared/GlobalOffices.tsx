import React from "react";
import OfficeCard from "../contact/OfficeCard";
export interface Office {
  country: string;
  label: string;
  flag: string;
  image: string;
  address: string;
  emails: string[];
  phones: string[];
}

// Smartlink Systems currently has a single office — do not add branch
// entries here without confirming a real additional office with the client.
const offices: Office[] = [
  {
    country: "Bangladesh",
    label: "Head Office",
    flag: "/flags/bd.png",
    image: "/offices/bangladesh.png",
    address: "DIVINE FLOX, House: 543, Apt-B3, Road: 08, DOHS, Mirpur-1216, Bangladesh",
    emails: ["info@smartlinksystemsbd.com", "sales@smartlinksystemsbd.com"],
    phones: ["+8801677136584", "+8801846216225", "+8801737136022"],
  },
];
const GlobalOffices = () => {
  const [headOffice] = offices;

  return (
    <div
      className="py-14 sm:py-16 "
      style={{ backgroundColor: "var(--color-complementary)" }}
    >
      <div className="mt-8 container flex px-4 md:px-6 flex-col gap-6 sm:mt-10 lg:gap-8">
        <OfficeCard office={headOffice} size="lg" />
      </div>
    </div>
  );
};

export default GlobalOffices;
