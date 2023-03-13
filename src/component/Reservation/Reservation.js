import React from 'react'
import styles from './reservation.module.css'

const Reservation = () => {
  return (
    <div className={styles.onlinereservation}>
        <h1>Make a Reservation</h1>
        <h2>Online Reservation</h2>
        <div className={styles.table}>
            <div className={styles.name}>
                <input type='text' placeholder='Name'/>
            </div>
            <div className={styles.second}>
                <ul>
                <input type='text' placeholder='Email'/></ul>
                <ul><input type='text' placeholder='Phone'/></ul>
            </div>
            <div className={styles.second}>
                <ul>
                <input type='number' placeholder='No. of People'/></ul>
                <ul><input type='text' placeholder='Purpose'/></ul>
            </div>
            <div className={styles.second}>
                <ul>
                <input type='date' placeholder='Check in Date'/></ul>
                <ul><input type='time' placeholder='Check in Time'/></ul>
            </div>
            <button className={styles.book}>BOOK A TABLE</button>
        </div>
      
    </div>
  )
}

export default Reservation
