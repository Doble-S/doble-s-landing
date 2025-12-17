import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/layout/Navbar/Navbar.jsx'
import Home from './sections/Home/Home.jsx'
import Portfolio from './sections/Portfolio/Portfolio.jsx'
import About from './sections/About/About.jsx'
import Services from './sections/Services/Services.jsx'
import Testimonials from './sections/Testimonials/Testimonials.jsx'
import Contact from './sections/Contact/Contact.jsx'
import Footer from './components/layout/Footer/Footer.jsx'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
