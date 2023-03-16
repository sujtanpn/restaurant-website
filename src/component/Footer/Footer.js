import React, { useState } from "react";
import styles from "./Footer.module.css";
import {
    FaFacebook,
    FaInstagram,
} from "react-icons/fa";
 import { NavLink } from "react-router-dom";
 import {
  BsTelephone,
} from "react-icons/bs";
import {
  HiOutlineMail,
} from "react-icons/hi";


const Footer = () => {
  return (
   <>
    <footer className={styles.footer1}>
        <div className={styles.firstrow}>
            <h10>Connect</h10>
            <div className={styles.mediaicon}>
              <a
                href=""
                target="">
                <FaFacebook className="facebook" />
              </a>
              <a
                href=""
                target="">
                <FaInstagram className="instagram" />
              </a>
            </div>
            <div className={styles.contact}>
                <ul>
                  <li className={styles.icons}><BsTelephone /></li>
                  <li>123456789</li>
                </ul>
                <ul>
                  <li className={styles.icons}><HiOutlineMail /></li>
                  <li>info@gmail.com</li>
                </ul>
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
                <h11>Mon - Fri: 7am - 10pm<br />
                Sat - Sun: 7am - 12pm</h11>
            </div>

        </div>
    </footer>
   </>
  )
}

export default Footer