import React from "react";
import Third from "../../assets/3.png";
import Second from "../../assets/2.png";
import First from "../../assets/1.png";
import ColorRight from "../../assets/colorheroright.png";

const Right = () => {
  return (
    <div className=" flex mt-20 w-[50%] relative">
      <img
        className=" absolute -top-[100px]  left-[180px]"
        src={ColorRight}
        alt=""
      />

      <img className=" absolute left-44  -bottom-[370px]" src={Third} alt="" />
      <img
        className=" scale-90 absolute left-[170px] -bottom-[330px]"
        src={Second}
        alt=""
      />
      <img
        className=" scale-90 absolute left-[65px] -bottom-[260px]"
        src={First}
        alt=""
      />
    </div>
  );
};

export default Right;
