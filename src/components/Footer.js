import React from 'react'
import Navbar from './Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faTwitter,faInstagram,faLinkedinIn,faYoutube } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
  return (
    <footer>
      <div className='container-max'>
        <h5><strong>Got a Project?</strong> Tell us everything.</h5>
        <div className='footer-top'>
          <div className="footer__top__contact">
            <a href="tel:16465643880" class="footer__top__phone">1.646.564.3880</a>
            <a className='footer__top__email' href='mailto:info@ruckusco.com'>info@ruckusco.com</a>
          </div>
          <div className='nav-footer'>
            <Navbar />
          </div>
        </div>
        <div className='footer-bot'>
          <div className='footer__bot__address'>
            <b>HQ</b> -
            <a class="footer__bot__address-link" href="https://goo.gl/maps/H1NAPCHtVYKPEvv47" target="">
              240 West 37th Street | Floor 11 | New York, NY 10018 </a>
          </div>
          <div className='footer-bot-row-social-icons'>
          <FontAwesomeIcon icon={faFacebookF} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faLinkedinIn} />
          <FontAwesomeIcon icon={faYoutube} />
          </div>
          <div className='footer-bot-navlink'>
            <Navbar />
            <p>Ruckus Marketing, LLC © 2023</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer