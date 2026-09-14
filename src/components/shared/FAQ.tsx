// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowDown } from "lucide-react";
// import SectionHeader from "./SectionHeader";
// import StillHaveQuestion from "./StillHaveQuestion";

// const defaultTitle = "Frequently Asked Questions";
// const defaultDescription =
//   "We've gathered the most common questions about working with AdsFixter—from project timelines and pricing to technical support and long-term partnerships.";

// const faqItems = [
//   {
//     question:
//       "How do I know whether I need a custom solution or one of your products?",
//     answer:
//       "We start by understanding your business goals, workflows, and challenges. Based on your requirements, we'll recommend the most suitable approach—whether that's one of our ready-to-use products, a custom-built solution, or a combination of both.",
//   },
//   {
//     question: "How long does a typical software project take?",
//     answer:
//       "Timelines vary depending on scope, but most projects take between 4 to 12 weeks from kickoff to launch.",
//   },
//   {
//     question: "Do you provide ongoing support after project delivery?",
//     answer:
//       "Yes, we offer ongoing maintenance and support plans tailored to your product's needs.",
//   },
//   {
//     question: "Can I hire AdsFixter for a single service only?",
//     answer:
//       "Absolutely, you can engage us for a single service or the full end-to-end package.",
//   },
//   {
//     question: "Do you work with startups as well as enterprise businesses?",
//     answer:
//       "Yes, our clients range from early-stage startups to established enterprise businesses.",
//   },
//   {
//     question: "What types of businesses do you work with?",
//     answer:
//       "We work with agencies, SaaS companies, e-commerce brands, and service-based businesses.",
//   },
//   {
//     question: "Do you offer both ready-to-use products and custom solutions?",
//     answer:
//       "Yes, we offer both our own suite of products and fully custom-built solutions.",
//   },
// ];

// interface FAQProps {
//   showHeader?: boolean;
//   title?: string;
//   description?: string;
// }

// export default function FAQ({
//   showHeader = true,
//   title = defaultTitle,
//   description = defaultDescription,
// }: FAQProps) {
//   const [openIndex, setOpenIndex] = useState<number | null>(0);

//   return (
//     <section className="section-padding">
//       {showHeader && <SectionHeader title={title} description={description} />}

//       <div className="container mt-15">
//         {faqItems.map((item, index) => {
//           const isOpen = openIndex === index;
//           return (
//             <div key={index} className="border-b border-black/10">
//               <button
//                 type="button"
//                 onClick={() => setOpenIndex(isOpen ? null : index)}
//                 className="flex w-full items-center justify-between gap-4 py-5 text-left sm:gap-6 sm:py-6"
//               >
//                 <span className="title-large-medium text-dark">
//                   {item.question}
//                 </span>
//                 <motion.span
//                   animate={{ rotate: isOpen ? 180 : 0 }}
//                   transition={{ duration: 0.3, ease: "easeInOut" }}
//                   className="flex-shrink-0 text-dark"
//                 >
//                   <ArrowDown size={18} />
//                 </motion.span>
//               </button>

//               <AnimatePresence initial={false}>
//                 {isOpen && (
//                   <motion.div
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: "auto", opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     transition={{ duration: 0.35, ease: "easeInOut" }}
//                     className="overflow-hidden"
//                   >
//                     <p className="body-regular text-gray pb-5 pr-6 sm:pb-6 sm:pr-16 lg:pr-24">
//                       {item.answer}
//                     </p>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           );
//         })}

//         <div>
//           <StillHaveQuestion />
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";
import SectionHeader from "./SectionHeader";
import StillHaveQuestion from "./StillHaveQuestion";

const defaultTitle = "Frequently Asked Questions";
const defaultDescription =
  "Common questions about sourcing, shipping, and working with Smartlink Systems.";

const faqItems = [
  {
    question: "How do I know which commodity or service fits my project?",
    answer:
      "We assess your material, volume, and timeline needs and recommend the right sourcing or logistics solution.",
  },
  {
    question: "How long does a typical shipment take from order to delivery?",
    answer:
      "Timelines vary by commodity and origin, but most bulk shipments are delivered within 4–8 weeks of confirmed order.",
  },
  {
    question: "Can you supply on a recurring/monthly basis?",
    answer:
      "Yes, we offer both one-time bulk shipments and long-term scheduled supply contracts.",
  },
  {
    question:
      "Do you work with small buyers as well as large industrial/mega-project clients?",
    answer:
      "Yes, from single bulk shipments to large-scale RMC, cement, and infrastructure project supply.",
  },
  {
    question: "What types of businesses do you work with?",
    answer:
      "RMC plants, cement industries, construction companies, feed mills, and industrial/infrastructure project contractors.",
  },
  {
    question: "Can you provide quality certificates with each shipment?",
    answer:
      "Yes, we can support shipments with a Certificate of Analysis (COA) or relevant lab test reports.",
  },
  {
    question:
      "Can you source custom specifications or grades not listed on the website?",
    answer:
      "Yes, share your technical requirements and we'll source accordingly.",
  },
];

interface FAQProps {
  showHeader?: boolean;
  title?: string;
  description?: string;
}

export default function FAQ({
  showHeader = true,
  title = defaultTitle,
  description = defaultDescription,
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding">
      {showHeader && <SectionHeader title={title} description={description} />}

      <div className="container mt-15">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="border-b border-black/10">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left sm:gap-6 sm:py-6"
              >
                <span className="title-large-medium text-dark">
                  {item.question}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex-shrink-0 text-dark"
                >
                  <ArrowDown size={18} />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="body-regular text-gray pb-5 pr-6 sm:pb-6 sm:pr-16 lg:pr-24">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}

        <div>
          <StillHaveQuestion />
        </div>
      </div>
    </section>
  );
}