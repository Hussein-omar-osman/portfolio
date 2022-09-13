import React from 'react';

const Contact = () => {
  return (
    <section className='contact' id='contact'>
      <div className='contact-text'>
        <h2>Contact Me</h2>
        <h4>Let's Work Together</h4>
        {/* <p>
          Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
          Industry
        </p> */}
        <div className='contact-list'>
          <li>
            <a href='#'>Nairobi - Kenya</a>
          </li>
          <li>
            <a href='mailto: husseinomar6190@gmail.com'>
              husseinomar6190@gmail.com
            </a>
          </li>
          <li>
            <a href='#'>+254768678511</a>
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
          {/* <input type='' placeholder='Enter Your Name' required /> */}
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
  );
};

export default Contact;
