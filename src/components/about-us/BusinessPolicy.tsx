import { PAGE_CONTAINER } from "../shared/pageContainer";

const policies = [
  {
    title: "Integrity & Transparency",
    text: "We believe sustainable business begins with clear communication, responsible commercial practices, and transparency between buyers, suppliers, and partners.",
  },
  {
    title: "Quality & Compliance",
    text: "Products are sourced according to mutually agreed specifications, quality requirements, inspection standards, and applicable trade regulations.",
  },
  {
    title: "Competitive & Multi-Origin Sourcing",
    text: "We continuously develop multiple sourcing origins to provide customers with greater flexibility in quality, pricing, availability, and shipment options.",
  },
  {
    title: "Customer-Centric Solutions",
    text: "Every market and customer has different requirements. We focus on understanding the buyer’s technical, commercial, logistical, and delivery needs before developing a supply solution.",
  },
  {
    title: "Supply-Chain Reliability",
    text: "From international sourcing and vessel chartering to port operations and inland delivery, we aim to coordinate each stage efficiently and responsibly.",
  },
  {
    title: "Partnership Over Transactions",
    text: "Our objective is to create enduring relationships with producers, exporters, manufacturers, importers, traders, shipowners, and logistics partners through commercially sustainable and mutually beneficial cooperation.",
  },
  {
    title: "Responsible Growth",
    text: "As we expand our international network and product portfolio, we remain committed to responsible growth, operational excellence, and creating lasting value for our customers, partners, and the markets we serve.",
  },
];

export default function BusinessPolicy() {
  return (
    <section
      className="py-16 md:py-20"
      style={{ backgroundColor: "#F7F7F5" }}
    >
      <div className={PAGE_CONTAINER}>
        <h2 className="h1 font-bricolage text-[#112420]">Our Business Policy</h2>
        <p className="mt-4 max-w-3xl body-regular text-gray">
          At <strong className="font-medium text-dark">Smartlink Systems</strong>,
          our business policy is founded on{" "}
          <strong className="font-medium text-dark">
            Integrity, Transparency, Quality, Reliability, and Partnership
          </strong>
          .
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {policies.map((policy) => (
            <article
              key={policy.title}
              className="flex flex-col gap-3 rounded-xl bg-white p-6"
              style={{
                boxShadow:
                  "-6px -6px 40px 0px #0000000F, 6px 6px 40px 0px #0000000F",
              }}
            >
              <h3 className="title-large-medium text-dark">{policy.title}</h3>
              <p className="body-regular text-gray">{policy.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="title-large-medium text-dark">Smartlink Systems</p>
          <p className="mt-2 body-regular text-gray italic">
            Connecting Global Supply. Strengthening Local Markets. Creating
            Lasting Value.
          </p>
        </div>
      </div>
    </section>
  );
}
