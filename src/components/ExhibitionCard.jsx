import React from 'react';
import '../styles/exhibitionCard.css';

const ExhibitionCard = ({ exhibition }) => {
  return (
    <div className="exhibition-card">
      <div className="exhibition-header">
        <img src={exhibition.logo} alt={exhibition.department} className="exhibition-logo" />
        <h3>{exhibition.department}</h3>
      </div>
      <img src={exhibition.standImage} alt={`Stand ${exhibition.standNumber}`} className="stand-image" />
      <div className="exhibition-info">
        <p className="stand-number">Stand #{exhibition.standNumber}</p>
        <p className="course">{exhibition.course}</p>
        <p className="description">{exhibition.description}</p>
      </div>
    </div>
  );
};

export default ExhibitionCard;