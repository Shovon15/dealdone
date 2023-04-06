import React from "react";
import mainBanner from "../../assets/landingBanner.png";
import PrimaryButton from "../../Components/Button/PrimaryButton";
import { Typography } from "@material-tailwind/react";

const Home = () => {
  return (
    <div id="/" className="flex flex-col min-h-fit md:flex-row mx-3 md:mx-10">
      <div className="w-full md:w-5/12 flex flex-col justify-center px-2 gap-4">
        <Typography
          className="font-extrabold md:text-5xl text-center md:text-start py-2"
          variant="h1"
        >
          Connect Your Sales Channels, To Manage All-In-One Place
        </Typography>
        <Typography className="font-semibold" variant="lead">
          An Omni-Channel Aggregator SaaS
        </Typography>
        <a href="https://app.dealdone.com.bd/login" className="mx-auto">
          <PrimaryButton className="md:mr-auto my-2 md:my-5 px-12 py-4 text-xl">
            Start Free Trial
          </PrimaryButton>
        </a>
      </div>
      <div className="w-full md:w-7/12 p-2 ">
        <img className="" src={mainBanner} alt="..." />
      </div>
    </div>
  );
};

export default Home;
