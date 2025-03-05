import React, { useState } from "react";
import Lottie from "react-lottie";
import TravelAnimation from "../assets/Login.json";
import { FaGlobeAmericas, FaUsers, FaPlaneDeparture } from "react-icons/fa";
import { Lock, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const defaultOptions = {
    animationData: TravelAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
  
      const data = await response.json();  // Parse JSON response
  
      if (data.success) { 
        navigate("/adminpanel");
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      setError("Server error. Please try again later.");
    }
  };
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  px-6 md:px-12 py-12">
      <Lottie options={defaultOptions} height={300} width={300} className="mb-8" />
      <div className="w-96 shadow-2xl bg-white rounded-lg">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Admin Login</h2>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <div className="mb-4">
            <label className="block mb-1 text-gray-700">Email</label>
            <div className="flex items-center border rounded-lg px-3 py-2 bg-white">
              <User className="mr-2 text-gray-400" />
              <input type="email" placeholder="admin@example.com" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full focus:outline-none" />
            </div>
          </div>
          <div className="mb-6">
            <label className="block mb-1 text-gray-700">Password</label>
            <div className="flex items-center border rounded-lg px-3 py-2 bg-white">
              <Lock className="mr-2 text-gray-400" />
              <input type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full focus:outline-none" />
            </div>
          </div>
          <button onClick={handleLogin} className="w-full bg-orange-500 text-white hover:bg-orange-600 py-2 rounded-lg">Login</button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
