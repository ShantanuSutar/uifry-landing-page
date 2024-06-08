import React from "react";
import AppleIcon from "../../assets/apple.png";
import DownloadIphones from "../../assets/download.png";
import ELeft from "../../assets/downloadLeftEllpise.png";
import ERight from "../../assets/downloadRightEllpise.png";

const Download = () => {
  return (
    <div className=" mt-48 rounded-xl bg-primary-black w-full min-h-[508px] text-primary-white flex">
      <div className=" w-[60%] relative  h-[508px] justify-center gap-5  pl-20 flex flex-col">
        <img className=" absolute -bottom-7 left-[0]" src={ELeft} alt="" />
        <h1 className="  font-[ClashDisplay-Bold] text-[48px] capitalize  leading-none">
          ready to get started?
        </h1>
        <p className="  capitalize [word-spacing:5px] leading-relaxed text-[18px]">
          Risus habitant leo egestas mauris diam eget morbi tempus vulputate.
        </p>
        <button className=" bg-primary-white  flex text-primary-black w-[208px] h-[60px] rounded-md  items-center justify-center gap-2 relative ">
          <span className=" mt-[2px] font-[ClashDisplay-Medium] text-[18px]">
            Download App
          </span>
          <img className=" scale-90" src={AppleIcon} alt="" />
        </button>
      </div>
      <div className=" relative">
        <img className=" absolute left-[120px] -top-2" src={ERight} alt="" />
        <img className=" mt-8 relative" src={DownloadIphones} alt="" />
      </div>
    </div>
  );
};

export default Download;
