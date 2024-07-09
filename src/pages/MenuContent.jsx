import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Background from "../components/Background/Background";
import Menupage from "../components/MenuPage/Menupage";

const MenuContent = () => {
  return (
    <div>
      <Navbar />
      <Background title="Menu" />
      <Menupage />
    </div>
  );
};

export default MenuContent;
