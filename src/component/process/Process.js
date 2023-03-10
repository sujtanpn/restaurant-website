import React from 'react'
import styles from './Process.module.css'
import bar from '../../images/bar.png'
import barr from '../../images/barr.webp'
import restaurant from '../../images/restaurant.png'
import card3 from '../../images/card3.png'
import skill from '../../images/skill.webp'
import fresh from '../../images/fresh.jpeg'

const Process = () => {
  return (
  
    <div className={styles.process}>
        <div className={styles.process_inside}>
        <h1>Our Process</h1>
        <h2>Healthy & Improves Your Mood</h2>
        <div className={styles.inside}>
        <div className={styles.card}>
            <div className={styles.card1}>
             <img src={bar} alt=" image" className="bar " />
             <h3>Clean Bar</h3>
            <p>Clean Bar, Food Safety and General Facility Sanitation have always been top priorities to our restaurant.</p>
            <img src={barr} className={styles.barr} />
            </div>
        </div>
        <div className={styles.card}>
            <div className={styles.card1}>
             <img src={restaurant} alt=" image" className="bar " />
             <h3>Skilled Chefs</h3>
            <p>Our Chefs are a team of culinary talent that bring their own unique cooking styles and flavours to our restaurant.</p>
            <img src={skill} className={styles.barr} />
            </div>
        </div>
        <div className={styles.card}>
            <div className={styles.card1}>
             <img src={card3} alt=" image" className="bar " />
             <h3>Fresh Products</h3>
            <p>Our menus are tailored appropriately to season and availibity. Changing daily, we use the highest quality of produce, cooked with care.</p>
            <img src={fresh} className={styles.barr} />
            </div>
        </div>
        </div>
        </div>
   </div>
  )
}

export default Process
