// models/Trip.js
const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  image: String,
  location: String,
  month: String,
  days: Number,
  famousPlaces: [String],
  price: Number,
  overview: String,
  activities: [String],
  travelerType: String,
  rating: Number,
});

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;
