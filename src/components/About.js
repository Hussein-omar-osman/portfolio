import React from 'react';

const About = () => {
  return (
    <section className='about' id='about'>
      <div className='about-img'>
        <img src='https://res.cloudinary.com/husseincloud/image/upload/v1664114479/heroImage_bud6k4.png' />
      </div>

      <div className='about-text'>
        <h2>About Me</h2>
        <h4>Hi, Im Here To Help Your Next Project</h4>
        <p>
          Talented web development experienced with wide range of programming
          languages and design tools.Skilled at producing clean, secure codes
          based on individual client's need. Focused on delighting customers
          with innovative user-friendly designs.
        </p>
        <div
          className='contact-icons'
          style={{ marginTop: '-15px', marginBottom: '15px' }}
        >
          <a
            href='https://www.linkedin.com/in/hussein-omar-054910243/'
            target='blank'
          >
            <i className='bx bxl-linkedin'></i>
          </a>
          <a href='https://github.com/Hussein-omar-osman' target='blank'>
            <i className='bx bxl-github'></i>
          </a>

          <a href='#'>
            <i className='bx bxl-instagram'></i>
          </a>
        </div>
        <div className='about-gri'>
          <div className='about-in'>
            <h5>1. Problem Solving</h5>
          </div>

          <div className='about-in'>
            <h5>2. Creative Idea</h5>
          </div>

          <div className='about-in'>
            <h5>3. Search a lot</h5>
          </div>

          <div className='about-in'>
            <h5>4. High Quality</h5>
          </div>
        </div>
        <a href='#contact' className='btn'>
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default About;
