import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Home";
import NewArrival from "./Components/NewArrival/NewArrival";
import TrendingNow from './Components/TrendingNow/TrendingNowpage'
import Hoodies from "./Components/Hoodies/Hoodies.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newarrival" element={<NewArrival />} />
        <Route path="/trendingnow" element={<TrendingNow/>} />
        <Route path="/hoodies" element={<Hoodies/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
