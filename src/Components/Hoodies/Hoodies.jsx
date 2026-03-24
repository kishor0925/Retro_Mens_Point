import React, { useEffect, useState } from "react";
import Navbar from "../../Home/Navbar/Navbar";
import Footer from "../../Home/Footer/Footer";
import HoodiesLayout from "./HoodiesLayout.jsx";

const Hoodies = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5444/hoodies")
      .then((res) => res.json())
      .then((data) => {
        console.log("API DATA:", data);
        setProducts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="shpbyctgrheading m-5 text-center">Hoodies</h1>
        <div className="row">
          {products.length > 0 ? (
            products.map((item) => (
              <HoodiesLayout product={item} key={item._id} />
            ))
          ) : (
            <h2>No products found</h2>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Hoodies;
