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
          <img src="./images/logo.svg" alt="logo" />
          </div> 
        </NavLink>
        <div className="header-cta">
          <NavLink to="tel:646-564-3880">646-564-3880</NavLink>
          <NavLink className="btn2" to="/Contact">
            LET'S TALK
          </NavLink>
        </div>
      </div>

    </header>
  );
};

export default Header;
