
import React, { ReactNode } from "react";

interface SectionHeaderProps {
  title: React.ReactNode;
  description: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  children?: ReactNode; // optional - e.g. a button, rendered under description
}

const SectionHeader = ({
  title,
  description,
  className = "",
  titleClassName = "text-[#112420]", // Default title color
  descriptionClassName = "text-[#626262]", // Default description color
  children,
}: SectionHeaderProps) => {
  return (
    <div className={`container  md:px-0 ${className}`}>
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
        {/* Left */}
        <div className="flex-1">
          <h2 className={`h1 font-bricolage whitespace-pre-line  ${titleClassName}`}>{title}</h2>
        </div>

        {/* Right */}
        <div className="flex-1">
          <p
            className={`body-regular font-jakarta max-w-full md:max-w-md md:ml-auto ${descriptionClassName}`}
          >
            {description}
          </p>

          {children && (
            <div className="mt-6 flex max-w-full md:max-w-md md:ml-auto">
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
