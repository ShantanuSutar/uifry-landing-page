import React from "react";
import LeftTes from "./LeftTes";
import RightTes from "./RightTes";

const Testimonials = () => {
  return (
    <div className=" mt-96 flex flex-col">
      <div className=" text-center flex flex-col justify-center items-center">
        <h1 className="  uppercase text-[18px] font-[ClashDisplay-Medium] tracking-widest ">
          Testimonial
        </h1>
        <h1 className="  font-[ClashDisplay-Bold] text-[48px] capitalize mt-3  w-[400px] leading-none">
          what our users say about us?
        </h1>
      </div>
      <div className="relative flex mt-28">
        <LeftTes />
        <RightTes />
      </div>
    </div>
  );
};

export default Testimonials;
