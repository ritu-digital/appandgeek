import React from 'react';
import '../Dropdown.css';
import { menuData } from '../data/menuData';
import { Link } from 'react-router-dom';

const Dropdown = ({ item }) => {
  return (
    <>
      <div className='dropdown'>
        <div className='dropdown__container'>
          {menuData.map((data, index) => (
            <div className='dropdown__links'>
              {data.title === item
                ? data.subNav.map((item, index) => (
                    <Link to={item.path} key={index} className='dropdown__menu'>
                      <div className='dropdown__menuIcon'>{item.icon}</div>
                      <div className='dropdown__menuTitle'>
                        <h4>{item.menutitle}</h4>
                        <p>{item.subtitle}</p>
                      </div>
                    </Link>
                  ))
                : null}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dropdown;
