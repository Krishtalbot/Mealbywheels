import React from "react";
import "./Aboutpage.css";
import about from "../../assets/about.png";
import { useNavigate } from "react-router-dom";

const Aboutpage = () => {
  const navigate = useNavigate();
  const handleOrder = () => {
    navigate("/menu");
  };
  return (
    <div className="about">
      <div className="all_box">
        <div className="about_content">
          <img src={about} alt="About" />
          <div className="about_text">
            <p>
              At MealByWheels we're passionate about bringing the comfort and
              taste of home-cooked meals to your doorstep. Our mission is to
              provide nutritious, delicious, and convenient tiffin services that
              cater to your busy lifestyle. With a commitment to quality and
              community, we use only the freshest ingredients to create meals
              that nourish both body and soul. Join us in celebrating the joy of
              homemade food, crafted with love and delivered with care.
            </p>
            <button className="order_btn" href="#" onClick={handleOrder}>
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Aboutpage;
