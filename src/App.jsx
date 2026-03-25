import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Home";
import NewArrival from "./Components/NewArrival/NewArrival";
import TrendingNow from './Components/TrendingNow/TrendingNowpage'
import Hoodies from "./Components/Hoodies/Hoodies.jsx";
import TShirt from "./Components/TShirt/TShirt.jsx";
import CartPage from "./Components/CartPage/CartPage.jsx";
import AddProducts from "./Components/AddProducts/AddProducts.jsx";
import ViewPage from "./ViewPage/ViewPage.jsx";
import Edit from "./EditPage/Edit.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newarrival" element={<NewArrival />} />
        <Route path="/trendingnow" element={<TrendingNow/>} />
        <Route path="/hoodies" element={<Hoodies/>}/>
        <Route path="/tshirt" element = {<TShirt/>} />
        <Route path="/cart" element = {<CartPage/>}/>
        <Route path="/addproducts" element = {<AddProducts/>} />
        <Route path="/view" element = {<ViewPage/>} />
        <Route path="/edit/:id" element = {<Edit/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
