import React from 'react'
import Container from '../../components/common/container/Container.jsx'
import SectionTitle from '../../components/common/sectiontitle/SectionTitle.jsx'
import Description from '../../components/common/description/Description.jsx'
import about from '../../assets/images/about.jpg'
import './About.css'

export default function About() {
    return (
        <section id="about">
            <Container>
                <SectionTitle
                    title="Sobre Nosotros"
                />
                <Description
                    text="Somos una startup digital joven y apasionada que crea soluciones integrales para impuisar tu presencia online. Combinamos diseño web estratégico, desarrollo robusto y SEO efectivo para potenciar tu crecimiento digital."
                />

                <div className="about-section">
                    <div className="about-container">
                        <div className="about-image">
                            <img src={about} alt="Misión y Visión"/>
                        </div>

                        <div className="about-content">
                            <div className="mision-item">
                                <p><strong>Misión:</strong> <span className="text-blue">Transformar ideas en activos digitales de alta calidad.</span></p>
                            </div>
                            <div className="vision-item">
                                <p><strong>Visión:</strong> <span className="text-blue">Ser la referencia en innovación digital ágil y accesible.</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}