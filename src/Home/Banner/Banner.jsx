import React from "react";
import b1 from "./Bannerimages/banner1.webp";
import b2 from "./Bannerimages/banner2.webp";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="cms-banner">
      <div className="container">
        <div className="row g-4">

          <div className="col-12 col-md-6">
            <div className="banner-box">
              <img src={b1} alt="New Collection" />

              <div className="banner-content">
                <h6>Step Into Style</h6>
                <h2>
                  Explore Our <br /> New Collection
                </h2>
                <a href="/shop" className="banner-btn">
                  SHOP NOW
                </a>
              </div>
            </div>
          </div>

         
          <div className="col-12 col-md-6">
            <div className="banner-box">
              <img src={b2} alt="Men Collection" />

              <div className="banner-content">
                <h6>Men’s Collection</h6>
                <h2>
                  Modern Men's <br /> New Look
                </h2>
                <a href="/shop" className="banner-btn">
                  SHOP NOW
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
