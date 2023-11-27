import React from 'react';
import HeroSection from './components/Hero';
// import { useEffect } from 'react';
import SingleBoxes from './components/SingleBoxes';
import Brands from './components/Brands';
import Contacts4 from './components/contact';
import { Link } from "react-router-dom";



const secondHerosectioncons = [
  {
    link: '/Work',
    headinghero: 'AN AGENCY BUILT TO ',
    boldheading: 'CREATE REAL VALUE',
    parahero: 'Innovapixels is a growth partner. We’re a nimble, hungry, results-driven firm. We execute with purpose and focus on measurable, actionable results.',
    linktext: 'CHECK OUT OUR WORK',
    background: `url(${process.env.PUBLIC_URL}/images/bg-img2.jpg)`,
  }
];
const secondHerosectioncons2 = [
  {
    headinghero: 'We win big.',
    boldheading: 'Our results get recognized.',
    background: `url(${process.env.PUBLIC_URL}/images/bg-img4.jpg)`,
  }
];

const bggcontact2 = [
  {
    background: `url(${process.env.PUBLIC_URL}/images/bg-img3.jpg)`,
  }
];


const About = () => {

  // useEffect(() => {
  //   document.body.classList.add('home-page-body');
  //   return () => {
  //     document.body.classList.remove('home-page-body');
  //   };
  // }, []);

  return (
    <wrapper className='pd-top'>
      <HeroSection herosectioncons={secondHerosectioncons} />
      <SingleBoxes />
      <div className='section-about'>
        <div className='container-max'>
          <div></div>
          <div className='righ-sec-about'>
            <h2>At its core,<strong> disruption</strong> is a successful alteration to a set of values, purchase patterns, and human behavior.</h2>
            <p>Innovapixels is powered by people that possess as wide an array of expertise and skills as they do drive for active, positive change. We are most proud of our diversity in background, expertise, and industries. To be a disruptor, you need the right breadth experience— not just agency experience.</p>
          </div>
        </div>
      </div>
      <Brands />
      <div className='dublicate-hero'>
        <HeroSection herosectioncons={secondHerosectioncons2} />
      </div>
      <div className='map-section'>
        <div className='container-max'>
          <div className='left-map-section'>
            <h1>We’re at the heart of NYC <strong>Our reach is Global.</strong></h1>
            <div className="location-footer-location">
              <h4>WEST YORKSHIRE</h4>
              <a class="location-footer-location__address-link" href="https://goo.gl/maps/H1NAPCHtVYKPEvv47" target="">
                <address class="location-footer-location__address b5">5 Villa Garden Warwick Road West Yorkshire Batley</address>
              </a>
            </div>
            <Link to="/Contact" className="buttncn7">
            CONTACT US
              <span>
                <div class="svg svg--arrow button-svg_arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svg-inline--fa fa-long-arrow-right fa-w-14" data-icon="long-arrow-right" data-prefix="fal" viewBox="0 0 448 512">
                    <path fill="currentColor" d="M311.03 131.515l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887l-83.928 83.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l116.485-116c4.686-4.686 4.686-12.284 0-16.971L328 131.515c-4.686-4.687-12.284-4.687-16.97 0z"></path>
                  </svg>
                </div>
              </span>
              </Link>
          </div>

          <div className='right-map-section'>
            <iframe title='iframe_map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2361.6886682103427!2d-1.6298063!3d53.705993199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48796015c70e188b%3A0x91f922dfe1c0fbb6!2s5%20Villa%20Gardens%2C%20Batley%20WF17%206AN%2C%20UK!5e0!3m2!1sen!2s!4v1701089095104!5m2!1sen!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
      <div>
        <Contacts4 contactbg={bggcontact2} />
      </div>

    </wrapper>

  )
}

export default About