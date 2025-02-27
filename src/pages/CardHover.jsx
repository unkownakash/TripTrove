import React from "react";
import "./CardHover.css"; // Import the CSS file
import { FaArrowRight } from "react-icons/fa";

function CardHover() {
  return (
    <>
      <h1 className="text-4xl font-extrabold text-gray-800 text-center my-8">How It Works</h1>

      <div className="w-full px-4 sm:px-10 md:px-20 lg:px-28 flex flex-wrap justify-center gap-8">
        
        <div className="card-hover rounded-xl">
          <div className="card-hover__content">
            <h3 className="card-hover__title">
              Your <span className="title">Dream</span> Place
            </h3>
            <p className="card-hover__text">
              Browse through our curated list of breathtaking destinations.
            </p>
            <a href="#" className="card-hover__link">
              <span>Learn How</span>
              <FaArrowRight />
            </a>
          </div>
          <img src="https://images.pexels.com/photos/7494497/pexels-photo-7494497.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Card Background" />
        </div>

        <div className="flex items-center text-[#f97316] text-3xl hidden md:flex">
          <FaArrowRight />
        </div>

        <div className="card-hover rounded-xl">
          <div className="card-hover__content">
            <h3 className="card-hover__title">
              Book<span> Your</span> Adventure
            </h3>
            <p className="card-hover__text">
              Once you've chosen your dream trip, easily book it with just a few clicks.
            </p>
            <a href="#" className="card-hover__link">
              <span>Learn How</span>
              <FaArrowRight />
            </a>
          </div>
          <img src="https://www.asiarealestatesummit.com/wp-content/uploads/2023/10/shutterstock_2049380855.jpg" alt="Card Background" />
        </div>

        <div className="flex items-center text-[#f97316] text-3xl hidden md:flex">
          <FaArrowRight />
        </div>

        <div className="card-hover rounded-xl">
          <div className="card-hover__content">
            <h3 className="card-hover__title">
              Embark <span>&</span> Enjoy
            </h3>
            <p className="card-hover__text">
              Pack your bags and get ready for an unforgettable journey!
            </p>
            <a href="#" className="card-hover__link">
              <span>Learn How</span>
              <FaArrowRight />
            </a>
          </div>
          <img src="https://images.pexels.com/photos/4394970/pexels-photo-4394970.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Card Background" />
        </div>
        
      </div>
    </>
  );
}

export default CardHover;
