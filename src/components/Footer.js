import { Link } from 'react-router-dom';
import React from 'react';
import '../Footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import Divider from '@material-ui/core/Divider';
import { menuData } from '../data/menuData';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerTop'>
        <div className='footerLeft'>
          <div className='footerLeft__logo'>
            <h2>
              App
              <span className='logo-boxDesign'>
                <span className='logo-span'>&</span>
              </span>
              Geek
            </h2>
          </div>
          <div className='footerLeft__content'>
            <p>Digital Experience Reimagined</p>
          </div>
          <Divider
            style={{ backgroundColor: 'gray', width: '50%', height: '0.1px' }}
          />
          <div className='footerLeft__icons'>
            <IconContext.Provider
              value={{ color: 'white', className: 'global-class-name' }}
            >
              <div>
                <FaFacebookF />
                <FaTwitter />
                <FaLinkedinIn />
                <FaGithub />
              </div>
            </IconContext.Provider>
          </div>
        </div>
        <div className='footerRight'>
          <div className='footerRight__content'>
            {menuData.map((item, index) => (
              <div className='footerRight__dropdown'>
                <h4>{item.title}</h4>
                <div className='footerRight__links'>
                  <Link to={item.link}>
                    {item.subNav.map((item, index) => (
                      <li>{item.menutitle}</li>
                    ))}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='footerBottom'>
        <p>&copy; 2021 App & Geek Clone. No Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
