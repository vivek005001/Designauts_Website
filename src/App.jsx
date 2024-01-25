import React from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Navbar from './assets/Navbar'
import Home from './components/Home'
import About from './components/About'
import Artworks from './components/Artworks'
import Contact from './components/Contact'

function App() {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/artworks" element={<h1>Artworks</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        
      </Routes>
    </>
  )
}

export default App
