import React from 'react';
import '../styles/skills.css';
import { FaPython, FaJava, FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiTailwindcss, SiPostgresql, SiNumpy, SiPandas, SiScikitlearn } from 'react-icons/si';

const skills = [
  { name: 'Python', icon: <FaPython /> },
  { name: 'Java', icon: <FaJava /> },
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'NumPy', icon: <SiNumpy /> },
  { name: 'Pandas', icon: <SiPandas /> },
  { name: 'scikit-learn', icon: <SiScikitlearn /> },
  { name: 'Git', icon: <FaGitAlt /> },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills"> 
      <h2 className="skills-title">Tech Stack</h2>
      <p className="skills-subtitle">Languages • Frameworks • Tools I Use</p>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
    
  );
};

export default Skills;