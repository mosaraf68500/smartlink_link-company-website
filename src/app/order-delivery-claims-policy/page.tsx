import ContentHero from "@/src/components/shared/ContentHero";
import ReadyToBuildCTA from "@/src/components/shared/ReadyToBuildCTA";
import React from "react";
import Return from "./_compo/Return";

const page = () => {
  return (
    <div className="px-2 md:px-0">
      <div className="mt-22"></div>
      <ContentHero
        breadcrumb="Legal"
        title="Order, Delivery & Claims Policy"
        description="Last Updated : 31 Jul 2026"
      />
      <div className="max-w-[1024px] mx-auto">
        <Return></Return>
      </div>
      <ReadyToBuildCTA />
    </div>
  );
};

export default page;
