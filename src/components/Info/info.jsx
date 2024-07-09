import React, { useState, useEffect } from "react";
import "./Info.css";
import truck from "../../assets/truck.png";
import tiffin from "../../assets/tiffin.png";
import person from "../../assets/person.png";
import { useNavigate } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Info = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 692);
  const navigate = useNavigate();

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 692);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleRef1 = () => {
    navigate("/menu");
  };
  const handleRef2 = () => {
    navigate("/career");
  };
  const handleRef3 = () => {
    navigate("/charity");
  };

  return (
    <div className="container-card">
      {isMobile ? (
        <Splide
          options={{
            perPage: 1,
            autoplay: true,
            speed: 2000,
            rewind: true,
            rewindByDrag: false,
            arrows: true,
            pagination: false,
            drag: false,
            interval: 4000,
          }}
        >
          <SplideSlide>
            <div className="card">
              <div className="icon">
                <img src={truck} alt="Truck" />
              </div>
              <div className="card_content">
                <h3>Tiffin Delivery</h3>
                <p>
                  Get fresh, home-cooked meals delivered to your doorstep. Enjoy
                  nutritious and delicious options tailored to your dietary
                  needs.
                </p>
                <a onClick={handleRef1}>Find out more &rarr;</a>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="card">
              <div className="icon">
                <img src={tiffin} alt="Truck" />
              </div>
              <div className="card_content">
                <h3>Career Opportunity</h3>
                <p>
                  Become a delivery driver with flexible hours, competitive pay,
                  and career growth. We offer full training and a supportive
                  work environment.
                </p>
                <a onClick={handleRef2}>Find out more &rarr;</a>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="card">
              <div className="icon">
                <img src={person} alt="Truck" />
              </div>
              <div className="card_content">
                <h3>Charity</h3>
                <p>
                  We support the Bay Area homeless and needy by funding meals
                  and resources through our dedicated charity.
                </p>
                <a onClick={handleRef3}>Find out more &rarr;</a>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      ) : (
        <>
          <div className="card">
            <div className="icon">
              <img src={truck} alt="Truck" />
            </div>
            <div className="card_content">
              <h3>Tiffin Delivery</h3>
              <p>
                Get fresh, home-cooked meals delivered to your doorstep. Enjoy
                nutritious and delicious options tailored to your dietary needs.
              </p>
              <a onClick={handleRef1}>Find out more &rarr;</a>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <img src={tiffin} alt="Truck" />
            </div>
            <div className="card_content">
              <h3>Career Opportunity</h3>
              <p>
                Become a delivery driver with flexible hours, competitive pay,
                and career growth. We offer full training and a supportive work
                environment.
              </p>
              <a onClick={handleRef2}>Find out more &rarr;</a>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <img src={person} alt="Truck" />
            </div>
            <div className="card_content">
              <h3>Charity</h3>
              <p>
                We support the Bay Area homeless and needy by funding meals and
                resources through our dedicated charity.
              </p>
              <a onClick={handleRef3}>Find out more &rarr;</a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Info;
