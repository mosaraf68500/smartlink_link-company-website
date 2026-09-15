// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { Check, Loader2 } from "lucide-react";
// import QuoteIcon from "../icons/QuoteIcon";
// import { CustomSelect } from "../ui/CustomSelect";
// import PhoneInputField from "../ui/PhoneInputField";
// import BreadcrumbBadge from "../ui/BreadcrumbBadge";

// const budgetOptions = [
//   "Under ৳50,000",
//   "৳50,000 – ৳2,00,000",
//   "৳2,00,000 – ৳5,00,000",
//   "Above ৳5,00,000",
//   "I am not sure yet",
// ];

// interface FormState {
//   fullName: string;
//   whatsapp: string;
//   service: string;
//   budget: string;
// }

// const initialState: FormState = {
//   fullName: "",
//   whatsapp: "",
//   service: "",
//   budget: "",
// };

// interface TalkToExpertsProps {
//   showBadge?: boolean;
//   badgeLabel?: string;
//   badgeIcon?: React.ReactNode;
//   title?: string;
//   titleClassName?: string;
// }

// export default function TalkToExperts({
//   showBadge = false,
//   badgeLabel = "Contact Us",
//   badgeIcon,
//   title = "Talk to a Real Person About Your Business",
//   titleClassName = "font-bricolage text-dark h1",
// }: TalkToExpertsProps) {
//   const [form, setForm] = useState<FormState>(initialState);
//   const [errors, setErrors] = useState<
//     Partial<Record<keyof FormState, string>>
//   >({});
//   const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

//   const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
//     setForm((prev) => ({ ...prev, [key]: value }));
//     if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
//   };

//   const validate = () => {
//     const next: Partial<Record<keyof FormState, string>> = {};
//     if (!form.fullName.trim()) next.fullName = "Your name is required";
//     if (!form.whatsapp.trim())
//       next.whatsapp = "Phone / WhatsApp number is required";
//     setErrors(next);
//     return Object.keys(next).length === 0;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!validate()) return;

//     setStatus("loading");
//     try {
//       await new Promise((resolve) => setTimeout(resolve, 1200));
//       setStatus("success");
//       setTimeout(() => {
//         setForm(initialState);
//         setStatus("idle");
//       }, 2200);
//     } catch {
//       setStatus("idle");
//     }
//   };

//   return (
//     <section className="container section-padding">
//       <div className="grid grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-2 lg:items-stretch lg:gap-16">
//         {/* Left: copy + testimonial */}
//         <div className="flex w-full flex-col gap-10 sm:gap-12 lg:justify-between lg:gap-0">
//           <div className="flex w-full flex-col gap-4 sm:gap-5 lg:max-w-[636px]">
//             {showBadge && (
//               <BreadcrumbBadge icon={badgeIcon} className="self-start">
//                 {badgeLabel}
//               </BreadcrumbBadge>
//             )}

//             <h3 className={titleClassName}>{title}</h3>
//             <p className="title-regular mb-8 text-gray">
//               Call us, message us on WhatsApp, or fill the short form below. We
//               will listen to your problem first, then tell you the cost.
//             </p>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 16 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-60px" }}
//             transition={{ duration: 0.5, ease: "easeOut" }}
//             className="flex w-full flex-col items-start gap-6 sm:flex-row lg:max-w-[636px]"
//           >
//             {/* Image + designation stacked */}
//             <div className="flex w-full flex-shrink-0 flex-col gap-3 sm:w-auto">
//               <div className="relative h-[320px] w-full overflow-hidden rounded-[4px] sm:h-[250px] sm:w-[250px]">
//                 <Image
//                   src="/images/work/Mizan-Bhai.png"
//                   alt="Md Mizanur Rahman"
//                   fill
//                   className="object-cover"
//                   sizes="(max-width: 640px) 100vw, 250px"
//                 />
//               </div>

//               <div>
//                 <p className="h6-medium text-dark">Md Mizanur Rahman</p>
//                 <p className="body-regular text-gray">Assistant Manager

