import React from 'react';

import HeroSection from './components/HeroSection';
import About from './components/About';
import Skills from './components/skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

const App = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
    </>
  );
};

export default App;
