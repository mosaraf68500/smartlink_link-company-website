import GlobalOffices from "@/src/components/shared/GlobalOffices";
import LifeBeyondScreens from "@/src/components/about-us/LifeBeyondScreens";
// TODO: re-enable once real Smartlink testimonials/company story are provided
// import OneCompanyFourProducts from "@/src/components/about-us/OneCompanyFourProducts";
// import OurJourney from "@/src/components/about-us/OurJourney";
import OurTeam from "@/src/components/about-us/OurTeam";
import ContentHero from "@/src/components/shared/ContentHero";
import ReadyToBuildCTA from "@/src/components/shared/ReadyToBuildCTA";
import SectionHeader from "@/src/components/shared/SectionHeader";
import TalkToExperts from "@/src/components/shared/TalkToExperts";
import PrimaryButton from "@/src/components/ui/PrimaryButton";
import React from "react";

export default function AboutUsPage() {
  return (
    <div className="mt-20 md:mt-10">
      <ContentHero
        breadcrumb="About Us"
        title="From One Service to 
a Complete Digital Ecosystem."
        description="Started by solving business challenges. Today, we're building an ecosystem of products, technology, and services that help businesses grow smarter."
      />

      {/* TODO: re-enable once real Smartlink company story is provided — currently fabricated "AdsFixter" origin story */}
      {/* <OurJourney /> */}
      <OurTeam/>
      <LifeBeyondScreens/>
      {/* TODO: re-enable once real Smartlink content is provided — currently showcases fake SyncBari/SiteBari/MetaBari/MailBari products */}
      {/* <OneCompanyFourProducts/> */}
      <GlobalOffices />
      <TalkToExperts/>
      <ReadyToBuildCTA/>
    </div>
  );
}
