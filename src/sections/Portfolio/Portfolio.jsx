import Card from '../../components/ui/Card'
import { portfolio } from '../../data/portfolio'

function Portfolio() {
    return (
        <section id="portfolio">
        <h2>Portafolio</h2>
        {portfolio.map((item, index) => (
            <Card key={index} title={item.title} description={item.description} />
        ))}
        </section>
    )
}

export default Portfolio