const mongoose=require("mongoose");
require("dotenv").config();

const databaseConnect=()=>{
    mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{console.log("Database connected")})
    .catch((error)=>{
        console.log("Database connection failed",error)
    })
}
module.exports=databaseConnect;