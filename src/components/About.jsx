import React from 'react';
import '../styles/about.css';
import { FaBrain, FaLightbulb, FaSeedling } from 'react-icons/fa';

const About = () => {
  return (
    
      <section id="about">
        <div className="about-wrapper">
          <div className="about-content">
            <h2 className="about-title">
              About Me <span className="underline"></span>
            </h2>

            <p className="about-text">
              I'm <strong>Mynampati Sri Ranganadha Avinash (MSR Avinash)</strong>, a Machine Learning Engineer focused on large language models, AI systems, and applied machine learning research.
            </p>

            <p className="about-text">
              My work centers around understanding and building modern AI infrastructure — from training language models and analyzing Mixture-of-Experts routing to developing tools for LLM fine-tuning and code intelligence.
            </p>

            <p className="about-text">
              I enjoy working across the full ML stack: model architecture, training pipelines, evaluation systems, and practical AI applications.
            </p>

            <div className="about-cards">
              <div className="about-card">
                <FaBrain className="about-icon blue" />
                <span><strong>Current Focus:</strong> Large Language Models (LLMs), Mixture-of-Experts</span>
              </div>
              <div className="about-card">
                <FaLightbulb className="about-icon yellow" />
                <span><strong>Interests:</strong> Efficient training, fine-tuning, retrieval & code intelligence</span>
              </div>
              <div className="about-card">
                <FaSeedling className="about-icon green" />
                <span><strong>Philosophy:</strong> AI should be scientifically grounded and practically useful</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    
  );
};

export default About;
