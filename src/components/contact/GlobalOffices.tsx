import ReadyToBuildCTA from "../shared/ReadyToBuildCTA";
import SectionHeader from "../shared/SectionHeader";
import OfficeCard from "./OfficeCard";
import { offices } from "./officesData";

export default function GlobalOffices() {
  const [corporate, uae, plant] = offices;

  return (
    <section
      className="section-padding"
      style={{ backgroundColor: "var(--color-complementary)" }}
    >
      <div className="container">
        <SectionHeader
          title="Our Office"
          description="Get in touch with our offices in Bangladesh and the UAE."
          titleClassName="text-white"
          descriptionClassName="text-[#B0B0B0]"
        />

        <div className="mt-8 flex px-4 md:px-6 flex-col gap-6 sm:mt-10 lg:gap-8">
          <OfficeCard office={corporate} size="lg" />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            <OfficeCard office={uae} size="sm" />
            <OfficeCard office={plant} size="sm" />
          </div>
        </div>
      </div>
      <ReadyToBuildCTA bgColor="#09382F" />
    </section>
  );
}
