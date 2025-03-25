import React from 'react';
import '../styles/about.css';
import { FaBrain, FaLightbulb, FaSeedling } from 'react-icons/fa';
import { Element } from 'react-scroll';

const About = () => {
  return (
    
      <section id="about">
        <div className="about-wrapper">
          <div className="about-content">
            <h2 className="about-title">
              About Me <span className="underline"></span>
            </h2>

            <p className="about-text">
              I’m <strong>Sri Ranganadha Aviansh (MSR Aviansh)</strong>, an AI creator, researcher, and builder passionate about crafting technology that actually matters.
            </p>

            <p className="about-text">
              When I’m not building models or tools, I’m mentoring students, diving into deep research, or sketching the next big thing in my mind.
            </p>

            <div className="about-cards">
              <div className="about-card">
                <FaBrain className="about-icon blue" />
                <span><strong>Focus:</strong> AI, Machine Learning, Real-world Applications</span>
              </div>
              <div className="about-card">
                <FaLightbulb className="about-icon yellow" />
                <span><strong>Belief:</strong> Tech should be practical, meaningful, and accessible</span>
              </div>
              <div className="about-card">
                <FaSeedling className="about-icon green" />
                <span><strong>Motto:</strong> Keep building. Keep dreaming.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    
  );
};

export default About;
