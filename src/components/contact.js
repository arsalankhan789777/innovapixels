import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contacts4 = ({ contactbg }) => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_anaz5vv', 'template_ov5c74b', form.current, '-MAEhlLayaWsyZOjz')
      .then(
        (result) => {
          console.log(result.text);
          setStatusMessage('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatusMessage('An error occurred. Please try again.');
        }
      );
  };

  return (
    <>
      {contactbg.map((item, index) => (
        <wrapper key={index} className="contact-main-wrapper">
          <div className='Main-Form-Background' style={{ backgroundImage: item.background }}>
            <h2>Contact Us</h2>
          </div>
          <div className='contactform'>
            <h3>Let's chat over a brew.</h3>
            <span>Coffee, tea, or something stronger...</span>

            <form ref={form} onSubmit={sendEmail}>
            <label for="fname">First Name</label>
            <input id="fname" type='text' name='user_name' placeholder='How should we address you?' autoComplete='off' required />
            <label for="email">EMAIL</label>
            <input id="email" type='email' name='user_email' placeholder="Let's start a chain. " autoComplete='off' required />
            <label for="phone">PHONE</label>
            <input id='phone' type='tel' name='user_tel' placeholder='So nothing gets lost in translation.' autoComplete='off' required />
            <label for="comment">COMMENT</label>
            <input id='comment' type='text' name='message' placeholder='Disruption starts here. How can we help?' autoComplete='off' required />
            <input id="submit" type="submit" value="Get Our Attention" />
            </form>
            <div className="status-message">{statusMessage}</div>
          </div>
        </wrapper>
      ))}
    </>
  );
};

export default Contacts4;
