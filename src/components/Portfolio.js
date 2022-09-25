import React from 'react';
import full from '../img/fullstack.png';
import insta from '../img/insta.png';
import musico from '../img/musico.png';
import calcu from '../img/calc.png';
import recipe from '../img/first-shot.png';
import youtube from '../img/youtubeCl.png';
import notes from '../img/notes.png';
import gallery from '../img/gallery.png';

function Portfolio() {
  const data = [
    {
      name: 'Full-Stack-E-Commerce',
      des: "Fichua is an ecommerce web app that connects vendors and customers. Customers get to browser and discover products from different categories and find their favorite vendors. Vendors get to fulfil their business' potential by reaching our many users.",
      live: 'https://fullstack-e-commerce.web.app/',
      github: 'https://github.com/Hussein-omar-osman/Full-Stack-E-Commerce',
      shot: full,
    },
    {
      name: 'Django Instagram Clone',
      des: 'This is a Instagram clone Web-App that enables users to register an account and be logged in. Users can also upload images to the feed so other users can like and comment on them. The platform also allows users to follow or unfollow other users. Finally, users can edit their profile account and log out whenever they want.',
      live: 'https://insta-clone-djang.herokuapp.com/',
      github: 'https://github.com/Hussein-omar-osman/insta-clone-django',
      shot: insta,
    },
    {
      name: 'Musico',
      des: "React music application that enables users to search song and artists and listen there favourate music. The application also displays the top charts and top artists at the recent moment. Users can also search through different genres and get suggestions of local arttists' songs",
      live: 'https://musico-app.netlify.app/',
      github: 'https://github.com/Hussein-omar-osman/musico',
      shot: musico,
    },
    {
      name: 'Recipe App',
      des: 'Recipe app also known as Receta app, this is a recipe app that help users search meals by name, category, origin and get the ingridients, instructions and a youtube video suggestion of the the meal the clicked on.',
      live: 'https://expo.dev/@hussein-omar/receta-app?serviceType=classic&distribution=expo-go',
      github: 'https://github.com/Hussein-omar-osman/React-Native-Recipe-App',
      shot: recipe,
    },
    {
      name: 'Youtube-Clone',
      des: 'A clone of youTube or should i say husseinTube built with react. This web app helps user to search videos from youtube Api. Users can also browse through different categories. ',
      live: 'https://husseintube.netlify.app/',
      github: 'https://github.com/Hussein-omar-osman/youtube-clone',
      shot: youtube,
    },
    {
      name: 'Calculator App RN',
      des: 'This is a simple calculator app built with react native and expo cli that does basic and intermediate numeric calculation.',
      live: 'https://expo.dev/@hussein-omar/calculator-app?serviceType=classic&distribution=expo-go',
      github: 'https://github.com/Hussein-omar-osman/react-native-calculator',
      shot: calcu,
    },
    {
      name: 'Notes app',
      des: 'This is a simple react project that help users to make notes and edit it however they like',
      live: 'https://reactbased-notesapp.netlify.app/',
      github: 'https://github.com/Hussein-omar-osman/react-notes-app',
      shot: notes,
    },
    {
      name: 'Gallery Web-App',
      des: 'This is a Gallery Web-App page which shows several pictures in collection with the location it was taken and also description of picture. Once you click any picture, you will be able to find all its information..',
      live: 'https://breezway-gallery.herokuapp.com/',
      github: 'https://github.com/Hussein-omar-osman/gallery-django-app',
      shot: gallery,
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
          <div className='row' key={i}>
            <img src={item.shot} />
            <div className='main-row'>
              <div className='row-text'>
                <h6>{item.name}</h6>
              </div>
              <div className='row-icon'>
                <i className='bx bx-heart'></i>
              </div>
            </div>
            <h3>{item.des}</h3>
            <div
              style={{
                diplay: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                marginTop: '25px',
              }}
            >
              <a
                href={item.github}
                className='btn'
                target='blank'
                style={{
                  marginRight: '20px',
                  backgroundColor: 'grey',
                  border: 'none',
                }}
              >
                Github
              </a>
              <a href={item.live} className='btn' target='blank'>
                Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
