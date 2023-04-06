import { IconButton, MobileNav, Navbar } from "@material-tailwind/react";
import React from "react";
import "./Nav.css";
import { Link } from "react-scroll";
import PrimaryButton from "../../Components/Button/PrimaryButton";
import logo from "../../assets/logo/logo.svg";
import logoSmall from "../../assets/logoSmall.png";
import { useContext } from "react";
import { ScrollContext } from "../../Context/ScrollPosition";
// import { NavLinks } from "./NavLinks";
import SwitchButton from "../../Components/Button/SwitchButton";

const Nav = ({ active }) => {
  const [openNav, setOpenNav] = React.useState(false);
  const { width } = useContext(ScrollContext);
  console.log("width", width);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 400 && setOpenNav(false)
    );
  }, []);

  const items = (
    <>
      <a href="https://app.dealdone.com.bd">
        <PrimaryButton>SignUp</PrimaryButton>
      </a>

      {/* <Switch onClick={handleThemeSwitch} /> */}
      <div className="flex justify-center items-center md:ml-4 ">
        <SwitchButton />
      </div>

      {/* <label className="relative flex justify-between items-center group p-0 text-xl pointer cursor-pointer my-2 md:my-0">
        <input
          onClick={handleThemeSwitch}
          type="checkbox"
          className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md"
        />
        <div></div>

        <span
          className="w-[2.75rem] h-5 flex items-center flex-shrink-0 ml-2 p-0 bg-gray-500 rounded-full duration-300 
               ease-in-out peer-checked:bg-green-400 after:w-[1.75rem] after:h-7 after:bg-gray-400 after:rounded-full after:shadow-md 
               after:duration-300 peer-checked:after:translate-x-4 peer-checked:after:bg-gray-200 group-hover:after:translate-x-0 "
        ></span>
      </label> */}
    </>
  );

  const navList = (
    <>
      <ul className="mb-4 mt-4 flex flex-col gap-4  lg:mb-0 lg:mt-0 lg:flex-row items-start lg:items-center lg:gap-6">
        <Link
          to="/"
          spy={true}
          smooth={true}
          activeClass={active}
          offset={-78}
          duration={500}
          className="text-gray-800 dark:text-gray-200 font-bold hover:text-blue-500 duration-500 cursor-pointer "
        >
          Home
        </Link>

        <li className=" cursor-pointer">
          <Link
            to="why_dealdone"
            spy={true}
            activeClass={active}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-gray-800 dark:text-gray-200 font-bold hover:text-blue-500  duration-500"
          >
            Why Dealdone
          </Link>
        </li>
        <li className=" cursor-pointer">
          <Link
            to="credit_scoring"
            spy={true}
            activeClass={active}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-gray-800 dark:text-gray-200 font-bold hover:text-blue-500  duration-500"
          >
            Credit Scoring
          </Link>
        </li>
        <li className=" cursor-pointer">
          <Link
            to="pricing"
            spy={true}
            smooth={true}
            activeClass={active}
            offset={-70}
            duration={500}
            className="text-gray-800  font-bold  hover:text-blue-500  duration-500"
          >
            Pricing
          </Link>
        </li>
      </ul>
    </>
  );

  return (
    <>
      <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none shadow-none bg-transparent border-none py-2 px-4 lg:px-8 lg:py-3">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link
            to="/"
            spy={true}
            smooth={true}
            // activeClass="active"
            offset={-78}
            duration={500}
            className="cursor-pointer"
          >
            <img className="w-12 md:hidden" src={logoSmall} alt="..." />
            <img className="w-32 hidden md:block" src={logo} alt="..." />
          </Link>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="hidden md:flex justify-around mt-2">{items}</div>

            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6 dark:text-white"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 dark:text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="md:hidden flex justify-start gap-5 my-2">{items}</div>
        </MobileNav>
      </Navbar>
    </>
  );
};

export default Nav;
