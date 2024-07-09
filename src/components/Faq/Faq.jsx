import React, { useState } from "react";
import "./Faq.css";
import plus from "../../assets/plus_faq.png";
import minus from "../../assets/minus_faq.png";

const Faq = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="Faq">
      <h1 className="hero-h1 faq-h1">Frequently Asked Questions</h1>
      <div className="faq-box">
        <div className="faq-questions">
          {[
            "Who are we?",
            "How can we contact you?",
            "How do you prepare your food?",
            "At what time do you deliver to us?",
          ].map((question, index) => (
            <div key={index}>
              <p className="faq-text" onClick={() => toggleQuestion(index)}>
                <img
                  src={openQuestion === index ? minus : plus}
                  alt={`Question ${index + 1}`}
                  className="question-icon"
                />
                {question}
              </p>
              {openQuestion === index && (
                <p className="faq-answer">
                  At MealByWheels service, we preserve taste of all food based
                  on its origination. We prepare food with no preservatives,
                  minimal oil and masalas, it is 100% home style food just like
                  you would prepare at your home.
                </p>
              )}
              {index !== 3 && <div className="line"></div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
