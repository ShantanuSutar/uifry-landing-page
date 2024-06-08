import React from "react";
import FirstLeftAdv from "./First/FirstLeftAdv";
import FirstRightAdv from "./First/FirstRightAdv";
import SecondLeftAdv from "./Second/SecondLeftAdv";
import SecondRightAdv from "./Second/SecondRightAdv";

const Advantages = () => {
  return (
    <div className=" mt-72">
      <div className=" flex relative ">
        <FirstLeftAdv />
        <FirstRightAdv />
      </div>
      <div className=" mt-96">
        <div className=" flex relative">
          <SecondLeftAdv />
          <SecondRightAdv />
        </div>
      </div>
    </div>
  );
};

export default Advantages;
