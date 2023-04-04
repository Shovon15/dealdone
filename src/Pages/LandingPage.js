import React from "react";
import Home from "./Home/Home";
import Integration from "./Integration/Integration";
import Nav from "../Pages/Navbar/Nav";
import WhyDealdone from "./WhyDealdone/WhyDealdone";
import { Button } from "@material-tailwind/react";
import Brands from "./Home/Brands";

const LandingPage = () => {
  return (
    <>
      <Nav />
      <Home />
      <Brands />

      {/* <Integration /> */}
      {/*<WhyDealdone /> */}
    </>
  );
};

export default LandingPage;
