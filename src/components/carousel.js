import React, { useState, useEffect, useRef } from 'react';
import Carousel from 'react-elastic-carousel';
import shopify1 from './images/images-carousel/LiveWell.png';
import shopify2 from './images/images-carousel/NeoCharge.png';
import wordpress1 from './images/images-carousel/Alfan.png';
import wix1 from './images/images-carousel/quest-films.jpg';



const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 1200, itemsToShow: 1.3 },
];

const CarouselS3 = () => {
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const caross = [
    {
      link: 'https://livewellproject.co.uk/',
      image: shopify1,
      content: 'See What We Did',
      services: 'Design(UI/UX), Development, SEO, Social integrations',
      title: 'Live Well Project',
      excerpt: 'JEWELLERY AND UNIQUE COLLECTIONS THAT BRING ENERGY TO LIFE',
    },
    {
      link: 'https://getneocharge.com/',
      image: shopify2,
      content: 'See What We Did',
      services: 'Design(UI/UX), Development, SEO, Social integrations',
      title: 'Get Neo Charge',
      excerpt: 'A Charging Station For Electric Cars',
    },
    {
      link: 'https://www.quest-films.com/',
      image: wix1,
      content: 'See What We Did',
      services: 'Design(UI/UX), Development, SEO, Social integrations ',
      title: 'Quest-Films',
      excerpt: 'Video Production',
    },
    {
      link: 'https://alfangroup.com/',
      image: wordpress1,
      content: 'See What We Did',
      services: 'Design(UI/UX), Development, SEO, Social integrations ',
      title: 'Alfan Group',
      excerpt: 'The Platform for Content Creators',
    },
   
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const totalSlides = caross.length;
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
      carouselRef.current.goTo((currentSlide + 1) % totalSlides);
    }, 5000); // Change slide every 5 second

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [caross.length, currentSlide]);

  const handleSlideChange = (currentItem, pageIndex) => {
    setCurrentSlide(pageIndex);
  };

  return (
    <>
      <div className='container-max '>
        <h2 className='recent-work'>Recent<span>Work</span></h2>
        <div className='App'>
          <Carousel
            ref={carouselRef}
            breakPoints={breakPoints}
            enableMouseSwipe={false}
            onChange={handleSlideChange}
            currentIndex={currentSlide}
          >
            {caross.map((item, index) => (
              <div className='main-carr' key={index}>
                <a href={item.link}>
                  <div className='img-main'>
                    <img src={item.image} alt='img' />
                    <div className='image-btn'>
                      <span>{item.content}</span>
                      <span>{item.rightArrow}</span>
                    </div>
                  </div>
                </a>
                <p className='itservi'>{item.services}</p>
                <h6>{item.title}</h6>
                <p className='itexce'>{item.excerpt}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default CarouselS3;
