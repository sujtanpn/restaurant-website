import React, { useEffect, useRef } from 'react'
import Herosection from '../component/Herosection/Herosection'
import About from './About/About'
import Process from '../component/process/Process'
import Event from '../component/Events/Events'
import Gallery from '../component/Gallery/Gallery'

const Home = () => {

  return (
    <div>
        <Herosection name='Welcome to our homepage'/>
        <About />
        <Event />
        <Gallery />
        
        
      
    </div>
  )
}

export default Home
