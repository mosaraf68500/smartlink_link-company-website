import SectionHeader from "../../shared/SectionHeader";
import SectionSingleTitle from "../../shared/SectionSingleTitle";
import BrandImg from "./BrandImg";
import NewBrand from "./NewBrand";

const Brand = () => {
  return (
    <div className="section-padding">
      <div className="">
        <SectionHeader
          title="Trusted by Leading Businesses"
          description="We're proud to work with RMC plants, cement industries, and construction companies across Bangladesh — supplying the raw materials that power their projects."
        />
      </div>

      {/* <BrandImg></BrandImg> */}
      <NewBrand></NewBrand>
    </div>
  );
};

export default Brand;
