// src/pages/Schedule.jsx
import React, { useState, useEffect } from 'react';
import ScheduleDay from '../components/ScheduleDay';
import CourseFilter from '../components/CourseFilter';
import '../styles/schedule.css';
import '../styles/scheduleDay.css';

// Dados de cursos (pode vir de uma API ou arquivo JSON)
const COURSES = [
  { id: 'all', name: 'Todos', color: '#0A2463' },
  { id: 'einfo', name: 'Eng. Informática', color: '#007EBD' },
  { id: 'epi', name: 'Eng. de Petróleos', color: '#D72638' },
  { id: 'emc', name: 'Eng. Mecânica', color: '#595A5B' },
  { id: 'ecivil', name: 'Eng. Civil', color: '#0B5589' },
  { id: 'eqm', name: 'Eng. Química', color: '#2E8524' },
  { id: 'electro', name: 'Eng. Electrotécnica', color: '#F9AA0E' }
];

const Schedule = () => {
  const [schedule, setSchedule] = useState([]);
  const [filteredSchedule, setFilteredSchedule] = useState([]);
  const [selectedDay, setSelectedDay] = useState('28');
  const [selectedCourse, setSelectedCourse] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulação de carregamento de dados
    const fetchSchedule = async () => {
      try {
        // Substitua por uma chamada real à API
        // const response = await fetch('/api/schedule');
        // const data = await response.json();
        
        // Dados mockados temporários
        const mockData = [
          {
            id: 1,
            day: "28",
            time: "09:00-10:00",
            title: "Abertura Oficial",
            type: "Cerimônia",
            course: "all",
            location: "Auditório Principal"
          },
          {
            id: 1,
            day: "29",
            time: "10:00-10:30",
            title: "Evento teste",
            type: "Apresentação",
            course: "all",
            location: "Auditório Principal 1"
          },
          // Adicione mais eventos conforme necessário
        ];
        
        setSchedule(mockData);
        setFilteredSchedule(mockData.filter(event => event.day === '28'));
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading schedule:", error);
        setIsLoading(false);
      }
    };

    fetchSchedule();
  }, []);

  useEffect(() => {
    let filtered = schedule.filter(event => event.day === selectedDay);
    
    if (selectedCourse !== 'all') {
      filtered = filtered.filter(event => event.course === selectedCourse);
    }
    
    setFilteredSchedule(filtered);
  }, [selectedDay, selectedCourse, schedule]);

  const days = ['28', '29', '30'];

  return (
    <div className="schedule-page">
      <section className="schedule-hero">
        <div className="container">
          <h1>Cronograma do Evento</h1>
          <p>Confira a programação completa</p>
        </div>
      </section>

      <section className="schedule-content">
        <div className="container">
        <div className="schedule-filters">
        <div className="filters-bar">
            <CourseFilter
              courses={COURSES}
              selectedCourse={selectedCourse}
              onCourseSelect={setSelectedCourse}
            />

            <div className="day-selector day-title">
              {days.map((day) => (

                <button
                  key={day}
                  className={`btn day-button ${selectedDay === day ? 'active' : ''}`}
                  onClick={() => setSelectedDay(day)}
                >
                  Dia {day}
                </button>
              ))}
            </div>
          </div>
        </div>


          {isLoading ? (
            <div className="loading">Carregando cronograma...</div>
          ) : filteredSchedule.length > 0 ? (
            <ScheduleDay 
              day={`Dia ${selectedDay} de Maio`} 
              events={filteredSchedule} 
            />
          ) : (
            <div className="no-events">
              Nenhum evento programado para este dia/filtro.
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Schedule;