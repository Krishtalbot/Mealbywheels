import React from 'react'
import "./Menu.css";
import basmati from "../../assets/basmati.png";
import paneer from "../../assets/paneer.png";
import crispy_aloo from "../../assets/crispy_aloo.png";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  const handleMenu = () => {
    navigate("/menu");
  };
  return (
    <div className="menu">
      <div className="menu_title">
        <h1>Our Must Haves</h1>
        <a onClick={handleMenu}>See our Menu &rarr;</a>
      </div>
      <div className="menu_content">
        <div className="mc_containers_1">
          <img src={basmati} alt="" />
          <p>Fluffy Basmati Rice</p>
          <h2>$2.00</h2>
          <button>Add to cart</button>
        </div>
        <div className="mc_containers_2">
          <img src={paneer} alt="" />
          <p>Paneer Delight</p>
          <h2>$4.00</h2>
          <button>Add to cart</button>
        </div>
        <div className="mc_containers_3">
          <img src={crispy_aloo} alt="" />
          <p>Crispy Fried Aloo</p>
          <h2>$3.00</h2>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Menu
