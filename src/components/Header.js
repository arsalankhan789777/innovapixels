import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';

const Header = () => {
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeColor);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, []);

  return (
    <header className={color ? 'header-normal header-bg' : 'header-normal'}>
      <div className="container-max">
        <Navbar />
        <NavLink to="/" className="logo-link">
          <div class="svg svg--ruckus-logo">
            {/* <svg viewBox="0 0 68 63.783"><g data-name="Group 4921"><path data-name="Path 40349" d="M68 63.783H0V0h68zm-6.8-26.492l-7.395-7.4 7.4-9.94-9.722-13.138H6.798v50.129l12.891-7.4v-14.27h24.669l3.95 3.877v10.4H61.2zM44.5 25.536H19.689v-9.2h24.864l3.39 4.492z" fill="#fff"></path></g></svg> */}
          <img src="./images/logo.svg" alt="logo" />
          </div> 
        </NavLink>
        <div className="header-cta">
          <NavLink to="/">646-564-3880</NavLink>
          <NavLink className="btn2" to="/">
            LET'S TALK
          </NavLink>
        </div>
      </div>

    </header>
  );
};

export default Header;
