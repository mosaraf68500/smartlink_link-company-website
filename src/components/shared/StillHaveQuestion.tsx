// 



"use client";

import { useState } from "react";
import { User, Mail, Lock, Loader2 } from "lucide-react";
import { toast } from "react-toastify";
import PrimaryButton from "@/src/components/ui/PrimaryButton";

export default function StillHaveQuestion() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Postman environment এ যে port/baseUrl দেওয়া আছে (যেমন 5000), ঠিক সেটাই নিশ্চিত করুন
      const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL ;

      // 2. Exact JSON payload তৈরি (Postman format অনুযায়ী)
      const payload = {
        name: name.trim() || "Anonymous", // Backend Schema তে string required হলে empty না রেখে fallback দিন
        email: email.trim(),
        question: question.trim(),
      };

      const response = await fetch(`${baseUrl}/contact-questions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast.success("Thank you! Your question has been submitted.");
        setName("");
        setEmail("");
        setQuestion("");
      } else {
        console.error("API Error Response:", data);
        toast.error(data.message || "Failed to submit your question.");
      }
    } catch (error) {
      console.error("Network Error:", error);
      toast.error("Something went wrong. Please check your connection.");
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
      <div className="flex w-full flex-col gap-4 lg:w-[582px] lg:flex-shrink-0">
        <h3 className="font-bricolage text-dark h4">Still have a question?</h3>
        <p className="text-gray title-regular font-jakarta">
          If you couldn&apos;t find the answer you were looking for just ask us
          directly. We&apos;re launching soon and your questions help us build
          better solutions.
        </p>
      </div>

      {/* Right Form */}
      <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-4">
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