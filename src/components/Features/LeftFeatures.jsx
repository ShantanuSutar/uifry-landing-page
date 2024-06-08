import React from "react";
import FeaturesMobile from "../../assets/featuresMobile.png";

const LeftFeatures = () => {
  return (
    <div className=" w-[50%]">
      <div className="   absolute  w-[720px]  right-[560px] h-[720px]   ">
        <img className=" scale-95" src={FeaturesMobile} alt="" />
      </div>
    </div>
  );
};

export default LeftFeatures;
