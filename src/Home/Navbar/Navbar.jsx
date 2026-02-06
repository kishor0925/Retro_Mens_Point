import React from 'react'
import './Navbar.css'
import BestOffersOffcanvas from './BestOffersOffcanvas'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark navs">
        <div className="container p-2">
          <a className="navbar-brand brand" href="#">
            RETRO MENS POINT
          </a>


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

              <li className='nav-item'>
                <NavLink className = "nav-link"  to = "/">
                    Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className = "nav-link" to="/newarrival">
                    New Arrivals
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/trendingnow" className="nav-link">
                  Trending Now
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/hoodies" className= "nav-link">
                  Hoodies
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">T-Shirts</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Shirts</a>
              </li>
            </ul>

            <ul className='navbar-nav d-none d-lg-block items'>
              <li className='nav-item'>
                <button
                  className='nav-link btn-link'
                  data-bs-toggle = 'offcanvas'
                  data-bs-target = '#bestoffer'
                >
                  Best Offers
                </button>

              </li>
            </ul>


          </div>
        </div>
      </nav>
      <BestOffersOffcanvas />
    </>

  )
}

export default Navbar
