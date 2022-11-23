import React from "react";
import { features } from "../assets/data/data";
import Button from "./Button";
import FeatureSubSection from "./FeatureSubSection";

const Feature = () => {
  return (
    <div className="bg-gradient-to-t from-white to-[#F7FFFF] w-full py-10 ">
      <div className="min-h-screen w-full 0 max-w-[1350px] mx-auto text-center px-8">
        <h1 className="md:text-3xl text-xl font-bold">
          We've got you covered when it comes to
        </h1>
        <h1 className="md:text-3xl text-xl font-bold text-[#E7613A]">
          white-labelling and premium services
        </h1>

        <div className="my-20">
          <FeatureSubSection data={features[0]} />
          <FeatureSubSection data={features[1]} reverse />
          <FeatureSubSection data={features[2]} />
          <FeatureSubSection data={features[3]} reverse />
        </div>
      </div>
    </div>
  );
};

export default Feature;
