import ContentHero from "@/src/components/shared/ContentHero";
import PrimaryButton from "@/src/components/ui/PrimaryButton";
import { ArrowRight, Link } from "lucide-react";
import React from "react";
import Alllogo from "./_compo/Alllogo";
import { brandsData } from "./_compo/Data";

const page = () => {
  return (
    <div className="mt-20 md:mt-10">
      <ContentHero
        breadcrumb="Our client"
        title={`Trusted by Growing \n Businesses`}
        description={`Here are a few of the companies we’ve had the opportunity to work with, helping them \n solve challenges, build better solutions, and move their businesses forward.`}
      >
          </ContentHero>
          <div>
              <Alllogo brands={brandsData} />
          </div>
    </div>
  );
};

export default page;
