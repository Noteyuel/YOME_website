import React from 'react'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">YOME</h3>
            <p className="footer-tagline">Decor And Catering</p>
            <p className="footer-slogan">
              Stile e Gusto in Ogni Dettaglio
            </p>
            <p className="footer-description">
              La Bellezza del Gusto e del Design
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li>Event Decoration</li>
              <li>Balloon Artistry</li>
              <li>Catering Services</li>
              <li>Ethiopian Cuisine</li>
              <li>Italian Cuisine</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul className="footer-contact">
              <li>
                <span className="contact-icon">📞</span>
                <a href="tel:+393510023056">+39 351 002 3056</a>
              </li>
              <li>
                <span className="contact-icon">📞</span>
                <a href="tel:+393202405025">+39 320 240 5025</a>
              </li>
              <li>
                <span className="contact-icon">📧</span>
                <a href="mailto:Yomedecorandcatering@gmail.com">
                  Yomedecorandcatering@gmail.com
                </a>
              </li>
              <li>
                <span className="contact-icon">📍</span>
                Siena, Toscana, Italia
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} YOME Decor And Catering. All rights reserved.</p>
          <button className="scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
            ↑
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
