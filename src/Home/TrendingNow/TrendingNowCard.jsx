import React from "react";
import './TrendingNow.css'
const TrendingNowCard = ({ product }) => {
  return (
    <div className="container product-cards p-4 mx-4">
      <div className="images position-relative">
        <span className="badge bg-danger position-absolute top-0 start-0 m-2">
          {product.discount}% OFF
        </span>

        <img
          src={product.img}
          alt={product.title}
          className="img-fluid"
        />
      </div>

      <div className="product-text mt-2">
        <p className="text-muted mb-1 text-center">{product.title}</p>
        <p className="text-danger text-center fw-bold">₹{product.price}</p>
      </div>
    </div>
  );
};

export default TrendingNowCard;
