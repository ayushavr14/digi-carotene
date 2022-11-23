import React from "react";
import { testimonials } from "../assets/data/data";
import TestiCard from "./TestiCard";

const Testimonials = () => {
  return (
    <div className="bg-[#FFFDF2] w-full py-14 ">
      <div className=" w-full 0 max-w-[1350px] mx-auto text-center px-8">
        <h1 className="text-3xl font-bold">Testimonials:</h1>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 my-10">
          {testimonials.map((item,index) => (
            <TestiCard key={index} data={item}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
