import React from 'react';
import '../styles/experience.css';
import { FaBriefcase, FaBrain, FaServer, FaMicrochip } from 'react-icons/fa';

const experiences = [
  {
    title: 'Machine Learning Engineer',
    subtitle: 'LLM Systems & AI Research',
    description: 'Working on large language model systems, training pipelines, and AI infrastructure.',
    focusAreas: [
      'LLM training & fine-tuning',
      'Distributed training systems',
      'Model evaluation and experimentation',
      'MoE architecture analysis'
    ],
    icon: <FaBrain />
  }
];

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <h2 className="experience-title">Experience</h2>
      
      <div className="experience-content">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <div className="experience-header">
              <div className="experience-icon">{exp.icon}</div>
              <div className="experience-title-group">
                <h3>{exp.title}</h3>
                <span className="experience-subtitle">{exp.subtitle}</span>
              </div>
            </div>
            
            <p className="experience-description">{exp.description}</p>
            
            <div className="focus-areas">
              <h4>Focus Areas:</h4>
              <ul>
                {exp.focusAreas.map((area, i) => (
                  <li key={i}>{area}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
