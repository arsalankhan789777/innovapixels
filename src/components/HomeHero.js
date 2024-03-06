import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import image1carousel from './images/Hero-Background/bghero.png';
import work1 from './images/images-carousel/NeoCharge.png';
import work2 from './images/images-carousel/calltrackingmetrics.png';
import work3 from './images/images-carousel/impossiblehq.png';
import work4 from './images/images-carousel/jibble.io.png';

export const HomeHero = () => {
  const imgElementsRef = useRef([]);

  useEffect(() => {
    imgElementsRef.current = document.querySelectorAll('.img_work_featured .imageAndContentMain');

    // Function to add a class after a delay
    const addClassWithDelay = (element, className, delay) => {
      setTimeout(() => {
        element.classList.add(className);
      }, delay);
    };

    // Function to remove a class after a delay
    const removeClassWithDelay = (element, className, delay) => {
      setTimeout(() => {
        element.classList.remove(className);
      }, delay);
    };

    // Function to perform the animation loop
    const animateWithDelayLoop = () => {
      const totalAnimationDuration = imgElementsRef.current.length * 1000;

      imgElementsRef.current.forEach((element, index) => {
        addClassWithDelay(element, 'animated', index * 1000);

        setTimeout(() => {
          removeClassWithDelay(element, 'animated', 0);
        }, totalAnimationDuration + 10000); // Additional 10 seconds after individual animations
      });
    };

    // Start the animation loop after 6 seconds
    setTimeout(() => {
      animateWithDelayLoop();

      // Start the animation loop at regular intervals
      const animationInterval = setInterval(() => {
        animateWithDelayLoop();
      }, (imgElementsRef.current.length * 1000 + 6000) * 2); // Twice the duration of one loop for safety

      // Clear the interval when the component is unmounted
      return () => clearInterval(animationInterval);
    }, 3000); // 6 seconds

  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div className="MainHero" style={{ backgroundImage: `url(${image1carousel})` }}>
      <div className="container-max">


        <div className="Content_Hero">
          <h1>A creative minded web development agency </h1>
          <p>Our skilled team executes each project with precision,
                  expertise, and impact. Innovation runs deep in our core.</p>
          <Link to="/Work" className="b8 z2">Check out our work</Link>
        </div>
        <div className="AnimatedFlipp">
          <div className="img_work_featured">
            <div className='imageAndContentMain'>
              <img src={work1} alt='img' />
              <h1 className='heading_animated'>Information gathering and Planning</h1>
            </div>
            <div className='imageAndContentMain'>
              <img src={work2} alt='img' />
              <h1 className='heading_animated'>Visualization and Design</h1>
            </div>
            <div className='imageAndContentMain'>
              <img src={work3} alt='img' />
              <h1 className='heading_animated'>Development </h1>
            </div>
            <div className='imageAndContentMain'>
              <img src={work4} alt='img' />
              <h1 className='heading_animated'>Testing and Maintenance</h1>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomeHero;
