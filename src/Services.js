import React from 'react'
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import { useEffect } from 'react';
import Contacts4 from './components/contact';
import { Link } from 'react-router-dom';


const srvcs = [
  {
    link: '/contact',
    SrvcsHeading: 'Branding',
    SrvcsDiscribtion: 'Design The Story',
  },
  {
    link: '/contact',
    SrvcsHeading: 'Designing Online Platforms',
    SrvcsDiscribtion: 'Purposeful, Beautiful Interface and Web Design',

  },
  {
    link: '/contact',
    SrvcsHeading: 'Development of online platforms',
    SrvcsDiscribtion: 'Pixel perfect conversions of designs into web interfaces',

  },
  {
    link: '/contact',
    SrvcsHeading: 'Marketing Campaigns',
    SrvcsDiscribtion: 'Drive Customer Action and Engagement',

  },
  {
    link: '/contact',
    SrvcsHeading: 'Search Engine optimization',
    SrvcsDiscribtion: 'Boosting website visibility and traffic through SEO strategies for web development platforms.',

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
          <p>Whether project-specific or global, agency-of-record work, Innovapixels is uniquely positioned to deliver strategic, growth-minded, and <strong>results-driven services.</strong></p>
        </div>
      </div>

      {srvcs.map((item, index) => (
        <Link className='Services-sections' to={item.link} >
          <div className='container-max'>
            <div className='service-inner' key={index}>
              <h2>{item.SrvcsHeading}</h2>
              <p>{item.SrvcsDiscribtion}</p>
            </div>
          </div>
        </Link>
      ))}
      <div>
        <Contacts4 contactbg={bggcontact3} />
      </div>
    </wrapper>

  )
}

export default Services