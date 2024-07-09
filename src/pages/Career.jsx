import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Background from "../components/Background/Background";
import Careerpage from "../components/CareerPage/Careerpage";

const Career = () => {
  return (
    <div>
      <Navbar />
      <Background title="Career" />
      <Careerpage />
    </div>
  );
};

export default Career;
