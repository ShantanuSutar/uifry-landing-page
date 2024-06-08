import React from "react";
import TesWhole from "../../assets/testimonialWhole.png";
import TesEllipse from "../../assets/tesEllipse.png";
import Star48 from "../../assets/star48.png";
import ColorTes from "../../assets/colortes.png";

const LeftTes = () => {
  return (
    <div className=" w-[60%] ">
      <img
        className=" absolute  top-[70px] -left-[40px]"
        src={ColorTes}
        alt=""
      />

      <img
        className=" absolute -bottom-[110px] -left-[130px]"
        src={Star48}
        alt=""
      />
      <img
        className=" absolute -top-[80px] -left-[65px]"
        src={TesEllipse}
        alt=""
      />
      <img className=" absolute" src={TesWhole} alt="" />
    </div>
  );
};

export default LeftTes;
