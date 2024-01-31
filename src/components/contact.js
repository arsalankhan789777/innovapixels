import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contacts4 = ({ contactbg }) => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState('');

  // Callback function for reCAPTCHA
  const onRecaptchaSubmit = (response) => {
    // Set the reCAPTCHA response in your form data
    form.current['g-recaptcha-response'] = response;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Get the reCAPTCHA response
    const recaptchaResponse = form.current['g-recaptcha-response'];

    emailjs
      .sendForm('service_anaz5vv', 'template_ov5c74b', form.current, '-MAEhlLayaWsyZOjz', { 'g-recaptcha-response': recaptchaResponse })
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

  useEffect(() => {
    // Load the reCAPTCHA script when the component mounts
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    // Optionally, you can remove the script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

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
            <form action="?" method="POST" ref={form} onSubmit={sendEmail}>
              <label htmlFor="fname">First Name</label>
              <input id="fname" type='text' name='user_name' placeholder='How should we address you?' autoComplete='off' required />
              <label htmlFor="email">EMAIL</label>
              <input id="email" type='email' name='user_email' placeholder="Let's start a chain. " autoComplete='off' required />
              <label htmlFor="phone">PHONE</label>
              <input id='phone' type='tel' name='user_tel' placeholder='So nothing gets lost in translation.' autoComplete='off' required />
              <label htmlFor="comment">COMMENT</label>
              <input id='comment' type='text' name='message' placeholder='Disruption starts here. How can we help?' autoComplete='off' required />
              <div className="g-recaptcha" data-sitekey="6LcbjmIpAAAAAHWMZSAz2tWRpiaX2OZBs8H1026q" data-callback={onRecaptchaSubmit}></div>
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
