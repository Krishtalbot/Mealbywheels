import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Background from "../components/Background/Background";
import Charitypage from "../components/CharityPage/Charitypage";

const Charity = () => {
  return (
    <div>
      <Navbar />
      <Background title="Charity" />
      <Charitypage />
    </div>
  );
};

export default Charity;
