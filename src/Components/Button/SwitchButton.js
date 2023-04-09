import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../Context/ColorContext";
import sunIcon from "../../assets/sun.png";
import moonIcon from "../../assets/half-moon.png";
import "./Switch.css";

const SwitchButton = () => {
  const { theme, handleThemeSwitch } = useContext(ThemeContext);

  return (
    <button
      className="w-10 h-10 rounded-xl border border-buttonColor  flex items-center justify-center"
      onClick={handleThemeSwitch}
    >
      {theme === "light" ? (
        // ----light svg---------
        <img
          src={sunIcon}
          alt="..."
          className="w-6 transition ease-in-out active:rotate-45"
        />
      ) : (
        <img src={moonIcon} alt="..." className="w-6 active:rotate-45" />
      )}
    </button>
  );
};

export default SwitchButton;
// bg-darkComp dark:bg-gray-400
