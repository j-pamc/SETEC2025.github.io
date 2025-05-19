// src/components/CourseFilter.jsx
import React from 'react';
import '../styles/courseFilter.css';

const hexToRGBA = (hex, opacity) => {
  const bigint = parseInt(hex.replace("#", ""), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

const CourseFilter = ({ 
  courses = [], 
  selectedCourse = 'all', 
  onCourseSelect = () => {},
  includeAllOption = false 
}) => {

  const courseOptions = includeAllOption 
    ? [{ id: 'all', name: 'Todos os Cursos', color: '#000' }, ...courses]
    : courses;

  return (
    <div className="course-filter">
      <h3>Cursos</h3>
      <div className="course-buttons">
        {courseOptions.map((course) => (
          <button
            key={course.id}
            className={`course-btn ${selectedCourse === course.id ? 'active' : ''}`}
            style={{
              backgroundColor: selectedCourse === course.id
                ? course.color
                : hexToRGBA(course.color, 0.3) // opacidade de 30%
            }}
            onClick={() => onCourseSelect(course.id)}
          >
            {course.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CourseFilter;