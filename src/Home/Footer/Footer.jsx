import React from "react"
import logo from "./Images/logo.png"
import './Footer.css'
import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <footer className="footer bg-dark color-dark">
      <div className="container">
        <div className="row gy-4">

          {/* Brand */}
          <div className="col-12 col-md-6 col-lg-3">
            <img src={logo} alt="Brand Logo" className="img-fluid mb-3 footer-logo" />
          </div>

          {/* Stores */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5 className="footer-title fw-bold">Our Stores</h5>
            <ul className="footer-list">
              <li >Kanchipuram</li>
              <li>Trichy – Thillai Nagar</li>
              <li>Cuddalore</li>
              <li>Pondicherry – MG Road</li>
              <li>Coimbatore – Saibaba Colony</li>
              <li>Coimbatore – Lakshmi Mill</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5 className="footer-title fw-bold">Quick Links</h5>
            <ul className="footer-list">
               <li className="nav-item">
                <Link to="/" className="nav-link" >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/newarrival" className="nav-link" >
                  New Arrivals
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/trendingnow" className="nav-link" >
                  Trending Now
                </Link>
              </li>
               <li className="nav-item">
                <Link to="/hoodies" className="nav-link" >
                  Hoodies
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/tshirt" className="nav-link" >
                  T-Shirt
                </Link>
              </li>
              
            </ul>
          </div>

          {/* Contact */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5 className="footer-title fw-bold">Contact Us</h5>
            <p className="footer-text">
              No. 378, Near Petit Canal Street,<br />
              Mahatma Gandhi Road,<br />
              Pondicherry – 605001
            </p>
            <p className="footer-text">📞 +91 8956548246</p>
            <p className="footer-text">📞 +91 6895232658</p>
            <p className="footer-text">📞 +91 9956210356</p>
            <p className="footer-text">✉️ imkishor172@gmail.com</p>
          </div>

          <div className="col-12 col-lg-12 col-md-12 text-center">
            <p className="fw-bold footer-text">&copy; Retro Mens Point 2026 ||Designed & Developed by <a href="https://www.linkedin.com/in/kishor25/" className="text-decoration-none">Kishor M</a></p>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
