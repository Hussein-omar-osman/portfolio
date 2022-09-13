import React from 'react';
import Experience from './components/Experience';

function App() {
  return (
    <>
      {/* // <!---header---> */}
      <header>
        <a href='#' className='logo'>
          <img src='img/logo.png' />
        </a>
        <div className='bx bx-menu' id='menu-icon'></div>

        <ul className='navbar'>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#about'>About Me</a>
          </li>
          <li>
            <a href='#services'>Services</a>
          </li>
          <li>
            <a href='#portfolio'>My Portfolio</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </header>

      <section className='home' id='home'>
        <div className='home-text'>
          <h4>Hello</h4>
          <h1>
            I'M Hus<span>sein</span> <br /> Om<span>ar</span>
          </h1>
          <h3>Front-End Developer</h3>
          <a href='#' className='btn'>
            Hire Me
          </a>
        </div>
      </section>

      {/* <!---about---> */}
      <section className='about' id='about'>
        <div className='about-img'>
          <img src={require('./img/heroImage.png')} />
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

      {/* <!---services---> */}
      <section className='services' id='services'>
        <div className='main-text'>
          <h2>My Services</h2>
          <h4>Better Design, Better Expericences</h4>
        </div>

        <div className='services-content'>
          <div className='box'>
            <img src='img/serv1.png' />
            <h3>Mobile App Design</h3>
            <p>
              Lorem Ipsum Is Simply Dummy Text Of The Printing Andtypesetting
              Industry. Lorem Ipsum Has Been The Website Industry's Standard
              Dummy .
            </p>
          </div>

          <div className='box'>
            <img src='img/serv2.png' />
            <h3>Website Design</h3>
            <p>
              Lorem Ipsum Is Simply Dummy Text Of The Printing Andtypesetting
              Industry. Lorem Ipsum Has Been The Website Industry's Standard
              Dummy .
            </p>
          </div>

          <div className='box'>
            <img src='img/serv3.png' />
            <h3>Video Editing</h3>
            <p>
              Lorem Ipsum Is Simply Dummy Text Of The Printing Andtypesetting
              Industry. Lorem Ipsum Has Been The Website Industry's Standard
              Dummy .
            </p>
          </div>
        </div>
      </section>

      {/* <!---portfolio---> */}
      <section className='portfolio' id='portfolio'>
        <div className='main-text'>
          <h2>My Portfolio</h2>
          <h4>Some Of My Distinguished Works</h4>
        </div>

        <div className='portfolio-content'>
          <div className='row'>
            <img src='img/portfolio1.jpg' />
            <div className='main-row'>
              <div className='row-text'>
                <h6>Development</h6>
              </div>
              <div className='row-icon'>
                <i className='bx bx-heart'></i>
              </div>
            </div>
            <h3>Mobile app landing design & Services</h3>
          </div>

          <div className='row'>
            <img src='img/portfolio2.jpg' />
            <div className='main-row'>
              <div className='row-text'>
                <h6>Development</h6>
              </div>
              <div className='row-icon'>
                <i className='bx bx-heart'></i>
              </div>
            </div>
            <h3>Mobile app landing design & Services</h3>
          </div>

          <div className='row'>
            <img src='img/portfolio3.jpg' />
            <div className='main-row'>
              <div className='row-text'>
                <h6>Development</h6>
              </div>
              <div className='row-icon'>
                <i className='bx bx-heart'></i>
              </div>
            </div>
            <h3>Mobile app landing design & Services</h3>
          </div>

          <div className='row'>
            <img src='img/portfolio4.jpg' />
            <div className='main-row'>
              <div className='row-text'>
                <h6>Development</h6>
              </div>
              <div className='row-icon'>
                <i className='bx bx-heart'></i>
              </div>
            </div>
            <h3>Mobile app landing design & Services</h3>
          </div>

          <div className='row'>
            <img src='img/portfolio5.jpg' />
            <div className='main-row'>
              <div className='row-text'>
                <h6>Development</h6>
              </div>
              <div className='row-icon'>
                <i className='bx bx-heart'></i>
              </div>
            </div>
            <h3>Mobile app landing design & Services</h3>
          </div>

          <div className='row'>
            <img src='img/portfolio6.jpg' />
            <div className='main-row'>
              <div className='row-text'>
                <h6>Development</h6>
              </div>
              <div className='row-icon'>
                <i className='bx bx-heart'></i>
              </div>
            </div>
            <h3>Mobile app landing design & Services</h3>
          </div>
        </div>
      </section>

      {/* <!---contact---> */}
      <section className='contact' id='contact'>
        <div className='contact-text'>
          <h2>Contact Me</h2>
          <h4>Let's Work Together</h4>
          <p>
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
            Industry
          </p>
          <div className='contact-list'>
            <li>
              <a href='#'>Mansoura - Dakhalia - Egyp</a>
            </li>
            <li>
              <a href='#'>admin@example.com</a>
            </li>
            <li>
              <a href='#'>01646895741</a>
            </li>
          </div>
          <div className='contact-icons'>
            <a href='#'>
              <i className='bx bxl-linkedin'></i>
            </a>
            <a href='#'>
              <i className='bx bxl-facebook'></i>
            </a>
            <a href='#'>
              <i className='bx bxl-behance'></i>
            </a>
            <a href='#'>
              <i className='bx bxl-instagram'></i>
            </a>
            <a href='#'>
              <i className='bx bxl-dribbble'></i>
            </a>
          </div>
        </div>

        <div className='contact-form'>
          <form action=''>
            <input type='' placeholder='Enter Your Name' required />
            <input type='email' placeholder='Enter Your Email' required />
            <input type='' placeholder='Enter Your Subject' />
            <textarea
              name=''
              id=''
              cols='40'
              rows='10'
              placeholder='Enter Your Message'
              required
            ></textarea>
            <input type='submit' value='Submit' className='send' />
          </form>
        </div>
      </section>
      <Experience />

      <div className='last-text'>
        <p>Developed with love by Tahmid Hamim © 2022</p>
      </div>

      {/* <!---scroll-top---> */}
      <a href='#' className='top'>
        <i className='bx bx-up-arrow-alt'></i>
      </a>
    </>
  );
}

export default App;
