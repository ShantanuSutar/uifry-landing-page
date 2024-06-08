import { useEffect, useState } from "react";
import Logo from "../assets/Logo.png";
import { LiaToggleOffSolid } from "react-icons/lia";
import { LiaToggleOnSolid } from "react-icons/lia";

const Navbar = ({ theme, setTheme }) => {
  const [active, setActive] = useState(1);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <nav className=" flex  w-[1090px] h-[60px] justify-between items-center my-5  mt-8">
      <div className=" flex gap-10">
        <img
          className=" min-w-[117px] min-h-[35px] dark:bg-primary-white  rounded-md  p-2"
          src={Logo}
          alt=""
        />
        <div className=" flex font-bold  w-full justify-evenly gap-5 text-lg text-[20px]">
          <button
            onClick={() => setActive(1)}
            className={` hover:cursor-pointer hover:border-b-primary-red hover:border-b-2    ${
              active === 1
                ? "font-[ClashDisplay-Bold] text-primary-red"
                : " dark:text-primary-white"
            } `}
          >
            Home
          </button>
          <button
            onClick={() => setActive(2)}
            className={` hover:cursor-pointer hover:border-b-primary-red hover:border-b-2    ${
              active === 2
                ? "font-[ClashDisplay-Bold] text-primary-red"
                : " dark:text-primary-white"
            } `}
          >
            About Us
          </button>
          <button
            onClick={() => setActive(3)}
            className={` hover:cursor-pointer hover:border-b-primary-red hover:border-b-2    ${
              active === 3
                ? "font-[ClashDisplay-Bold] text-primary-red"
                : "dark:text-primary-white"
            } `}
          >
            Pricing
          </button>
          <button
            onClick={() => setActive(4)}
            className={` hover:cursor-pointer hover:border-b-primary-red hover:border-b-2    ${
              active === 4
                ? "font-[ClashDisplay-Bold] text-primary-red"
                : "dark:text-primary-white"
            } `}
          >
            Features
          </button>
        </div>
      </div>
      <div className=" flex gap-16">
        <button className=" text-4xl  hover:cursor-pointer dark:text-primary-white">
          {theme === "light" && (
            <LiaToggleOffSolid
              onClick={() => {
                setTheme("dark");
                localStorage.setItem("theme", "dark");
              }}
            />
          )}
          {theme === "dark" && (
            <LiaToggleOnSolid
              onClick={() => {
                setTheme("light");
                localStorage.setItem("theme", "light");
              }}
            />
          )}
        </button>
        <div className=" w-[180px] h-[60px]  rounded-md flex items-center bg-primary-black text-primary-white dark:text-primary-black dark:bg-primary-white justify-center text-[18px]  font-[ClashDisplay-Medium] hover:bg-primary-red dark:hover:bg-primary-red ease-linear transition-all cursor-pointer ">
          <button>Download</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
