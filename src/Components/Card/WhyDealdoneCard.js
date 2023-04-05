import { Typography } from "@material-tailwind/react";
import React from "react";

const WhyDealdoneCard = ({ item }) => {
  return (
    <section className="bg-white w-[300px] mx-auto rounded-2xl border-2 border-gray-300">
      <div className="w-[300px] h-[370px]  bg-transparent cursor-pointer group [perspective:1000px]">
        <div className="relative [transform-style:preserve-3d] group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div className="absolute backface-hidden rounded-2xl border-2 border-gray-100 w-full h-full">
            <img src={item.img} className="w-full h-2/12" alt="..." />
            <Typography
              variant="h5"
              className="w-full h-6/12  py-5 flex justify-center items-center font-extrabold "
            >
              {item.title}
            </Typography>
          </div>
          <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-300 rounded-xl overflow-hidden">
            <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 p-5">
              <h1 className="text-3xl font-semibold"> {item.title}</h1>
              <Typography className="py-2" variant="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                itaque assumenda saepe animi maxime libero non quasi, odit natus
                veritatis enim culpa nam inventore doloribus quidem temporibus
                amet velit accusamus.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDealdoneCard;
