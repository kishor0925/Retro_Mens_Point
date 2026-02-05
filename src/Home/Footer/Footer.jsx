import React from "react"
import logo from "./Images/logo.png"
import './Footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row gy-4">

          {/* Brand */}
          <div className="col-12 col-md-6 col-lg-3">
            <img src={logo} alt="Brand Logo" className="img-fluid mb-3 footer-logo" />
          </div>

          {/* Stores */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5 className="footer-title">Our Stores</h5>
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
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-list">
              <li>New Arrivals</li>
              <li>Trending Now</li>
              <li>Hoodies</li>
              <li>T-Shirts</li>
              <li>Shirts</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5 className="footer-title">Contact Us</h5>
            <p className="footer-text">
              No. 378, Near Petit Canal Street,<br />
              Mahatma Gandhi Road,<br />
              Pondicherry – 605001
            </p>
            <p className="footer-text">📞 +91 99407 37575</p>
            <p className="footer-text">📞 +91 90036 35574</p>
            <p className="footer-text">📞 +91 77080 16139</p>
            <p className="footer-text">✉️ imkishor172@gmail.com</p>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
