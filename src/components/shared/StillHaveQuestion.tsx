"use client";

import { useState } from "react";
import { User, Mail, Lock, Loader2 } from "lucide-react";
import { toast } from "react-toastify";
import PrimaryButton from "@/src/components/ui/PrimaryButton";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function StillHaveQuestion() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !EMAIL_PATTERN.test(email.trim())) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (!question.trim()) {
      toast.error("Please type your question.");
      return;
    }

    setLoading(true);

    try {
      const { sendQuestion } = await import("@/src/lib/emailjs");

      await sendQuestion({
        name: name.trim() || "Anonymous",
        email: email.trim(),
        question: question.trim(),
      });

      toast.success("Thank you! Your question has been submitted.");
      setName("");
      setEmail("");
      setQuestion("");
    } catch (error) {
      console.error("EmailJS question error:", error);
      toast.error("Something went wrong. Please try again or contact us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="rounded-xl border bg-white
                 px-5 py-6 sm:px-8 sm:py-7 mt-6 md:mt-12 
                 flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10"
      style={{ borderColor: "#00000014" }}
    >
      {/* Left Copy */}
      <div className="flex w-full flex-col gap-4 lg:w-[42%] lg:flex-shrink-0 xl:w-[582px]">
        <h3 className="font-bricolage text-dark h4">Still have a question?</h3>
        <p className="text-gray title-regular font-jakarta">
          If you couldn&apos;t find the answer you were looking for just ask us
          directly. We&apos;re launching soon and your questions help us build
          better solutions.
        </p>
      </div>

      {/* Right Form */}
      <form onSubmit={handleSubmit} className="min-w-0 flex-1 flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="relative w-full sm:w-[293.5px] flex-shrink-0">
            <User
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray"
            />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name (Optional)"
              disabled={loading}
              className="w-full h-[50px] rounded-md border pl-11 pr-4 py-3 text-sm outline-none
                         placeholder:text-gray focus:border-[#e8e8e8] disabled:opacity-50"
              style={{ borderColor: "#E8E8E8" }}
            />
          </div>

          <div className="relative w-full">
            <Mail
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray"
            />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              disabled={loading}
              className="w-full h-[50px] rounded-md border pl-11 pr-4 py-3 text-sm outline-none
                         placeholder:text-gray focus:border-[#e8e8e8] disabled:opacity-50"
              style={{ borderColor: "#E8E8E8" }}
            />
          </div>
        </div>

        <textarea
          required
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Type your question here..."
          rows={3}
          disabled={loading}
          className="w-full rounded-md border px-4 py-3 text-sm outline-none resize-none
                     placeholder:text-gray focus:border-[#e8e8e8] disabled:opacity-50"
          style={{ borderColor: "#E8E8E8" }}
        />

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
          <PrimaryButton type="submit" disabled={loading}>
            {loading ? (
              <span className="flex items-center gap-2">
                <Loader2 size={16} className="animate-spin" /> Sending...
              </span>
            ) : (
              "Send Question"
            )}
          </PrimaryButton>
        </div>

        <p className="flex items-center gap-1.5 text-xs text-gray">
          <Lock size={12} />
          Your information is safe with us. We&apos;ll never share your email.
        </p>
      </form>
    </section>
  );
}
