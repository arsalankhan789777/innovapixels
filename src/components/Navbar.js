import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    return (
        <div className='Nav-Main'>
        <nav ref={navRef}>
            <div className='menus'>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Work">Work</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Services">Servicecs</NavLink>
                    </li>
                    <li>
                        <NavLink to="/About">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/News">News</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Careers">Careers</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contact">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Terms">Terms</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Privacy">Privacy</NavLink>
                    </li>

                </ul>
            </div>

        </nav>
        <div className='burger-btn' onClick={showNavbar}> 
        <FontAwesomeIcon icon={faBars} />
        </div>
        </div>

    );
};

export default Navbar