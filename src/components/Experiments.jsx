import React from 'react';
import '../styles/experiments.css';
import { FaFlask, FaMicrochip, FaChartLine, FaCodeBranch } from 'react-icons/fa';

const experiments = [
  {
    title: 'MoE Expert Routing Visualization',
    description: 'Interactive visualization of Mixture-of-Experts routing patterns in large language models.',
    icon: <FaMicrochip />,
    tags: ['MoE', 'Visualization', 'LLM Analysis']
  },
  {
    title: 'LLM Fine-Tuning Profiling on RTX 4060',
    description: 'Systematic analysis of LoRA/QLoRA efficiency under 8GB VRAM constraints with detailed benchmarks.',
    icon: <FaChartLine />,
    tags: ['LoRA', 'QLoRA', 'Consumer GPU', 'Profiling']
  },
  {
    title: 'Transformer Architecture Experiments',
    description: 'Ablation studies on transformer components: attention mechanisms, normalization, and activation functions.',
    icon: <FaCodeBranch />,
    tags: ['Transformers', 'Ablation Studies', 'Architecture']
  }
];

const Experiments = () => {
  return (
    <section className="experiments-section" id="experiments">
      <h2 className="experiments-title">Experiments & Engineering Notes</h2>
      <p className="experiments-subtitle">Research lab notebook — ongoing investigations and technical explorations</p>

      <div className="experiments-grid">
        {experiments.map((exp, index) => (
          <div className="experiment-card" key={index}>
            <div className="experiment-icon">{exp.icon}</div>
            <h3>{exp.title}</h3>
            <p>{exp.description}</p>
            <div className="experiment-tags">
              {exp.tags.map((tag, i) => (
                <span className="experiment-tag" key={i}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiments;
