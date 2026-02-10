import React from 'react'
import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <div className="image-placeholder">
              <div className="decorative-circle circle-1"></div>
              <div className="decorative-circle circle-2"></div>
              <div className="decorative-circle circle-3"></div>
              <div className="about-badge">
                <span className="badge-text">Premium</span>
                <span className="badge-subtext">Service</span>
              </div>
            </div>
          </div>

          <div className="about-text">
            <h2 className="fade-in-up">About YOME</h2>
            <p className="tagline">La Bellezza del Gusto e del Design</p>

            <p className="about-description">
              Based in the enchanting city of Siena, Tuscany, YOME Decor and Catering
              brings together the art of design and the mastery of culinary excellence.
              Our mission is to transform your special moments into unforgettable experiences.
            </p>

            <p className="about-description">
              With a unique blend of <strong>Italian elegance</strong> and <strong>Ethiopian tradition</strong>,
              we create events that delight all the senses. From stunning balloon installations
              to exquisite table settings, from authentic regional dishes to custom menus,
              we handle every detail with passion and precision.
            </p>

            <div className="about-values">
              <div className="value-item">
                <div className="value-icon">🎨</div>
                <h4>Creative Excellence</h4>
                <p>Innovative designs tailored to your vision</p>
              </div>
              <div className="value-item">
                <div className="value-icon">👨‍🍳</div>
                <h4>Culinary Mastery</h4>
                <p>Authentic flavors from Italy and Ethiopia</p>
              </div>
              <div className="value-item">
                <div className="value-icon">💎</div>
                <h4>Premium Quality</h4>
                <p>Attention to detail in every element</p>
              </div>
            </div>

            <div className="about-location">
              <p><strong>📍 Location:</strong> Siena, Toscana, Italia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
