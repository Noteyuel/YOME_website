import React from 'react'
import './Gallery.css'

function Gallery() {
  const galleryItems = [
    { id: 1, type: 'Balloon Decoration', color: 'purple' },
    { id: 2, type: 'Ethiopian Cuisine', color: 'gold' },
    { id: 3, type: 'Table Setting', color: 'pink' },
    { id: 4, type: 'Event Decor', color: 'purple-light' },
    { id: 5, type: 'Italian Dishes', color: 'gold' },
    { id: 6, type: 'Party Setup', color: 'pink' },
  ]

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-header">
          <h2 className="fade-in-up">Our Portfolio</h2>
          <p className="section-subtitle fade-in-up">
            A glimpse into our creative work and culinary artistry
          </p>
          <p className="scroll-hint">← Scroll horizontally to view more →</p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div key={item.id} className={`gallery-item ${item.color}`}>
              <div className="gallery-overlay">
                <h3>{item.type}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-cta">
          <p>Want to see more of our work?</p>
          <a href="#contact" className="btn btn-primary">Contact Us</a>
        </div>
      </div>
    </section>
  )
}

export default Gallery
