import React from 'react'
import { Carousel } from 'react-bootstrap';
import vid1 from './videos/1.mp4';
import vid2 from './videos/2.mp4';
import vid3 from './videos/3.mp4';
import "bootstrap/dist/css/bootstrap.css";



const VideoCarousel = () => {

    return (
        <div className="Hero">
            <div>
                <Carousel
                    controls={true}
                    interval={5500}
                    pause={false}
                >
                    <Carousel.Item>

                        <video
                            className="slider-video"
                            src={vid1}
                            loop
                            autoPlay
                            muted
                            loading="lazy"
                        ></video>

                        <div className='container-max'>

                            <div className='hero-title'>
                                <h1>
                                    <span className='d-span'>
                                    An Entrepreneurial Minded Agency
                                    </span>
                                    <span className='d-span btm-span'>
                                        <strong>+Creative Force</strong>
                                    </span>
                                </h1>
                                <p>Our skilled team executes each project with precision, expertise, and impact.
Innovation runs deep in our core.</p>
                                <div class="button-content z2">
                                    <span class="b8 z2">Check Out Our Work</span>
                                    <div class="svg svg--arrow button-svg_arrow"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svg-inline--fa fa-long-arrow-right fa-w-14" data-icon="long-arrow-right" data-prefix="fal" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M311.03 131.515l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887l-83.928 83.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l116.485-116c4.686-4.686 4.686-12.284 0-16.971L328 131.515c-4.686-4.687-12.284-4.687-16.97 0z"></path>
                                    </svg>
                                    </div>  
                                    </div>
                            </div>


                        </div>
                        <div className='overlay-hero'></div>

                    </Carousel.Item>
                    <Carousel.Item>
                        <video
                            className="slider-video"
                            src={vid2}
                            loop
                            autoPlay
                            muted
                            loading="lazy"
                        ></video>

                        <div className='container-max'>

                            <div className='hero-title'>
                                <h1>
                                    <span className='d-span'>
                                        Meet <strong>INNOVAPIXELS</strong>
                                    </span>
                                </h1>
                                <p>Our skilled team executes each project with precision, expertise, and impact.
Disruption is in our Core.</p>
                                <div class="button-content z2">
                                    <span class="b8 z2">Check Out Our Work</span>
                                    <div class="svg svg--arrow button-svg_arrow"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svg-inline--fa fa-long-arrow-right fa-w-14" data-icon="long-arrow-right" data-prefix="fal" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M311.03 131.515l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887l-83.928 83.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l116.485-116c4.686-4.686 4.686-12.284 0-16.971L328 131.515c-4.686-4.687-12.284-4.687-16.97 0z"></path>
                                    </svg>
                                    </div>  
                                    </div>
                            </div>


                        </div>
                        <div className='overlay-hero'></div>

                    </Carousel.Item>
                    <Carousel.Item>
                        <video
                            className="slider-video"
                            src={vid3}
                            loop
                            autoPlay
                            muted
                            loading="lazy"
                        ></video>

                        <div className='container-max'>

                            <div className='hero-title'>
                                <h1>
                                    <span className='d-span'>
                                        Performance is <strong>everything</strong>
                                    </span>
                                </h1>
                                <p>A masterful team that executes every engagement with precision, prowess, and power.<br></br>
                                    Disruption is in our DNA.</p>
                                <div class="button-content z2">
                                    <span class="b8 z2">Check Out Our Work</span>
                                    <div class="svg svg--arrow button-svg_arrow"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svg-inline--fa fa-long-arrow-right fa-w-14" data-icon="long-arrow-right" data-prefix="fal" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M311.03 131.515l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887l-83.928 83.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l116.485-116c4.686-4.686 4.686-12.284 0-16.971L328 131.515c-4.686-4.687-12.284-4.687-16.97 0z"></path>
                                    </svg>
                                    </div>  
                                    </div>
                            </div>


                        </div>
                        <div className='overlay-hero'></div>

                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default VideoCarousel