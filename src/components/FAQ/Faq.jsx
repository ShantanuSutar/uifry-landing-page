import React from "react";
import Star64 from "../../assets/star64.png";
const Faq = () => {
  return (
    <div className=" mt-72 min-h-[900px]  h-auto">
      {/* Title */}
      <div className=" relative  flex flex-col ">
        <img
          className=" absolute right-[420px] top-[80px]"
          src={Star64}
          alt=""
        />
        <h1 className="  uppercase text-[18px] font-[ClashDisplay-Medium] tracking-widest text-primary-red ">
          FAQ
        </h1>
        <h1 className="  font-[ClashDisplay-Bold] text-[48px] capitalize mt-3  w-[450px] leading-none">
          frequently asked questions
        </h1>
      </div>
      {/* Columns */}
      <div className=" w-full min-h-[600px] mt-16 flex gap-4">
        <div className=" w-[535px] flex flex-col h-[181px]  gap-5">
          <div className=" bg-primary-red text-primary-white rounded-md p-[28px] py-[32px]">
            <h1 className=" capitalize text-[28px] font-[ClashDisplay-Semibold] leading-none">
              the best financial accounting app ever!
            </h1>
            <p className=" font-[ClashDisplay-Medium] tracking-wider [word-spacing:8px]  capitalize   mt-4">
              "Arcu at dictum sapien, mollis. Vulputate sit id accumsan as. In
              ultrices malesuada elit mauris
            </p>
          </div>
          <div className="  text-primary-black rounded-md p-[28px] py-[32px]">
            <h1 className=" capitalize text-[28px] font-[ClashDisplay-Semibold] leading-none">
              the best financial accounting app ever!
            </h1>
            <p className=" font-[ClashDisplay-Medium] tracking-wider [word-spacing:8px]  capitalize   mt-4 text-gray-500">
              "Arcu at dictum sapien, mollis. Vulputate sit id accumsan as. In
              ultrices malesuada elit mauris
            </p>
          </div>
          <div className=" bg-primary-red text-primary-white rounded-md p-[28px] py-[32px]">
            <h1 className=" capitalize text-[28px] font-[ClashDisplay-Semibold] leading-none">
              the best financial accounting app ever!
            </h1>
            <p className=" font-[ClashDisplay-Medium] tracking-wider [word-spacing:8px]  capitalize   mt-4">
              "Arcu at dictum sapien, mollis. Vulputate sit id accumsan as. In
              ultrices malesuada elit mauris
            </p>
          </div>
        </div>
        <div className=" w-[535px] flex flex-col h-[181px] gap-5">
          <div className="  text-primary-black rounded-md p-[28px] py-[32px]">
            <h1 className=" capitalize text-[28px] font-[ClashDisplay-Semibold] leading-none">
              the best financial accounting app ever!
            </h1>
            <p className=" font-[ClashDisplay-Medium] tracking-wider [word-spacing:8px]  capitalize   mt-4 text-gray-500">
              "Arcu at dictum sapien, mollis. Vulputate sit id accumsan as. In
              ultrices malesuada elit mauris
            </p>
          </div>
          <div className=" bg-primary-red text-primary-white rounded-md p-[28px] py-[32px]">
            <h1 className=" capitalize text-[28px] font-[ClashDisplay-Semibold] leading-none">
              the best financial accounting app ever!
            </h1>
            <p className=" font-[ClashDisplay-Medium] tracking-wider [word-spacing:8px]  capitalize   mt-4">
              "Arcu at dictum sapien, mollis. Vulputate sit id accumsan as. In
              ultrices malesuada elit mauris
            </p>
          </div>
          <div className="  text-primary-black rounded-md p-[28px] py-[32px]">
            <h1 className=" capitalize text-[28px] font-[ClashDisplay-Semibold] leading-none">
              the best financial accounting app ever!
            </h1>
            <p className=" font-[ClashDisplay-Medium] tracking-wider [word-spacing:8px]  capitalize   mt-4 text-gray-500">
              "Arcu at dictum sapien, mollis. Vulputate sit id accumsan as. In
              ultrices malesuada elit mauris
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
