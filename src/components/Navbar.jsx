import { useState } from "react";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const [active, setActive] = useState(1);
  return (
    <nav className=" flex  w-[1090px] h-[60px] justify-between items-center my-5  mt-8">
      <div className=" flex gap-10">
        <img className=" w-[117px] h-[35px]" src={Logo} alt="" />
        <div className=" flex font-bold  w-full justify-evenly gap-5 text-lg text-[20px]">
          <button
            onClick={() => setActive(1)}
            className={` hover:cursor-pointer hover:border-b-primary-red hover:border-b-2    ${
              active === 1 ? "font-[ClashDisplay-Bold] text-primary-red" : ""
            } `}
          >
            Home
          </button>
          <button
            onClick={() => setActive(2)}
            className={` hover:cursor-pointer hover:border-b-primary-red hover:border-b-2    ${
              active === 2 ? "font-[ClashDisplay-Bold] text-primary-red" : ""
            } `}
          >
            About Us
          </button>
          <button
            onClick={() => setActive(3)}
            className={` hover:cursor-pointer hover:border-b-primary-red hover:border-b-2    ${
              active === 3 ? "font-[ClashDisplay-Bold] text-primary-red" : ""
            } `}
          >
            Pricing
          </button>
          <button
            onClick={() => setActive(4)}
            className={` hover:cursor-pointer hover:border-b-primary-red hover:border-b-2    ${
              active === 4 ? "font-[ClashDisplay-Bold] text-primary-red" : ""
            } `}
          >
            Features
          </button>
        </div>
      </div>
      <div className=" w-[180px] h-[60px]  rounded-md flex items-center bg-primary-black text-primary-white justify-center text-[18px]  font-[ClashDisplay-Medium] hover:bg-primary-red ease-linear transition-all cursor-pointer ">
        <button>Download</button>
      </div>
    </nav>
  );
};

export default Navbar;
