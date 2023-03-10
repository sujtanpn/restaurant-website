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
            <h1>Connect</h1>
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
                <h2>123456789</h2>
                <h3>info@myste.com</h3>
            </div>
        </div>
        <div className={styles.secondrow}>
          <h2>
            <span>M</span>y
            <span>R</span>estaurant
          </h2>
          <h4>  We offer best good and a great time</h4>
        </div>
        <div className={styles.thirdrow}>
            <h1>Visit</h1>
            <div className={styles.time}>
                <h2>Mon - Fri: 11am - 10pm</h2>
                <h3>Sat - Sun: 11am - 12pm</h3>
            </div>

        </div>
    </footer>
   </>
  )
}

export default Footer
