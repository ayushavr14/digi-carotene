import React from "react";

const TestiCard = ({ data }) => {
  return (
    <div
      className="rounded h-34 border-l-4  flex justify-center items-start flex-col p-4 hover:shadow-2xl shadow-lg space-y-5 bg-white"
      style={{ borderColor: `${data.color}` }}
    >
      {/* para */}
      <div className="">
        <p className="text-base text-left">{data.para}</p>
      </div>
      {/* info */}
      <div className="flex justify-center items-center space-x-5">
        <img src={data.image} alt="" className="h-10" />
        <div className="flex justify-center items-start flex-col">
          <div className="flex">
            <span className="text-semi-bold text-base text-gray-800">
              {data.name}
            </span>
            <span className="text-gray-500 text-base ml-2">
              {data.username}
            </span>
          </div>
          <p className="text-xs font-semibold text-gray-500">
            {data.designation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestiCard;
