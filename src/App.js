import React, { useRef } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Pages/About/About'
import Home from './Pages/Home'
import OurMenu from './Pages/OurMenu/Menu'
import Gallery from './component/Gallery/Gallery'
import Navbar from './component/Navbar/Navbar'
import Reservation from './component/Reservation/Reservation'
import Footer from './component/Footer/Footer'
import Events from './Pages/Events'
import Contact from './Pages/Contact/Contact'
import Herosection from './component/Herosection/Herosection'



const App = () => {
  const sref=useRef(null)
 
  const data = {
 
  }
  return (
    <BrowserRouter>
    <Navbar data={sref} />
      <Routes>
        <Route index element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/menu' element={<OurMenu />}/>
        <Route path='/events' element={<Events />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <div ref={sref}><Reservation /></div>
      
      <Footer />
    </BrowserRouter>
  
  
  )
}

export default App
