import emailjs from "@emailjs/browser";

/**
 * Shared EmailJS helpers for contact / question forms.
 *
 * Fill real values in `.env.local` (see `.env.example`).
 * Template variable names below must match your EmailJS templates.
 *
 * IMPORTANT: Next.js only inlines NEXT_PUBLIC_* vars when accessed with a
 * static key (process.env.NEXT_PUBLIC_FOO). Dynamic process.env[name] is
 * always undefined in the browser bundle.
 */

function requirePublicEnv(
  value: string | undefined,
  name: string,
): string {
  const trimmed = value?.trim();
  if (!trimmed) {
    throw new Error(`Missing ${name}. Add it to .env.local (see .env.example).`);
  }
  return trimmed;
}

function getPublicConfig() {
  return {
    publicKey: requirePublicEnv(
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      "NEXT_PUBLIC_EMAILJS_PUBLIC_KEY",
    ),
    serviceId: requirePublicEnv(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      "NEXT_PUBLIC_EMAILJS_SERVICE_ID",
    ),
  };
}

export type ContactInquiryPayload = {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  productInterest?: string;
};

export type QuestionPayload = {
  name: string;
  email: string;
  question: string;
};

/** Contact / Talk to Experts inquiry form. */
export async function sendContactInquiry(payload: ContactInquiryPayload) {
  const { publicKey, serviceId } = getPublicConfig();
  const templateId = requirePublicEnv(
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTACT,
    "NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTACT",
  );

  return emailjs.send(
    serviceId,
    templateId,
    {
      form_type: "Contact Inquiry",
      from_name: payload.fullName,
      from_email: payload.email,
      phone: payload.phone,
      product_interest: payload.productInterest || "Not specified",
      message: payload.message,
      reply_to: payload.email,
    },
    { publicKey },
  );
}

/** "Still have a question?" form. */
export async function sendQuestion(payload: QuestionPayload) {
  const { publicKey, serviceId } = getPublicConfig();
  const templateId = requirePublicEnv(
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_QUESTION,
    "NEXT_PUBLIC_EMAILJS_TEMPLATE_QUESTION",
  );

  return emailjs.send(
    serviceId,
    templateId,
    {
      form_type: "Still Have a Question",
      from_name: payload.name || "Anonymous",
      from_email: payload.email,
      message: payload.question,
      question: payload.question,
      reply_to: payload.email,
    },
    { publicKey },
  );
}
