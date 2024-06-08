import React from "react";
import adv2 from "../../../assets/adv2.png";
import advs2 from "../../../assets/advs2.png";
import Star48 from "../../../assets/star48.png";
import ColorSec from "../../../assets/coloradvsec.png";

const SecondLeftAdv = () => {
  return (
    <div className=" w-[40%]">
      <img className="a absolute -top-[40px]" src={ColorSec} alt="" />

      <img
        className=" -top-[200px] left-[450px] absolute"
        src={Star48}
        alt=""
      />
      <img className=" absolute -top-[210px] -left-[150px]" src={adv2} alt="" />
      <img className="absolute left-[110px] top-4" src={advs2} alt="" />
    </div>
  );
};

export default SecondLeftAdv;
