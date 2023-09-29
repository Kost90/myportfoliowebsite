import React, {forwardRef} from 'react';
import { motion } from "framer-motion";
import ContactForm from '../contactform/ContactFrom';
import {container} from './Contact.module.css'

function Contact(props,ref) {
  return (
    <div className={container} ref={ref}>
        <motion.h1
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ amount: 0.2, once: true }}>Write some message:</motion.h1>
        <ContactForm/>
    </div>
  )
}

export default forwardRef(Contact)