import ContentHero from "@/src/components/shared/ContentHero";
import ReadyToBuildCTA from "@/src/components/shared/ReadyToBuildCTA";
import React from "react";
import Privacy from "./_components/Privacy";

export default function page() {
  return (
    <div className="px-2 md:px-0">
      <div className="mt-22"></div>
      <ContentHero
        breadcrumb="Legal"
        title="Privacy Policy"
        description="Last Updated : 31 Jul 2026"
      />
      <div className="max-w-[1024px] mx-auto">
        <Privacy></Privacy>
      </div>

      <ReadyToBuildCTA />
    </div>
  );
}
