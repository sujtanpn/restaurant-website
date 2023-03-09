import React from 'react'
import './App.css'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Pages/About/About'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Menu from './Pages/Menu'
import Navbar from './component/Navbar/Navbar'
import Footer from './component/Footer/Footer'


const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route index element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/menu' element={<Menu />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  
  
  )
}

export default App
