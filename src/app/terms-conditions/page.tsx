import ContentHero from "@/src/components/shared/ContentHero";
import ReadyToBuildCTA from "@/src/components/shared/ReadyToBuildCTA";
import React from "react";
import Conditions from "./_component/Conditions";

const page = () => {
  return (
    <div className="px-2 md:px-0">
      <div className="mt-22"></div>
      <ContentHero
        breadcrumb="Legal"
        title="Terms & Conditions"
        description="Last Updated : 31 Jul 2026"
      />
      <div className="max-w-[1024px] mx-auto">  <Conditions></Conditions></div>

      <ReadyToBuildCTA />
    </div>
  );
};

export default page;
