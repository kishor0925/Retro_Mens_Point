import React, { useEffect, useState } from "react";
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Home/Footer/Footer";
const ViewPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5444/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Navbar />
      <div className="container mt-5 mb-5">
        <div className="row">
          {products.map((item) => (
            <div className="col-6 col-md-4 col-lg-3 mb-4" key={item._id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.name}
                  style={{ height: "250px", objectFit: "cover" }}
                />

                <div className="card-body text-center">
                  <h6 className="text-muted">{item.brand}</h6>
                  <h5>{item.title}</h5>

                  <p>
                    <span className="text-decoration-line-through me-2">
                      ₹{item.oldPrice}
                    </span>
                    <span className="text-danger fw-bold">₹{item.price}</span>
                  </p>

                  <p>
                    ⭐ {item.rating} ({item.ratingCount})
                  </p>

                  {item.expressDelivery && (
                    <span className="badge bg-success mb-2">
                      🚚 Fast Delivery
                    </span>
                  )}

                  {item.isTrending && (
                    <span className="badge bg-danger m-1">Trending</span>
                  )}

                  {item.isNewArrival && (
                    <span className="badge bg-primary m-1">New</span>
                  )}
                </div>
                <button className="btn btn-info m-2">
                    Update
                </button>

                <button className="btn btn-danger m-2">
                    Delete 
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ViewPage;
