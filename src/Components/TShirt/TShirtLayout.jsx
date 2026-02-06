import React from "react";
import TShirt from "./TShirt";
const TShirtLayout = ({ product }) => {
  return (
    <div className="col-6 col-md-4 col-lg-3 mb-4 mt-4">
      <div className="card h-100 position-relative">
        <img
          src={product.image}
          className="card-img-top product-img"
          alt={product.name}
        />

        <span className="badge bg-danger position-absolute top-0 start-0 m-2">
          {product.discount}% OFF
        </span>

        <span className="badge bg-white text-dark position-absolute top-0 end-0 m-2">
          <span className="text-success me-1">★</span>
          {product.rating} | {product.ratingCount}
        </span>

        <div className="card-body text-center">
          <h6 className="product-brand mb-1">{product.brand}</h6>
          <h6 className="fw-bold mb-1">{product.title}</h6>
          <p className="mb-1">{product.name}</p>

          <p className="mb-2">
            <span className="text-decoration-line-through me-2">
              ₹{product.oldPrice}
            </span>
            <span className="fw-bold text-danger">
              ₹{product.price}
            </span>
          </p>

          {product.expressDelivery && (
            <span className="badge text-dark fw-bold">
              🚚 2 days delivery
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TShirtLayout;
