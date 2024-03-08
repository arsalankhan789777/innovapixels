import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

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
    window.addEventListener("scroll", changeColor);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <header className={color ? "header-normal header-bg" : "header-normal"}>
      <div className="container-max">
        <Navbar />
        <NavLink to="" className="logo-link" aria-label="LogoIMG">
          <div class="svg svg--ruckus-logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              viewBox="0 0 34 36"
              fill="none">
              <g clip-path="url(#clip0_2_265)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.300099 0.3H7.7001V2.7H0.300099V0.3ZM9.91821e-05 0H0.300099H7.7001H8.0001V0.3V2.7V3H7.7001H0.300099H9.91821e-05V2.7V0.3V0ZM0.150002 4.85H0V5V35.2831V35.5395L0.223485 35.4139L8.02349 31.0308L8.1 30.9878V30.9V22.1517L26.2031 22.35L26.2795 22.3508L26.3251 22.2895L33.1703 13.0895L33.2364 13.0008L33.1711 12.9115L27.3225 4.91147L27.2776 4.85H27.2014H0.150002ZM0.300002 35.0268V5.15H27.1253L32.8636 12.9992L26.13 22.0492L7.95164 21.85L7.8 21.8483V22V30.8122L0.300002 35.0268ZM7.95 10.15H7.8V10.3V15.9V16.0499H7.95H22.95H23.0266L23.0715 15.9879L25.1715 13.088L25.2375 12.9968L25.1684 12.9079L23.0684 10.2079L23.0234 10.15H22.95H7.95ZM8.1 15.75V10.45H22.8766L24.8625 13.0032L22.8734 15.75H8.1Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_2_265">
                  <rect width="34" height="36" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </NavLink>
        <div className="header-cta">
          <NavLink to="tel:+441618187609">+44(161)8187609</NavLink>
          <NavLink className="btn2" to="/Contact">
            LET'S TALK
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
