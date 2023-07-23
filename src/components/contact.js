import React from 'react'
// import styled from 'styled-components'

const Contacts4 = () => {

    return (
        <>
        <div className='Main-Form-Background'>
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
            </div>
        </>
    )
}

export default Contacts4