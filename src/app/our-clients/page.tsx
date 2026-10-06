import ContentHero from "@/src/components/shared/ContentHero";
import React from "react";
import Alllogo from "./_compo/Alllogo";
import { brandsData } from "./_compo/Data";

const page = () => {
  return (
    <div className="mt-20 md:mt-10">
      <ContentHero
        breadcrumb="Our Network"
        title={`Trusted by Leading\nBusinesses`}
        description={`Our buyers and suppliers across trading, construction materials, and logistics — the network that keeps Smartlink shipments moving.`}
      />
      <div>
        <Alllogo brands={brandsData} />
      </div>
    </div>
  );
};

export default page;
