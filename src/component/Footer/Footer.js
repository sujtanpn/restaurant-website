import React, { useState } from "react";
import styles from "./Footer.module.css";
import {
    FaFacebook,
    FaInstagram,
} from "react-icons/fa";
 import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
   <>
    <footer className={styles.footer1}>
        <div className={styles.firstrow}>
            <h10>Connect</h10>
            <div className={styles.socialmediaicon}>
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
            <div className={styles.contact}>
                <h11>123456789</h11>
                <h3>info@myste.com</h3>
            </div>
        </div>
        <div className={styles.secondrow}>
          <h12>
            <span>M</span>y
            <span>R</span>estaurant
          </h12>
          <h13>  We offer best good and a great time</h13>
        </div>
        <div className={styles.thirdrow}>
            <h10>Visit</h10>
            <div className={styles.time}>
                <h11>Mon - Fri: 11am - 10pm<br></br>
                Sat - Sun: 11am - 12pm</h11>
            </div>

        </div>
    </footer>
   </>
  )
}

export default Footer