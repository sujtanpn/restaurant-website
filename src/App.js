import React from 'react'
import './App.css'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Pages/About/About'
import Home from './Pages/Home'
import OurMenu from './Pages/OurMenu/Menu'
import Contact from './Pages/Contact'

import Navbar from './component/Navbar/Navbar'
import Footer from './component/Footer/Footer'


const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route index element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/menu' element={<OurMenu />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  
  
  )
}

export default App
