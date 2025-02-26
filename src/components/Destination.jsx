import React from "react";

const destinations = [
  {
    id: 1,
    name: "Maldives",
    image: "https://lp-cms-production.imgix.net/2020-11/500pxRF_122032123.jpg?auto=format&q=40&ar=16:9&fit=crop",
    description: "Crystal clear waters and luxury resorts await you.",
  },
  {
    id: 2,
    name: "Paris",
    image: "https://wallpaperaccess.com/full/1192224.jpg",
    description: "Explore the city of love and its breathtaking sights.",
  },
  {
    id: 3,
    name: "Santorini",
    image: "https://media.istockphoto.com/id/171101830/photo/oia-sunset-santorini-greece.jpg?s=1024x1024&w=is&k=20&c=qPpGCMnbo3olhi192iXMpkkGNhnQIl8HTcLdukEai88=",
    description: "White-washed buildings and stunning sunsets .",
  },
  {
    id: 4,
    name: "Bali",
    image: "https://plus.unsplash.com/premium_photo-1677829177642-30def98b0963?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ,",
    description: "Experience tropical paradise with lush jungles and beaches.",
  },
  {
    id: 5,
    name: "Dubai",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A city of futuristic skyscrapers and desert adventures.",
  },
  {
    id: 6,
    name: "Switzerland",
    image: "https://plus.unsplash.com/premium_photo-1694475538376-606f114e0853?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3dpemVybGFuZHxlbnwwfHwwfHx8MA%3D%3D",
    description: "Snowy peaks and serene landscapes for a perfect getaway.",
  },
];

const Destination = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">🌍 Explore Top Destinations</h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {destinations.map((destination) => (
          <div key={destination.id} className="relative group overflow-hidden rounded-lg shadow-lg">
            {/* Image */}
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white text-xl font-bold">{destination.name}</h3>
              <p className="text-white text-sm opacity-80">{destination.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destination;
