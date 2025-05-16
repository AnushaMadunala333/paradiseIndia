import { useState } from 'react'
import './App.css'
import Home from './Home'
import Destinations from './destinations'
import NavBar from './NavBar'
import Reviews from './Review'
import Contact from './Contact'
import Footer from './Footer'

function App() {

  return (
    <>
    <NavBar />
    <Home />
    <Destinations />
    <Reviews />
    <Contact />
    <Footer />
    </>
  )
}

export default App
