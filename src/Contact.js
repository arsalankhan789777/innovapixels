import React from 'react';
import Contacts4 from './components/contact';
import ContactDetails from './components/ContactDetails';
import { useEffect } from 'react';

const bggcontact = [
  {
    background: `url(${process.env.PUBLIC_URL}/images/bg-img5.jpg)`,
  }
];
const conactdetailsconstin = [
  {
    addresstitle: 'DROP US A LINE',
    phone: 'PHONE',
    tel:'+1 (646) 564-3880',
  },
    
];

const Contact = () => {

  useEffect(() => {
    document.body.classList.add('home-page-body');
    return () => {
      document.body.classList.remove('home-page-body');
    };
  }, []);

  return (
    <wrapper>
    <div className='contact-us-page'>
      <Contacts4 contactbg={bggcontact} />
    </div>
    <ContactDetails ContactDetails={conactdetailsconstin}/>
    </wrapper>
  )
}

export default Contact