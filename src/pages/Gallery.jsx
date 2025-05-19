import React, { useState } from 'react';
import GalleryImage from '../components/GalleryImage';
import '../styles/gallery.css';

const Gallery = () => {
  const [activeYear, setActiveYear] = useState('2025');
  const [selectedImage, setSelectedImage] = useState(null);

  // Dados simulados - na prática viriam de uma API ou arquivo JSON
  const galleryData = {
    '2025': [
      { id: 1, src: '/assets/images/gallery-2025-1.jpg', alt: 'Evento SETEC 2025', caption: 'Abertura oficial' },
      { id: 2, src: '/assets/images/gallery-2025-2.jpg', alt: 'Workshops', caption: 'Workshop de robótica' },
      // Mais imagens...
    ],
    '2024': [
      { id: 1, src: '/assets/images/gallery-2024-1.jpg', alt: 'Evento SETEC 2024', caption: 'Palestra inaugural' },
      // Mais imagens...
    ]
  };

  const openImage = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="gallery-page">
      <section className="gallery-hero">
        <div className="container">
          <h1>Galeria de Fotos</h1>
          <p>Reviva os melhores momentos das edições anteriores</p>
        </div>
      </section>

      <section className="gallery-content">
        <div className="container">
          <div className="year-toggle">
            <button
              className={activeYear === '2025' ? 'active' : ''}
              onClick={() => setActiveYear('2025')}
            >
              SETEC 2025
            </button>
            <button
              className={activeYear === '2024' ? 'active' : ''}
              onClick={() => setActiveYear('2024')}
            >
              SETEC 2024
            </button>
          </div>

          <div className="gallery-grid">
            {galleryData[activeYear].map((image) => (
              <GalleryImage
                key={image.id}
                image={image}
                onClick={() => openImage(image)}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="image-modal" onClick={closeImage}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeImage}>&times;</button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <div className="image-caption">{selectedImage.caption}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;