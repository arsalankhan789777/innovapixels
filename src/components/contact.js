import React from 'react'

const Contacts4 = ({ contactbg }) => {

    return (
        <>
            {contactbg.map((item, index) => (
                <wrapper className="contact-main-wrapper">
                    <div className='Main-Form-Background' style={{ backgroundImage: item.background }}>
                        <h2>Contact Us</h2>
                    </div>
                    <div className='contactform'>
                        <h3>Let's chat over a brew.</h3>
                        <span>Coffee, tea, or something stronger...</span>
                        <form action='#' method='POST'>
                            <label for="fname">First Name</label>
                            <input id="fname" type='text' name='name' placeholder='How should we address you?' autoComplete='off' required />

                            <label for="email">EMAIL</label>
                            <input id="email" type='email' name='email' placeholder="Let's start a chain. " autoComplete='off' required />


                            <label for="phone">PHONE</label>
                            <input id='phone' type='tel' name='tel' placeholder='So nothing gets lost in translation.' autoComplete='off' required />


                            <label for="comment">COMMENT</label>
                            <input id='comment' type='text' name='comment' placeholder='Disruption starts here. How can we help?' autoComplete='off' required />

                            <input id="submit" type="submit" value="Get Our Attention" />
                        </form>
                    </div>
                </wrapper>

            ))}

        </>
    )
}

export default Contacts4