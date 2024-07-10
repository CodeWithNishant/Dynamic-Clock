import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Onboarding.css";

const Onboarding = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const renderButtons = () => {
    if (index === 2) {
      return (
        <button
          className="special-button"
          onClick={() => navigate("/Dynamic-Clock/login")}
        >
          &rarr;
        </button>
      );
    } else {
      return (
        <>
          <button className="skip-button">skip</button>
          <button
            className="next-button"
            onClick={() => handleSelect(index + 1)}
          >
            next &rarr;
          </button>
        </>
      );
    }
  };

  return (
    <div className="onboarding-container">
      <div className="carousel-screen">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          indicators={true}
          controls={true}
          interval={null}
          className="main-carousel"
        >
          <Carousel.Item>
            <div className="onboarding-screen">
              <div className="onboarding-text">
                <h1>We serve incomparable delicacies</h1>
                <p>
                  All the best restaurants with their top menu waiting for you,
                  they can't wait for your order!
                </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="onboarding-screen">
              <div className="onboarding-text">
                <h1>We serve incomparable delicacies</h1>
                <p>
                  All the best restaurants with their top menu waiting for you,
                  they can't wait for your order!
                </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="onboarding-screen">
              <div className="onboarding-text">
                <h1>We serve incomparable delicacies</h1>
                <p>
                  All the best restaurants with their top menu waiting for you,
                  they can't wait for your order!
                </p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
        <div className="buttons">{renderButtons()}</div>
      </div>
    </div>
  );
};

export default Onboarding;
