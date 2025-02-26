import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const TripDetails = () => {
  const { id } = useParams();
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/trips/${id}`)
      .then((res) => setTrip(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!trip) return <p className="text-center text-gray-700 text-lg">Loading...</p>;

  return (
    <div className="w-full px-28 py-10 bg-white flex flex-col items-center">
      <div className="max-w-4xl w-full shadow-lg rounded-lg overflow-hidden bg-gray-100 p-6">
        <img src={trip.image} alt={trip.location} className="w-full h-96 object-cover rounded-lg" />
        <h1 className="text-4xl font-bold text-gray-900 mt-6">{trip.location}</h1>
        <p className="text-lg text-orange-500 font-semibold mt-2">{trip.days} Days Package</p>

        <h2 className="text-2xl font-semibold mt-4 text-gray-900">Trip Overview:</h2>
        <p className="text-gray-700 mt-2 text-lg">{trip.overview}</p>

        <h2 className="text-2xl font-semibold mt-4 text-gray-900">Famous Places:</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          {trip.famousPlaces.map((place, index) => (
            <li key={index} className="text-lg">{place}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mt-4 text-gray-900">Activities:</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          {trip.activities.map((activity, index) => (
            <li key={index} className="text-lg">{activity}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mt-4 text-gray-900">Traveler Type:</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          {Array.isArray(trip.travelerType) ? (
            trip.travelerType.map((type, index) => (
              <li key={index} className="text-lg">{type}</li>
            ))
          ) : (
            <li className="text-lg">{trip.travelerType}</li>
          )}
        </ul>

        <p className="text-3xl font-bold text-green-600 mt-6">Price ${trip.price}</p>
      </div>
    </div>
  );
};

export default TripDetails;
