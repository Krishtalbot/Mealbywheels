import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Background from "../components/Background/Background";
import Contactpage from "../components/ContactPage/Contactpage";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Background title="Contact Us" />
      <Contactpage />
    </div>
  );
};

export default Contact;
