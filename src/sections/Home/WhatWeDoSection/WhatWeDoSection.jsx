import Container from '../../../components/common/container/Container'
import SectionTitle from '../../../components/common/sectiontitle/SectionTitle'
import CardHome from '../../../components/ui/CardHome/CardHome'
import landing from '../../../assets/images/landing.png'
import corporation from '../../../assets/images/corporation.png'
import onlineStore from '../../../assets/images/online_store.png'
import seo from '../../../assets/images/seo.png'

import './WhatWeDoSection.css'

export default function WhatWeDoSection() {
    return (
        <section id="what-we-do">
            <Container>
                <div className="services-header">
                    <div className="container_header">
                        <h2>¿Qué hacemos?</h2>
                        <p>Desarrollamos páginas web enfocadas en conversión, posicionamiento y crecimiento digital.</p>
                    </div>
                </div>

                <div className="services_grid">
                    <CardHome
                        icon={<img src={landing} alt="icon" />}
                        title="Landing Pages"
                        text="Optimizadas para captar público rápidamente."
                    />
                    <CardHome
                        icon={<img src={corporation} alt="icon" />}
                        title="Webs Corporativas"
                        text="Diseño profesional para tu identidad de marca."
                    />
                    <CardHome
                        icon={<img src={onlineStore} alt="icon" />}
                        title="Tiendas Online"
                        text="Plataformas e-commerce seguras y escalables."
                    />
                    <CardHome
                        icon={<img src={seo} alt="icon" />}
                        title="SEO"
                        text="Mejora tu visibilidad en buscadores."
                    />
                </div>
            </Container>
        </section>
    )
}