import React from "react";
import LeftFeatures from "./LeftFeatures";
import RightFeatures from "./RightFeatures";

const Features = () => {
  return (
    <div className=" relative w-full mt-[36%] flex">
      <LeftFeatures />
      <RightFeatures />
    </div>
  );
};

export default Features;
