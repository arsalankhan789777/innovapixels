import React from 'react'

const ContactDetails = ({ ContactDetails, ContactDetails2, ContactDetails3 }) => {
    return (
        <wrapper>
            <div>
                {ContactDetails.map((item, index) => (
                    <div className='first-des'>
                        <div className='container-max'>
                            <div className='left-adress'>
                                <h3 class="contact-info__title b6">
                                    {item.addresstitle}
                                </h3>
                            </div>
                            <div className='right-adress'>
                                <p class="contact-info__contact-titlep1 stylesame-p">{item.phone}</p>
                                <a href="tel:{item.tel}" class="contact-info__contact-copya1 stylesame-a">{item.tel}</a>
                                <p class="contact-info__contact-titlep2 stylesame-p">{item.text1}</p>
                                <p class="contact-info__contact-titlep3 stylesame-a">{item.text2}</p>
                            </div>
                            <div className='more-right-inner-right'>
                                <p class="contact-info__contact-titlep1 stylesame-p">{item.text3}</p>
                                <a href="tel:{item.tel}" class="contact-info__contact-copya1 stylesame-a">{item.text4}</a>
                                <p class="contact-info__contact-titlep2 stylesame-p">{item.text5}</p>
                                <p class="contact-info__contact-titlep3 stylesame-a">{item.text6}</p>
                            </div>
                        </div>
                    </div>
                ))}

                {ContactDetails2.map((item, index) => (
                    <div className='second-des'>
                        <div className='container-max'>
                            <div className='left-adress'>
                                <h3 class="contact-info__title b6">
                                    {item.StateTitle}
                                </h3>
                            </div>
                            <div className='right-adress'>
                                <a href="{item.AddressLink}" class="contact-info__contact-copya1 stylesame-a">{item.AddressTitle}</a>
                            </div>
                            <div className='more-right-inner-right'>
                                <a href="{item.DirectionLink}" class="contact-info__contact-copya1 stylesame-a">{item.DirectionTitle} <div class="svg svg--arrow location-info__arrow"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svg-inline--fa fa-long-arrow-right fa-w-14" data-icon="long-arrow-right" data-prefix="fal" viewBox="0 0 448 512">
                                    <path fill="currentColor" d="M311.03 131.515l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887l-83.928 83.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l116.485-116c4.686-4.686 4.686-12.284 0-16.971L328 131.515c-4.686-4.687-12.284-4.687-16.97 0z"></path>
                                </svg>
                                </div></a>
                            </div>
                        </div>
                    </div>
                ))}

                {ContactDetails3.map((item, index) => (
                    <div className='second-des third-des'>
                        <div className='container-max'>
                            <div className='left-adress'>
                                <h3 class="contact-info__title b6">
                                    {item.StateTitle}
                                </h3>
                            </div>
                            <div className='right-adress'>
                                <a href="{item.AddressLink}" class="contact-info__contact-copya1 stylesame-a">{item.AddressTitle}</a>
                            </div>
                            <div className='more-right-inner-right'>
                                <a href="{item.DirectionLink}" class="contact-info__contact-copya1 stylesame-a">{item.DirectionTitle} <div class="svg svg--arrow location-info__arrow"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svg-inline--fa fa-long-arrow-right fa-w-14" data-icon="long-arrow-right" data-prefix="fal" viewBox="0 0 448 512">
                                    <path fill="currentColor" d="M311.03 131.515l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887l-83.928 83.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l116.485-116c4.686-4.686 4.686-12.284 0-16.971L328 131.515c-4.686-4.687-12.284-4.687-16.97 0z"></path>
                                </svg>
                                </div></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </wrapper>
    )
}

export default ContactDetails