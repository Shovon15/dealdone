import React from "react";
import mainBanner from "../../assets/landingBanner.png";
import PrimaryButton from "../../Components/Button/PrimaryButton";
import { Typography } from "@material-tailwind/react";

const Home = () => {
  return (
    <div id="/" className="flex flex-col min-h-fit md:flex-row mx-3 md:mx-10">
      <div className="w-full md:w-6/12 flex flex-col justify-center px-2 gap-2 md:gap-4">
        <Typography
          className="font-extrabold text-xl px-2 md:px-0 md:text-4xl text-center md:text-start py-2"
          variant="h2"
        >
          Connect Your Sales Channels,
          <br /> To Manage All-In-One Place
        </Typography>
        <Typography
          className="font-semibold text-md text-center md:text-start"
          variant="lead"
        >
          An Omni-Channel Aggregator SaaS
        </Typography>
        <div className="mx-auto md:m-0">
          <a href="https://app.dealdone.com.bd/login">
            <PrimaryButton className="md:mr-auto py-2 px-4 md:px-7 md:py-3  mb-4 md:mb-0  text-xs md:text-xl">
              Start For Free
            </PrimaryButton>
          </a>
        </div>
      </div>
      <div className="w-full md:w-6/12 p-2 ">
        <img className="" src={mainBanner} alt="..." />
      </div>
    </div>
  );
};

export default Home;
