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
    <div id="credit_scoring" className="m-10 md:m-2">
      <div
        className="flex flex-col min-h-fit md:flex-row justify-between items-center
       bg-white dark:bg-darkComp rounded-lg m-5 md:mx-10  md:p-5"
      >
        <div className="flex flex-col justify-center p-4  gap-4">
          <Typography
            className="font-extrabold text-2xl md:text-3xl text-center md:text-start py-2"
            variant="h3"
          >
            FREE Credit Score & Report Updated Daily.
          </Typography>
          <Typography
            className="font-semibold text-md text-center md:text-start"
            variant="lead"
          >
            Borrow Up To 200% Of Your Monthly Revenue With A Revenue Based Loan
            From Our Banking Partners Instantly.
          </Typography>
          {/* <div className="mx-auto md:m-0">
          <a href="">
            <PrimaryButton className="md:mr-auto  mb-4 md:mb-0  text-md md:text-xl">
              Book A Meeting
            </PrimaryButton>
          </a>
        </div> */}
        </div>
        <div className=" p-2 ">
          <img className="" src={scoreImg} alt="..." />
        </div>
      </div>
    </div>
  );
};

export default CreditScore;
