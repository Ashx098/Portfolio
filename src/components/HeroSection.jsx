import React from 'react';
import { motion } from 'framer-motion';
import '../styles/HeroSection.css';
import profileImg from '../assets/profile_4.jpg';
import { FiDownload } from 'react-icons/fi';

const HeroSection = () => {
  return (
    <motion.section
      className="hero-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Left Content */}
      <motion.div
        className="hero-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h1 className="hero-title">MSR Avinash</h1>
        <p className="hero-subtitle">ML Engineer • LLM Systems • AI Research</p>
        <p className="hero-tagline">
          Building and studying large-scale AI systems
        </p>

        {/* Navigation Buttons */}
        <div className="hero-nav">
          <a href="#about" className="hero-nav-btn">About</a>
          <a href="#skills" className="hero-nav-btn">Skills</a>
          <a href="#projects" className="hero-nav-btn">Projects</a>
          <a href="#opensource" className="hero-nav-btn">Open Source</a>
          <a href="#research" className="hero-nav-btn">Research</a>
          <a href="#contact" className="hero-nav-btn">Contact</a>
        </div>

        {/* Resume Button */}
        <a
          href="/CV/MSR_AVINASH_ AI_Ml.pdf"
          className="hero-resume-btn"
          download
        >
          <FiDownload /> Download Resume
        </a>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="hero-right"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <div className="hero-img-container">
          <img
            src={profileImg}
            alt="Avinash"
            className="hero-img"
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
