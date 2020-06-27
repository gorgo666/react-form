/** @format */

import React from 'react';
import emailjs from 'emailjs-com';

// import './ContactUs.css';

export default function Contact1() {
  function sendEmail(e) {
    e.preventDefault();
    console.log(e.target);

    emailjs
      .sendForm('gmail', 'gorgo', e.target, 'user_Upop28FjXOW2P40U4U0WF')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <form className='contact-form' onSubmit={sendEmail}>
      <input type='hidden' name='contact_number' />
      <label>Name</label>
      <input type='text' name='user_name' />
      <label>Email</label>
      <input type='email' name='user_email' />
      <label>Message</label>
      <textarea name='message' />
      <input type='submit' value='Send' />
    </form>
  );
}
