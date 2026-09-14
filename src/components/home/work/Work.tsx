import React from "react";
import SectionHeader from "../../shared/SectionHeader";
import WorkOptions from "../../Work/WorkOptions";

const Work = () => {
  return (

    <div className="bg-[#F7F7F7]">
      <div className="container px-4 sm:px-0">
        <SectionHeader
          className="text-dark pt-20 md:pt-25"
          title={
            <>
              Choose How <br /> You Want to Work
            </>
          }
          titleClassName="text-dark"
          description="Every business is different. Whether it's a single shipment or a long-term contract, we work in the way that suits your operation."
          descriptionClassName="text-dark"
        />
      </div>

      <div className="section-padding !pt-15">
        <WorkOptions />
      </div>
    </div>
  );
};

export default Work;
