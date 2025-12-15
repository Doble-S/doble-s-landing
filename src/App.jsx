import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/layout/Navbar.jsx'
import Home from './sections/Home/Home.jsx'
import Portfolio from './sections/Portfolio/Portfolio.jsx'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />
      <Portfolio />
    </>
  )
}

export default App
