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
            <a href="tel:+44 (161) 818 7609" class="footer__top__phone">+44 (161) 818 7609</a>
            <a className='footer__top__email' href='mailto:info@ruckusco.com'>info@innovapixels.com</a>
          </div>
          <div className='nav-footer'>
            <Navbar />
          </div>
        </div>
        <div className='footer-bot'>
          <div className='footer__bot__address'>
            <b>HQ</b> -
            <a class="footer__bot__address-link" href="https://goo.gl/maps/H1NAPCHtVYKPEvv47" target="">
            5 Villa Garden Warwick Road West Yorkshire Batley </a>
          </div>
          <div className='footer-bot-row-social-icons'>
          <FontAwesomeIcon icon={faFacebookF} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faLinkedinIn} />
          <FontAwesomeIcon icon={faYoutube} />
          </div>
          {/* <div className='footer-bot-navlink'>
            <Navbar />
            <p>Innovapixels LLC © 2024</p>
          </div> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer