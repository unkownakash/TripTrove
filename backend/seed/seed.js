// seed/seed.js
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Trip = require("../models/Trip");

dotenv.config();

const trips = [
    {
      image: "https://lp-cms-production.imgix.net/2020-11/500pxRF_122032123.jpg?auto=format&q=40&ar=16:9&fit=crop",
      location: "Maldives",
      month: "December",
      days: 5,
      famousPlaces: ["Maafushi Island", "Male City"],
      price: 1200,
      overview: "A tropical paradise known for its crystal-clear waters and luxury resorts.",
      activities: ["Snorkeling", "Dolphin Watching", "Island Hopping"],
      travelerType: "Couples",
      rating: 4.8
    },
    {
      image: "https://d1a1ntgk1j6wes.cloudfront.net/2017/012-View-of-Acropolis-from-the-Philopappos-Hill-in-the-Morning-Athens-Greece.jpg",
      location: "Athens",
      month: "October",
      days: 5,
      famousPlaces: ["Acropolis", "Parthenon"],
      price: 1300,
      overview: "A historic city rich in ancient landmarks and vibrant street life.",
      activities: ["Historical Tours", "Local Cuisine Tasting", "Museums"],
      travelerType: "History Buffs",
      rating: 4.7
    },
    {
      image: "https://dynamictours.hu/wp-content/uploads/hungarian-parliament-building-built-gothic-revival-style-budapest-scaled.jpg",
      location: "Budapest",
      month: "June",
      days: 4,
      famousPlaces: ["Buda Castle", "Széchenyi Thermal Bath"],
      price: 1200,
      overview: "The heart of Hungary with thermal baths and stunning architecture.",
      activities: ["River Cruises", "Thermal Baths", "Castle Tours"],
      travelerType: "Cultural Explorers",
      rating: 4.6
    },
    {
      image: "https://a.cdn-hotels.com/gdcs/production20/d511/27bf26bb-e498-4caf-a5b7-cdb379680e4c.jpg",
      location: "Edinburgh",
      month: "August",
      days: 6,
      famousPlaces: ["Edinburgh Castle", "Arthur's Seat"],
      price: 1400,
      overview: "A city blending medieval history with modern Scottish culture.",
      activities: ["Castle Tours", "Hiking", "Whisky Tastings"],
      travelerType: "Adventure Seekers",
      rating: 4.7
    },
    {
      image: "https://lp-cms-production.imgix.net/2021-08/shutterstockRF_295169861.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=35&dpr=3",
      location: "Stockholm",
      month: "July",
      days: 5,
      famousPlaces: ["Vasa Museum", "Gamla Stan"],
      price: 1500,
      overview: "A picturesque Scandinavian city spread across 14 islands.",
      activities: ["Boat Tours", "Museums", "Shopping"],
      travelerType: "Families",
      rating: 4.5
    },
    {
      image: "https://media.architecturaldigest.com/photos/57ad893acfc37bc171ad8082/master/pass/madrid-travel-guide.jpg",
      location: "Madrid",
      month: "September",
      days: 4,
      famousPlaces: ["Prado Museum", "Royal Palace"],
      price: 1350,
      overview: "Spain's capital filled with art, culture, and a lively atmosphere.",
      activities: ["Art Tours", "Tapas Crawls", "Flamenco Shows"],
      travelerType: "Art Enthusiasts",
      rating: 4.6
    },
    {
      image: "https://www.avontuura.com/wp-content/uploads/2017/06/nick-karvounis-484732-unsplash.jpg",
      location: "Copenhagen",
      month: "May",
      days: 5,
      famousPlaces: ["Tivoli Gardens", "Nyhavn"],
      price: 1450,
      overview: "A vibrant city with colorful harbors, cycling culture, and great food.",
      activities: ["Canal Tours", "Biking", "Culinary Experiences"],
      travelerType: "Foodies",
      rating: 4.7
    },
    {
      image: "https://th.bing.com/th/id/R.75168d8c7902d3b0739f327673945868?rik=1QApC89xPZXihA&riu=http%3a%2f%2f3.bp.blogspot.com%2f-NKxykKX0q_w%2fTek7aWxHnCI%2fAAAAAAAAAcU%2f8gIAd7DZ85A%2fs1600%2fHONG-KONG.jpg&ehk=uOex5yPg%2bKLGGG2FyUWtwAahC2B4BekLE7IDoUD1T48%3d&risl=&pid=ImgRaw&r=0",
      location: "Hong Kong",
      month: "March",
      days: 7,
      famousPlaces: ["Victoria Peak", "Disneyland"],
      price: 1600,
      overview: "A bustling metropolis where East meets West.",
      activities: ["Shopping", "Theme Parks", "Night Markets"],
      travelerType: "Urban Explorers",
      rating: 4.5
    },
    {
      image: "https://th.bing.com/th/id/R.dfbade7fea484ccd43def761f301b8cf?rik=HnCr31d2SoFZBA&riu=http%3a%2f%2fblamethemonkey.com%2fwp-content%2fuploads%2f2011%2f09%2fElia-Locardi-Travel-Photography-The-Blue-Mosque-Istanbul-Turkey-1440-WM-DM-60q-1280x640.jpg&ehk=oh0nb%2fofDx9dLGjciDgHWMAC1pC1AhMrvLU3QkOfEcw%3d&risl=&pid=ImgRaw&r=0",
      location: "Istanbul",
      month: "April",
      days: 6,
      famousPlaces: ["Hagia Sophia", "Grand Bazaar"],
      price: 1400,
      overview: "A vibrant city straddling two continents with rich cultural heritage.",
      activities: ["Bazaar Shopping", "Mosque Tours", "Turkish Baths"],
      travelerType: "Culture Seekers",
      rating: 4.6
    },
    {
      image: "https://th.bing.com/th/id/OIP.8OzSmAwkITmHb-3_lCHU9QHaE8?rs=1&pid=ImgDetMain",
      location: "Toronto",
      month: "November",
      days: 5,
      famousPlaces: ["CN Tower", "Royal Ontario Museum"],
      price: 1500,
      overview: "A multicultural hub with iconic landmarks and diverse neighborhoods.",
      activities: ["Museum Tours", "Food Tours", "CN Tower Visit"],
      travelerType: "Urban Explorers",
      rating: 4.5
    }
  ];
  

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("✅ MongoDB connected");
    return Trip.insertMany(trips);
  })
  .then(() => {
    console.log("✅ Sample data added!");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("❌ Error seeding data:", err);
    mongoose.connection.close();
  });
