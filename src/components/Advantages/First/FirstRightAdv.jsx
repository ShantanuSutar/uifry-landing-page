import React from "react";
import adv1 from "../../../assets/adv1.png";
import advs1 from "../../../assets/advs1.png";

const FirstRightAdv = () => {
  return (
    <div className=" w-[40%]">
      <img className=" absolute  -bottom-[260px]" src={adv1} alt="" />
      <img className="absolute  -right-[54px] top-[120px]" src={advs1} alt="" />
    </div>
  );
};

export default FirstRightAdv;
