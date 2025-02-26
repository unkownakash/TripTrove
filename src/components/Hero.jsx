import React, { useState } from "react";
import { FaPlaneDeparture } from "react-icons/fa";
import Travel from "../assets/Traveling-cuate (1).png"; // Replace with the actual path to your image
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="relative w-full bg-white">
      {/* Hero Content */}
      <div className="w-full px-28 mt-10 flex flex-col-reverse lg:flex-row items-center justify-between bg-white">
        
        {/* Left Side - Text */}
        <div className="lg:w-1/2">
          <p className="text-sm font-semibold text-black uppercase mb-6">
            Find Best <span className="text-orange-500">destinations</span> around the world
          </p>

          <p className="text-4xl lg:text-6xl font-bold text-gray-900 mt-4 mb-6">
            Travel, <span className="text-orange-500">enjoy</span>, and live
          </p>

          <p className="text-4xl lg:text-6xl font-bold text-gray-900 leading-snug mb-6">
            a new and full life
          </p>

          <p className="text-gray-600 text-lg mt-4 mb-6">
            Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening.
            Park gate sell they west hard for the.
          </p>

          <div className="mt-6 flex items-center space-x-4">
            <Link to="/Destination">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-orange-600 transition duration-300">
              Find out more
            </button> </Link>
            <button className="flex items-center space-x-2 text-lg text-gray-700 hover:text-orange-500">
              <span className="bg-orange-500 text-white p-2 rounded-full">
                <FaPlaneDeparture />
              </span>
              <span>Play Demo</span>
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img src={Travel} alt="Traveler" className="w-full max-w-8xl" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
