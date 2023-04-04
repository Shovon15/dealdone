import { Button } from "@material-tailwind/react";
import React from "react";

const PrimaryButton = ({ children, className }) => {
  return (
    <Button
      className={`${className} bg-blue-600 text-white py-3 px-6 rounded-md  hover:bg-blue-700 
  duration-500`}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
