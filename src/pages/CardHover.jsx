import React from "react";
import "./CardHover.css"; // Import the CSS file
import card1 from '../assets/image2.png'
import { FaArrowRight } from "react-icons/fa";

function CardHover() {
  return (
    <>
      <h1 className="text-4xl font-extrabold text-gray-800 text-center my-8">How It Works</h1>

      <div className="w-full px-28 flex justify-between">

        <div className="card-hover rounded-xl">
          <div className="card-hover__content">
            <h3 className="card-hover__title">
              Your <span className="title">Dream</span> Place
            </h3>
            <p className="card-hover__text">
              Browse through our curated list of breathtaking destinations. 
              {/* Whether you're looking for a relaxing beach retreat, an adventurous mountain trek, or a vibrant city escape, we’ve got the perfect trip for you. */}
            </p>
            <a href="#" className="card-hover__link">
              <span>Learn How</span>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>
          <div className="card-hover__extra">
            <h4>
              Learn <span>now</span> and get <span>40%</span> discount!
            </h4>
          </div>
          <img
            src="https://images.pexels.com/photos/7494497/pexels-photo-7494497.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Card Background"
          />
        </div>

        <div className="flex items-center text-[#f97316] text-3xl">
          <FaArrowRight className=""/>
        </div>

        <div className="card-hover rounded-xl">
          <div className="card-hover__content">
            <h3 className="card-hover__title">
              Book<span> Your</span> Adventure
            </h3>
            <p className="card-hover__text">
              Once you've chosen your dream trip, easily book it with just a few clicks. 
              {/* Our seamless booking process ensures a hassle-free experience, with secure payments and instant confirmations. */}
            </p>
            <a href="#" className="card-hover__link">
              <span>Learn How</span>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>
          <div className="card-hover__extra">
            <h4>
              Learn <span>now</span> and get <span>40%</span> discount!
            </h4>
          </div>
          <img
            src="https://www.asiarealestatesummit.com/wp-content/uploads/2023/10/shutterstock_2049380855.jpg"
            alt="Card Background"
          />
        </div>

        <div className="flex items-center text-[#f97316] text-3xl">
          <FaArrowRight className=""/>
        </div>

        <div className="card-hover rounded-xl">
          <div className="card-hover__content">
            <h3 className="card-hover__title">
              Embark <span>&</span> Enjoy
            </h3>
            <p className="card-hover__text">
              Pack your bags and get ready for an unforgettable journey! From start to finish.        {/* Whether you're looking for a relaxing beach retreat, an adventurous mountain trek, or a vibrant city escape, we’ve got the perfect trip for you. */}
            </p>
            <a href="#" className="card-hover__link">
              <span>Learn How</span>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>
          <div className="card-hover__extra">
            <h4>
              Learn <span>now</span> and get <span>40%</span> discount!
            </h4>
          </div>
          <img
            src="https://images.pexels.com/photos/4394970/pexels-photo-4394970.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Card Background"
          />
        </div>
      </div>
    </>
  );
}

export default CardHover;
