import React from 'react'
import './Footer.css'

import dobles_logo from '../../../assets/images/dobles_logo.png'
import gmail_logo from '../../../assets/images/gmail_logo.png'
import ig_logo from '../../../assets/images/ig_logo.webp'
import facebook_logo from '../../../assets/images/facebook_logo.png'
import telephone from '../../../assets/images/telephone.png'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Marca */}
                <div className="footer-col brand-col">
                    <img src={dobles_logo} alt="Logo DobleS" className="main-logo" />
                    <h2>DobleS</h2>
                    <p>Soluciones digitales completas.</p>
                </div>

                {/* Contacto */}
                <div className="footer-col contact-col">
                    <h3>Contacto</h3>

                    <div className="contact-item">
                        <img src={gmail_logo} alt="Email" className="icon" />
                        <a>doblesagiles@gmail.com</a>
                    </div>

                    <div className="contact-item">
                        <img src={telephone} alt="Teléfono" className="icon" />
                        <a>+51 999 999 999</a>
                    </div>
                </div>

                {/* Redes */}
                <div className="footer-col social-col">
                    <h3>Nuestras Redes Sociales</h3>

                    <div className="social-links">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noreferrer"
                            className="social-item"
                        >
                            <img src={facebook_logo} alt="Facebook" className="social-icon" />
                            <span>@DobleS</span>
                        </a>

                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noreferrer"
                            className="social-item"
                        >
                            <img src={ig_logo} alt="Instagram" className="social-icon" />
                            <span>@DobleS</span>
                        </a>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <p>&copy; 2025 DobleS. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}