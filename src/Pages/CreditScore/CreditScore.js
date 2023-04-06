import { Typography } from "@material-tailwind/react";
import React from "react";
import PrimaryButton from "../../Components/Button/PrimaryButton";
import scoreImg from "../../assets/creditScoreGraphics.png";

const CreditScore = () => {
  return (
    // <div
    //   id="credit_scoring"
    //   className="min-h-screen md:m-32 flex flex-col justify-center items-center md:flex-row bg-white dark:bg-darkComp rounded-xl "
    // >
    //   <div className="w-full md:w-1/2  p-10  ">
    //     <Typography variant="h4" className="font-extrabold">
    //       FREE Credit Score & Report Updated Daily.
    //     </Typography>
    //     <PrimaryButton className="my-5">Book A Meeting</PrimaryButton>
    //   </div>
    //   <div className="w-full md:w-1/2">
    //     <img src={scoreImg} alt="..." />
    //   </div>
    // </div>
    <div
      id="credit_scoring"
      className="flex flex-col min-h-fit md:flex-row justify-center items-center bg-white dark:bg-darkComp rounded-lg p-10 w-10/12 mx-auto"
    >
      <div className="w-full md:w-5/12 flex flex-col justify-center px-2 gap-4">
        <Typography
          className="font-extrabold md:text-3xl text-center md:text-start py-2"
          variant="h3"
        >
          FREE Credit Score & Report Updated Daily.
        </Typography>

        <PrimaryButton className="md:mr-auto mx-8 text-xl">
          Book A Meeting
        </PrimaryButton>
      </div>
      <div className="w-full md:w-7/12 p-2 ">
        <img className="" src={scoreImg} alt="..." />
      </div>
    </div>
  );
};

export default CreditScore;
