import { Typography } from "@material-tailwind/react";
import React from "react";

const WhyDealdoneCard = ({ item }) => {
  return (
    // <div className="border border-gray-600 rounded-md shadow-md">
    //   <img src={item.img} alt="..." />
    //   <Typography>{item.title}</Typography>
    // </div>

    // ---------------------------------------------------------
    // <div>
    //   <div className="group h-80 w-80 [perspective:1000px]">
    //     <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
    //       <div className="absolute inset-0">
    //         <img
    //           src={item.img}
    //           alt="..."
    //           className="h-full w-full object-cover"
    //         />
    //         <p className="text-white">HEllo</p>
    //       </div>
    //       <div className="absolute inset-0 h-full w-full rounded-xl bg-gray-400 px-12 text-center"></div>
    //     </div>
    //   </div>
    // </div>
    <section className="bg-white w-[300px] rounded-2xl border-2 border-gray-300">
      {/* <section className="bg-gray-300 h-92 rounded-2xl flex
     justify-center items-center gap-x-16 text-textPrimary mb-44"> */}
      <div className="w-[300px] h-[370px]  bg-transparent cursor-pointer group [perspective:1000px]">
        <div className="relative [transform-style:preserve-3d] group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div className="absolute backface-hidden rounded-2xl border-2 border-gray-100 w-full h-full">
            <img src={item.img} class="w-full h-2/12" alt="..." />
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

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                itaque assumenda saepe animi maxime libero non quasi, odit natus
                veritatis enim culpa nam inventore doloribus quidem temporibus
                amet velit accusamus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDealdoneCard;
