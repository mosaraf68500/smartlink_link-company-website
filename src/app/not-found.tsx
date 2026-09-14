import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import PrimaryButton from "../components/ui/PrimaryButton";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-white px-4">
      {/* Gradient background - same as ContentHero */}
      <img
        src="/images/gradients/hero-gradient-left.svg"
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-[-15%]
          left-[-75%]
          z-0
          w-[180%]
          max-w-none

          sm:bottom-[-25%]
          sm:left-[-55%]
          sm:w-[150%]

          lg:bottom-[-45%]
          lg:left-[-35%]
          lg:w-[100%]
        "
      />
      <img
        src="/images/gradients/hero-gradient-right.svg"
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-[-15%]
          right-[-75%]
          z-0
          w-[180%]
          max-w-none

          sm:bottom-[-25%]
          sm:right-[-55%]
          sm:w-[150%]

          lg:bottom-[-45%]
          lg:right-[-35%]
          lg:w-[100%]
        "
      />

      <div className="relative z-10 flex w-full max-w-[560px] flex-col items-center gap-6 text-center">
        <p
          className="font-bricolage text-primary"
          style={{ fontSize: 120, lineHeight: "100%", fontWeight: 600 }}
        >
          404
        </p>

        <div className="flex flex-col gap-3">
          <h1 className="h4 font-bricolage text-dark">Page Not Found</h1>
          <p className="body-regular text-gray">
            The page you&apos;re looking for doesn&apos;t exist or may have been
            moved. Let&apos;s get you back on track.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Link href="/">
            <PrimaryButton>
              <span className="flex items-center gap-2">
                <ArrowLeft size={18} />
                Back to Home
              </span>
            </PrimaryButton>
          </Link>

          <Link
            href="/contact"
            className="body-regular font-medium text-dark underline underline-offset-4 hover:text-primary"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
}
