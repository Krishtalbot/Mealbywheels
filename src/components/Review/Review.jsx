import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "./Review.css";
import { reviews } from "./reviewsData";

const Review = () => {
  return (
    <div className="review">
      <h1 className="review_title">Reviews</h1>
      <Splide
        options={{
          perPage: 1,
          autoplay: true,
          speed: 1000,
          rewind: true,
          rewindByDrag: false,
          arrows: true,
          pagination: true,
          drag: false,
          interval: 3000,
        }}
      >
        {reviews.map((review) => (
          <SplideSlide key={review.id}>
            <div className="review_content">
              <img
                src={review.image}
                alt={review.name}
                className="profile_img"
              />
              <div className="review_text">
                <div className="rating">
                  <p className="para_1">Rating: </p>
                  <div className="stars">
                    {[...Array(5)].map((_, index) => (
                      <span key={index}>⭐</span>
                    ))}
                  </div>
                </div>
                <p className="para_2">"{review.text}"</p>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Review;
