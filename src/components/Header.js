import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import '../Header.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { menuData } from '../data/menuData';
import Dropdown from './Dropdown';

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const [isHovering, setIsHovering] = useState(-1);
  const [hideHeader, setHideHeader] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [click, setClick] = useState(false);

  const changeHeader = () => {
    window.scrollY >= 100 && window.scrollY <= 500
      ? setHideHeader(true)
      : setHideHeader(false);
  };
  window.addEventListener('scroll', changeHeader);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div
      className={hideHeader ? 'header deactive' : 'header'}
      style={
        window.scrollY < 100
          ? { backgroundColor: 'transparent', marginTop: '1rem' }
          : { backgroundColor: '#009cde', marginTop: '0' }
      }
    >
      <Link to='/'>
        <div className='header__logo'>
          <h2>
            App
            <span className='logo-boxDesign'>
              <span className='logo-span'>&</span>
            </span>
            Geek
          </h2>
        </div>
      </Link>

      <div className='header__menuSection'>
        <div className='header__menuToggleIcon' onClick={showSidebar}>
          {sidebar ? <CloseIcon /> : <MenuIcon />}
        </div>
        <div className={sidebar ? 'header__menu active' : 'header__menu'}>
          {menuData.map((item, index) => (
            <div
              className='header__subMenuList'
              onMouseEnter={() =>
                window.innerWidth > 768
                  ? setIsHovering(index)
                  : setDropdown(true)
              }
              onMouseLeave={() =>
                window.innerWidth > 768 ? setIsHovering(-1) : setDropdown(false)
              }
            >
              <li
                onClick={() => {
                  setIsHovering(index);
                  setClick(!click);
                }}
              >
                {item.title}
                <ExpandMoreIcon />
              </li>

              {window.innerWidth < 769
                ? isHovering === index &&
                  click === true && <Dropdown item={item.title} />
                : isHovering === index && <Dropdown item={item.title} />}
            </div>
          ))}
        </div>

        <Link to='/get-estimate'>
          <Button variant='contained'>Get an Estimate</Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
