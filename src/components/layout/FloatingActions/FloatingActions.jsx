import React from 'react'
import { useEffect, useState } from 'react'
import whatsapp from '../../../assets/images/whatsapp.webp'
import scroll_top from '../../../assets/images/scroll_top.png'
import './FloatingActions.css'

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [offsetBottom, setOffsetBottom] = useState(24)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const footer = document.querySelector('footer')

      setShowScrollTop(scrollY > 300)

      if (footer) {
        const footerTop = footer.getBoundingClientRect().top
        const windowHeight = window.innerHeight

        if (footerTop < windowHeight) {
          setOffsetBottom(windowHeight - footerTop + 24)
        } else {
          setOffsetBottom(24)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const whatsappLink =
    'https://wa.me/51970042683?text=Hola,%20quiero%20más%20información'

  return (
    <div className="floating-actions" style={{ bottom: offsetBottom }}>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`fab whatsapp ${showScrollTop ? 'move-up' : ''}`}
      >
        <img
          src={whatsapp}
          alt="WhatsApp"
        />
      </a>

      {showScrollTop && (
        <button className="fab scroll-top" onClick={scrollToTop}>
          <img
            src={scroll_top}
            alt="Subir"
          />
        </button>
      )}
    </div>
  )
}
