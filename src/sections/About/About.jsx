import React from 'react'
import Container from '../../components/common/container/Container.jsx'
import SectionTitle from '../../components/common/sectiontitle/SectionTitle.jsx'
import Description from '../../components/common/description/Description.jsx'
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
            </Container>
        </section>
    )
}