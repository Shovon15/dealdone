import React from "react";

const PrimaryButton = ({ children, className }) => {
  return (
    <button
      className={`${className} bg-indigo-600 text-white py-2 px-6 rounded-full  hover:bg-indigo-400 
  duration-500`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
