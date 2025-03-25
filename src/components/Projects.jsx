import React from 'react';
import '../styles/projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'AI Research Assistant',
    desc: 'Agentic AI that fetches and summarizes arXiv papers using GPT-3.5 in structured format (problem, method, results, etc).',
    tags: ['Agentic AI', 'LLM', 'arXiv'],
    github: 'https://github.com/Ashx098/ai-research-assistant',
    live: 'https://ai-research-assistant7.streamlit.app/'
  },
  {
    title: 'Real-Time Stock Analyzer',
    desc: 'Fetches & predicts stock prices using Yahoo API, LSTM & NN. Deployed on Streamlit.',
    tags: ['ML', 'Finance', 'Deployment'],
    github: '',
    live: 'https://stock-analysis-app-77.streamlit.app/'
  },
  {
    title: 'VAT Optimized (PyPI)',
    desc: 'Fast clustering using VAT. Research submitted to arXiv & published on GitHub.',
    tags: ['Research', 'Clustering', 'Library'],
    github: 'https://github.com/Ashx098/VAT-Optimized',
    live: ''
  },
  {
    title: 'RAG-Based Research Paper Analyzer',
    desc: 'Analyzes research papers using OpenAI API + Google fallback. Built with RAG architecture.',
    tags: ['NLP', 'RAG', 'OpenAI'],
    github: '',
    live: ''
  },
  {
    title: 'Task Dashboard (Trello Clone)',
    desc: 'Kanban-style task manager built in React with Firebase Auth. Responsive and smooth.',
    tags: ['Web', 'React', 'Firebase'],
    github: '',
    live: 'https://taskmanager-a77.web.app/'
  },
  {
    title: 'BO vs BILBO Tuning',
    desc: 'Compared BILBO & Bayesian Optimization for hyperparameter tuning in ML models.',
    tags: ['Research', 'ML', 'Optimization'],
    github: '',
    live: ''
  },
  {
    title: 'Face Recognition System',
    desc: 'Built using DeepFace & Face Recognition for identity verification & attendance.',
    tags: ['Deep Learning', 'CV', 'Security'],
    github: '',
    live: ''
  },
  {
    title: 'Kaggle Titanic Top 200',
    desc: 'Ranked in top 200 on Kaggle Titanic competition. Focused on model tuning & EDA.',
    tags: ['Kaggle', 'ML', 'EDA'],
    github: 'https://github.com/Ashx098/Kaggle-Spaceship-Titanic',
    live: ''
  },
  {
    title: 'NVIDIA Stock Volatility Dataset',
    desc: 'Published 10 years of NVDA stock volatility as a Kaggle dataset.',
    tags: ['Kaggle', 'Dataset', 'Finance'],
    github: '',
    live: 'https://www.kaggle.com/datasets/avinashmynampati/nvidia-stock-volatility-20142024'
  },
  {
    title: 'cleanflo (PyPI Package)',
    desc: 'Simple, beginner-friendly data cleaning Python package. Under maintenance.',
    tags: ['Open Source', 'Pandas', 'WIP'],
    github: 'https://github.com/Ashx098/cleanflo',
    live: ''
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <div className="project-header">
              <h3>{proj.title}</h3>
              <div className="project-links">
                {proj.github && (
                  <a href={proj.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                )}
                {proj.live && (
                  <a href={proj.live} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>
            <p className="project-desc">{proj.desc}</p>
            <div className="project-tags">
              {proj.tags.map((tag, i) => (
                <span className="tag" key={i}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  
  );
};

export default Projects;
