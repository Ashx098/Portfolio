import React from 'react';
import '../styles/skills.css';
import { 
  FaPython, FaJava, FaJs, FaDocker, FaGitAlt, FaLinux,
  FaDatabase, FaBrain, FaServer
} from 'react-icons/fa';
import { SiPytorch, SiHuggingface, SiLangchain, SiPostgresql, SiMongodb, SiSqlite } from 'react-icons/si';

const skillCategories = [
  {
    title: 'Languages',
    icon: <FaServer />,
    skills: [
      { name: 'Python', icon: <FaPython /> },
      { name: 'Java', icon: <FaJava /> },
      { name: 'JavaScript / TypeScript', icon: <FaJs /> }
    ]
  },
  {
    title: 'ML / AI',
    icon: <FaBrain />,
    skills: [
      { name: 'PyTorch', icon: <SiPytorch /> },
      { name: 'Transformers', icon: <SiHuggingface /> },
      { name: 'HuggingFace', icon: <SiHuggingface /> },
      { name: 'LangChain', icon: <SiLangchain /> },
      { name: 'SentencePiece' },
      { name: 'Deep Learning' },
      { name: 'vLLM' }
    ]
  },
  {
    title: 'Systems',
    icon: <FaServer />,
    skills: [
      { name: 'Docker', icon: <FaDocker /> },
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'Linux', icon: <FaLinux /> },
      { name: 'CUDA' }
    ]
  },
  {
    title: 'Data',
    icon: <FaDatabase />,
    skills: [
      { name: 'NumPy' },
      { name: 'Pandas' },
      { name: 'scikit-learn' },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'SQLite', icon: <SiSqlite /> }
    ]
  },
  {
    title: 'Code Intelligence',
    icon: <FaBrain />,
    skills: [
      { name: 'Tree-sitter (AST)' },
      { name: 'Hybrid Search (Embeddings + Retrieval + BM25)' }
    ]
  }
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">Tech Stack</h2>
      <p className="skills-subtitle">Languages • Frameworks • Tools I Use</p>

      <div className="skills-categories">
        {skillCategories.map((category, index) => (
          <div className="skill-category" key={index}>
            <h3 className="category-title">
              {category.icon && <span className="category-icon">{category.icon}</span>}
              {category.title}
            </h3>
            <div className="skills-row">
              {category.skills.map((skill, i) => (
                <div className="skill-item" key={i}>
                  {skill.icon && <span className="skill-icon">{skill.icon}</span>}
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
