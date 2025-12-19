import React from 'react'
import Container from '../../components/common/container/Container.jsx'
import SectionTitle from '../../components/common/sectiontitle/SectionTitle.jsx'
import Description from '../../components/common/description/Description.jsx'
import ServiceCard from '../../components/ui/ServiceCard/ServiceCard.jsx'
import seo_on_page from '../../assets/images/seo_on_page.png'
import speed from '../../assets/images/speed.png'
import integrations from '../../assets/images/integrations.png'
import support from '../../assets/images/support.png'
import ux_ui from '../../assets/images/ux_ui.png'
import web_develop from '../../assets/images/web_develop.png'
import './Services.css'

export default function Services() {
    return (
        <section id="services">
            <Container>
                <SectionTitle
                    title="Servicios"
                />
                <Description
                    text="Todo lo necesario para que tu web funcione y crezca."
                />
                <div className="services_cards_grid">
                    <ServiceCard
                        icon={<img src={ux_ui} alt="icon" />}
                        title="Diseño UI/UX"
                        text="Diseño moderno enfocado en conversión."
                    />
                    <ServiceCard
                        icon={<img src={web_develop} alt="icon" />}
                        title="Desarrollo Web"
                        text="Sitios rápids, seguros y escalables."
                    />
                    <ServiceCard
                        icon={<img src={seo_on_page} alt="icon" />}
                        title="SEO On-Page"
                        text="Estructura optimizada para visibilidad en Google.."
                    />
                    <ServiceCard
                        icon={<img src={speed} alt="icon" />}
                        title="Optimización de Velocidad"
                        text="Rendimiento y velocidad de carga."
                    />
                    <ServiceCard
                        icon={<img src={integrations} alt="icon" />}
                        title="Integraciones"
                        text="Formularios, WhatsApp, Analytics."
                    />
                    <ServiceCard
                        icon={<img src={support} alt="icon" />}
                        title="Soporte"
                        text="Soporte post-lanzamiento."
                    />
                </div>
            </Container>
        </section>
    )
}