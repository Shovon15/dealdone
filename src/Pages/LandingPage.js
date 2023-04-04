import React from "react";
import Home from "./Home/Home";
import Integration from "./Integration/Integration";
import Nav from "../Pages/Navbar/Nav";
import WhyDealdone from "./WhyDealdone/WhyDealdone";
import { Button } from "@material-tailwind/react";

const LandingPage = () => {
  return (
    <>
      <Nav />
      <Home />
      {/* <Integration />
      <WhyDealdone /> */}
    </>
  );
};

export default LandingPage;
