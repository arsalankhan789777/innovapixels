import React from 'react'

const ContactDetails = ({ ContactDetails }) => {
    return (
        <wrapper>
            <div>
                {ContactDetails.map((item, index) => (
                    <div>
                        <div className='container-max'>
                            <div className='left-adress'>
                                <h3 class="contact-info__title b6">
                                    {item.addresstitle}
                                </h3>
                            </div>
                            <div className='right-adress'>
                                <div className='right-inner-left'>
                                    <p class="contact-info__contact-title b6 b6--small">{item.phone}</p>
                                    <a href="tel:{item.tel}" class="contact-info__contact-copy b2">{item.tel}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </wrapper>
    )
}

export default ContactDetails