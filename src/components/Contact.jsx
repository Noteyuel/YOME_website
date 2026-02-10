import React, { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic would go here
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="fade-in-up">Get In Touch</h2>
          <p className="section-subtitle fade-in-up">
            Let's create something beautiful together
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card glass">
              <div className="info-icon">📞</div>
              <h3>Phone</h3>
              <a href="tel:+393510023056" className="contact-link">+39 351 002 3056</a>
              <a href="tel:+393202405025" className="contact-link">+39 320 240 5025</a>
            </div>

            <div className="info-card glass">
              <div className="info-icon">📧</div>
              <h3>Email</h3>
              <a href="mailto:Yomedecorandcatering@gmail.com" className="contact-link">
                Yomedecorandcatering@gmail.com
              </a>
            </div>

            <div className="info-card glass">
              <div className="info-icon">📍</div>
              <h3>Location</h3>
              <p className="contact-text">Siena, Toscana</p>
              <p className="contact-text">Italia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
