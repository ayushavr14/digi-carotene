import React, { useState } from "react";
import logoImage from "../assets/images/logo.png";
import menuSvg from "../assets/images/menu.svg";
import closeSvg from "../assets/images/x.svg";
import Button from "./Button";
import { links } from "../assets/data/data.js";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <>
      <div className="fixed top-0 left-0 w-full shadow bg-white z-50 px-5">
        <div className="h-16 w-full flex justify-between  items-center max-w-[1350px] mx-auto font-ubuntu">
          <div className="cursor-pointer">
            <img src={logoImage} alt="logo" className="h-8" />
          </div>

          {/* mobile */}
          <div
            className="md:hidden text-black cursor-pointer"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <img src={closeSvg} alt="" className="h-7 w-7" />
            ) : (
              <img src={menuSvg} alt="" className="h-7 w-7" />
            )}
          </div>

          <div className=" md:flex justify-center items-center hidden">
            <ul className="text-base flex space-x-8 h-full">
              {links.map((item,index) => (
                <li key={index} className="h-full py-5 border-b-2 border-transparent cursor-pointer hover:border-[#E7613A] relative ">
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden md:block">
            <Button>Get Pricing</Button>
          </div>
        </div>
      </div>
      {openNav && (
         <div className="fixed inset-0 !top-16 bg-white z-50 p-20 space-y-8 md:hidden">
          <div className="flex justify-center items-center">
            <ul className="text-xl font-semibold flex space-y-5 flex-col ">
              {links.map((item) => (
                <li className="border-b-2 border-transparent cursor-pointer hover:border-[#E7613A] relative ">
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center items-center w-full">
            <Button>Get Pricing</Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
