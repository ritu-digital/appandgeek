import React from 'react';
import '../Services.css';
import ComputerIcon from '@material-ui/icons/Computer';
import { Link } from 'react-router-dom';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import DevicesIcon from '@material-ui/icons/Devices';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import work from '../images/work.svg';

const Services = () => {
  return (
    <div className='services'>
      <div className='services__header'>
        <h6>What we do</h6>
        <h2>Services We Offer</h2>
        <p>
          We blend business expertise with creative genius to create
          state-of-the-art solutions that help our clients dominate their
          industry.
        </p>
      </div>

      <div className='services__content'>
        <div className='services__contentLeft'>
          <li>
            <Link to='/services'>
              <div className='services__contentLeftImgIcon'>
                <ComputerIcon style={{ fontSize: '3rem' }} />
              </div>
              <div className='services__contentLeftDescription'>
                <h5>Software Product Engineering</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Consequatur, fugiat ab inventore cumque adipisci vitae!
                  Numquam.
                </p>
              </div>
            </Link>
          </li>
          <li>
            <Link to='/services'>
              <div className='services__contentLeftImgIcon'>
                <PhoneAndroidIcon style={{ fontSize: '3rem' }} />
              </div>
              <div className='services__contentLeftDescription'>
                <h5>Mobile App Development</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Consequatur, fugiat ab inventore cumque adipisci vitae!
                  Numquam.
                </p>
              </div>
            </Link>
          </li>
          <li>
            <Link to='/services'>
              <div className='services__contentLeftImgIcon'>
                <WbIncandescentIcon style={{ fontSize: '3rem' }} />
              </div>
              <div className='services__contentLeftDescription'>
                <h5>Digital Transformation</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Consequatur, fugiat ab inventore cumque adipisci vitae!
                  Numquam.
                </p>
              </div>
            </Link>
          </li>
          <li>
            <Link to='/services'>
              <div className='services__contentLeftImgIcon'>
                <DevicesIcon style={{ fontSize: '3rem' }} />
              </div>
              <div className='services__contentLeftDescription'>
                <h5>User Experience Design</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Consequatur, fugiat ab inventore cumque adipisci vitae!
                  Numquam.
                </p>
              </div>
            </Link>
          </li>
          <li>
            <Link>
              <div className='services__contentLeftImgIcon'>
                <SupervisedUserCircleIcon style={{ fontSize: '3rem' }} />
              </div>
              <div className='services__contentLeftDescription'>
                <h5>Technology Consulting</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Consequatur, fugiat ab inventore cumque adipisci vitae!
                  Numquam.
                </p>
              </div>
            </Link>
          </li>
        </div>
        <div className='services__contentRight'>
          <img src={work} alt='services' />
        </div>
      </div>
    </div>
  );
};

export default Services;
