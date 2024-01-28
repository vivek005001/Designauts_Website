import React from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Navbar from './assets/Navbar'
import Home from './components/Home'
import About from './components/About'
import Artworks from './components/Artworks'
import Contact from './components/Contact'
import Team from './components/Team'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Footer from './assets/Footer'

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");


  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
    },
    text: {
      height: 50,
      width: 50,
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      backgroundColor: "white",
      mixBlendMode: "difference"
    }
  }

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  
  return (
    <>
      <Navbar textEnter = {textEnter} textLeave = {textLeave}/>
      <motion.div
        className='cursor'
        variants={variants}
        animate={cursorVariant}
      />
      <Routes>
        <Route path="/" element={<Home onMouseEnter={textEnter} onMouseLeave={textLeave}/>} />
        <Route path="/about" element={<About onMouseEnter={textEnter} onMouseLeave={textLeave}/>} />
        <Route path="/artworks" element={<Artworks textEnter = {textEnter} textLeave = {textLeave} />} />
        <Route path="/contact" element={<Contact onMouseEnter={textEnter} onMouseLeave={textLeave}/>} />
        <Route path="/team" element={<Team onMouseEnter={textEnter} onMouseLeave={textLeave}/>} />
        
      </Routes>
      <Footer />
    </>
  )
}

export default App
