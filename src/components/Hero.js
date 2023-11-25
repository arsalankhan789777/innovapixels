import React from 'react';


const Hero = ({ herosectioncons }) => {
    return (
        <section>
            {herosectioncons.map((item, index) => (
                <div className='section1-hero' style={{ backgroundImage: item.background }}>
                    <div className='container-max'>
                        <div className='content-hero' key={index}>
                            <h2>{item.headinghero}<strong>{item.boldheading}</strong></h2>
                            <p>{item.parahero}</p>
                            <a href={item.link}>{item.linktext} <div class="svg svg--arrow button-svg_arrow"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svg-inline--fa fa-long-arrow-right fa-w-14" data-icon="long-arrow-right" data-prefix="fal" viewBox="0 0 448 512">
                                <path fill="currentColor" d="M311.03 131.515l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887l-83.928 83.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l116.485-116c4.686-4.686 4.686-12.284 0-16.971L328 131.515c-4.686-4.687-12.284-4.687-16.97 0z"></path>
                            </svg>
                            </div></a>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Hero;
