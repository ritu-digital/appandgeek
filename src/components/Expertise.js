import { Button } from '@material-ui/core';
import React from 'react';
import '../Expertise.css';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import expertise from '../images/expertise.svg';

const Expertise = () => {
  return (
    <div className='expertise'>
      <div className='expertise__contentRight'>
        <h1>Our Expertise</h1>
        <p>
          <span style={{ fontWeight: '800' }}>App&Geek</span> is a full-service
          software design and development company. We are obsessed with turning
          our clients’ visions and dreams into top-notch products that exceed
          their wildest expectations.
        </p>
        <p>
          We identify the biggest challenges facing your business and leverage
          technology to overcome them. As a full-cycle product development
          agency, we design, develop, implement, configure, maintain, and
          support highly scalable software solutions. Here’s how we do it.
        </p>

        <Button
          variant='contained'
          style={{
            backgroundColor: 'rgb(217,241,250)',
            textTransform: 'capitalize',
            color: '#009cde',
            fontWeight: '600',
          }}
          className='expertise__contentRight__button'
        >
          Learn More
          <ArrowForwardIcon style={{ fontSize: '13px', marginLeft: '5px' }} />
        </Button>
      </div>
      <div className='expertise__contentLeft'>
        <img src={expertise} alt='expertise' />
      </div>
    </div>
  );
};

export default Expertise;
