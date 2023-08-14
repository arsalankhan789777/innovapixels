import React from 'react';
import Contacts4 from './components/contact';
import ContactDetails from './components/ContactDetails';

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
    text1: 'GENERAL',
    text2: 'info@ruckusco.com',
    text3: 'CAREERS',
    text4: 'careers@ruckusco.com',
    text5: 'PRESS & MEDIA',
    text6: 'media@ruckusco.com',
  },
    
];

const conactdetailsconstin2 = [
  {
    StateTitle:'NEW YORK, NY',
    AddressLink: 'https://goo.gl/maps/H1NAPCHtVYKPEvv47',
    AddressTitle: '240 West 37th Street Floor 11 New York, NY 10018',
    DirectionLink: 'https://goo.gl/maps/H1NAPCHtVYKPEvv47',
    DirectionTitle: 'GET DIRECTIONS',

  }
];

const conactdetailsconstin3 = [
  {
    StateTitle:'ALLENTOWN, PA',
    AddressLink: 'https://goo.gl/maps/H1NAPCHtVYKPEvv47',
    AddressTitle: '612 Hamilton Street Floor 6 Allentown, PA 18101',
    DirectionLink: 'https://goo.gl/maps/H1NAPCHtVYKPEvv47',
    DirectionTitle: 'GET DIRECTIONS',

  }
];

const Contact = () => {



  return (
    <wrapper>
    <div className='contact-us-page'>
      <Contacts4 contactbg={bggcontact} />
    </div>
    <ContactDetails ContactDetails={conactdetailsconstin} ContactDetails2={conactdetailsconstin2} ContactDetails3={conactdetailsconstin3} />

    </wrapper>
  )
}

export default Contact