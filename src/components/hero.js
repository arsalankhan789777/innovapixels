import React from 'react';
import imgbx1 from './images/boximage.PNG';



const imgbx = [
    {
      link: '#',
      imageBoxes: imgbx1,
      imageBoxestitle: 'Beauty / Skincare',
  
    },
    {
      link: '#',
      imageBoxes: imgbx1,
      imageBoxestitle: 'Automotive',
  
    },
    {
      link: '#',
      imageBoxes: imgbx1,
      imageBoxestitle: 'Beauty / Skincare',
  
    },
    {
      link: '#',
      imageBoxes: imgbx1,
      imageBoxestitle: 'Government',
  
    },
    {
      link: '#',
      imageBoxes: imgbx1,
      imageBoxestitle: 'Beauty / Skincare',
  
    },
    {
      link: '#',
      imageBoxes: imgbx1,
      imageBoxestitle: 'Beauty / Skincare',
  
    },
    {
      link: '#',
      imageBoxes: imgbx1,
      imageBoxestitle: 'Beauty / Skincare',
  
    },
    {
      link: '#',
      imageBoxes: imgbx1,
      imageBoxestitle: 'Beauty / Skincare',
  
    },
  
  
  ];


const hero = () => {
  return (
    <div className='section1-hero'>
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

export default hero