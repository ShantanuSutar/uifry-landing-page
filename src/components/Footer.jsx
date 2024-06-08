import React from "react";
import Logo from "../assets/Logo.png";
import Mail from "../assets/mail.png";
import Phone from "../assets/phone.png";

const Footer = () => {
  return (
    <div className=" mt-40 dark:text-primary-white">
      <div className="  flex  justify-between">
        <div className=" flex gap-5 mt-[6px] flex-col">
          <img
            className=" min-w-[117px] min-h-[35px] dark:bg-primary-white  rounded-md  p-2"
            src={Logo}
            alt=""
          />
          <p className="a flex items-center ">
            <img className=" w-[20px] h-[18px]" src={Mail} alt="" />
            <span className="a ml-3  font-[ClashDisplay-Medium]">
              Help@Frybix.com
            </span>
          </p>
          <p className="a flex">
            <img className=" w-[20px] h-[18px]" src={Phone} alt="" />
            <span className=" ml-3 font-[ClashDisplay-Medium]">
              +1 234 456 678 89
            </span>
          </p>
        </div>
        <div className=" flex flex-col gap-4">
          <h1 className=" text-[32px] font-[ClashDisplay-Medium]">Links</h1>
          <p className="hover:text-primary-red font-[ClashDisplay-Medium]  hover:cursor-pointer">
            {" "}
            Home
          </p>
          <p className=" hover:text-primary-red cursor-pointer font-[ClashDisplay-Medium]">
            About Us
          </p>
          <p className=" hover:text-primary-red cursor-pointer font-[ClashDisplay-Medium]">
            Bookings
          </p>
          <p className=" hover:text-primary-red cursor-pointer font-[ClashDisplay-Medium]">
            Blog
          </p>
        </div>
        <div className=" flex flex-col gap-4">
          <h1 className=" text-[32px] font-[ClashDisplay-Medium]">Legal</h1>
          <p className=" hover:text-primary-red cursor-pointer font-[ClashDisplay-Medium]">
            Terms of Use
          </p>
          <p className=" hover:text-primary-red cursor-pointer font-[ClashDisplay-Medium]">
            Privacy Policy
          </p>
          <p className=" hover:text-primary-red cursor-pointer font-[ClashDisplay-Medium]">
            Cookie Policy
          </p>
        </div>
        <div className=" flex flex-col gap-4">
          <h1 className=" text-[32px] font-[ClashDisplay-Medium]">Product</h1>
          <p className=" hover:text-primary-red cursor-pointer font-[ClashDisplay-Medium]">
            Take Tour
          </p>
          <p className=" hover:text-primary-red cursor-pointer font-[ClashDisplay-Medium]">
            Live Chat
          </p>
          <p className=" hover:text-primary-red cursor-pointer font-[ClashDisplay-Medium]">
            Reviews
          </p>
        </div>
        <div className=" flex flex-col gap-4">
          <h1 className=" text-[32px] font-[ClashDisplay-Medium]">
            Newsletter
          </h1>
          <p className=" hover:text-primary-red cursor-pointer font-[ClashDisplay-Medium]">
            Stay Up To Date
          </p>

          <form className="a bg-white py-2 px-4 w-[340px]  flex gap-3">
            <input
              className=" w-[140px] outline-none  dark:text-primary-black"
              type="text"
              placeholder=" Your email"
            />
            <button className=" w-[160px] h-[61px] rounded-md bg-black text-white  hover:bg-primary-red ease-linear transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div>
        <hr className=" mt-28 " />
        <p className="a capitalize my-10 text-center font-[ClashDisplay-Medium] mb-16">
          Copyright 2022 uifry.com all rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
