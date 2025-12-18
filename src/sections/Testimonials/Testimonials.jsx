import './Testimonials.css'
import Container from '../../components/common/container/Container'
import SectionTitle from '../../components/common/sectiontitle/SectionTitle'
import Description from '../../components/common/description/Description'
import { testimonials } from '../../data/testimonials'

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <Container>
        <SectionTitle title="Testimonios" />
        <Description text="Lo que dicen nuestros clientes de nosotros." />

        <div className="testimonials__grid">
          {testimonials.map((t, index) => (
            <article className="testimonials__card" key={index}>
              <img
                src="src/assets/images/marks.png"
                alt=""
                aria-hidden="true"
                className="testimonials__quotesImg"
              />

              <p className="testimonials__message">{t.message}</p>

              <div className="testimonials__footer">
                <div className="testimonials__avatarWrap">
                  <img
                    src={t.avatar}
                    alt={`Logo de ${t.name}`}
                    className="testimonials__avatar"
                  />
                </div>

                <div className="testimonials__person">
                  <h4 className="testimonials__name">{t.name}</h4>
                  <p className="testimonials__role">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
