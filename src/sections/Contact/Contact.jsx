import { useEffect, useRef, useState } from 'react'
import './Contact.css'
import Container from '../../components/common/container/Container'
import SectionTitle from '../../components/common/sectiontitle/SectionTitle'
import Description from '../../components/common/description/Description'
import Button from '../../components/common/button/Button'

// Netlify necesita data en formato urlencoded
function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const feedbackRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (status === 'sending') return

    setStatus('sending')

    const form = e.currentTarget
    const formData = new FormData(form)

    // Convertimos FormData a objeto
    const data = Object.fromEntries(formData.entries())

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(data),
      })

      if (res.ok) {
        form.reset()
        setStatus('success')
        setTimeout(() => setStatus('idle'), 4000)
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  // ✅ Scroll suave al feedback cuando aparezca
  useEffect(() => {
    if (status === 'success' || status === 'error') {
      // espera al render
      requestAnimationFrame(() => {
        feedbackRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      })
    }
  }, [status])

  const isSending = status === 'sending'

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
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                {/* Obligatorios para Netlify */}
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />

                <input
                  className="contact__input"
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  autoComplete="name"
                  required
                  disabled={isSending}
                />

                <input
                  className="contact__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  autoComplete="email"
                  required
                  disabled={isSending}
                />

                <textarea
                  className="contact__textarea"
                  name="message"
                  placeholder="Mensaje"
                  rows={5}
                  required
                  disabled={isSending}
                />

                <div className="contact__actions">
                  {/* ✅ botón deshabilitado mientras envía + spinner */}
                  <Button
                    width="100%"
                    height="46px"
                    type="submit"
                    disabled={isSending}   // <-- IMPORTANTE
                  >
                    <span className="contact__btnContent">
                      {isSending && <span className="contact__spinner" aria-hidden="true" />}
                      {isSending ? 'Enviando...' : 'Enviar Mensaje'}
                    </span>
                  </Button>
                </div>

                {/* Mensajes sin recargar + scroll */}
                {(status === 'success' || status === 'error') && (
                  <div
                    ref={feedbackRef}
                    className={`contact__feedback ${
                      status === 'success'
                        ? 'contact__feedback--success'
                        : 'contact__feedback--error'
                    }`}
                    role="status"
                    aria-live="polite"
                  >
                    {status === 'success'
                      ? '✅ Mensaje enviado. Te responderemos pronto.'
                      : '❌ No se pudo enviar. Intenta nuevamente.'}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
