import BgLogo from "../assets/images/triangle.png";
import Logo from "../assets/images/Logo.jpg";
// import { FaBarsStaggered } from "react-icons/fa6";

const Nav = () => {
  return (
    <section className="bg w-full min-h-screen p-10">
      <div className="flex justify-between ">
        <div>
          <img src={Logo} alt="Logo" className="logo w-[90px] h-[90px]" />
        </div>

        <div className="mt-6">
          {/* <FaBarsStaggered className="text-white w-[34.667px] h-[29.75px] cursor-pointer" /> */}
        </div>
      </div>

      <div className="flex justify-center items-center flex-col">
        <div>
          <img src={BgLogo} alt="" className="BgLogo"/>
        </div>
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-9xl text-[#CCFE01] font-bold">STRATEGY</h1>
        </div>
      </div>
    </section>
  );
};

export default Nav;
