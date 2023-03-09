import React, { useState } from "react";
import "./Navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        
        <div className="logo">
          <h2>
            <span>M</span>y
            <span>R</span>estaurant
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
              <NavLink to="/contact">Menu</NavLink>
            </li>
            <li>
              <NavLink to="/service">Contact</NavLink>
            </li>
           
          </ul>
        </div>

   
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href=""
                target="">
                Log In / Registration
              </a>
            </li>
            <li>
              <a
                href=""
                target="">
                Book a Table
              </a>
            </li>
           
          </ul>

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