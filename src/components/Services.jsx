import React from 'react'
import './Services.css'

function Services() {
  const services = [
    {
      id: 1,
      title: 'Event Decoration',
      icon: '🎈',
      description: 'Transform your events with stunning balloon arrangements, elegant table settings, and creative décor that captures your vision.',
      features: [
        'Balloon Artistry & Installations',
        'Table Settings & Centerpieces',
        'Themed Event Decoration',
        'Wedding & Party Décor',
        'Corporate Event Styling'
      ]
    },
    {
      id: 2,
      title: 'Catering Services',
      icon: '🍽️',
      description: 'Delight your guests with authentic Italian and Ethiopian cuisine, crafted with passion and the finest ingredients.',
      features: [
        'Traditional Ethiopian Dishes',
        'Authentic Tuscan Cuisine',
        'Custom Menu Planning',
        'Buffet & Plated Service',
        'Special Dietary Options'
      ]
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="fade-in-up">Our Services</h2>
          <p className="section-subtitle fade-in-up">
            Combining elegance and flavor to create memorable experiences
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card glass">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index}>
                    <span className="feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="btn btn-secondary service-btn">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
