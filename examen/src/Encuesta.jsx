import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import User from './User';
import './Encuesta.css'

function Encuesta() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_uq35unm', 'template_8dh6wrg', form.current, {
        publicKey: 'HHVEGkVU-sMYw1b0X',
      })
      .then(
        () => {
          alert("El gmail fue enviado con exito, gracias por compratir tu opinion conmigo.");
        },
        (error) => {
          alert("El gmail no fue enviado con exito, por favor revisa si esta correctamente la informacion.");
        },
      );
  };
  return (
    <div>
      <User/>
      <div className='container-from'>
        <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input className='input-form' type="text" name="user_name" />
        <label>Email</label>
        <input className='input-form' type="email" name="user_email" />
        <label>Message</label>
        <textarea className='input-form' name="message" />
        <input className='input-form' type="submit" value="Send" />
      </form>
      </div>
    
    </div>
  )
}

export default Encuesta