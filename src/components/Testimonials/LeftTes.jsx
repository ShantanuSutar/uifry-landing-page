import React from "react";
import TesWhole from "../../assets/testimonialWhole.png";
import TesEllipse from "../../assets/tesEllipse.png";

const LeftTes = () => {
  return (
    <div className=" w-[60%] ">
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
