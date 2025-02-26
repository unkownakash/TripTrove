import React from "react";
import Lottie from "react-lottie";
import contactAnimation from "../assets/cootan.json"; // Replace with your Lottie animation JSON file

function Contact() {
  const defaultOptions = {
    // loop: true,
    // autoplay: true,
    animationData: contactAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className="min-h-screen bg-blue-50 flex items-center justify-center">
      <div className="container mx-auto p-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Form */}
        <div className="bg-white p-12 rounded-lg shadow-2xl">
          <h2 className="text-4xl font-bold text-blue-700 mb-8">Contact us</h2>
          <form className="space-y-8">
            {/* Name Input */}
            <div className="flex items-center border border-gray-300 rounded-lg p-4">
              <span className="text-gray-500 text-2xl mr-4">
                <i className="fas fa-user"></i>
              </span>
              <input
                type="text"
                placeholder="Name"
                className="w-full text-xl border-none focus:outline-none placeholder-gray-400"
              />
            </div>

            {/* Email Input */}
            <div className="flex items-center border border-gray-300 rounded-lg p-4">
              <span className="text-gray-500 text-2xl mr-4">
                <i className="fas fa-envelope"></i>
              </span>
              <input
                type="email"
                placeholder="Email"
                className="w-full text-xl border-none focus:outline-none placeholder-gray-400"
              />
            </div>

            {/* Message Input */}
            <div className="flex items-center border border-gray-300 rounded-lg p-4">
              <span className="text-gray-500 text-2xl mr-4">
                <i className="fas fa-comment"></i>
              </span>
              <textarea
                rows="5"
                placeholder="Message"
                className="w-full text-xl border-none focus:outline-none placeholder-gray-400"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 text-xl font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side - Animation */}
        <div className="flex justify-center">
          <Lottie options={defaultOptions} height={500} width={500} />
        </div>
      </div>
    </section>
  );
}

export default Contact;
