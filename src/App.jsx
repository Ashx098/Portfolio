import React from 'react';

import HeroSection from './components/HeroSection';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/skills';
import Research from './components/Research';
import Projects from './components/Projects';
import OpenSource from './components/OpenSource';
import HuggingFace from './components/HuggingFace';
import Experiments from './components/Experiments';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Experience />
      <Skills />
      <Research />
      <Projects />
      <OpenSource />
      <HuggingFace />
      <Experiments />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
