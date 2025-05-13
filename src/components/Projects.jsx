import React from 'react';
import '../styles/projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
  title: 'Asthra Satyavaani (News AI Bot)',
  desc: 'Telegram bot that summarizes live news from trusted sources using GROQ LLM API. Auto-summarizes, embeds images, and avoids duplicates.',
  tags: ['LLM', 'Telegram Bot', 'News'],
  github: 'https://github.com/Ashx098/asthra-satyavaani', 
  live: 'https://t.me/asthra_satyavaani_bot',
  featured: true
},

{
  title: 'Asthra MailGuard',
  desc: 'Hybrid ML + LLM system for smart email classification and response drafting. Privacy-first. CLI-based. Includes retraining and safe LLM fallback.',
  tags: ['ML', 'LLM', 'Privacy'],
  github: 'https://github.com/Ashx098/asthra-mailguard', 
  live: '',
  featured: true
},


  {
    title: 'AI Research Assistant',
    desc: 'Agentic AI that fetches and summarizes arXiv papers using GPT-3.5 in structured format (problem, method, results, etc).',
    tags: ['Agentic AI', 'LLM', 'arXiv'],
    github: 'https://github.com/Ashx098/ai-research-assistant',
    live: 'https://ai-research-assistant7.streamlit.app/',
    
  },
  {
    title: 'Real-Time Stock Analyzer',
    desc: 'Fetches & predicts stock prices using Yahoo API, LSTM & NN. Deployed on Streamlit.',
    tags: ['ML', 'Finance', 'Deployment'],
    github: 'https://github.com/Ashx098/stock-analysis-app',
    live: 'https://stock-analysis-app-77.streamlit.app/',
    featured: true
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
    github: 'https://github.com/Ashx098/idea-task-dashboard',
    live: 'https://taskmanager-a77.web.app/',
    featured: true
  },
  {
  title: 'BRAGS: Hybrid HPO Framework',
  desc: 'Novel framework combining grid, random, and bi-level optimization (BILBO) for hyperparameter tuning. Published as PyPI-ready library.',
  tags: ['ML', 'Optimization', 'Research'],
  github: 'https://github.com/Ashx098/BRAGS', 
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
    title: 'Kaggle Titanic Top 50',
    desc: 'Ranked in top 50 on Kaggle Titanic competition. Focused on model tuning & EDA.',
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
          <div className={`project-card ${proj.featured ? 'featured' : ''}`} key={index}>
          {proj.featured && <div className="ribbon">FEATURED</div>}
        
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
