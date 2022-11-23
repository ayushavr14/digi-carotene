import React from "react";
import Button, { FilledButton } from "./Button";

const CTA = () => {
  return (
    <div className="bg-gradient-to-b from-white to-[#FFE9E2] w-full py-20 ">
      <div className=" w-full 0 max-w-[1350px] mx-auto text-center px-8">
        <div className="mb-6 md:text-2xl text-xl font-bold">
          <h1>White-Label Communication Apps for your Businesses,</h1>
          <h1>Universities, Non-Profits & Political Parties</h1>
        </div>
        <FilledButton>Contact Sales Team</FilledButton>
      </div>
    </div>
  );
};

export default CTA;
