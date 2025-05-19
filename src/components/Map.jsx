import React, { useState } from 'react';
import '../styles/map.css';
import map from "../assets/images/map.png";

const Map = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className={`map-container ${isZoomed ? 'zoomed' : ''}`}>
      <img 
        src= {map}
        alt="Localização do ISPTEC" 
        className="map-image"
        onClick={() => setIsZoomed(!isZoomed)}
      />
      <button 
        className="btn zoom-button"
        onClick={() => setIsZoomed(!isZoomed)}
      >
        {isZoomed ? 'Reduzir' : 'Ampliar'}
      </button>
    </div>
  );
};

export default Map;