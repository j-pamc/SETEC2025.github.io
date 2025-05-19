// src/pages/Registration.jsx
import React, { useState, useEffect } from 'react';
import ActivityCard from '../components/ActivityCard';
import Activities from '../components/Activities';
import CourseFilter from '../components/CourseFilter';
/*import Activities from './components/Activities'; // Ajuste o caminho conforme necessário*/
import '../styles/registration.css';

// Dados de cursos (pode vir de uma API ou arquivo JSON)
const COURSES = [
  { id: 'einfo', name: 'Eng. Informática', color: '#007EBD' },
  { id: 'epi', name: 'Eng. de Petróleos', color: '#D72638' },
  { id: 'emc', name: 'Eng. Mecânica', color: '#595A5B' },
  { id: 'ecivil', name: 'Eng. Civil', color: '#0B5589' },
  { id: 'eqm', name: 'Eng. Química', color: '#2E8524' },
  { id: 'electro', name: 'Eng. Electrotécnica', color: '#F9AA0E' }
];

const Registration = () => {
  const [activities, setActivities] = useState([]);
  const [filteredActivities, setFilteredActivities] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulação de carregamento de dados
    const fetchActivities = async () => {
      try {
        // Substitua por uma chamada real à API
        // const response = await fetch('/api/activities');
        // const data = await response.json();

        // Dados mockados temporários
        const mockData = [
          {
            id: 1,
            name: "Competição de Programação Competitiva",
            description: "Introdução à Inteligência Artificial",
            course: "einfo",
            type: "Concurso",
            date: "29/05/2025",
            time: "09:00-14:00",
            location: "Sala de Estudos, Biblioteca 3º andar"
          },
          {
            id: 2,
            name: "Competição de Redes",
            description: "Discussão sobre práticas sustentáveis no dia a dia",
            course: "einfo",
            type: "Concurso",
            date: "28/05/2025",
            time: "09:00-14:00",
            location: "Sala de Estudos, Biblioteca 3º andar"
          },
          {
            id: 3,
            name: "Museu de Computadores + Bancada de Diagnosticos",
            description: "Aprenda os fundamentos de programação em Python",
            course: "einfo",
            type: "Exposição",
            date: "29/05/2025 & 30/05/2025",
            time: "Todo o Dia",
            location: "Hall de Entrada do Bloco Administrativo"
          },
          {
            id: 4,
            name: "Desafio de Dactilografia",
            description: "Aprenda os fundamentos de programação em Python",
            course: "einfo",
            type: "Gincana",
            date: "30/05/2025",
            time: "09:00-11:00",
            location: "Laboratório de Informática"
          },
          {
            id: 5,
            name: "DevOps vs Cybersecurity",
            description: "Aprenda os fundamentos de programação em Python",
            course: "einfo",
            type: "Palestra",
            date: "29/05/2025",
            time: "08:30-09:30",
            location: "Mini Auditório 1"
          },
          {
            id: 6,
            name: "Quiz de Cultura Geral",
            description: "Demonstração de projetos de robótica desenvolvidos pelos alunos",
            course: "todos",
            type: "Gincana",
            date: "30/05/2025",
            time: "-- / --",
            location: "Palco"
          }
        ];

        setActivities(mockData);
        setFilteredActivities(mockData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading activities:", error);
        setIsLoading(false);
      }
    };

    fetchActivities();
  }, []);

  useEffect(() => {
    let filtered = activities;

    if (selectedCourse !== 'all') {
      filtered = filtered.filter(activity => activity.course === selectedCourse);
    }

    if (selectedType !== 'all') {
      filtered = filtered.filter(activity => activity.type === selectedType);
    }

    setFilteredActivities(filtered);
  }, [selectedCourse, selectedType, activities]);

  const activityTypes = [...new Set(activities.map(activity => activity.type))];

  return (
    <div className="registration-page">
      <section className="registration-hero">
        <div className="container">
          <h1>Inscreva-se nas Atividades</h1>
          <h3 style={{ textAlign: 'center' }}>
            Garanta seu lugar nos melhores eventos!
          As vagas são limitadas, depois de realizar a incrição receberá um e-mail de confirmação.
          </h3>
        </div>
      </section>

      <section className="registration-content">
        <div className="container">
          <div className="filters-container">
            <CourseFilter
              courses={COURSES}
              selectedCourse={selectedCourse}
              onCourseSelect={setSelectedCourse}
              includeAllOption={true}
            />

            <div className="type-filter day-title">
              <h3>Actividades</h3>
              <div className="course-buttons">
                <button
                  className={`course-button ${selectedType === 'all' ? 'active' : ''}`}
                  onClick={() => setSelectedType('all')}
                >
                  Todos
                </button>
                {activityTypes.map((type, index) => (
                  <button
                    key={index}
                    className={`course-button ${selectedType === type ? 'active' : ''}`}
                    onClick={() => setSelectedType(type)}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {isLoading ? (
            <div className="loading">Carregando atividades...</div>
          ) : filteredActivities.length > 0 ? (
            <div className="activities-grid">
              {isLoading ? (
                <div className="loading">Carregando atividades...</div>
              ) : filteredActivities.length > 0 ? (
                <div className="activities-grid">
                  <Activities
                    activities={filteredActivities}
                    onRegister={(activityId) => console.log("Inscrição:", activityId)}
                  />
                </div>
              ) : (
                <div className="no-results">
                  Nenhuma atividade encontrada com os filtros selecionados.
                </div>
              )}

            </div>
          ) : (
            <div className="no-results">
              Nenhuma atividade encontrada com os filtros selecionados.
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Registration;