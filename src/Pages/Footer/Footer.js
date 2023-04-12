import { Typography } from "@material-tailwind/react";
import React from "react";
import logoSmall from "../../assets/logoSmall.png";
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

const Footer = () => {
  return (
    <footer id="footer" className=" bg-darkComp text-white p-5">
      <div className="flex flex-col md:flex-row  items-center gap-2 md:gap-12 ">
        <div className="w-full md:w-2/3  flex flex-col  gap-3">
          <img src={logoSmall} alt="logo-ct" className="w-16 mx-auto md:mx-0" />
          <p className="">Omni-Channel Aggregator SaaS</p>
          <p className="text-justify text-xl font-semibold">
            Built To Reduce Manual Work Of Online Selling.
          </p>
          <p className="text-justify text-sm">
            Having Diverse Sales Channels For Your Product Line That Are A Pain
            To Track & Manage? Grow Your Brand! Not Your Daily Tasks On Product
            & Order Management.
          </p>
          <p className="text-justify text-xs">
            dealdone Automates Your Entire Online Selling Process, Providing You
            With The Tools & Support To Scale Your E-Commerce Business Across
            Multiple Marketplaces & Storefront.
          </p>
        </div>

        <div className="w-full md:w-1/3">
          <p className="text-center font-semibold py-2">Contact Us</p>
          <div>
            <div className="flex flex-col gap-2 justify-center items-start">
              <span className="flex items-center gap-2 ">
                <BsTelephone />
                <p>+8801677209697</p>
              </span>
              <span className="flex items-center gap-2">
                <FiMail />
                <p>tahsin@dealdone.com.bd</p>
              </span>
              <span className="flex items-start  gap-2">
                <GoLocation className="mt-1" />
                <p className="text-start">
                  DealDone Platform Limited
                  <br /> Delta Dahlia Tower (Level 06),
                  <br /> 36 Kemal Ataturk Avenue, Banani, Dhaka - 1213
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-8 border-blue-gray-200" />
      <Typography
        color="blue-gray"
        className="text-center font-normal text-white "
      >
        &copy; 2023 DealDone Platform Limited
      </Typography>
    </footer>
  );
};

export default Footer;
