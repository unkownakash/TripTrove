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

  // Delete confirmation state
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteTripId, setDeleteTripId] = useState(null);
  const [confirmationText, setConfirmationText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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

  // Open delete confirmation modal
  const openDeleteModal = (trip) => {
    setDeleteTripId(trip._id);
    setConfirmationText("");
    setErrorMessage("");
    setIsDeleteModalOpen(true);
  };

  // Handle delete confirmation
  const confirmDeleteTrip = () => {
    const tripToDelete = trips.find((trip) => trip._id === deleteTripId);
    if (!tripToDelete) return;

    if (confirmationText !== `${tripToDelete.location}-${tripToDelete.month}`) {
      setErrorMessage("Incorrect confirmation text. Please enter 'Location-Month'");
      return;
    }

    fetch(`http://localhost:5000/api/trips/${deleteTripId}`, { method: "DELETE" })
      .then(() => {
        setTrips(trips.filter((trip) => trip._id !== deleteTripId));
        setIsDeleteModalOpen(false);
      });
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
                    <span className="text-gray-800 font-semibold">{trip.location} - {trip.month}</span>
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                      onClick={() => openDeleteModal(trip)}
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

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
            <p className="text-gray-600 mb-2">Type "<b>Location-Month</b>" to confirm:</p>
            <input
              type="text"
              placeholder="E.g., Paris-July"
              value={confirmationText}
              onChange={(e) => setConfirmationText(e.target.value)}
              className="border p-2 w-full rounded-lg"
            />
            {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
            <div className="flex justify-end space-x-2 mt-4">
              <button className="bg-gray-500 text-white px-4 py-2 rounded-lg" onClick={() => setIsDeleteModalOpen(false)}>Cancel</button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg" onClick={confirmDeleteTrip}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
