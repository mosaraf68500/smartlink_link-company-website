import Image from "next/image";
import { PAGE_CONTAINER } from "../shared/pageContainer";

const paragraphs = [
  {
    text: (
      <>
        At Smartlink Systems, we believe global trade is built on more than the
        movement of commodities—it is built on{" "}
        <strong className="font-medium text-white">
          trust, market intelligence, strong relationships, and the ability to
          deliver with confidence
        </strong>
        .
      </>
    ),
  },
  {
    text: (
      <>
        Our vision is to create a dynamic international trading and supply-chain
        platform connecting{" "}
        <strong className="font-medium text-white">
          producers, global suppliers, manufacturers, importers, industrial
          buyers, and logistics partners
        </strong>{" "}
        across key markets worldwide.
      </>
    ),
  },
  {
    text: (
      <>
        With a diversified presence across{" "}
        <strong className="font-medium text-white">
          agricultural commodities, grains, pulses, oilseeds, animal feed
          ingredients, construction materials, and industrial raw materials
        </strong>
        , we continuously develop sourcing relationships across{" "}
        <strong className="font-medium text-white">
          Asia, Africa, the Middle East, Europe, North America, and South America
        </strong>
        .
      </>
    ),
  },
  {
    text: (
      <>
        Our strength extends beyond sourcing and trading. Through our
        capabilities in{" "}
        <strong className="font-medium text-white">
          international bulk chartering, maritime logistics, port handling,
          stevedoring, inland water transportation, road logistics, warehousing,
          and heavy equipment solutions
        </strong>
        , we aim to provide an integrated approach to the movement of
        commodities—from{" "}
        <strong className="font-medium text-white">origin to destination</strong>
        .
      </>
    ),
  },
  {
    text: (
      <>
        In an increasingly complex global marketplace, our philosophy remains
        simple:{" "}
        <strong className="font-medium text-white">
          understand the requirement, source competitively, execute responsibly,
          and build relationships for the long term.
        </strong>
      </>
    ),
  },
  {
    text: (
      <>
        We value transparency in every transaction and remain committed to
        quality, commercial integrity, operational efficiency, and dependable
        execution. Rather than pursuing transactions alone, we seek to establish
        enduring partnerships that create sustainable value for everyone
        involved.
      </>
    ),
  },
  {
    text: (
      <>
        Looking ahead, Smartlink Systems will continue to strengthen its global
        sourcing network, expand its commodity portfolio, enhance its logistics
        capabilities, and develop strategic partnerships across international
        markets.
      </>
    ),
  },
  {
    text: (
      <>
        To our customers, suppliers, business partners, and associates around
        the world, thank you for your continued confidence in Smartlink Systems.
      </>
    ),
  },
];

export default function ManagingDirectorMessage() {
  return (
    <section
      className="py-16 md:py-20"
      style={{ backgroundColor: "var(--color-complementary)" }}
    >
      <div className={PAGE_CONTAINER}>
        <h2 className="h1 font-bricolage text-white">
          Message from the Managing Director
        </h2>

        <div
          className="mt-10 rounded-xl border px-5 py-6 sm:px-8 sm:py-8 md:px-10 md:py-10"
          style={{
            backgroundColor: "#09382F",
            borderColor: "#0B483C",
          }}
        >
          <p className="title-large-medium text-white">
            Welcome to Smartlink Systems.
          </p>

          <div className="mt-6 flex flex-col gap-4">
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="body-regular text-left text-white md:text-justify md:[text-align-last:left]"
              >
                {paragraph.text}
              </p>
            ))}
          </div>

          <p className="body-regular mt-6 text-white">
            <strong className="font-medium text-white">
              Together, we look forward to building stronger connections and
              creating new opportunities across global markets.
            </strong>
          </p>

          {/* Image + designation — always one row; larger photo on desktop */}
          <div className="mt-8 flex flex-row items-center gap-4 border-t border-[#0B483C] pt-6 sm:gap-5 md:gap-6">
            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-xl sm:h-36 sm:w-36 md:h-44 md:w-44">
              <Image
                src="/images/about-us/managing-director.png"
                alt="Md. Fayej Ahmed, Managing Director of Smartlink Systems"
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 112px, (max-width: 768px) 144px, 176px"
              />
            </div>

            <div className="min-w-0 text-left">
              <p className="title-large-medium text-white">Md. Fayej Ahmed</p>
              <p className="title-regular mt-1 text-white">Managing Director</p>
              <p className="title-regular text-white">Smartlink Systems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
