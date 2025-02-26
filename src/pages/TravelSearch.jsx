import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaSearch } from "react-icons/fa";

const TravelSearch = () => {
  const [location, setLocation] = useState("");
  const [month, setMonth] = useState("");
  const [trips, setTrips] = useState([]);
  const [locations, setLocations] = useState([]);
  const [error, setError] = useState(""); // Error state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/trips");
        const uniqueLocations = [...new Set(response.data.map((trip) => trip.location))];
        setLocations(uniqueLocations);
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };
    fetchLocations();
  }, []);

  const handleSearch = async () => {
    // Clear the old trips (reset the state to empty array) before fetching new data
    setTrips([]);
    setError(""); // Clear any previous errors
  
    try {
      const response = await axios.get("http://localhost:5000/api/trips", {
        params: { location, month },
      });
  
      if (response.data.length === 0) {
        setError("No trips found for the selected criteria.");
      } else {
        setError(""); // Reset error if trips are found
      }
  
      setTrips(response.data); // Set the new fetched trips
    } catch (error) {
      console.error("Error fetching trips:", error);
      setError("  🚫 No Trip Found. Try Searching for a New Trip! 🔍 ");
    }
  };
  

  return (
    <div className="w-full px-28 py-10 bg-gray-100 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-gray-900">Find Your Perfect Trip</h1>

      <div className="mt-6 flex flex-wrap gap-4 justify-center items-center">
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border border-gray-300 p-3 rounded-lg w-60 text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="">Select Destination</option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>

        <select
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="border border-gray-300 p-3 rounded-lg w-60 text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="">Select Month</option>
          {[
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ].map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>

        <button
          onClick={handleSearch}
          className="flex items-center space-x-2 bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-orange-600 transition duration-300"
        >
          <FaSearch />
          <span>Search</span>
        </button>
      </div>

      {/* Error Message */}
      {error && <p className="text-red-600 text-lg mt-6">{error}</p>}

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {trips.map((trip) => (
          <div key={trip._id} className="bg-white p-6 shadow-lg rounded-2xl overflow-hidden">
            <img src={trip.image} alt={trip.location} className="w-full h-56 object-cover rounded-lg" />
            <h2 className="text-2xl font-bold text-gray-900 mt-4">{trip.location}</h2>
            <p className="text-gray-700 text-lg">${trip.price}</p>
            <button
              onClick={() => navigate(`/trip/${trip._id}`)}
              className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg text-lg font-medium hover:bg-orange-600 transition duration-300"
            >
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelSearch;
