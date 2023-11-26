import React from 'react';
import imgbx1 from '../components/images/Brands/livewellproject.png';
import imgbx2 from '../components/images/Brands/getneocharge.png';
import imgbx3 from '../components/images/Brands/alfangroup.png';
import imgbx4 from '../components/images/Brands/diabloorganics.png';
import imgbx5 from '../components/images/Brands/fishverify.png';
import imgbx6 from '../components/images/Brands/ampla.finance..png';
import imgbx7 from '../components/images/Brands/AskAssist.webp';
import imgbx8 from '../components/images/Brands/calltrackingmetrics.png';

const imgbx = [
    {
      link: '#',
      imageBoxes: imgbx1,
      imageBoxestitle: 'Lifestyle / Jewellery',
  
    },
    {
      link: '#',
      imageBoxes: imgbx2,
      imageBoxestitle: 'Electric Charger',
  
    },
    {
      link: '#',
      imageBoxes: imgbx3,
      imageBoxestitle: 'Creators',
  
    },
    {
      link: '#',
      imageBoxes: imgbx4,
      imageBoxestitle: 'Lifestyle / Crystals',
  
    },
    {
      link: '#',
      imageBoxes: imgbx5,
      imageBoxestitle: 'Sea Food',
  
    },
    {
      link: '#',
      imageBoxes: imgbx6,
      imageBoxestitle: 'Finance',
  
    },
    {
      link: '#',
      imageBoxes: imgbx7,
      imageBoxestitle: 'Virtual Assistants',
  
    },
    {
      link: '#',
      imageBoxes: imgbx8,
      imageBoxestitle: 'Calling Services',
  
    },
  
  
  ];

const Brands = () => {
  return (
    <div className='section4'>
        <div className='container-max'>
          <h2 className='recent-work r2'>Featured<span>Clients</span></h2>
          <div className='main-img-boxex'>
            {imgbx.map((item, index) => (
              <div className='img-boxes' key={index}>
                <a href={item.link} >
                  <img src={item.imageBoxes} alt="img" />
                  <p>{item.imageBoxestitle}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default Brands