import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
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
      <Contact />
      <div className='last-text'>
        <p>Developed with love by Hussein Omar © 2022</p>
      </div>

      {/* <!---scroll-top---> */}
      <a href='#' className='top'>
        <i className='bx bx-up-arrow-alt'></i>
      </a>
    </>
  );
}

export default App;
