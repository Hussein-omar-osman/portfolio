import React from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Service from './components/Service';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Service />
      <Experience />
      <Portfolio />
    </>
  );
}

export default App;
