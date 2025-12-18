import './Portfolio.css'
import Container from '../../components/common/container/Container'
import SectionTitle from '../../components/common/sectiontitle/SectionTitle'
import Description from '../../components/common/description/Description'
import Button from '../../components/common/button/Button'
import { portfolio } from '../../data/portfolio'

export default function Portfolio() {
  const openSite = (url) => window.open(url, '_blank', 'noopener,noreferrer')

  return (
    <section id="portfolio" className="portfolio">
      <Container>
        <SectionTitle title="Portafolio" />
        <Description text="Proyectos reales desarrollados para nuestros clientes." />

        <div className="portfolio__grid">
          {portfolio.map((item, index) => (
            <article className="portfolio__card" key={index}>
              <div className="portfolio__imageWrap">
                <img
                  src={item.image}
                  alt={`Proyecto ${item.title}`}
                  className="portfolio__image"
                />
              </div>

              <div className="portfolio__content">
                <div className="portfolio__header">
                  <h3 className="portfolio__title">{item.title}</h3>
                  <span className="portfolio__tag">{item.tag}</span>
                </div>

                <p className="portfolio__desc">{item.description}</p>

                <div className="portfolio__actions">
                  <Button width="150px" height="44px" onClick={() => openSite(item.url)}>
                    Ver Sitio
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
