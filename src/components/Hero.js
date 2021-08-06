import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React from 'react';
import '../Hero.css';

import team from '../images/team.svg';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero__content'>
        <div className='hero__contentLeft'>
          <h1>
            Software Development
            <span>
              Done
              <span>
                <Typewriter
                  words={[' Right.', ' On Time.', ' Within Budget.']}
                  loop={0}
                  cursor
                  cursorStyle='|'
                  typeSpeed={70}
                  deleteSpeed={60}
                  delaySpeed={1000}
                />
              </span>
            </span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            quaerat voluptas aliquam ad cumque quas atque alias nulla asperiores
            reprehenderit qui soluta quidem optio, nam maxime a aperiam rerum
            doloremque ullam sed voluptatem amet dicta mollitia?
          </p>
          <Link to='/get-estimate'>
            <Button variant='contained' style={{ backgroundColor: 'white' }}>
              Get Estimate
            </Button>
          </Link>
        </div>
        <div className='hero__contentRight'>
          <img src={team} alt='team' />
        </div>
      </div>
      <div className='hero__wave'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#18A0E8'
            fill-opacity='1'
            d='M0,224L60,213.3C120,203,240,181,360,154.7C480,128,600,96,720,112C840,128,960,192,1080,181.3C1200,171,1320,85,1380,42.7L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
