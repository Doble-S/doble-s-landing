import './Navbar.css'
import { useState } from 'react'
import { useScrollToSection } from '../../../hooks/useScrollToSection'
import logo from '../../../assets/images/dobles_logo.png'

export default function Navbar() {
    const { scrollTo } = useScrollToSection()
    const [open, setOpen] = useState(false)

    const handleScroll = (section) => {
      scrollTo(section)
      setOpen(false) // cierra menú al navegar
    }

    return (
      <nav className="navbar">
        <div className="navbar_logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Botón hamburguesa (solo mobile) */}
        <button
          className={`navbar_toggle ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <span />
          <span />
          <span />
        </button>

        {/* Links */}
        <div className={`navbar_links ${open ? 'active' : ''}`}>
          <button onClick={() => handleScroll('home')}>Inicio</button>
          <button onClick={() => handleScroll('about')}>Nosotros</button>
          <button onClick={() => handleScroll('services')}>Servicios</button>
          <button onClick={() => handleScroll('portfolio')}>Portafolio</button>
          <button onClick={() => handleScroll('testimonials')}>Testimonios</button>
          <button onClick={() => handleScroll('contact')}>Contacto</button>
        </div>
      </nav>
    )
}