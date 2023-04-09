import { Typography } from "@material-tailwind/react";
import React from "react";

const PricingCardItem = ({ item }) => {
  const { text, icon, title, price } = item;
  return (
    // <div
    //   className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white dark:bg-darkComp   hover:bg-gray-200  active:bg-gray-400
    //   dark:active:bg-dark focus:outline-none focus:ring focus:ring-blue-300 zoom h-44 md:h-28 p-5 cursor-pointer hover:shadow-xl
    //    border-2 border-gray-300 dark:border-darkBorder dark:hover:bg-darkComp hover:text-blue-500 rounded-xl transform transition duration-300 hover:scale-110"
    // >
    <div
      className="transform transition duration-300 hover:scale-110 border border-gray-300 hover:border-green-700 p-7
     rounded-xl flex flex-col md:flex-row justify-between cursor-pointer dark:border-darkBorder dark:bg-darkComp "
    >
      <div>
        <div className="flex items-center flex-row">
          <span className="text-4xl  px-2">{icon}</span>
          <div className="flex flex-col justify-center items-start">
            <Typography variant="h5" className="font-extrabold">
              {title}
            </Typography>
            <Typography variant="h6">{text}</Typography>
          </div>
        </div>
      </div>
      <Typography variant="h4">৳{price}</Typography>
    </div>
  );
};

export default PricingCardItem;
