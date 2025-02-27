import React from "react";
import Lottie from "react-lottie";
import contactAnimation from "../assets/cootan.json"; // Replace with your Lottie animation JSON file

function Contact() {
  const defaultOptions = {
    animationData: contactAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Form */}
        <div className="bg-white p-8 md:p-12 rounded-lg shadow-2xl w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6 md:mb-8">Contact Us</h2>
          <form className="space-y-6 md:space-y-8">
            {/* Name Input */}
            <div className="flex items-center border border-gray-300 rounded-lg p-3 md:p-4">
              <span className="text-gray-500 text-xl md:text-2xl mr-3 md:mr-4">
                <i className="fas fa-user"></i>
              </span>
              <input
                type="text"
                placeholder="Name"
                className="w-full text-lg md:text-xl border-none focus:outline-none placeholder-gray-400"
              />
            </div>

            {/* Email Input */}
            <div className="flex items-center border border-gray-300 rounded-lg p-3 md:p-4">
              <span className="text-gray-500 text-xl md:text-2xl mr-3 md:mr-4">
                <i className="fas fa-envelope"></i>
              </span>
              <input
                type="email"
                placeholder="Email"
                className="w-full text-lg md:text-xl border-none focus:outline-none placeholder-gray-400"
              />
            </div>

            {/* Message Input */}
            <div className="flex items-center border border-gray-300 rounded-lg p-3 md:p-4">
              <span className="text-gray-500 text-xl md:text-2xl mr-3 md:mr-4">
                <i className="fas fa-comment"></i>
              </span>
              <textarea
                rows="4"
                placeholder="Message"
                className="w-full text-lg md:text-xl border-none focus:outline-none placeholder-gray-400"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 md:py-4 text-lg md:text-xl font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side - Animation (Hidden on screens smaller than 900px) */}
        <div className="hidden lg:flex justify-center">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      </div>
    </section>
  );
}

export default Contact;
