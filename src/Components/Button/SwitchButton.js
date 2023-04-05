import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../Context/ColorContext";
import { IconButton } from "@material-tailwind/react";
import sunIcon from "../../assets/sun.png";
import moonIcon from "../../assets/half-moon.png";
// import { Button } from "@material-tailwind/react";

const SwitchButton = () => {
  const { theme, handleThemeSwitch } = useContext(ThemeContext);

  return (
    <button
      className="w-10 h-10 rounded-xl bg-gray-800 dark:bg-gray-300 flex items-center justify-center"
      onClick={handleThemeSwitch}
    >
      {
        theme === "light" ? (
          // ----light svg---------
          <img src={sunIcon} alt="..." className="w-6 transition ease-in-out" />
        ) : (
          // <svg
          //   xmlns="http://www.w3.org/2000/svg"
          //   fill="none"
          //   viewBox="0 0 24 24"
          //   stroke="currentColor"
          //   className="text-gray-200 my-rotate-y-180"
          // >
          //   <path
          //     stroke-linecap="round"
          //     stroke-linejoin="round"
          //     stroke-width="2"
          //     d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          //   />
          // </svg>
          // ----dark svg---------
          <img src={moonIcon} alt="..." className="w-7" />
        )
        // <svg
        //   xmlns="http://www.w3.org/2000/svg"
        //   fill="none"
        //   viewBox="0 0 24 24"
        //   stroke="currentColor"
        //   className=" text-gray-300 my-rotate-y-180 ease-in-out duration-150"
        // >
        //   <path
        //     stroke-linecap="round"
        //     stroke-linejoin="round"
        //     stroke-width="2"
        //     d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        //   />
        // </svg>
      }

      {/* </div> */}
    </button>
  );
};

export default SwitchButton;
