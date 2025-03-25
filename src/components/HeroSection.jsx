import React from 'react';
import { motion } from 'framer-motion';
import '../styles/HeroSection.css';
import profileImg from '../assets/profile_4.jpg';

const HeroSection = () => {
  return (
    <div className="hero-wrapper">
      <motion.div
        className="hero-left"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="hero-title">
          Hi, I’m <span className="highlight">MSR Avinash</span>
        </h1>
        <p className="hero-subtitle">
          AI Creator • Researcher • Builder • Dreamer
        </p>

        {/* === Navigation Buttons (no react-scroll, native scroll) === */}
        <div className="hero-buttons">
  {[
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ].map((btn, index) => (
    <a key={index} href={btn.href} className="hero-nav-btn">
      {btn.name}
    </a>
  ))}

  {/* Resume Download Button */}
  <a href="/resume.pdf" download className="hero-nav-btn resume-btn">
    Download Resume
  </a>
</div>

      </motion.div>

      <motion.div
        className="hero-right"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={profileImg} alt="Aviansh" className="hero-img" />
      </motion.div>
    </div>
  );
};

export default HeroSection;
