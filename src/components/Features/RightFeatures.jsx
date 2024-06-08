import React from "react";
import Features1 from "../../assets/features1.png";
import Features2 from "../../assets/features2.png";
import Features3 from "../../assets/features3.png";
import ColorFeatRight from "../../assets/colorfeaturesright.png";
const RightFeatures = () => {
  return (
    <div className=" mt-32 w-[50%] relative ">
      <img className=" absolute -right-[40%]" src={ColorFeatRight} alt="" />

      <h1 className="  uppercase text-[18px] font-[ClashDisplay-Medium] tracking-widest text-primary-red">
        Features
      </h1>
      <h1 className=" font-[ClashDisplay-Bold] text-[48px] ">Uifry Premium</h1>

      <div className=" mt-7 relative">
        <h1 className=" flex text-lg font-[ClashDisplay-Semibold] gap-3 items-center">
          <img className=" size-5 " src={Features1} alt="" />
          <span className=" tracking-wide  font-[ClashDisplay-Semibold] capitalize">
            budgeting intervals
          </span>
        </h1>
        <p className=" text-gray-500 font-[ClashDisplay-Medium]  capitalize mt-3">
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
      </div>
      <div className=" mt-8 relative">
        <h1 className=" flex text-lg font-[ClashDisplay-Semibold] tracking-wide gap-3 items-center">
          <img className=" size-5 " src={Features2} alt="" />
          <span className=" font-[ClashDisplay-Semibold] tracking-wide capitalize">
            budgeting intervals
          </span>
        </h1>
        <p className=" text-gray-500 capitalize font-[ClashDisplay-Medium] mt-3">
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
      </div>
      <div className=" mt-8">
        <h1 className=" flex text-lg font-[ClashDisplay-Semibold] gap-3 items-center">
          <img className=" size-5 " src={Features3} alt="" />
          <span className=" font-[ClashDisplay-Semibold] capitalize">
            budgeting intervals
          </span>
        </h1>
        <p className=" text-gray-500 capitalize font-[ClashDisplay-Medium] mt-3">
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
      </div>
    </div>
  );
};

export default RightFeatures;
