import React, { useState } from "react";
import "./Navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";


import { NavLink, useNavigate } from "react-router-dom";

const Navbar = ({data}) => {
  const navigate=useNavigate()
  const handleClick = () => {
    data.current.scrollIntoView({behavior:"smooth"})

  }
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        
        <div className="logo">
          <h2>
            <span>M</span>y
            <span>R</span>estaurantjhbuuhjhjhh
          </h2>
        </div>

        <div className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/menu">Menu</NavLink>
            </li>
            <li>
              <NavLink to="/events"> Events</NavLink>
            </li>
            <li>
              <NavLink to="/gallery">Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
           
          </ul>
        </div>

   
        <div className="social-media">
            <button onClick={handleClick} className="book">Book a Table</button>
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
   

     
    </>
  );
};

export default Navbar;