import React, { useState } from "react";
import Lottie from "react-lottie";
import Cus from "../assets/cantact.json";

const ContactUs = () => {
  const defaultOptions = {
    animationData: Cus,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Error sending message.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred.");
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-extrabold text-gray-800 mx-28 mt-10">Contact Us</h1>
      <div className="flex px-28 flex-col md:flex-row items-center justify-center min-h-screen py-12">
        {/* Left Side - Form */}
        <div className="w-full md:w-2/4 bg-white shadow-lg rounded-2xl p-8 md:p-12 border border-gray-200">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Have a question or want to work with us? Drop us a message and we'll get back to you!
          </p>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-2 block w-full px-4 py-3 bg-gray-100 text-gray-800 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-2 block w-full px-4 py-3 bg-gray-100 text-gray-800 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="example@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-2 block w-full px-4 py-3 bg-gray-100 text-gray-800 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-lg text-lg font-bold hover:bg-orange-600 transition duration-300 shadow-md transform hover:scale-105"
            >
              Send Message 🚀
            </button>
          </form>
        </div>

        {/* Right Side - Animation (Hidden on small screens) */}
        <div className="hidden md:flex w-full md:w-2/4 justify-center mt-10 md:mt-0">
          <Lottie options={defaultOptions} height={450} width={450} />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
