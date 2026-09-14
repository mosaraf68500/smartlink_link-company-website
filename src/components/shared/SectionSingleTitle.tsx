import React from "react";

interface SectionSingleTitleProps {
  children: React.ReactNode;
}

const SectionSingleTitle = ({ children }: SectionSingleTitleProps) => {
  return (
    <div>
      <h5 className="h5 text-center font-bricolage">{children}</h5>
    </div>
  );
};

export default SectionSingleTitle;
