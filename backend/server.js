// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const Trip = require("./models/Trip");

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

mongoose.connection.on("error", (err) => console.error("❌ MongoDB Error:", err));

// Routes

// Fetch all trips (with optional filters)
app.get("/api/trips", async (req, res) => {
  try {
    const { location, month } = req.query;
    const query = {};
    if (location) query.location = new RegExp(location, "i");
    if (month) query.month = month;

    const trips = await Trip.find(query);
    if (trips.length === 0) {
      return res.status(404).json({ message: "No trips found" });
    }

    res.json(trips);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Fetch single trip by ID
app.get("/api/trips/:id", async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.id);
    if (!trip) return res.status(404).json({ message: "Trip not found" });
    res.json(trip);
  } catch (err) {
    if (err.name === "CastError") {
      return res.status(400).json({ message: "Invalid Trip ID" });
    }
    res.status(500).json({ message: "Server Error" });
  }
});

// Add a new trip
app.post("/api/trips", async (req, res) => {
  try {
    const newTrip = new Trip(req.body);
    await newTrip.save();
    res.status(201).json(newTrip);
  } catch (err) {
    res.status(400).json({ message: "Error adding trip", error: err.message });
  }
});

// Delete a trip
app.delete("/api/trips/:id", async (req, res) => {
  try {
    const deletedTrip = await Trip.findByIdAndDelete(req.params.id);
    if (!deletedTrip) return res.status(404).json({ message: "Trip not found" });
    res.json({ message: "Trip deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
