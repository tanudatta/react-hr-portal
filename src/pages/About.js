import React from 'react';
import '../styles/About.css';

function About() {
  const technologies = [
    'React.js',
    'JavaScript',
    'CSS3',
    'HTML5',
    'Axios',
    'React Router',
    'JSON Server'
  ];

  return (
    <div className="about-page">
      <div className="about-card">
        <h1 className="about-title">About HR Portal</h1>
        <p className="about-subtitle">
          A modern web application for managing employees and HR operations.
        </p>

        <section className="about-section">
          <h2>Project Objective</h2>
          <p>
            This HR Portal is designed to streamline employee management,
            leave processing, and workforce administration through a secure
            and user-friendly web interface.
          </p>
        </section>

        <section className="about-section">
          <h2>Key Features</h2>
          <ul>
            <li>Employee Registration and Login</li>
            <li>HR Dashboard and Employee Dashboard</li>
            <li>Add, Edit, and Delete Employees</li>
            <li>Leave Application and Approval Workflow</li>
            <li>Leave Status Tracking</li>
            <li>Responsive Premium UI</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Technologies Used</h2>
          <div className="tech-list">
            {technologies.map((tech, index) => (
              <span className="tech-badge" key={index}>
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="about-section">
          <h2>Developer</h2>
          <p>
            Developed as a course-end project to demonstrate frontend
            development, routing, API integration, and CRUD operations
            using React.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;