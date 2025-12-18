import './Navbar.css'
import { useScrollToSection } from '../../../hooks/useScrollToSection'
import logo from '../../../assets/images/dobles_logo.png'

export default function Navbar() {
    const { scrollTo } = useScrollToSection()

    return (
        <nav className="navbar">
            <div className="navbar_logo">
                {/* aquí puede ir una imagen o texto */}
                <img src={logo} alt="Logo"/>
            </div>

            <div className="navbar_links">
                <button onClick={() => scrollTo('home')}>Inicio</button>
                <button onClick={() => scrollTo('about')}>Nosotros</button>
                <button onClick={() => scrollTo('services')}>Servicios</button>
                <button onClick={() => scrollTo('portfolio')}>Portafolio</button>
                <button onClick={() => scrollTo('testimonials')}>Testimonios</button>
                <button onClick={() => scrollTo('contact')}>Contacto</button>
            </div>
        </nav>
    )
}