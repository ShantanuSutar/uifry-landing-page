import React from "react";
import AppleIcon from "../../assets/apple.png";
import DownloadIphones from "../../assets/download.png";
import ELeft from "../../assets/downloadLeftEllpise.png";
import ERight from "../../assets/downloadRightEllpise.png";
import Star48 from "../../assets/star48.png";
import Star48white from "../../assets/star48white.png";
import Star64 from "../../assets/star64.png";
import Star64white from "../../assets/star64white.png";

const Download = () => {
  return (
    <div className=" relative  mt-48 rounded-xl bg-primary-black w-full min-h-[508px] text-primary-white flex">
      {/* Stars */}
      <img
        className=" absolute bottom-[100px] left-[450px]"
        src={Star48white}
        alt=""
      />
      <img
        className=" absolute -left-[150px] top-[120px]"
        src={Star48}
        alt=""
      />

      <img
        className=" absolute -right-[130px] -top-[120px]"
        src={Star64}
        alt=""
      />

      <img
        className=" absolute right-[360px] top-10"
        src={Star64white}
        alt=""
      />

      {/* Left */}
      <div className=" w-[62%] relative  h-[508px] justify-center gap-5  pl-20 flex flex-col">
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
      {/* Right */}
      <div className=" relative">
        <img className=" absolute left-[120px] -top-2" src={ERight} alt="" />
        <img className=" mt-8 relative" src={DownloadIphones} alt="" />
      </div>
    </div>
  );
};

export default Download;
