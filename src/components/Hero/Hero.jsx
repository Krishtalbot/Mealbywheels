import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();

  const handleOrderNowClick = () => {
    navigate("/menu");
  };

  return (
    <div className="hero container">
      <div className="hero-text">
        <h1 className="hero-h1">Serving Happiness, One Tiffin at a Time</h1>
        <p className="hero-p">
          Enjoy home-cooked meals delivered to your doorstep. Our tiffin service
          offers fresh, nutritious, and delicious meals, catering to diverse
          dietary preferences for a convenient and healthy dining experience.
        </p>
        <button className="hero-btn" onClick={handleOrderNowClick}>
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
