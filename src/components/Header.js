import React from 'react';

const Header = () => {
  return (
    <header>
      <a href='#' className='logo'>
        <img
          src='https://res.cloudinary.com/husseincloud/image/upload/v1664114479/heroImage_bud6k4.png'
          style={{ height: '50px', width: '50px', opacity: '0.7' }}
        />
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
  );
};

export default Header;
