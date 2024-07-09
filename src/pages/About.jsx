import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Background from "../components/Background/Background";
import Aboutpage from "../components/AboutPage/Aboutpage";

const About = () => {
  return (
    <div>
      <Navbar />
      <Background title="About Us" />
      <Aboutpage />
    </div>
  );
};

export default About;
