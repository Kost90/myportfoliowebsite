import React from 'react';
import ContactForm from '../contactform/ContactFrom';
import {container} from './Contact.module.css'

function Contact() {
  return (
    <div className={container}>
        <h1>Write some message:</h1>
        <ContactForm/>
    </div>
  )
}

export default Contact