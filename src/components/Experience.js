import React from 'react';

const Experience = () => {
  const experience = [
    {
      title: 'Front-End Developer',
      items: [
        {
          id: 1,
          title: 'HTML',
          level: 'Advanced',
        },

        {
          id: 2,
          title: 'CSS',
          level: 'Advanced',
        },

        {
          id: 3,
          title: 'Javascript',
          level: 'Advanced',
        },

        {
          id: 4,
          title: 'React',
          level: 'Advanced',
        },

        {
          id: 5,
          title: 'Bootstrap',
          level: 'Experienced',
        },

        {
          id: 6,
          title: 'Tailwind',
          level: 'Experienced',
        },

        {
          id: 7,
          title: 'Git',
          level: 'Experienced',
        },
        {
          id: 8,
          title: 'React Native',
          level: 'Intermediate',
        },

        {
          id: 9,
          title: 'GitHub',
          level: 'Experienced',
        },
      ],
    },
    {
      title: 'Back-End Developer',
      items: [
        {
          id: 1,
          title: 'Node Js',
          level: 'Intermediate',
        },

        {
          id: 2,
          title: 'Express Js',
          level: 'Intermediate',
        },

        {
          id: 3,
          title: 'MySQL',
          level: 'Intermediate',
        },

        {
          id: 4,
          title: 'Postgresql',
          level: 'Intermediate',
        },

        {
          id: 5,
          title: 'FastApi',
          level: 'Intermediate',
        },

        {
          id: 6,
          title: 'Python',
          level: 'Intermediate',
        },

        {
          id: 7,
          title: 'Django',
          level: 'Intermediate',
        },

        {
          id: 8,
          title: 'Flask',
          level: 'Intermediate',
        },
        {
          id: 9,
          title: 'FireBase',
          level: 'Intermediate',
        },
      ],
    },
  ];

  return (
    <section id='experience'>
      {/* <Title title='My Experience' text='What Skills I Have' /> */}
      <div
        className='title'
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '20px',
        }}
      >
        <h2 className='title-h2'>What Skills I Have</h2>
      </div>

      <div className='experience-container'>
        {experience.map(({ title, items }) => (
          <div key={title} className='experience-item'>
            <h2 className='experience-title'>{title}</h2>
            <div className='experience-item-container'>
              {items.map(({ id, title, level }) => (
                <>
                  {/* <Feature key={id} title={title} level={level} /> */}
                  <div className='feature'>
                    {/* <BsPatchCheckFill/> */}
                    <div className='feature-inner'>
                      <h3>{title}</h3>
                      <p>{level}</p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className='slider'>
        <div className='slide-track'>
          <div className='slide'>
            <img
              src='https://reactjs.org/logo-og.png'
              alt=''
              height={100}
              width={250}
            />
          </div>
          <div className='slide'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQarLSZ4DS9_cG_mgtZ_xBJeLXPIUihhlSq8tvlkZ3dAZvFoEqINMJ0lk9AiHwHXtDnyIE&usqp=CAU'
              alt=''
              height={100}
              width={250}
            />
          </div>
          <div className='slide'>
            <img
              src={require('../img/logo-og-removebg-preview.png')}
              alt=''
              height={100}
              width={250}
            />
          </div>
          <div className='slide'>
            <img
              src={require('../img/React-Native-removebg-preview.png')}
              alt=''
              height={100}
              width={250}
            />
          </div>
          <div className='slide'>
            <img
              src='https://reactjs.org/logo-og.png'
              alt=''
              height={100}
              width={250}
            />
          </div>
          <div className='slide'>
            <img
              src='https://reactjs.org/logo-og.png'
              alt=''
              height={100}
              width={250}
            />
          </div>
          <div className='slide'>
            <img
              src='https://reactjs.org/logo-og.png'
              alt=''
              height={100}
              width={250}
            />
          </div>
          <div className='slide'>
            <img
              src='https://reactjs.org/logo-og.png'
              alt=''
              height={100}
              width={250}
            />
          </div>
          <div className='slide'>
            <img
              src='https://reactjs.org/logo-og.png'
              alt=''
              height={100}
              width={250}
            />
          </div>
          <div className='slide'>
            <img
              src='https://reactjs.org/logo-og.png'
              alt=''
              height={100}
              width={250}
            />
          </div>
          <div className='slide'>
            <img
              src='https://reactjs.org/logo-og.png'
              alt=''
              height={100}
              width={250}
            />
          </div>
          <div className='slide'>
            <img
              src='https://reactjs.org/logo-og.png'
              alt=''
              height={100}
              width={250}
            />
          </div>
          <div className='slide'>
            <img
              src='https://reactjs.org/logo-og.png'
              alt=''
              height={100}
              width={250}
            />
          </div>
          <div className='slide'>
            <img
              src='https://reactjs.org/logo-og.png'
              alt=''
              height={100}
              width={250}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
