import React from 'react';
import '../Navbar.css';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import '../Header.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { menuData } from '../data/menuData';
import Dropdown from './Dropdown';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [isHovering, setIsHovering] = useState(-1);
  const [dropdown, setDropdown] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [click, setClick] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  const changeNavbar = () => {
    window.scrollY >= 100 ? setShowNavbar(true) : setShowNavbar(false);
  };
  window.addEventListener('scroll', changeNavbar);

  return (
    <div className={showNavbar ? 'navbar active' : 'navbar'}>
      <Link to='/'>
        <div className='navbar__logo'>
          <h2>
            App
            <span className='navbarlogo-boxDesign'>
              <span className='navbarlogo-span'>&</span>
            </span>
            Geek
          </h2>
        </div>
      </Link>

      <div className='navbar__menuSection'>
        <div className='navbar__menuToggleIcon' onClick={showSidebar}>
          {sidebar ? <CloseIcon /> : <MenuIcon />}
        </div>
        <div className={sidebar ? 'navbar__menu active' : 'navbar__menu'}>
          {menuData.map((item, index) => (
            <div
              className='navbar__subMenuList'
              onMouseEnter={() =>
                window.innerWidth > 960
                  ? setIsHovering(index)
                  : setDropdown(true)
              }
              onMouseLeave={() =>
                window.innerWidth > 960 ? setIsHovering(-1) : setDropdown(false)
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
              {/* {window.innerWidth < 769
                ? isHovering === index &&
                  click === true && <Dropdown item={item.title} />
                : isHovering === index && <Dropdown item={item.title} />} */}
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

export default Navbar;
