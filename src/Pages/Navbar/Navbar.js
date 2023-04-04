import React, { useContext, useState } from "react";
import { ScrollContext } from "../../Context/ScrollPosition";
import logo from "../../assets/logo/logo.svg";
import PrimaryButton from "../../Components/Button/PrimaryButton";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { scrollPosition } = useContext(ScrollContext);
  const Links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Integration",
      link: "/",
    },
    {
      name: "Why Dealdone",
      link: "/",
    },
    {
      name: "Partners",
      link: "/",
    },
    {
      name: "Contact",
      link: "/",
    },
  ];
  return (
    <div
      className={`w-full  fixed top-0 left-0  z-20  transition-shadow ${
        scrollPosition > 0 ? "shadow-md" : "shadow-none"
      }`}
    >
      <div className="md:flex items-center justify-between bg-slate-100 py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <img src={logo} alt="..." />
          {/* <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          Designer */}
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-inherit md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-16" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <PrimaryButton className="mx-0 md:mx-2 ">Get Started</PrimaryButton>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
