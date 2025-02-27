import React, { useState } from "react";
import { FaPlaneDeparture } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="mx-auto px-28 py-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/">
        <div className="text-2xl font-bold text-gray-900">
          <span className="text-orange-500 flex font-serif">
            <span className="mr-6">
              <FaPlaneDeparture />
            </span>
            TRIP TROVE
          </span>
        </div>
        </NavLink>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-6 text-gray-700 text-lg text-center justify-center items-center font-medium">
          <li className="hover:text-orange-500 cursor-pointer">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="hover:text-orange-500 cursor-pointer">
            <NavLink to="/Destination"> Destinations </NavLink></li>
          <li className="hover:text-orange-500 cursor-pointer">
            <NavLink to="/ContactUs">Contact us</NavLink>
          </li>
          <li className="hover:text-orange-500 cursor-pointer">
             <NavLink to ='/AboutUs'> About</NavLink> </li>
             
          <li>
            <button className="bg-orange-500 font-medium text-sm text-white px-8 py-2 rounded-lg hover:bg-orange-600 transition duration-300">
              Sign Up
            </button>
          </li>
        </ul>

        {/* Hamburger Menu */}
        <div className="md:hidden text-3xl cursor-pointer" onClick={toggleMenu}>
          &#9776;
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-16 right-0 w-full text-gray-700 text-lg font-medium z-50">
          <ul className="flex flex-col space-y-4 px-6 py-4">
            <li className="hover:text-orange-500 cursor-pointer">
              <NavLink to="/admin">Admin Panel</NavLink>
            </li>
            
            <li className="hover:text-orange-500 cursor-pointer"><NavLink to="/">Home</NavLink></li>
            <li className="hover:text-orange-500 cursor-pointer">Destinations</li>

            <li className="hover:text-orange-500 cursor-pointer">
            <NavLink to="/ContactUs">Contact us</NavLink>
           
            </li>
            <li className="hover:text-orange-500 cursor-pointer">  <NavLink to ='/AboutUs'> About</NavLink></li>

            <li className="hover:text-orange-500 cursor-pointer">Bookings</li>
            <li>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-300 w-full">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
