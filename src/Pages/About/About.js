import React from 'react';
import styles from './About.module.css';
import knife from '../../images/knife.png';
import Process from '../../component/process/Process'
import { useNavigate } from 'react-router-dom';
import Herosection from '../../component/Herosection/Herosection';

function About() {
  const navigate=useNavigate();

  return(
    <div className='outerabout'>
    <div className={styles.about}>
      <div className={styles.image}>
        <img src={knife} />
      </div>
      <div className={styles.right}>
        <h6>Food | Fun | Music</h6>
        <h7>Enjoy an Exceptional Journey of Taste</h7><br></br>
        <h8>lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h8><br></br>
        <button onClick={() => navigate('/menu')}type='button' className={styles.custom_button}>Explore Menu</button>
      </div>
    </div>
    <Process />
    </div>
   
  )
 
  
  };

export default About;