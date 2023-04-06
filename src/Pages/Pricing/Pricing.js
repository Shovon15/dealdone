import { Typography } from "@material-tailwind/react";
import React from "react";
import SectionText from "../../Components/Text/SectionText";
import SectionHeading from "../../Components/Text/SectionHeading";
import PricingCard from "../../Components/Card/PricingCard";
// import {  } from "react-icons/io";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
// import { IoIosCheckmarkCircle } from "react-icons/io";

const Pricing = () => {
  const features = [
    {
      icon: <IoCheckmarkCircleOutline />,
      text: "Optimizing Inventory",
    },
    {
      icon: <IoCheckmarkCircleOutline />,
      text: "Hassle-Free Order Management",
    },
    {
      icon: <IoCheckmarkCircleOutline />,
      text: "Streamlining Operations",
    },
    {
      icon: <IoCheckmarkCircleOutline />,
      text: "Reducing Operational Cost",
    },
    {
      icon: <IoCheckmarkCircleOutline />,
      text: "Increasing Access To Formal Credit",
    },
  ];
  return (
    <div id="pricing" className="min-h-screen m-5 md:mx-10">
      <Typography variant="h5" className="font-bold text-center">
        Get started with one of our plans
      </Typography>

      <Typography
        className="font-extrabold text-3xl md:text-5xl text-center flex  justify-center md:text-start py-2"
        variant="h1"
      >
        Simple, Affordable Pricing
      </Typography>

      <div className="flex flex-col md:flex-row gap-5 md:m-10 my-5">
        <div className="w-full md:w-8/12">
          <PricingCard />
        </div>

        <div className="w-full bg-white dark:bg-darkComp  md:w-4/12 border-2 border-gray-300 dark:border-darkBorder rounded-lg p-5">
          <Typography variant="h4" className="pb-5">
            Features
          </Typography>
          {features.map((feature, i) => (
            <div className="flex gap-4 justify-start items-center text-4xl hover:text-buttonColorHover cursor-pointer">
              <span className="font-extrabold">{feature.icon}</span>
              <Typography variant="h5">{feature.text}</Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
