import React, { useState } from "react";
import logoImage from "../assets/images/logo.png";
import menuSvg from "../assets/images/menu.svg";
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
          <div className="md:hidden text-black cursor-pointer">
            <img
              src={menuSvg}
              alt=""
              className="h-7 w-7"
              onClick={(pre) => {
                console.log("mohan the don");
                setOpenNav(!pre);
              }}
            />
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
        <div className="absolute inset-0 z-50">
          <div className="flex justify-center items-center bg-white">
            <ul className="text-base flex space-x-8 h-full">
              {links.map((item) => (
                <li className="h-full py-5 border-b-2 border-transparent cursor-pointer hover:border-[#E7613A] relative ">
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
          <Button>Get Pricing</Button>
        </div>
      )}
    </>
  );
};

export default Header;
