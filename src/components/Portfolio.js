import React from 'react';
import Project from './Project';

function Portfolio() {
  const data = [
    {
      name: 'Full-Stack-E-Commerce',
      des: "Fichua is an ecommerce web app that connects vendors and customers. Customers get to browser and discover products from different categories and find their favorite vendors. Vendors get to fulfil their business' potential by reaching our many users.",
      live: 'https://fullstack-e-commerce.web.app/',
      github: 'https://github.com/Hussein-omar-osman/Full-Stack-E-Commerce',
      shot: 'https://res.cloudinary.com/husseincloud/image/upload/v1664114465/fullstack_pr4xzs.png',
    },
    {
      name: 'Django Instagram Clone',
      des: 'This is a Instagram clone Web-App that enables users to register an account and be logged in. Users can also upload images to the feed so other users can like and comment on them. The platform also allows users to follow or unfollow other users. Finally, users can edit their profile account and log out whenever they want.',
      live: 'https://insta-clone-djang.herokuapp.com/',
      github: 'https://github.com/Hussein-omar-osman/insta-clone-django',
      shot: 'https://res.cloudinary.com/husseincloud/image/upload/v1664114770/insta_dh3ycw.png',
    },
    {
      name: 'Musico',
      des: "React music application that enables users to search song and artists and listen there favourate music. The application also displays the top charts and top artists at the recent moment. Users can also search through different genres and get suggestions of local arttists' songs",
      live: 'https://musico-app.netlify.app/',
      github: 'https://github.com/Hussein-omar-osman/musico',
      shot: 'https://res.cloudinary.com/husseincloud/image/upload/v1664114519/musico_yz9mlw.png',
    },
    {
      name: 'Recipe App',
      des: 'Recipe app also known as Receta app, this is a recipe app that help users search meals by name, category, origin and get the ingridients, instructions and a youtube video suggestion of the the meal the clicked on.',
      live: 'https://expo.dev/@hussein-omar/receta-app?serviceType=classic&distribution=expo-go',
      github: 'https://github.com/Hussein-omar-osman/React-Native-Recipe-App',
      shot: 'https://res.cloudinary.com/husseincloud/image/upload/v1664114445/first-shot_qk3say.png',
    },
    {
      name: 'Youtube-Clone',
      des: 'A clone of youTube or should i say husseinTube built with react. This web app helps user to search videos from youtube Api. Users can also browse through different categories. ',
      live: 'https://husseintube.netlify.app/',
      github: 'https://github.com/Hussein-omar-osman/youtube-clone',
      shot: 'https://res.cloudinary.com/husseincloud/image/upload/v1664114566/youtubeCl_wpu0bi.png',
    },
    {
      name: 'Calculator App RN',
      des: 'This is a simple calculator app built with react native and expo cli that does basic and intermediate numeric calculation.',
      live: 'https://expo.dev/@hussein-omar/calculator-app?serviceType=classic&distribution=expo-go',
      github: 'https://github.com/Hussein-omar-osman/react-native-calculator',
      shot: 'https://res.cloudinary.com/husseincloud/image/upload/v1664114837/calc_s6pifx.png',
    },
    {
      name: 'Notes app',
      des: 'This is a simple react project that help users to make notes and edit it however they like',
      live: 'https://reactbased-notesapp.netlify.app/',
      github: 'https://github.com/Hussein-omar-osman/react-notes-app',
      shot: 'https://res.cloudinary.com/husseincloud/image/upload/v1664114529/notes_e0af8o.png',
    },
    {
      name: 'Gallery Web-App',
      des: 'This is a Gallery Web-App page which shows several pictures in collection with the location it was taken and also description of picture. Once you click any picture, you will be able to find all its information..',
      live: 'https://breezway-gallery.herokuapp.com/',
      github: 'https://github.com/Hussein-omar-osman/gallery-django-app',
      shot: 'https://res.cloudinary.com/husseincloud/image/upload/v1664114473/gallery_y7mlfz.png',
    },
    // {
    //   name: '',
    //   des: '',
    //   live: '',
    //   github: '',
    //   shot: full,
    // },
  ];
  return (
    <section className='portfolio' id='portfolio'>
      <div className='main-text'>
        <h2>My Portfolio</h2>
        <h4>Some Of My Distinguished Works</h4>
      </div>

      <div className='portfolio-content'>
        {data.map((item, i) => (
          <Project item={item} key={i} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
