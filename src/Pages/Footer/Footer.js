import { Typography } from "@material-tailwind/react";
import React from "react";
import logo from "../../assets/logo/logo.svg";
import logoSmall from "../../assets/logoSmall.png";
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

const Footer = () => {
  return (
    <footer className=" bg-darkComp text-white p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12  text-center md:justify-between">
        <div className=" dark:bg-darkComp  p-3 rounded-xl cursor-pointer w-full md:w-1/3 flex flex-col items-center gap-3 ">
          {/* <img src={logo} alt="logo-ct" className="w-44" /> */}
          <img src={logoSmall} alt="logo-ct" className="w-16" />
          <p className="">
            Sunt exercitation ipsum sint pariatur aliqua fugiat reprehenderit
            pariatur ipsum. Lorem elit eu nostrud excepteur minim ea mollit
            cillum. Sunt mollit sit voluptate cillum qui.
          </p>
        </div>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 ">
          <li>
            <Typography
              as="a"
              //   href="#"
              color="blue-gray"
              className="font-normal transition-colors text-white dark:text-white hover:text-blue-500 focus:text-blue-500  cursor-pointer"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              //   href="#"
              color="blue-gray"
              className="font-normal transition-colors text-white dark:text-white hover:text-blue-500 focus:text-blue-500  cursor-pointer"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              //   href="#"
              color="blue-gray"
              className="font-normal transition-colors text-white dark:text-white hover:text-blue-500 focus:text-blue-500  cursor-pointer"
            >
              Contribute
            </Typography>
          </li>
        </ul>
        <div className="w-full md:w-1/3">
          <p className="text-center font-semibold py-2">Contact</p>
          <div>
            <div className="flex flex-col gap-2 justify-center items-start">
              <span className="flex items-center gap-2 ">
                <BsTelephone />
                <p>+0098278278247</p>
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