// </p>
//               </div>
//             </div>

//             {/* Right side quotation */}
//             <div className="flex w-full flex-col gap-3 sm:max-w-[342px]">
//               <QuoteIcon size={32} className="sm:hidden" />
//               <QuoteIcon size={37} className="hidden sm:block" />
//               <p
//                 className="text-dark"
//                 style={{
//                   fontFamily: "var(--font-jakarta-sans)",
//                   fontWeight: 400,
//                   fontStyle: "italic",
//                   fontSize: 18,
//                   lineHeight: "160%",
//                   letterSpacing: "0%",
//                 }}
//               >
//                 Every great product starts with a conversation. Share your ideas
//                 with us, and we&apos;ll help turn them into reliable, scalable
//                 solutions.
//               </p>
//             </div>
//           </motion.div>
//         </div>

//         {/* Right: form */}
//         <form
//           onSubmit={handleSubmit}
//           className="flex w-full flex-col gap-4 lg:max-w-[636px]"
//         >
//           <Field label="Full name" error={errors.fullName}>
//             <input
//               type="text"
//               placeholder="Enter your full name"
//               value={form.fullName}
//               onChange={(e) => update("fullName", e.target.value)}
//               className={inputClass(!!errors.fullName)}
//             />
//           </Field>

//           <Field label="Whatsapp / Phone number" error={errors.whatsapp}>
//             <PhoneInputField
//               value={form.whatsapp}
//               onChange={(val) => update("whatsapp", val)}
//               hasError={!!errors.whatsapp}
//             />
//           </Field>

//           <Field label="Service Needed">
//             <CustomSelect
//               options={[
//                 "SyncBari",
//                 "SiteBari",
//                 "MetaBari",
//                 "MailBari",
//                 "Custom Website / App",
//                 "Ads & Marketing",
//               ]}
//               placeholder="Select a service"
//               value={form.service}
//               onChange={(val) => update("service", val)}
//             />
//           </Field>

//           <Field label="Estimated Budget (BDT)">
//             <div className="grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-3">
//               {budgetOptions.map((opt) => {
//                 const active = form.budget === opt;
//                 return (
//                   <button
//                     key={opt}
//                     type="button"
//                     onClick={() => update("budget", opt)}
//                     className={`body-small-medium cursor-pointer relative rounded-md border px-2.5 py-3 text-center transition-colors duration-200 sm:px-3 ${
//                       active
//                         ? "border-primary text-primary"
//                         : "border-[#E2E2E2] text-dark hover:border-[#c9c9c9]"
//                     }`}
//                   >
//                     {opt}
//                   </button>
//                 );
//               })}
//             </div>
//           </Field>

//           <motion.button
//             type="submit"
//             disabled={status !== "idle"}
//             whileTap={{ scale: 0.98 }}
//             className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 text-white disabled:opacity-80 sm:w-fit"
//           >
//             <AnimatePresence mode="wait" initial={false}>
//               {status === "idle" && (
//                 <motion.span
//                   key="idle"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   className="body-small-medium cursor-pointer"
//                 >
//                   Send Message
//                 </motion.span>
//               )}
//               {status === "loading" && (
//                 <motion.span
//                   key="loading"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   className="body-small-medium flex items-center gap-2"
//                 >
//                   <Loader2 size={16} className="animate-spin" />
//                   Sending...
//                 </motion.span>
//               )}
//               {status === "success" && (
//                 <motion.span
//                   key="success"
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0 }}
//                   className="body-small-medium flex items-center gap-2"
//                 >
//                   <Check size={16} />
//                   Sent!
//                 </motion.span>
//               )}
//             </AnimatePresence>
//           </motion.button>
//         </form>
//       </div>
//     </section>
//   );
// }

// function inputClass(hasError: boolean) {
//   return `w-full h-[50px] rounded-[6px] border px-4 py-3 text-sm outline-none transition-all duration-200 placeholder:text-gray
//     ${
//       hasError
//         ? "border-[#F74608] focus:ring-2 focus:ring-[#F74608]/20"
//         : "border-[#E2E2E2] focus:border-primary focus:ring-2 focus:ring-primary/15"
//     }`;
// }

