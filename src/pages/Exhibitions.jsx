import React, { useState, useEffect } from 'react';
import ExhibitionCard from '../components/ExhibitionCard';
import '../styles/exhibitions.css';

const Exhibitions = () => {
  const [teams, setTeams] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showPreview, setShowPreview] = useState(false);
  const currentDate = new Date();
  const eventDate = new Date('2025-05-30');
  const isEventDay = currentDate >= eventDate;

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch('/assets/data/teams.json');
        const data = await response.json();
        setTeams(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching teams:', error);
        setIsLoading(false);
      }
    };

    fetchTeams();
  }, []);

  return (
    <div className="exhibitions-page">
      <section className="exhibitions-hero">
        <div className="container">
          <h1>Feira Tecnológica</h1>
          <p>Conheça os projetos inovadores desenvolvidos pelos alunos</p>
        </div>
      </section>

      <section className="exhibitions-content">
        <div className="container">
          {!isEventDay && !showPreview && (
            <div className="preview-message">
              <h2>A Feira Tecnológica acontecerá no dia 30 de Maio</h2>
              <p>Você pode visualizar uma prévia das exposições ou se inscrever para participar.</p>
              <div className="preview-buttons">
                <button 
                  className="preview-btn"
                  onClick={() => setShowPreview(true)}
                >
                  Visualizar Prévia
                </button>
                <a href="/inscricoes" className="register-btn">
                  Inscrever-se
                </a>
              </div>
            </div>
          )}

          {(isEventDay || showPreview) && (
            <>
              <div className="exhibitions-info">
                <h2>Exposições Disponíveis</h2>
                <p>Visite os stands e conheça os projetos desenvolvidos pelos alunos de engenharia.</p>
              </div>

              {isLoading ? (
                <div className="loading">Carregando exposições...</div>
              ) : teams.length > 0 ? (
                <div className="exhibitions-grid">
                  {teams.map(team => (
                    <ExhibitionCard 
                      key={team.id}
                      exhibition={team}
                    />
                  ))}
                </div>
              ) : (
                <div className="no-exhibitions">
                  Nenhuma exposição cadastrada no momento.
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Exhibitions;