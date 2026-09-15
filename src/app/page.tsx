import React from "react";
import Brand from "../components/home/Brand/Brand";
import Hero from "../components/home/hero/Hero";
import Work from "../components/home/work/Work";
import FAQ from "../components/shared/FAQ";
import ToolMain from "../components/home/tools/ToolMain";
import TalkToExperts from "../components/shared/TalkToExperts";
import ServiceMain from "../components/home/services/ServiceMain";
import ReadyToBuildCTA from "../components/shared/ReadyToBuildCTA";
import OurEcosystem from "../components/home/OurEcosystem";
function home() {
  return (
    <div className="">
      <Hero></Hero>
      <Brand></Brand>
      <Work></Work>
      

      {/* <OurEcosystem /> */}
      <ServiceMain></ServiceMain>
      <ToolMain></ToolMain>
      <FAQ></FAQ>
      <TalkToExperts></TalkToExperts>
      <ReadyToBuildCTA></ReadyToBuildCTA>
    </div>
  );
}

export default home;
