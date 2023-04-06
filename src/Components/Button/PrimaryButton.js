import { Button } from "@material-tailwind/react";
import React from "react";

const PrimaryButton = ({ children, className }) => {
  return (
    <Button
      className={`${className} bg-buttonColor text-white  rounded-md  hover:bg-buttonColorHover 
  duration-500`}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
