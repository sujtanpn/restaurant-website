import React from 'react'
import './App.css'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Menu from './Pages/Menu'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/menu' element={<Menu />}/>
      </Routes>
    </BrowserRouter>
  
  
  )
}

export default App
