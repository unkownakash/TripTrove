import React from "react";
import HeroSection from "../components/Hero";
import TravelSearch from "./TravelSearch";
import TripDetails from "./TripDetails";
import CardHover from "./CardHover";
import FunTravelSection from "./FunTravelSection";
// import Contact from "./Contact";
import TestimonialSwiper from "../components/TestimonialSwiper";
import ContactUs from "./ContactUs";
// import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import ShoppingCart from "../components/ShoppingCart";
// import AdminDashboard from "../pages/AdminPanel";

const Home = () => {
 return(
  <>
  {/* hero shi nhi hai     */}
  {/* <ShoppingCart/> */}
  <HeroSection/>
  <TravelSearch/> 
  {/* <AdminDashboard/> */}
  {/* <Contact/> */}
  <CardHover/>
  <ContactUs/>
  <TestimonialSwiper/>
  <FunTravelSection/>
 
  

  </>
 );
};

export default Home;
