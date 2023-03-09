import React from 'react';
import './About.css';
import knife from '../../images/knife.png'

const About = () => (
  <div className='about'>
    
    <div className='left'>
      <h1>About Us</h1>
      <p>lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <button type='button' className='custom_button'>Read More</button>
    </div>
    <div className='image'>
      <img src={knife} />
    </div>
    <div className='right'>
      <h1>Our History</h1>
      <p>lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <button type='button' className='custom_button'>Read More</button>
    </div>
  </div>

);

export default About;