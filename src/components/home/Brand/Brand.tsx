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
          description="Buyers who trust us with their supply needs, and suppliers who help us deliver — across RMC, cement, trading, and logistics."
        />
      </div>

      {/* <BrandImg></BrandImg> */}
      <NewBrand></NewBrand>
    </div>
  );
};

export default Brand;
