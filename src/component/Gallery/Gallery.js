import React from 'react'
import styles from './Gallery.module.css'
import gallery1 from '../../images/gallery1.jpeg'
import gallery2 from '../../images/gallery2.jpeg'
import gallery3 from '../../images/gallery3.jpeg'
import gallery4 from '../../images/gallery4.jpeg'
import gallery5 from '../../images/gallery5.jpeg'

const Gallery = () => {
  return (
    <div className={styles.process}>
    <div className={styles.process_inside}>
    <h1>Our Photo</h1>
    <h2>Gallery</h2>
    <div className={styles.inside}>
    <div className={styles.card}>
        <div className={styles.card1}>
         <img src={gallery1} alt=" image" className="live " />
        </div>
    </div>
    <div className={styles.card}>
        <div className={styles.card1}>
         <img src={gallery2} alt=" image" className="live " />
        </div>
    </div>
    <div className={styles.card}>
        <div className={styles.card1}>
         <img src={gallery3} alt=" image" className="live " />
        </div>
    </div>
    <div className={styles.card}>
        <div className={styles.card1}>
         <img src={gallery4} alt=" image" className="live " />
        </div>
    </div>
    <div className={styles.card}>
        <div className={styles.card1}>
         <img src={gallery5} alt=" image" className="live " />
        </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Gallery
