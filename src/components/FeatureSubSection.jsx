import React from "react";
import Button from "./Button";

const FeatureSubSection = ({ data, reverse }) => {
  return (
    <div className="w-full py-8">
      <div
        className={`flex justify-center items-center flex-col-reverse md:flex-row md:gap-20 ${
          reverse && "md:!flex-row-reverse "
        }`}
      >
        <div className="flex justify-center items-start flex-col md:w-1/2 w-full space-y-3 md:pr-32 ">
          <h1 className="text-lg  font-bold text-gray-800">{data.title}</h1>
          <p className="text-base text-left ">{data.para}</p>
          <Button>Get Free Demo</Button>
        </div>
        <div className="md:w-1/2 w-full ">
          <img src={data.image} alt="image" className="w-[600px]" />
        </div>
      </div>
    </div>
  );
};

export default FeatureSubSection;
