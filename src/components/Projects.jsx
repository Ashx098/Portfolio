import React from 'react';
import '../styles/projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiHuggingface } from 'react-icons/si';

const projects = [
  {
    title: 'Mini-LLM',
    subtitle: '80M Parameter Language Model from Scratch',
    desc: 'Production-style implementation of a decoder-only transformer built from scratch using modern techniques. Includes full pipeline: tokenization → training → inference.',
    metrics: [
      '80M parameters',
      '32k BPE tokenizer',
      '361M token dataset',
      'RoPE + RMSNorm + SwiGLU architecture',
      'KV caching inference pipeline'
    ],
    tags: ['PyTorch', 'Transformer Architecture', 'RoPE', 'RMSNorm', 'Flash Attention'],
    featured: true,
    links: {
      github: 'https://github.com/Ashx098/Mini-LLM',
      huggingface: 'https://huggingface.co/Ashx098/Mini-LLM'
    }
  },
  {
    title: 'MOE-XRAY',
    subtitle: 'Mixture-of-Experts Analysis Toolkit',
    desc: 'Toolkit for tracing and analyzing expert routing behavior in Mixture-of-Experts language models, enabling inspection of expert activation patterns and routing dynamics.',
    metrics: [
      'Expert routing visualization',
      'MoE token routing analysis',
      'LLM interpretability tooling'
    ],
    tags: ['Python', 'LLM Analysis', 'MoE Architecture', 'Visualization'],
    featured: true,
    links: {
      github: 'https://github.com/Ashx098/MOE-XRAY'
    }
  },
  {
    title: 'CodeGraph',
    subtitle: 'Graph-Based Code Intelligence System',
    desc: 'Unified code intelligence platform combining graph-based program analysis, hybrid search (BM25 + embeddings), and semantic code retrieval.',
    tags: ['TypeScript', 'Vector Search', 'Code Intelligence', 'Embedding Systems'],
    featured: true,
    links: {
      github: 'https://github.com/Ashx098/codegraph'
    }
  },
  {
    title: 'Xyne-Play',
    subtitle: 'Universal CLI Tool for LLM Fine-Tuning',
    desc: 'Universal CLI tool for LLM fine-tuning across hardware scales — from consumer GPUs to multi-node clusters.',
    features: ['SFT', 'DAPT', 'Embedding FT', 'Multi-GPU training', 'DeepSpeed'],
    tags: ['LLM Fine-Tuning', 'DeepSpeed', 'Multi-GPU', 'SFT', 'DAPT'],
    featured: true,
    links: {
      github: 'https://github.com/xynehq/play'
    }
  },
  {
    title: 'Asthra MailGuard',
    subtitle: 'Privacy-First Hybrid AI Email Assistant',
    desc: 'Hybrid ML + LLM system for smart email classification and response drafting. Privacy-first. CLI-based. Includes retraining and safe LLM fallback.',
    tags: ['ML', 'LLM', 'Privacy', 'CLI', 'Email Automation'],
    featured: false,
    links: {
      github: 'https://github.com/Ashx098/asthra-mailguard'
    }
  }
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-header">
        <h2 className="projects-title">Featured Projects</h2>
        <p className="projects-subtitle">Production-grade systems and research tools</p>
      </div>

      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div className={`project-card ${proj.featured ? 'featured' : ''}`} key={index}>
            {proj.featured && <div className="ribbon">FEATURED</div>}

            <div className="project-content">
              <div className="project-header">
                <div className="project-title-group">
                  <h3>{proj.title}</h3>
                  {proj.subtitle && <span className="project-subtitle">{proj.subtitle}</span>}
                </div>
              </div>

              <p className="project-desc">{proj.desc}</p>

              {/* Metrics */}
              {proj.metrics && (
                <div className="project-metrics">
                  {proj.metrics.map((metric, i) => (
                    <span className="metric-tag" key={i}>{metric}</span>
                  ))}
                </div>
              )}

              {/* Features */}
              {proj.features && (
                <div className="project-features">
                  <span className="features-label">Supports:</span>
                  <div className="features-list">
                    {proj.features.map((feature, i) => (
                      <span className="feature-tag" key={i}>{feature}</span>
                    ))}
                  </div>
                </div>
              )}

              <div className="project-tags">
                {proj.tags.map((tag, i) => (
                  <span className="tag" key={i}>{tag}</span>
                ))}
              </div>

              <div className="project-links">
                {proj.links.github && (
                  <a href={proj.links.github} target="_blank" rel="noopener noreferrer" className="link-btn">
                    <FaGithub /> GitHub
                  </a>
                )}
                {proj.links.huggingface && (
                  <a href={proj.links.huggingface} target="_blank" rel="noopener noreferrer" className="link-btn hf">
                    <SiHuggingface /> HuggingFace
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
