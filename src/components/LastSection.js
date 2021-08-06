import { Button } from '@material-ui/core';
import React from 'react';
import '../LastSection.css';
import asset from '../images/asset.svg';

const LastSection = () => {
  return (
    <div className='lastSection'>
      <div className='lastSection__Left'>
        <h3 style={{ color: '#009CDE', fontSize: '1.7rem' }}>
          Have a blockbuster app idea?
        </h3>
        <p style={{ color: '#646D7B' }}>
          You need a world-class team that understands your vision to turn it
          into a smash hit product or service. Start up with AppAndGeek.
        </p>
        <div className='lastSection__LeftButton'>
          <Button
            variant='contained'
            style={{
              backgroundColor: '#009CDE',
              color: 'white',
              borderRadius: '60px',
              textTransform: 'capitalize',
            }}
          >
            Get Estimate
          </Button>
          <Button
            variant='contained'
            style={{
              backgroundColor: '#B7E3F6',
              color: '#009CDE',
              borderRadius: '60px',
              textTransform: 'capitalize',
            }}
          >
            Contact Us
          </Button>
        </div>
      </div>
      <div className='lastSection__Right'>
        <img src={asset} alt='review' />
      </div>
    </div>
  );
};

export default LastSection;
