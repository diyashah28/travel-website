import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Tours from "../pages/Tours";
import TourDetails from "../pages/TourDetails";
import Register from "../pages/Register";
import Login from "../pages/Login";
import SearchResultList from "../pages/SearchResultList";
import ThankYou from "../pages/ThankYou";
import "../styles/About.css"
const About=()=>{
  return(
    <div className="about">
      <h1>Who we are</h1>
      <div className="images">
      <img src="https://media.istockphoto.com/id/1426874794/photo/multi-ethnic-young-people-team-hugging-together-outside-international-community-of-students.jpg?s=612x612&w=0&k=20&c=TvXFXJClKALH_9a062kH8rUTvnYY2nZ3oNEp7r7RwE0="></img>
      
      </div>
      <p>Travel World is an award winning Tour Consultant Company and one of India’s largest Tour Operator helping travel enthusiasts across the globe to discover world’s most amazing destinations. Our team of 200+ travel consultants helps you handcraft holiday of your lifetime. Our network is spread up to 35 locations across India and we have successfully planned holidays to more than 75 countries due to the immense trust and belief of our customers on us.</p>
    </div>
  )

}
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/about" element={<About/>}/>
      <Route path="/tours/:id" element={<TourDetails />} /> {/* Updated path */}
      <Route path="/register" element={<Register />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/login" element={<Login />} />
      <Route path="/tours/search/getTourBySearch" element={<SearchResultList />} />
    </Routes>
  );
};

export default Routers;
