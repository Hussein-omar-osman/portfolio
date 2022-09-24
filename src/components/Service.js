import React from 'react';

function Service() {
  return (
    <section className='services' id='services'>
      <div className='main-text'>
        <h2>My Services</h2>
        <h4>Better Design, Better Expericences</h4>
      </div>

      <div className='services-content'>
        <div className='box'>
          {/* <img src='img/serv1.png' /> */}
          <h3>Frontend Developer</h3>
          <p>
            With frameworks and libraries like React, Angular, jQuery, Bootstrap
            and Tailwind, I create and maintain user interfaces. A CSS extension
            such as SASS increases the modularity and power of the language.
          </p>
        </div>

        <div className='box'>
          {/* <img src='img/serv2.png' /> */}
          <h3>Backend Developer</h3>
          <p>
            I focus on databases, back-end logic, application programming
            interfaces (APIs), architecture, and servers. I do this with the
            help of frameworks such as Django , Express.js and FastApi to build
            servers and APIs and use Postgresql for the database management.
          </p>
        </div>

        <div className='box'>
          {/* <img src='img/serv3.png' /> */}
          <h3>Mobile App Developer</h3>
          <p>
            I use React Native to leverage common JavaScript skills while
            allowing me to simultaneously target both iOS and Android with a
            single code base to maintain. The apps feel truly native while using
            web technologies like React & React Native.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Service;
