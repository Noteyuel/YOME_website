import React from 'react'
import './Hero.css'

function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToServices = () => {
    const element = document.getElementById('services')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-background"></div>
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text fade-in-up">
            <h1 className="hero-title">
              <span className="text-gradient">YOME</span>
              <br />
              Decor And Catering
            </h1>
            <p className="hero-subtitle">Stile e Gusto in Ogni Dettaglio</p>
            <p className="hero-tagline">La Bellezza del Gusto e del Design</p>
            <p className="hero-description">
              Transform your special moments into unforgettable experiences with our
              exceptional event decoration and authentic catering services in the heart of Tuscany.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={scrollToContact}>
                Get in Touch
              </button>
              <button className="btn btn-outline" onClick={scrollToServices}>
                Our Services
              </button>
            </div>
          </div>
          <div className="hero-decorations">
            <div className="balloon balloon-1"></div>
            <div className="balloon balloon-2"></div>
            <div className="balloon balloon-3"></div>
            <div className="balloon balloon-4"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
