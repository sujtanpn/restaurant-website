import React from 'react'
import styles from './Events.module.css'
import live from '../../images/live.jpg'
import pancakes from '../../images/pancakes.jpg'
import date from '../../images/date.webp'

const Events = () => {
  return (
    <div className={styles.process}>
        <div className={styles.process_inside}>
        <h1>Live Music / Fun / Food</h1>
        <h2>Special Events</h2>
        <div className={styles.inside}>
        <div className={styles.card}>
            <div className={styles.card1}>
             <img src={live} alt=" image" className="live " />
              <div className={styles.desc}>
                <h3>EVERY FRIDAY : 6:30 PM TO 11 PM</h3>
              <h4>LIVE MUSIC</h4>
              </div>
            </div>
        </div>
        <div className={styles.card}>
            <div className={styles.card1}>
            <img src={pancakes} alt=" image" className="live " />
            <div className={styles.desc}>
                <h3>EVERYDAY : 7 AM TO 10 AM</h3>
              <h4>SPECIAL BREAKFAST</h4>
              </div>
            
            </div>
        </div>
        <div className={styles.card}>
            <div className={styles.card1}>
            <img src={date} alt=" image" className="live " />
            <div className={styles.desc}>
                <h3>EVERYDAY : 7 PM TO 9 PM</h3>
              <h4>ROMANTIC DINNER DATE</h4>
              </div>
            
            </div>
        </div>
        </div>
        </div>
   </div>
  )
}

export default Events
