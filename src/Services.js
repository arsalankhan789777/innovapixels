import React from 'react'
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import { useEffect } from 'react';
import Contacts4 from './components/contact';


const srvcs = [
  {
    link: '#',
    SrvcsHeading: 'Branding',
    SrvcsDiscribtion: 'Design The Story',
  },
  {
    link: '#',
    SrvcsHeading: 'Online Platforms',
    SrvcsDiscribtion: 'Purposeful, Beautiful Interface and Web Design',

  },
  {
    link: '#',
    SrvcsHeading: 'Marketing Campaigns',
    SrvcsDiscribtion: 'Drive Customer Action and Engagement',

  },
  {
    link: '#',
    SrvcsHeading: 'Trade Shows',
    SrvcsDiscribtion: 'Engage with your Audience. Drive growth. Create Experiences.',

  },
  {
    link: '#',
    SrvcsHeading: 'Film, Video & Photography',
    SrvcsDiscribtion: 'A World-Class Studio',

  },
];

const bggcontact3 = [
  {
    background: `url(${process.env.PUBLIC_URL}/images/bg-img.png)`,
  }
];


const Services = () => {

  useEffect(() => {
    // Add the desired class to the body element when the component mounts
    document.body.classList.add('home-page-body');

    // Remove the class when the component unmounts (optional but recommended)
    return () => {
      document.body.classList.remove('home-page-body');
    };
  }, []);



  return (
    <wrapper>
      <div className='section2-services'>
        <div className='container-max'>
          <h2>A FULL SERVICE <strong>DISRUPTOR</strong></h2>
          <p>Whether project-specific or global, agency-of-record work, Ruckus is uniquely positioned to deliver strategic, growth-minded, and <strong>results-driven services.</strong></p>
        </div>
      </div>

      {srvcs.map((item, index) => (
        <a className='Services-sections' href={item.link} >
          <div className='container-max'>
            <div className='service-inner' key={index}>
              <h2>{item.SrvcsHeading}</h2>
              <p>{item.SrvcsDiscribtion}</p>
            </div>
          </div>
        </a>
      ))}
      <div>
        <Contacts4 contactbg={bggcontact3} />
      </div>
    </wrapper>

  )
}

export default Services