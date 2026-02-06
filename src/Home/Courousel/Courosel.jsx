import React from 'react'
import img2 from './carouselImages/retroimg2.png'
import img1 from  './carouselImages/retroimg3.png'
import img3 from './carouselImages/logo.png'
import '../Courousel/Courosel.css'
import {Link} from 'react-router-dom'
const Carousel = () => {
  return (
    <div
      id="heroCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="5000"
    >
      <div className="carousel-inner">

        <div className="carousel-item active">
          <div className="container py-5 ">
            <div className="row align-items-center  carousel-text  text-white bg-dark">
              <div className="col-lg-6">
                <p className="text-uppercase">
                  Style That Defines You
                </p>
                <h1 className="fw-bold">
                  Trendy Shirts, Jeans & <br /> T-Shirts for Men
                </h1>
                <p>
                  Discover everyday fashion made for comfort, confidence, and
                  a perfect fit.
                </p>
                
                <Link to = "/newarrival">
                 <button className="btn btn-danger">
                  SHOP MORE
                </button>
                </Link>
              </div>

              <div className="col-lg-6">
                <img src={img3} className="img-fluid w-100" alt="Slide 1" />

              </div>
            </div>
          </div>
        </div>

        {/* SLIDE 2 */}
        <div className="carousel-item">
          <div className="container py-5">
            <div className="row align-items-center  carousel-text text-white bg-dark">
              <div className="col-lg-6">
                <p className="text-uppercase">
                  New Arrivals
                </p>
                <h1 className="fw-bold">
                  Premium Streetwear <br /> Collections
                </h1>
                <p>
                  Upgrade your style with our latest premium outfits.
                </p>
                <Link to = "/newarrival">
                 <button className="btn btn-danger">
                  SHOP MORE
                </button>
                </Link>
              </div>

              <div className="col-lg-6">
                <img src={img2} className="img-fluid w-100" alt="Slide 2" />
              </div>
            </div>
          </div>
        </div>

        {/* SLIDE 3 */}
        <div className="carousel-item">
          <div className="container py-5 ">
            <div className="row align-items-center carousel-text text-white bg-dark">
              <div className="col-lg-6">
                <p className="text-uppercase">
                  Retro Vibes
                </p>
                <h1 className="fw-bold">
                  Classic Fits <br /> Modern Look
                </h1>
                <p>
                  Timeless fashion inspired by modern street culture.
                </p>
               <Link to = "/newarrival">
                 <button className="btn btn-danger">
                  SHOP MORE
                </button>
                </Link>
              </div>

              <div className="col-lg-6">
                <img src={img2} className="img-fluid w-100" alt="Slide 3" />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* CONTROLS */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  )
}

export default Carousel
