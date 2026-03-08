import React from 'react';

import HeroSection from './components/HeroSection';
import About from './components/About';
import Skills from './components/skills';
import Projects from './components/Projects';
import OpenSource from './components/OpenSource';
import HuggingFace from './components/HuggingFace';
import Research from './components/Research';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <OpenSource />
      <HuggingFace />
      <Research />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
