import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-10 px-28">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Logo & Description */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h1 className="text-3xl font-bold text-orange-500">TRIP TROVE</h1>
          <p className="text-gray-400 mt-2 max-w-md">
            Explore the world with ease. Find the best destinations and
            experiences tailored just for you.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-8 text-lg">
          <a href="#" className="hover:text-orange-500 transition">Home</a>
          <a href="#" className="hover:text-orange-500 transition">Destinations</a>
          <a href="#" className="hover:text-orange-500 transition">About</a>
          <a href="#" className="hover:text-orange-500 transition">Contact</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6 mt-6 md:mt-0">
          <a href="#" className="text-xl hover:text-orange-500 transition">
            <FaFacebook />
          </a>
          <a href="#" className="text-xl hover:text-orange-500 transition">
            <FaInstagram />
          </a>
          <a href="#" className="text-xl hover:text-orange-500 transition">
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-500 text-sm mt-8">
        &copy; {new Date().getFullYear()} Trip Trove. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
