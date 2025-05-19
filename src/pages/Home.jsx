import React from 'react';
import Countdown from '../components/Countdown';
import Map from '../components/Map';
import '../styles/home.css';
import info from "../assets/images/index.png";

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
      <div className="hero-content">
      <img
        src={info}
        alt="Calendário e título do evento"
        className="hero-img"
      />
      <Countdown targetDate="2025-05-28T00:00:00" />
      <a href="/inscricoes" className="cta-button">Inscreva-se Agora</a>
      </div>
      </section>

      <section className="about">
        <div className="container">
          <h2 className="section-title">Sobre a SETEC</h2>
          <div className="about-content">
            <div className="about-text">
              <p>A SETEC é o principal evento tecnológico do ISPTEC, reunindo estudantes, professores e profissionais para compartilhar conhecimento e inovação.</p>
              <p>Em 2025, teremos palestras, workshops, competições e uma feira tecnológica aberta ao público.</p>
            </div>
            <div className="about-image">
              <img src="/assets/images/background-hero.jpg" alt="SETEC" />
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <h2 className="section-title">Mapa SETEC</h2>
          <Map />
          <p>Talatona, Luanda, Angola</p>
        </div>
      </section>
    </div>
  );
};

export default Home;