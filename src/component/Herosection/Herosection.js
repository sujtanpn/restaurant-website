import React from "react";
import { NavLink } from "react-router-dom";
import './Herosection.css'
import background from '../../images/background.jpeg'


const Herosection = ({image, name}) => {
    return (
      <section>
         <div className="hero-section" styles={{background:"#151920BD"}}>
           <img src={background} />
         </div>
         <div className="content">
          <h4>
          {name}
          </h4>
         </div>
    </section>
  );
};

export default Herosection;