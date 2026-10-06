import { Eye, Target } from "lucide-react";
import { PAGE_CONTAINER } from "../shared/pageContainer";

const missionCommitments = [
  {
    title: "Global Commodity Sourcing",
    text: "Building diversified supply channels across Asia, Africa, the Middle East, Europe, North America, and South America.",
  },
  {
    title: "Quality Products",
    text: "Supplying grains, pulses, oilseeds, animal-feed ingredients, construction materials, and industrial commodities according to agreed specifications.",
  },
  {
    title: "Integrated Logistics",
    text: "Supporting customers through bulk chartering, ocean freight, port handling, stevedoring, inland water transport, road logistics, warehousing, and cargo delivery.",
  },
  {
    title: "Bangladesh Market Connectivity",
    text: "Connecting international suppliers with genuine buyers, manufacturers, processors, projects, and distribution networks in Bangladesh.",
  },
  {
    title: "Reliable Execution",
    text: "Maintaining clear communication, proper documentation, quality control, and efficient shipment coordination throughout every transaction.",
  },
  {
    title: "Long-Term Partnerships",
    text: "Developing relationships based on mutual value rather than focusing solely on individual transactions.",
  },
];

export default function MissionVision() {
  return (
    <section className={`${PAGE_CONTAINER} py-16 md:py-20`}>
      <h2 className="h1 font-bricolage text-[#112420]">Mission &amp; Vision</h2>

      <div className="mt-10 flex flex-col gap-8">
        {/* Vision */}
        <article
          className="flex flex-col gap-4 rounded-xl bg-white p-6 sm:p-8"
          style={{
            boxShadow: "-6px -6px 40px 0px #0000000F, 6px 6px 40px 0px #0000000F",
          }}
        >
          <div className="flex items-center gap-3">
            <Eye size={32} className="shrink-0 text-primary" aria-hidden="true" />
            <h3 className="title-large-medium text-dark">Our Vision</h3>
          </div>
          <p className="body-regular text-gray">
            To become a{" "}
            <strong className="font-medium text-dark">
              trusted Bangladesh-based international trading and supply-chain
              company
            </strong>
            , connecting the growing demands of Bangladesh and regional markets
            with reliable producers, suppliers, and logistics partners worldwide.
          </p>
          <p className="body-regular text-gray">
            Our vision is to build an integrated platform where{" "}
            <strong className="font-medium text-dark">
              global sourcing, commodity trading, bulk chartering, logistics, and
              local market expertise
            </strong>{" "}
            work together to create sustainable value for customers and business
            partners.
          </p>
          <p className="title-regular text-dark italic">
            Global Reach. Local Strength. Sustainable Growth.
          </p>
        </article>

        {/* Mission */}
        <article
          className="flex flex-col gap-4 rounded-xl bg-white p-6 sm:p-8"
          style={{
            boxShadow: "-6px -6px 40px 0px #0000000F, 6px 6px 40px 0px #0000000F",
          }}
        >
          <div className="flex items-center gap-3">
            <Target
              size={32}
              className="shrink-0 text-primary"
              aria-hidden="true"
            />
            <h3 className="title-large-medium text-dark">Our Mission</h3>
          </div>
          <p className="body-regular text-gray">
            Our mission is to deliver{" "}
            <strong className="font-medium text-dark">
              reliable products, competitive sourcing, and integrated supply-chain
              solutions
            </strong>{" "}
            through strong international partnerships and in-depth knowledge of
            the Bangladesh market.
          </p>
          <p className="body-regular text-gray">We are committed to:</p>
          <ul className="flex flex-col gap-4">
            {missionCommitments.map((item) => (
              <li key={item.title} className="flex gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                  aria-hidden="true"
                />
                <p className="body-regular text-gray">
                  <strong className="font-medium text-dark">{item.title}</strong>
                  {" — "}
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
