import GlobalOffices from "@/src/components/shared/GlobalOffices";
// TODO: re-enable once real Smartlink testimonials/company story are provided
// import OneCompanyFourProducts from "@/src/components/about-us/OneCompanyFourProducts";
// import OurJourney from "@/src/components/about-us/OurJourney";
import BusinessPolicy from "@/src/components/about-us/BusinessPolicy";
import ManagingDirectorMessage from "@/src/components/about-us/ManagingDirectorMessage";
import MissionVision from "@/src/components/about-us/MissionVision";
import WhatWeDo from "@/src/components/about-us/WhatWeDo";
import ContentHero from "@/src/components/shared/ContentHero";
import { PAGE_CONTAINER } from "@/src/components/shared/pageContainer";
import ReadyToBuildCTA from "@/src/components/shared/ReadyToBuildCTA";
import TalkToExperts from "@/src/components/shared/TalkToExperts";

export default function AboutUsPage() {
  return (
    <div className="mt-20 md:mt-10">
      {/* Same container as Navbar and the sections below, so the hero's edges line up with them. */}
      <div className={PAGE_CONTAINER}>
        <ContentHero
          breadcrumb="About Us"
          title="Your Trusted Partner in Global Sourcing & Logistics"
          description="Smartlink Systems is a Bangladesh-based shipping, logistics, and commercial trading company, connecting industries across the country with reliable global supply chains."
        />
      </div>

      {/* TODO: re-enable once real Smartlink company story is provided — currently fabricated "AdsFixter" origin story */}
      {/* <OurJourney /> */}
      <WhatWeDo />
      <ManagingDirectorMessage />
      <MissionVision />
      <BusinessPolicy />
      <GlobalOffices />
      <TalkToExperts/>
      <ReadyToBuildCTA/>
    </div>
  );
}
