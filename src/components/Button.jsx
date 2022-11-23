import React from "react";

const Button = ({ children, className }) => {
  return (
    <button
      // className={`border-2 border-[#E7613A] px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#E7613A] hover:text-white transition duration-400 ease-in-out `}
      className={`border-2 border-[#E7613A] px-4 py-2 rounded-full text-sm font-semibold transition duration-400 ease-in-out hover:text-white hover:bg-[#E7613A] ${className}`}
    >
      {children}
    </button>
  );
};

export const FilledButton = ({ children }) => (
  <Button
    className={
      "bg-gradient-to-r from-[#e36139] to-[#ec8e46] text-white hover:!bg-gradient-to-l hover:!from-[#e36139] hover:!to-[#ec8e46]"
    }
  >
    {children}
  </Button>
);

export default Button;
