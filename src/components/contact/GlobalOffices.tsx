import ReadyToBuildCTA from "../shared/ReadyToBuildCTA";
import SectionHeader from "../shared/SectionHeader";
import OfficeCard from "./OfficeCard";

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

export default function GlobalOffices() {
  const [headOffice] = offices;

  return (
    <section
      className="section-padding"
      style={{ backgroundColor: "var(--color-complementary)" }}
    >
      <div className="container">
        <SectionHeader
          title="Our Office"
          description="Get in touch with our team in Bangladesh."
          titleClassName="text-white"
          descriptionClassName="text-[#B0B0B0]"
        />

        <div className="mt-8 flex px-4 md:px-6 flex-col gap-6 sm:mt-10 lg:gap-8">
          <OfficeCard office={headOffice} size="lg" />
        </div>
      </div>
      <ReadyToBuildCTA bgColor="#09382F" />
    </section>
  );
}
