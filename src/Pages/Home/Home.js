import React from "react";
import mainBanner from "../../assets/landingBanner.png";
import PrimaryButton from "../../Components/Button/PrimaryButton";
import SectionText from "../../Components/Text/SectionText";
import { Button, Typography } from "@material-tailwind/react";

const Home = () => {
  return (
    <div
      id="/"
      className="flex flex-col min-h-screen md:flex-row mx-3 md:mx-10"
    >
      <div className="w-full md:w-5/12 flex flex-col justify-center px-2 gap-4">
        <Typography
          className="font-extrabold md:text-6xl text-center md:text-start py-2"
          variant="h1"
        >
          Sell from a single dashboard
        </Typography>
        <Typography variant="lead">An Omni-Channel Aggregator SaaS</Typography>
        <Button className="md:mr-auto my-2 md:my-5 px-12 py-4 text-xl">
          Start Free Trial
        </Button>
      </div>
      <div className="w-full md:w-7/12 p-2 ">
        <img className="" src={mainBanner} alt="..." />
      </div>
    </div>
  );
};

export default Home;
