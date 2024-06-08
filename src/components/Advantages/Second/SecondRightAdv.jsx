import React from "react";
import NinjaBlade from "../../../assets/ninjaBlade.png";

const SecondRightAdv = () => {
  return (
    <div className=" w-[46%] ml-28 mt-6">
      <div className=" mt-7">
        <div className=" flex items-center gap-5 ">
          <div className=" flex items-center justify-center size-11 bg-primary-red rounded-full">
            <img src={NinjaBlade} alt="" />
          </div>
          <span className=" font-[ClashDisplay-Semibold] text-[28px] dark:text-primary-white">
            Fully Customizable
          </span>
        </div>
        <p className=" font-[ClashDisplay-Medium] text-gray-500 capitalize mt-6">
          "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
          In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et
          blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit
          nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
          suspendisse aliquam."
        </p>
      </div>
    </div>
  );
};

export default SecondRightAdv;
