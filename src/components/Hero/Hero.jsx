import React from "react";
import Left from "./Left";
import Right from "./Right";

const Hero = () => {
  return (
    <div className="w-[1090px] flex justify-center mt-8">
      <Left />
      <Right />
    </div>
  );
};

export default Hero;
