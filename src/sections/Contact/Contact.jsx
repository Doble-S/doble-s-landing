import { useEffect, useRef, useState } from 'react'
import './Contact.css'
import Container from '../../components/common/container/Container'
import SectionTitle from '../../components/common/sectiontitle/SectionTitle'
import Description from '../../components/common/description/Description'
import Button from '../../components/common/button/Button'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mlgrjewz'

// ⚠️ REEMPLAZA esto por tu Site Key real de Cloudflare Turnstile
const TURNSTILE_SITE_KEY = '0x4AAAAAACH1BPPkBeHLwVi_'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [token, setToken] = useState('')
  const captchaRef = useRef(null)

  // ✅ Renderiza Turnstile cuando el script ya cargó
  useEffect(() => {
    let mounted = true
    let widgetId = null

    const tryRender = () => {
      if (!mounted) return
      if (!window.turnstile) return
      if (!captchaRef.current) return

      // Evita doble render si React re-renderiza
      if (captchaRef.current.childNodes.length > 0) return

      widgetId = window.turnstile.render(captchaRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        callback: (t) => setToken(t),
        'expired-callback': () => setToken(''),
        'error-callback': () => setToken(''),
      })
    }

    // intenta varias veces por si el script demora
    const interval = setInterval(tryRender, 250)
    tryRender()

    return () => {
      mounted = false
      clearInterval(interval)
      try {
        if (window.turnstile && widgetId !== null) {
          window.turnstile.remove(widgetId)
        }
      } catch {}
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return

    // ✅ Obligatorio: que el usuario marque el captcha
    if (!token) {
      setStatus('error')
      return
    }

    setStatus('sending')

    const form = e.currentTarget
    const formData = new FormData(form)

    // ✅ Mandamos el token de Turnstile
    formData.append('cf-turnstile-response', token)

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      })

      if (res.ok) {
        form.reset()
        setToken('')
        setStatus('success')
        setTimeout(() => setStatus('idle'), 4000)

        // opcional: resetear el widget para siguiente envío
        try {
          if (window.turnstile) window.turnstile.reset()
        } catch {}
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

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
              <form className="contact__form" onSubmit={handleSubmit}>
                <input
                  className="contact__input"
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  required
                  disabled={isSending}
                />

                <input
                  className="contact__input"
                  type="email"
                  name="email"
                  placeholder="Email"
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

                {/* ✅ CAPTCHA visible */}
                <div className="contact__captcha" ref={captchaRef} />

                <div className="contact__actions">
                  <Button width="100%" height="46px" type="submit" disabled={isSending}>
                    {isSending ? 'Enviando…' : 'Enviar Mensaje'}
                  </Button>
                </div>

                {status === 'success' && (
                  <p className="contact__feedback contact__feedback--success">
                    ✅ Mensaje enviado. Te responderemos pronto.
                  </p>
                )}

                {status === 'error' && (
                  <p className="contact__feedback contact__feedback--error">
                    ❌ Completa el CAPTCHA y vuelve a intentar.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
