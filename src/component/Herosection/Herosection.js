import React from "react";
import { NavLink } from "react-router-dom";
import './Herosection.css'


const Herosection = ({image, name}) => {
    return (
      <section>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <div>{name}</div>
        </div>
       

        <div className="section-hero-image">
          <picture>
           
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Herosection;