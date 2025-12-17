import { useScrollToSection } from '../../../hooks/useScrollToSection'

export default function Navbar() {
    const { scrollTo } = useScrollToSection()

    return (
        <nav>
            <div className="navbar__logo">
                {/* imagen*/}
                <span>S</span>
            </div>

            <button onClick={() => scrollTo('home')}>Inicio</button>
            <button onClick={() => scrollTo('about')}>Nosotros</button>
            <button onClick={() => scrollTo('services')}>Servicios</button>
            <button onClick={() => scrollTo('portfolio')}>Portafolio</button>
            <button onClick={() => scrollTo('testimonials')}>Testimonios</button>
            <button onClick={() => scrollTo('contact')}>Contacto</button>
        </nav>
    )
}