// Navbar.js
import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const navRef = useRef();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
        setMenuOpen(!menuOpen);
    };

    const closeNavbar = () => {
        if (menuOpen) {
            navRef.current.classList.remove("responsive_nav");
            setMenuOpen(false);
        }
    };

    return (
        <div className='Nav-Main'>
            <nav ref={navRef} className={menuOpen ? "responsive_nav" : ""}>
                <div className='menus'>
                    <ul>
                        <li>
                            <NavLink exact to="/" activeClassName="active-link" onClick={closeNavbar}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Work" activeClassName="active-link" onClick={closeNavbar}>Work</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Services" activeClassName="active-link" onClick={closeNavbar}>Services</NavLink>
                        </li>
                        <li>
                            <NavLink to="/About" activeClassName="active-link" onClick={closeNavbar}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Contact" activeClassName="active-link" onClick={closeNavbar}>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className={`burger-btn ${menuOpen ? "active" : ""}`} onClick={toggleNavbar}>
                <FontAwesomeIcon icon={faBars} />
            </div>
        </div>
    );
};

export default Navbar;
