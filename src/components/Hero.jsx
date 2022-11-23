import React from "react";
import { hero } from "../assets/data/data";
import hero_image from "../assets/images/hero-image.png";
import { FilledButton } from "./Button";

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-white to-[#FFE9E2] w-full">
      <div className="min-h-screen w-full grid md:grid-cols-2 grid-col-1  gap-x-10 max-w-[1350px] mx-auto pt-16 scroll-pb-48 ">
        {/* left side */}
        <div className="flex justify-center items-start flex-col ml-6">
          <h1 className="font-bold md:text-4xl text-3xl mb-2">
            Most Secure Hierarchical
            <br /> Messaging & Video Conference <br />
            Platform
          </h1>
          <p className="text-base mb-10">
            aapoon provides safe and secure team hierarchical
            <br /> messaging and video conference platforms for businesses,{" "}
            <br /> universities, non-profits, and political parties
          </p>

          <FilledButton>Contact Sales Team</FilledButton>
        </div>

        {/* right side */}
        <div className="flex justify-center items-center">
          <div className="relative  w-full">
            <img src={hero_image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
