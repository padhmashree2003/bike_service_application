import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";
import ServiceListing from "../pages/ServiceListing";
import CarDetails from "../pages/BikeDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/OurProducts";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ServicesBooked from "../pages/ServicesBooked";
import UpdateBooking from "../pages/UpdateBookings";

const Routers=() =>
{
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<><Header /><Home /><Footer /></>} />
      <Route path="/about" element={<><Header /><About /><Footer /></>} />
      <Route path="/services" element={<><Header /><ServiceListing /><Footer /></>} />
      <Route path="/cars/:slug" element={<><Header /><CarDetails /><Footer /></>} />
      <Route path="/ourproducts" element={<><Header /><Blog /><Footer /></>} />
      <Route path="/ourproducts/:slug" element={<><Header /><BlogDetails /><Footer /></>} />
      <Route path="/contact" element={<><Header /><Contact /><Footer /></>} />
      <Route path="/login" element={<><Login /></>} />
      <Route path="/signup" element={<><SignUp /></>} />
      <Route path="/bookings" element={<><Header /><ServicesBooked /><Footer /></>} />
      <Route path="/updateBooking" element={<><Header /><UpdateBooking /><Footer /></>} />
      <Route path="*" element={<><Header /><NotFound /><Footer /></>} />
    </Routes>
  );
};

export default Routers;
