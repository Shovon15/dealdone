import React from "react";
import Home from "./Home/Home";
import Integration from "./Integration/Integration";
import Navbar from "./Navbar/Navbar";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Integration />
    </div>
  );
};

export default LandingPage;
