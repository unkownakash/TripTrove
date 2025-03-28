const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Trip = require("../models/Trip");
const authMiddleware =require("../middleware/auth")
const app = express()

const router = express.Router();

// Sample admin credentials
const admin = {
  email: "akash@gmail.com",
  password: "akash123"
};

// Login route
router.post("/admin/login", async (req, res) => {
  const { email, password } = req.body;

  if (email === admin.email && password === admin.password) {
    return res.json({ success: true, message: "Login successful" });
  } else {
    return res.json({ success: false, message: "Invalid email or password" });
  }
});


// Signup Route
// router.post("/signup", async (req, res) => {
//     const { name, email, password } = req.body;
//     try {
//         let user = await User.findOne({ email });
//         if (user) return res.status(400).json({ msg: "User already exists" });

//         const hashedPassword = await bcrypt.hash(password, 10);
//         user = new User({ name, email, password: hashedPassword });

//         await user.save();
//         res.status(201).json({ msg: "User created successfully" });
//     } catch (err) {
//         res.status(500).json({ msg: "Server error" });
//     }
// });

// Login Route
// router.post("/login", async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         const user = await User.findOne({ email });
//         if (!user) return res.status(400).json({ msg: "Invalid credentials" });

//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

//         const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
//         res.json(
           
//             {  message:"succesfully login",
//                 token , user: { id: user._id, name: user.name, email: user.email } }
            
//         );
//     } catch (err) {
//         res.status(500).json({ msg: "Server error" });
//     }
// });



// Fetch all trips (with optional filters)
router.get("/trips", async (req, res) => {
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
  router.get("/trips/:id", async (req, res) => {
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
  router.post("/trips", async (req, res) => {
    try {
      const newTrip = new Trip(req.body);
      await newTrip.save();
      res.status(201).json(newTrip);
    } catch (err) {
      res.status(400).json({ message: "Error adding trip", error: err.message });
    }
  });
  
  // Delete a trip
  router.delete("/trips/:id", async (req, res) => {
    try {
      const deletedTrip = await Trip.findByIdAndDelete(req.params.id);
      if (!deletedTrip) return res.status(404).json({ message: "Trip not found" });
      res.json({ message: "Trip deleted successfully" });
    } catch (err) {
      res.status(500).json({ message: "Server Error" });
    }
  });



module.exports = router;
