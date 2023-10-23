// import React, { Component } from 'react'
import Carousel from "react-elastic-carousel";
import image1carousel from "./images-carousel/girl.jpg";
import image2carousel from "./images-carousel/meuseum.jpg";
import image3carousel from "./images-carousel/text.jpg";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 2.5 },
];

const CarouselS3 = () => {
  const caross = [
    {
      link: "#",
      image: image1carousel,
      content: "See What We Did",
      services: "Videography, Creative Services, Branding, Video Production",
      title: "The Cashmere Sale",
      excerpt: "A Seasonal Collection of Timeless Cashmere",
    },
    {
      link: "#",
      image: image2carousel,
      content: "See What We Did",
      services: "Videography, Creative Services, Branding, Video Production",
      title: "The Cashmere Sale",
      excerpt: "A Seasonal Collection of Timeless Cashmere",
    },
    {
      link: "#",
      image: image3carousel,
      content: "See What We Did",
      services: "Videography, Creative Services, Branding, Video Production",
      title: "The Cashmere Sale",
      excerpt: "A Seasonal Collection of Timeless Cashmere",
    },
    {
      link: "#",
      image: image2carousel,
      content: "See What We Did",
      services: "Videography, Creative Services, Branding, Video Production",
      title: "The Cashmere Sale",
      excerpt: "A Seasonal Collection of Timeless Cashmere",
    },
  ];

  return (
    <>
      <h2 className="container-max recent-work">
        Recent<span>Work</span>
      </h2>
      <div className="App container-max-slider">
        <Carousel
          breakPoints={breakPoints}
          itemPadding={[0, 10]} // Optional: Set item padding
          focusOnSelect={false} // Disable focusing on selected item
          pagination={false} // Disable pagination dots (optional)
          enableMouseSwipe={false}
          enableTouchSwipe={false}
          itemPosition="center" // Center items
          renderArrow={({ type, onClick }) => (
            <button onClick={onClick} className={`custom-arrow custom-${type}`}>
              {type === "PREV" ? "<" : ">"}
            </button>
          )}>
          {caross.map((item, index) => (
            <div className="main-carr" key={index}>
              <a className="" href={item.link}>
                <div className="img-main">
                  <img src={item.image} alt="img" />
                  <div className="image-btn">
                    <span>{item.content}</span>
                    <span>{item.rightArrow}</span>
                  </div>
                </div>
              </a>
              <p className="itservi">{item.services}</p>
              <h6>{item.title}</h6>
              <p className="itexce">{item.excerpt}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default CarouselS3;
