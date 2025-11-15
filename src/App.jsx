import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Research from './components/Research';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Teaching from './components/Teaching';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Research />
        <Skills />
        <Projects />
        <Publications />
        <Teaching />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;