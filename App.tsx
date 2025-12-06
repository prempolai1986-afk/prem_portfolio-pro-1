import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Applications from './components/Applications';
import Companions from './components/Companions';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background text-white selection:bg-primary selection:text-white min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Applications />
        <Companions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;