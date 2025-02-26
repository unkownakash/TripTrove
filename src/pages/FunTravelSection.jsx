import React from "react";
import "./FunTravelSection.css";
import Lottie from "react-lottie";
import part1 from '../assets/license.png'
import part2 from '../assets/wallet.png'
import part3 from '../assets/thumb.png'
import contactAnimation from "../assets/cootan.json"; // Replace with your Lottie animation JSON file


import Walk from '../assets/walking.json'
const FunTravelSection = () => {
    const defaultOptions = {
        // loop: true,
        // autoplay: true,
        animationData: Walk,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
    }
  return (
    <section className="funtravel-section">
      <div className="funtravel-container">
      <div className="flex justify-center">
          <Lottie options={defaultOptions} height={250} width={250} />
        </div>
       
        <h2 className="funtravel-title">What makes TripTrove the best?</h2>
        <p className="funtravel-description">
        Fun Travel stands out as the best travel option due to several compelling reasons:
        </p>
        <div className="funtravel-cards">
          <div className="funtravel-card">
            <img
              src={part1} // Replace with appropriate icon
              alt="Best Plans"
              className="funtravel-icon"
            />
            <h4>Best Plans Guarantee</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Excepteur
              occaecat cupidatat non proident.
            </p>
          </div>
          <div className="funtravel-card">
            <img
              src={part2} // Replace with appropriate icon
              alt="Best Prices"
              className="funtravel-icon"
            />
            <h4>Best Prices Guarantee</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Excepteur
              occaecat cupidatat non proident.
            </p>
          </div>
          <div className="funtravel-card">
            <img
              src={part3} // Replace with appropriate icon
              alt="Money Back"
              className="funtravel-icon"
            />
            <h4>Money Back Guarantee</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Excepteur
              occaecat cupidatat non proident.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunTravelSection;
