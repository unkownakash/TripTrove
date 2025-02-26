import React from "react";
import Lottie from "react-lottie";
import TravelAnimation from "../assets/find.json"; // Replace with your Lottie animation
import { FaGlobeAmericas, FaUsers, FaPlaneDeparture } from "react-icons/fa";

const AboutUs = () => {
  const defaultOptions = {
    animationData: TravelAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 md:px-12 py-12">
      {/* Heading Section */}
      <div className="text-center max-w-3xl">
        <h2 className="text-4xl font-extrabold text-gray-900">About <span className="text-orange-500">Trip Trove</span></h2>
        <p className="mt-4 text-gray-600 text-lg">
          Discover, explore, and create unforgettable memories with Trip Trove. 
          We bring you the world's best destinations, curated experiences, and hassle-free travel.
        </p>
      </div>

      {/* Animation Section */}
      <div className="w-full flex justify-center my-8">
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>

      {/* Why Choose Us Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
        {/* Card 1 */}
        <div className="flex flex-col items-center p-6 shadow-lg rounded-xl border border-gray-200 hover:shadow-2xl transition duration-300">
          <FaGlobeAmericas className="text-orange-500 text-5xl" />
          <h3 className="mt-4 text-xl font-bold">Global Destinations</h3>
          <p className="text-gray-600 text-center mt-2">
            Explore stunning locations across the world, carefully selected for you.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center p-6 shadow-lg rounded-xl border border-gray-200 hover:shadow-2xl transition duration-300">
          <FaUsers className="text-orange-500 text-5xl" />
          <h3 className="mt-4 text-xl font-bold">Expert Guides</h3>
          <p className="text-gray-600 text-center mt-2">
            Our team of experienced travelers ensures you get the best itineraries.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center p-6 shadow-lg rounded-xl border border-gray-200 hover:shadow-2xl transition duration-300">
          <FaPlaneDeparture className="text-orange-500 text-5xl" />
          <h3 className="mt-4 text-xl font-bold">Seamless Travel</h3>
          <p className="text-gray-600 text-center mt-2">
            We handle everything—from flights to accommodations—for a stress-free trip.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-10">
        <button className="bg-orange-500 text-white py-3 px-8 rounded-lg text-lg font-bold hover:bg-orange-600 transition duration-300 shadow-md transform hover:scale-105">
          Start Your Journey 🚀
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
