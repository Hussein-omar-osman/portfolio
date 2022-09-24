import React from 'react';
import hi from '../assets/hi.svg';

const Hero = () => {
  return (
    <section className='home' id='home'>
      <div className='home-text'>
        <h4>Hello</h4>
        <h1>
          I'M Hus<span>sein</span> <br /> Om<span>ar</span>
        </h1>
        <h3>Full-Stack Developer</h3>
        <a href='#' className='btn'>
          Download CV
        </a>
      </div>
      <img className='hi' src={hi} alt='hi' width={510} height={510} />
    </section>
  );
};

export default Hero;
