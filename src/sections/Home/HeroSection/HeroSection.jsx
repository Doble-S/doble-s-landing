import './HeroSection.css'
import Container from '../../../components/common/container/Container'
import Button from '../../../components/common/button/Button'
import computer from '../../../assets/images/computer.png'
import SectionTitle from '../../../components/common/sectiontitle/SectionTitle'
import { useScrollToSection } from '../../../hooks/useScrollToSection'

export default function HeroSection() {

    const { scrollTo } = useScrollToSection();

    return (
        <section className="hero" id="home">
            <Container>
                <div className="hero_content">
                    <div className="hero_text">
                        <span className="hero_brand">DobleS</span>
                        <SectionTitle 
                            title = {        
                                <>
                                    Diseño,<br />
                                    Desarrollo,<br />
                                    SEO y Posicionamiento
                                </>
                            }
                        />
                        <p>
                            Soluciones Digitales Completas. Diseño, Desarrollo,
                            Posicionamiento y Alojamiento Web en un solo lugar.
                        </p>
                        <Button width="180px" height="45px" onClick={() => scrollTo('what-we-do')}>Descubre más</Button>
                    </div>

                    <div className="hero_image">
                        <img src={computer} alt="Ilustración" />
                    </div>
                </div>
            </Container>
        </section>
    )
}