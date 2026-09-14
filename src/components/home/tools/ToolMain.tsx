// import React from "react";
// import SectionHeader from "../../shared/SectionHeader";
// import SectionTools from "./SectionTools";

// const ToolMain = () => {
//   return (
//     <section className=" section-padding ">
//       <SectionHeader
//         className="text-white"
//         title={
//           <>
//             The Tools <br className="hidden sm:inline" /> Behind Every Solution
//           </>
//         }
//         description="Every business is different. That's why we offer flexible collaboration models designed around your goals, timeline, and budget."
//       />
      
//       <div className="mt-15">
//         <SectionTools />
//       </div>
//     </section>
//   );
// };

// export default ToolMain;


import React from "react";
import SectionHeader from "../../shared/SectionHeader";
import SectionTools from "./SectionTools";

const ToolMain = () => {
  return (
    <section className=" section-padding ">
      <SectionHeader
        className="text-white"
        title="Where We Source From"
        description="We work with trusted suppliers and quarries across the globe, bringing reliable quality to every shipment."
      />
      
      <div className="mt-15">
        <SectionTools />
      </div>
    </section>
  );
};

export default ToolMain;