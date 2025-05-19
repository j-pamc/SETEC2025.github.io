import React from 'react';
import '../styles/activityCard.css';

const ActivityCard = ({ title, description, date, time, location }) => {
  return (
    <div className="activity-card">
      <h3>{title}</h3>
      <p className="activity-description">{description}</p>
      
      <div className="activity-datetime">
        <span className="activity-date">{date}</span>
        <span className="activity-time">{time}</span>
      </div>

      {location && (
        <p className="activity-location">
          <strong>Local:</strong> {location}
        </p>
      )}

      <button className="activity-btn">Inscrever-se</button>
    </div>
  );
};

export default ActivityCard;

/*
/*import React from 'react';
import ActivityCard from './ActivityCard';

const Activities = () => {
  const activities = [
    { id: 1, title: 'Atividade 1', description: 'Descrição da atividade 1' },
    { id: 2, title: 'Atividade 2', description: 'Descrição da atividade 2' },
  ];

  return (
    <div className="activities">
      {activities.map((activity) => (
        <ActivityCard key={activity.id} title={activity.title} description={activity.description} />
      ))}
    </div>
  );
};

export default Activities; 

/*
Backup
const ActivityCard = ({ activity, course }) => {
  const courseColors = {
    einfo: '#007EBD',
    epi: '#D72638',
    emc: '#595A5B',
    ecivil: '#0B5589',
    eqm: '#2E8524',
    electro: '#F9AA0E'
  };

  return (
    <div className="activity-card" style={{ borderTop: `4px solid ${courseColors[course]}` }}>
      <h3>{activity.name}</h3>
      <p className="activity-time">{activity.date} • {activity.time}</p>
      <p className="activity-description">{activity.description}</p>
      <button className="activity-btn">Inscrever-se</button>
    </div>
  );
};*/