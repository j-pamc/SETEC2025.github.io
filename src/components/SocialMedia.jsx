import React from 'react';
import '../styles/socialMedia.css';

const SocialMedia = () => {
  return (
    <div className="social-media">
      <a
        href="https://www.instagram.com/setec.ao" // Substitua pelo link do perfil
        target="_blank"
        rel="noopener noreferrer"
        className="social-media-button"
      >
        Instagram
      </a>
    </div>
  );
};

export default SocialMedia;

/*
        <img
          src={require('../assets/images/instagram-logo.png')} // Caminho para a imagem
          alt="Instagram"
          className="social-media-icon"
        />
*/