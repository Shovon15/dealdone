import React from "react";
import mainBanner from "../../assets/section images/mainbanner.png";
import PrimaryButton from "../../Components/Button/PrimaryButton";
import SectionText from "../../Components/Text/SectionText";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row mx-5 md:mx-10">
      <div className="w-full md:w-1/2 flex flex-col justify-center px-5">
        <h1 className="text-2xl md:text-5xl pt-5 md:mt-0 font-semibold ">
          Multichannel order & inventory management software.
        </h1>
        <SectionText title="DealDone enables vendors to connect Multiple Online Marketplaces & Shopping Carts to manage inventory in one place and have it synced across multiple connected channels." />

        <PrimaryButton className="md:mr-auto my-2">
          Start Free Trial
        </PrimaryButton>
      </div>
      <div className="w-full md:w-1/2 p-5 md:p-10">
        <img className="" src={mainBanner} alt="..." />
      </div>
    </div>
  );
};

export default Home;
