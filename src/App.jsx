import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Hero from './components/Hero'
import Footer from './components/Footer';
// import { Feature } from './pages/Feature';
import Home from './pages/Home';
import CardHover from './pages/CardHover';
import FunTravelSection from './pages/FunTravelSection';
import ContactUs from './pages/ContactUs';
import TestimonialSwiper  from './components/TestimonialSwiper';
// import HeroSection from './components/Herosection';
// import InputForm from './components/InputForm';
// import InputBox from './pages/InputBox';
import TravelSearch from './pages/TravelSearch';
import TripDetails from './pages/TripDetails';
import Layout from './components/Layout';
import AboutUs from './components/AboutUs';
import Destination from './components/Destination';
import DowryCalculator from './DowryCalculator';

const App = () => {
  return  (
    <Router>
    <Routes>
     
      <Route path="/" element={<Layout/>}> 
      <Route index element={<Home/>}/>
      <Route path="/TravelSearch" element={<TravelSearch/>} />
      <Route path="/trip/:id" element={<TripDetails />} />
      {/* <Route path="/Home" element={<Home />} /> */}
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/Destination" element={<Destination />} />


      </Route>
    </Routes>
  </Router>
  );
};

export default App;
