import React, { useState } from "react";
import "./Footer.css";
import {
    FaFacebook,
    FaInstagram,
} from "react-icons/fa";
 import { NavLink } from "react-router-dom";

const Footer = () => {
    
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
   <>
    <footer className='footer-1'>
        <div className='first-row'>
            <h1>Connect</h1>
            <div className='social-media-icon'>
            <li>
              <a
                href=""
                target="">
                <FaFacebook className="facebook" />
              </a>
            </li>
            <li>
              <a
                href=""
                target="">
                <FaInstagram className="instagram" />
              </a>
            </li>
            </div>
            <div className='contact'>
                <h2>123456789</h2>
                <h3>info@myste.com</h3>
            </div>
        </div>
        <div className='second-row'>
            <h1>Visit</h1>
            <div className="time">
                <h2>Mon - Fri: 11am - 10pm</h2>
                <h3>Sat - Sun: 11am - 12pm</h3>
            </div>

        </div>
    </footer>
   </>
  )
}

export default Footer
