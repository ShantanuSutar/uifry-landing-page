import Logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <nav className=" flex  w-[1090px] h-[60px] justify-between items-center my-5 ">
      <div className=" flex gap-10">
        <img className=" w-[117px] h-[35px]" src={Logo} alt="" />
        <div className=" flex font-bold  w-full justify-evenly gap-5 text-lg">
          <button className=" font-[ClashDisplay-Bold] text-primary-red">
            Home
          </button>
          <button>About Us</button>
          <button>Pricing</button>
          <button>Features</button>
        </div>
      </div>
      <div className=" w-[180px] h-[60px]  rounded-md flex items-center bg-primary-black text-primary-white justify-center ">
        <button>Download</button>
      </div>
    </nav>
  );
};

export default Navbar;
