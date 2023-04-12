import { Typography } from "@material-tailwind/react";
import React from "react";
import "./PricingCard.css";
const PricingCardItem = ({ item }) => {
  const { text, icon, title, price } = item;
  return (
    <div
      className="parent transform transition duration-300 hover:scale-110 border border-gray-300 hover:border-green-700  p-7
     rounded-xl flex flex-row md:flex-row justify-between cursor-pointer dark:border-darkBorder dark:bg-darkComp "
    >
      <div className=" flex items-center flex-row">
        <span className="child text-4xl  px-2 text-gray-500 hover:text-blue-500">
          {icon}
        </span>
        <div className="flex flex-col justify-center items-start">
          <Typography variant="h6" className="font-extrabold">
            {title}
          </Typography>
          <Typography
            variant="paragraph"
            className="text-gray-500 text-xs md:text-sm"
          >
            {text}
          </Typography>
        </div>
      </div>

      <div className="child flex items-end md:items-center">
        <Typography variant="h6">৳{price}</Typography>
        <span className="pt-2 text-sm text-gray-500">/month</span>
      </div>
    </div>
  );
};

export default PricingCardItem;
