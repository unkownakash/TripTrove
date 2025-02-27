require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
const databaseConnect=require("./config/database")
databaseConnect()//yha par database connect kiya hua

// import route
const tourtravel = require("./routes/router")
// Routes
app.use("/api/",tourtravel)//yha par route map kiya hua// dout hai


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
