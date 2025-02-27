import React, { useState, useEffect } from "react";
import { FaList, FaPlus, FaTrash } from "react-icons/fa";

const AdminDashboard = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [selectedOption, setSelectedOption] = useState("allTrips");
  const [trips, setTrips] = useState([]);
  const [newTrip, setNewTrip] = useState({
    image: "",
    location: "",
    month: "",
    days: "",
    famousPlaces: "",
    price: "",
    overview: "",
    activities: "",
    travelerType: "",
    rating: "",
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/trips")
      .then((res) => res.json())
      .then((data) => setTrips(data));
  }, []);

  const handleAddTrip = () => {
    fetch("http://localhost:5000/api/trips", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...newTrip,
        famousPlaces: newTrip.famousPlaces.split(","),
        activities: newTrip.activities.split(","),
      }),
    })
      .then(async (res) => {
        if (!res.ok) {
          throw new Error("Failed to add trip");
        }
        return res.json();
      })
      .then((data) => {
        setTrips([...trips, data]);
        setSuccessMessage("Trip added successfully! ✅");
        setTimeout(() => setSuccessMessage(""), 3000);
      })
      .catch((err) => console.error("Failed to add trip:", err));

    setNewTrip({
      image: "",
      location: "",
      month: "",
      days: "",
      famousPlaces: "",
      price: "",
      overview: "",
      activities: "",
      travelerType: "",
      rating: "",
    });
  };

  const handleDeleteTrip = (id) => {
    fetch(`/api/trips/${id}`, { method: "DELETE" })
      .then(() => setTrips(trips.filter((trip) => trip._id !== id)));
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-orange-500 text-white p-6 flex flex-col space-y-6 shadow-lg">
        <h2 className="text-3xl font-extrabold">Admin Panel</h2>
        <button
          className={`flex items-center space-x-2 p-3 rounded-lg transition duration-300 ${
            selectedOption === "allTrips" ? "bg-orange-600" : "hover:bg-orange-600"
          }`}
          onClick={() => setSelectedOption("allTrips")}
        >
          <FaList className="text-xl" /> <span className="text-lg">All Trips</span>
        </button>
        <button
          className={`flex items-center space-x-2 p-3 rounded-lg transition duration-300 ${
            selectedOption === "addTrip" ? "bg-orange-600" : "hover:bg-orange-600"
          }`}
          onClick={() => setSelectedOption("addTrip")}
        >
          <FaPlus className="text-xl" /> <span className="text-lg">Add New Trip</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-8">
        {selectedOption === "allTrips" && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">All Trips</h2>
            <div className="bg-white p-4 rounded-lg shadow-md max-h-[500px] overflow-y-auto">
              <ul className="space-y-4">
                {trips.map((trip) => (
                  <li
                    key={trip._id}
                    className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm border-l-4 border-orange-500"
                  >
                    <span className="text-gray-800 font-semibold">{trip.location}</span>
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                      onClick={() => handleDeleteTrip(trip._id)}
                    >
                      <FaTrash />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {selectedOption === "addTrip" && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Add New Trip</h2>
            <div className="grid grid-cols-2 gap-6 bg-white p-6 rounded-lg shadow-md">
              {Object.keys(newTrip).map((key) => (
                <input
                  key={key}
                  type={key === "days" || key === "price" || key === "rating" ? "number" : "text"}
                  placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                  value={newTrip[key]}
                  onChange={(e) => setNewTrip({ ...newTrip, [key]: e.target.value })}
                  className="border p-3 rounded-lg w-full text-gray-700 focus:ring-2 focus:ring-orange-500"
                />
              ))}
            </div>
            <button
              className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-bold hover:bg-orange-600 transition duration-300"
              onClick={handleAddTrip}
            >
              Add Trip
            </button>
            {successMessage && (
              <div className="bg-green-500 text-white p-3 rounded-lg mt-4">
                {successMessage}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