// function Field({
//   label,
//   error,
//   children,
// }: {
//   label: string;
//   error?: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <div className="flex flex-col gap-2">
//       <label className="body-regular text-dark">{label}</label>
//       {children}
//       <AnimatePresence>
//         {error && (
//           <motion.p
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="caption-regular text-[#F74608]"
//           >
//             {error}
//           </motion.p>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import { toast } from "react-toastify";
import QuoteIcon from "../icons/QuoteIcon";
import { CustomSelect } from "../ui/CustomSelect";
import PhoneInputField from "../ui/PhoneInputField";
import BreadcrumbBadge from "../ui/BreadcrumbBadge";

const productOptions = [
  "Limestone",
  "Gabbro Aggregate",
  "Coal",
  "Wheat",
  "Lentils",
  "Pulses",
  "Soyabean Seeds",
  "Canola Seeds",
  "Green Mung",
  "Animal Feed Additives",
  "Cotton",
  "Vessel Chartering",
  "Other",
];

interface FormState {
  fullName: string;
  whatsapp: string;
  email: string;
  message: string;
  productInterest: string;
}

const initialState: FormState = {
  fullName: "",
  whatsapp: "",
  email: "",
  message: "",
  productInterest: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface TalkToExpertsProps {
  showBadge?: boolean;
  badgeLabel?: string;
  badgeIcon?: React.ReactNode;
  title?: string;
  titleClassName?: string;
}

export default function TalkToExperts({
  showBadge = false,
  badgeLabel = "Contact Us",
  badgeIcon,
  title = "Talk to Our Logistics Team",
  titleClassName = "font-bricolage text-dark h1",
}: TalkToExpertsProps) {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.fullName.trim()) next.fullName = "Your name is required";
    if (!form.whatsapp.trim())
      next.whatsapp = "Phone / WhatsApp number is required";
    if (!form.email.trim()) {
      next.email = "Email is required";
    } else if (!EMAIL_PATTERN.test(form.email.trim())) {
      next.email = "Enter a valid email address";
    }
    if (!form.message.trim()) next.message = "Please describe what you need";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  // TODO: backend endpoint not yet finalized for Smartlink — confirm with client before going live.
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    try {
      const baseUrl =
        process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api/v1";

      // Extract country code and number if phone field formats like '+8801700000000'
      let countryCode = "+880";
      let phone = form.whatsapp.trim();

      if (phone.startsWith("+")) {
        // Assuming default 3-digit country code like +880
        countryCode = phone.slice(0, 4);
        phone = phone.slice(4);
      }

      const payload = {
        fullName: form.fullName.trim(),
        phone: phone,
        countryCode: countryCode,
        email: form.email.trim(),
        message: form.message.trim(),
        productInterest: form.productInterest || undefined,
      };

      const response = await fetch(`${baseUrl}/inquiries`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        toast.success("Inquiry submitted successfully!");

        setTimeout(() => {
          setForm(initialState);
          setStatus("idle");
        }, 2000);
      } else {
        setStatus("idle");
        toast.error(data.message || "Failed to submit inquiry.");
      }
    } catch (error) {
      setStatus("idle");
      toast.error("Something went wrong. Please check your connection.");
    }
  };

  return (
    <section className="container section-padding">
      <div className="grid grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-2 lg:items-stretch lg:gap-16">
        {/* Left: copy + testimonial */}
        <div className="flex w-full flex-col gap-10 sm:gap-12 lg:justify-between lg:gap-0">
          <div className="flex w-full flex-col gap-4 sm:gap-5 lg:max-w-[636px]">
            {showBadge && (
              <BreadcrumbBadge icon={badgeIcon} className="self-start">
                {badgeLabel}
              </BreadcrumbBadge>
            )}

            <h3 className={titleClassName}>{title}</h3>
            <p className="title-regular mb-8 text-gray">
              Call us, message us on WhatsApp, or fill the short form below. We
              will listen to your problem first, then tell you the cost.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex w-full flex-col items-start gap-6 sm:flex-row lg:max-w-[636px]"
          >
            {/* Image + designation stacked */}
            <div className="flex w-full flex-shrink-0 flex-col gap-3 sm:w-auto">
              <div className="relative h-[320px] w-full overflow-hidden rounded-[4px] sm:h-[250px] sm:w-[250px]">
                <Image
                  src="/images/work/fayshal.png"
                  alt="Md Mizanur Rahman"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 250px"
                />
              </div>

              <div>
                <p className="h6-medium text-dark">Md Mizanur Rahman</p>
                <p className="body-regular text-gray">Assistant Manager</p>
              </div>
            </div>

            {/* Right side quotation */}
            <div className="flex w-full flex-col gap-3 sm:max-w-[342px]">
              <QuoteIcon size={32} className="sm:hidden" />
              <QuoteIcon size={37} className="hidden sm:block" />
              <p
                className="text-dark"
                style={{
                  fontFamily: "var(--font-jakarta-sans)",
                  fontWeight: 400,
                  fontStyle: "italic",
                  fontSize: 18,
                  lineHeight: "160%",
                  letterSpacing: "0%",
                }}
              >
                Every reliable shipment starts with a conversation. Tell us
                what you need — we&apos;ll take care of the sourcing,
                logistics, and delivery.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right: form */}
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col gap-4 lg:max-w-[636px]"
        >
          <Field label="Full name" error={errors.fullName}>
            <input
              type="text"
              placeholder="Enter your full name"
              value={form.fullName}
              onChange={(e) => update("fullName", e.target.value)}
              className={inputClass(!!errors.fullName)}
            />
          </Field>

          <Field label="Whatsapp / Phone number" error={errors.whatsapp}>
            <PhoneInputField
              value={form.whatsapp}
              onChange={(val) => update("whatsapp", val)}
              hasError={!!errors.whatsapp}
            />
          </Field>

          <Field label="Email" error={errors.email}>
            <input
              type="email"
              placeholder="Enter your email address"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className={inputClass(!!errors.email)}
            />
          </Field>

          <Field label="Product / Commodity of Interest">
            <CustomSelect
              options={productOptions}
              placeholder="Select a product or commodity"
              value={form.productInterest}
              onChange={(val) => update("productInterest", val)}
            />
          </Field>

          <Field label="Message" error={errors.message}>
            <textarea
              placeholder="Tell us what you need"
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              rows={4}
              className={`w-full rounded-[6px] border px-4 py-3 text-sm outline-none transition-all duration-200 placeholder:text-gray resize-none
                ${
                  errors.message
                    ? "border-primary focus:ring-2 focus:ring-primary/20"
                    : "border-[#E2E2E2] focus:border-primary focus:ring-2 focus:ring-primary/15"
                }`}
            />
          </Field>

          <motion.button
            type="submit"
            disabled={status !== "idle"}
            whileTap={{ scale: 0.98 }}
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 text-white disabled:opacity-80 sm:w-fit cursor-pointer"
          >
            <AnimatePresence mode="wait" initial={false}>
              {status === "idle" && (
                <motion.span
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="body-small-medium cursor-pointer"
                >
                  Send Message
                </motion.span>
              )}
              {status === "loading" && (
                <motion.span
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="body-small-medium flex items-center gap-2"
                >
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </motion.span>
              )}
              {status === "success" && (
                <motion.span
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="body-small-medium flex items-center gap-2"
                >
                  <Check size={16} />
                  Sent!
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </form>
      </div>
    </section>
  );
}

function inputClass(hasError: boolean) {
  return `w-full h-[50px] rounded-[6px] border px-4 py-3 text-sm outline-none transition-all duration-200 placeholder:text-gray
    ${
      hasError
        ? "border-primary focus:ring-2 focus:ring-primary/20"
        : "border-[#E2E2E2] focus:border-primary focus:ring-2 focus:ring-primary/15"
    }`;
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="body-regular text-dark">{label}</label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="caption-regular text-primary"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}