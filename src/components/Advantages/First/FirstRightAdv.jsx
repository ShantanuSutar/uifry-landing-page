import React from "react";
import adv1 from "../../../assets/adv1.png";
import advs1 from "../../../assets/advs1.png";
import Star64 from "../../../assets/star64.png";
import ColorFirst from "../../../assets/coloradvfirst.png";

const FirstRightAdv = () => {
  return (
    <div className=" w-[40%]">
      <img className="a absolute right-[2px]" src={ColorFirst} alt="" />
      <img
        className="a absolute  -right-[180px] -top-[100px]"
        src={Star64}
        alt=""
      />
      <img className=" absolute  -bottom-[260px]" src={adv1} alt="" />
      <img className="absolute  -right-[15px] top-[120px]" src={advs1} alt="" />
    </div>
  );
};

export default FirstRightAdv;
