// src/components/Activities.jsx
import React from 'react';
import '../styles/activities.css';
import '../styles/activityCard.css';
import ActivityCard from './ActivityCard';

const Activities = ({ activities }) => {
  return (
    <div className="activities-container">
      {activities.map((activity) => (
        <ActivityCard
          key={activity.id}
          title={activity.name} // CORRETO: Nome da atividade
          description={activity.description} // CORRETO: Descrição da atividade
          date={activity.date}
          time={activity.time}
          location={activity.location}
        />
      ))}
    </div>
  );
};

export default Activities;
