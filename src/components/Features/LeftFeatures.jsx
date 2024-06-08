import React from "react";
import FeaturesMobile from "../../assets/featuresMobile.png";
import Star48 from "../../assets/star48.png";
import ColorFeatLeft from "../../assets/colorfeaturesleft.png";

const LeftFeatures = () => {
  return (
    <div className=" w-[50%]">
      <div className="   absolute  w-[720px]  right-[560px] h-[720px]   ">
        <img className=" absolute " src={ColorFeatLeft} alt="" />

        <img className=" absolute top-[150px]" src={Star48} alt="" />
        <img className=" relative scale-95" src={FeaturesMobile} alt="" />
      </div>
    </div>
  );
};

export default LeftFeatures;
