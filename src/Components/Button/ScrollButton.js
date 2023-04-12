import React, { useContext } from "react";
import { ScrollContext } from "../../Context/ScrollPosition";
import { BiUpArrowAlt } from "react-icons/bi";

const ScrollButton = () => {
  const { scrollPosition } = useContext(ScrollContext);
  return (
    <button
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }}
      className={`fixed bottom-5 right-5 bg-buttonColor text-white 
rounded-xl px-2.5 py-2  hover:bg-buttonColorHover
  transition ease-in-out   ${scrollPosition > 100 ? "block " : "hidden"}`}
    >
      <BiUpArrowAlt className="text-3xl" />
      {/* <ion-icon name="arrow-up-outline" style={{ fontSize: "25px" }} ></ion-icon> */}
    </button>
  );
};

export default ScrollButton;
