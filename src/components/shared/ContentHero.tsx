import { ReactNode } from "react";
import BreadcrumbBadge from "../ui/BreadcrumbBadge";
import BoltIcon from "../icons/Bolticon";
import StartingPriceLine from "../ui/StartingPriceLine";

interface ContentHeroProps {
  breadcrumb: string;
  title: string;
  description: string;
  startingPrice?: string;
  children?: ReactNode;
  className?: string;
}

const ContentHero = ({
  breadcrumb,
  title,
  description,
  startingPrice,
  children,
  className = "",
}: ContentHeroProps) => {
  return (
    <section
      className={`
        relative
        w-full
        max-w-[1392px]
        mx-auto
        overflow-hidden
        rounded-b-[20px]
        bg-white
        px-4
        py-12
        sm:px-8
        sm:py-16
        lg:px-[180px]
        lg:py-20
        ${className}
      `}
    >
      {/* Bottom Left Gradient */}
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

      {/* Bottom Right Gradient */}
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

      {/* Content */}
      <div className=" relative z-10">
        <div className="mx-auto flex w-full max-w-[1032px] flex-col items-center gap-2 text-center">
          <BreadcrumbBadge
            icon={
              <span>
                <BoltIcon />
              </span>
            }
          >
            {breadcrumb}
          </BreadcrumbBadge>

          <h1 className="h1 max-w-4xl whitespace-pre-line text-dark font-bricolage">
            {title}
          </h1>

          <p className="body-small-regular max-w-3xl whitespace-pre-line text-gray">
            {description}
          </p>

          {startingPrice && <StartingPriceLine text={startingPrice} className="mt-3" />}

          {children && (
            <div className="mt-3 flex w-full flex-col items-center">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContentHero;
