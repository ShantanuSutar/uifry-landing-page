import React from "react";
import Arrow from "../../assets/arrow.png";
import Play from "../../assets/play.png";
import Star48 from "../../assets/star48.png";
import HeadingSupport from "../../assets/heading-support.png";

const Left = () => {
  return (
    <div className=" mt-24 w-[50%]">
      <div className="a relative">
        <img
          className="a absolute  -top-[80px] -left-[150px]"
          src={Star48}
          alt=""
        />
        <h1 className=" w-[618px]   text-[60px] tracking-tight leading-none font-[ClashDisplay-Bold]  capitalize">
          make the best financial decisions
        </h1>
        <p className=" capitalize text-sm leading-relaxed text-gray-500  mt-5 font-[ClashDisplay-Medium] tracking-wider ">
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
        <div className=" flex  mt-6 justify-between w-[374px] h-[60px] items-center">
          <button className=" w-[180px] h-[60px] bg-primary-black text-primary-white rounded-md flex justify-center items-center  gap-2">
            <span>Get Started</span>
            <img src={Arrow} alt="" />
          </button>
          <button className="a flex w-[154px] items-center justify-center h-[29px] gap-3">
            <img src={Play} alt="" />
            <span className=" font-[ClashDisplay-Medium]">Watch Video</span>
          </button>
        </div>
      </div>
      <div className=" mt-5 relative">
        <img className=" absolute top-16 left-28" src={Star48} alt="" />
        <img
          className=" scale-90  absolute right-12"
          src={HeadingSupport}
          alt=""
        />
      </div>
    </div>
  );
};

export default Left;
