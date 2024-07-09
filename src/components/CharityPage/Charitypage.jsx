import React from "react";
import "./Charitypage.css";
import charity from "../../assets/charity.png";

const Charitypage = () => {
  return (
    <div className="about">
      <div className="all_box">
        <div className="charity">
          <h1 className="charity_head">Know about our Charity Work</h1>
          <div className="charity_text">
            <p>
              At MealByWheels, we believe in giving back to the community. Our
              dedicated charity program supports the Bay Area's homeless and
              needy by providing nutritious meals and essential resources. Every
              tiffin you order helps fund our efforts to ensure that those less
              fortunate receive the care and support they deserve. Together, we
              can make a meaningful difference, one meal at a time.
            </p>
          </div>
          <img src={charity} alt="Charity" className="charity_img" />
        </div>
      </div>
    </div>
  );
};

export default Charitypage;
