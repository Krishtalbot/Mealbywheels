import React from "react";
import "./Background.css";
import top_bg from "../../assets/top_bg.png";
import rectangle from "../../assets/rectangle.png";

const Background = ({ title }) => {
  return (
    <div className="background">
      <div className="bg_upper">
        <img src={top_bg} alt="Background" />
        <div className="blur_overlay"></div>
        <div className="centered_text">{title}</div>
      </div>
    </div>
  );
};

export default Background;
