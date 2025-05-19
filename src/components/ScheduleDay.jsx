import React from 'react';
import '../styles/scheduleDay.css';

const ScheduleDay = ({ day, events }) => {
  return (
    <div className="schedule-day">
      <div className="events-container">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <div className="event-time">{event.time}</div>
            <div className="event-details">
              <h4 className="event-title">{event.title}</h4>
              <p className="event-type">{event.type}</p>
              <p className="event-responsible">Responsável: {event.responsible}</p>
              <p className="event-course" style={{ color: event.courseColor }}>
                {event.course}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleDay;