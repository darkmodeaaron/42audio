import React from 'react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

import exitIcon from '../assets/icons/EXIT-ICON.png';

const GlobalContact = ({ contactRefPP, contactStatePP, contactTogglePP }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    if (name.length > 1 && message.length > 1) {
      e.preventDefault();

      const serviceId = 'service_628yb6y'; // y
      const templateId = 'template_spwqhlf';
      const publicKey = 'ZAs3PduL-gnSPp5zr';

      const templateParams = {
        from_name: name,
        from_email: email,
        to_name: 'aaron',
        message: message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          console.log('Email sent success: ', response);
          setName('');
          setEmail('');
          setMessage('');
          alert('Form Complete');
        })
        .catch((error) => {
          console.log('Email error: ', error);
        });

      contactFormFunc();
      confirmationFunc();
    } else {
      e.preventDefault();

      alert('Complete form');
    }
  };

  return (
        <div ref={contactRefPP} id='#contact' className="landing-sub h-screen flex justify-center items-center relative bg-white">
          <form onSubmit={handleSubmit} className={`email-form w-screen flex flex-col justify-center items-center gap-8  px-6 `}>
            <h1 className=" custom-title text-4xl text-center font-extrabold text-heroBlue overflow-visible mb-8">CONTACT</h1>
            <input className="bg-white text-black max-w-96 border-heroBlue border-2 rounded-md w-80" type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)}/>
            <input className="bg-white text-black border-heroBlue rounded-md w-80" type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <textarea className="resize-none bg-white text-black w-80  rounded-md border-heroBlue" placeholder="Your message" rows={3} value={message} onChange={(e) => setMessage(e.target.value)}/>
            <button className="custom bg-heroBlue2 text-white text-LG font-semibold rounded-md px-4" type="submit">SEND</button>
          </form>
        </div>
  );
};

export default GlobalContact;
