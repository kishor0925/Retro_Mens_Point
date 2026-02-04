import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark navs">
      <div className="container p-2">
        <a className="navbar-brand brand" href="#">
           RETRO MENS POINT
        </a>

       
        <div className="d-flex d-lg-none ms-auto me-2 gap-2">
          <button className="btn btn-info btn-sm">Login</button>
          <button className="btn btn-info btn-sm ">Sign up</button>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navmenu">
         
          <ul className="navbar-nav mx-auto items">
            <li className="nav-item">
              <a className="nav-link" href="#">New Arrivals</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Trending Now</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Hoodies</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">T-Shirts</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Shirts</a>
            </li>
          </ul>

      
          <div className="d-none d-lg-flex gap-2">
            <button className="btn btn-info">Login</button>
            <button className="btn btn-info">Sign up</button>
          </div>
        </div>
      </div>
    </nav>
    </>
    
  )
}

export default Navbar
