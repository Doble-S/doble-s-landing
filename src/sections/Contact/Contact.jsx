import './Contact.css'
import Container from '../../components/common/container/Container'
import SectionTitle from '../../components/common/sectiontitle/SectionTitle'
import Description from '../../components/common/description/Description'
import Button from '../../components/common/button/Button'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <Container>
        <div className="contact__grid">
          <div className="contact__left">
            <SectionTitle title="Hablemos de tu proyecto" />
            <Description text="Cuéntanos tu idea y te ayudamos a definir la mejor solución." />
            <Description text="Atención personalizada y respuesta rápida." />
          </div>

          <div className="contact__right">
            <div className="contact__card">
              <form
                className="contact__form"
                name="contact"
                method="POST"
                action="/gracias"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                data-netlify-recaptcha="true"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />

                <input
                  className="contact__input"
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  autoComplete="name"
                  required
                />

                <input
                  className="contact__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  autoComplete="email"
                  required
                />

                <textarea
                  className="contact__textarea"
                  name="message"
                  placeholder="Mensaje"
                  rows={5}
                  required
                />

                {/* SLOT DEL RECAPTCHA */}
                <div className="contact__recaptcha" data-netlify-recaptcha="true"></div>

                <div className="contact__actions">
                  <Button width="100%" height="46px" type="submit">
                    Enviar Mensaje
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
