import React, { useEffect, useState } from "react";
import TrendingNowLayout from "./TrendingNowLayoutpage";
import Navbar from "../../Home/Navbar/Navbar";
import Footer from "../../Home/Footer/Footer";


const TrendingNow = () => {
  
  const [products , setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5444/products?isTrending=true')
    .then(res => res.json())
    .then(data => setProducts(data) )
    .catch(err => console.log(err))
  },[])
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="shpbyctgrheading m-5 text-center">
          Trending Now
        </h1>
        <div className="row">
          {products.map((item) => (
            <TrendingNowLayout key={item._id} product={item} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TrendingNow;
