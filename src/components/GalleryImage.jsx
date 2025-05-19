import React, { useState } from 'react';
import '../styles/galleryImage.css';

const GalleryImage = ({ image, year }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`gallery-item ${isExpanded ? 'expanded' : ''}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <img src={image.src} alt={image.alt} />
      <div className="image-overlay">
        <span className="image-year">{year}</span>
        <span className="image-caption">{image.caption}</span>
      </div>
    </div>
  );
};

export default GalleryImage;