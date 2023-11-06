import React, { memo, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { string, object } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { flex_container_form } from "./ContactForm.module.css";
import emailjs from '@emailjs/browser';

// const key = process.env.REACT_APP_PUBLIC_KEY;

const phoneNumberRegex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;

const contactSchema = {
  name: string().trim().required().min(3).max(20).label("Your Fullname"),
  phone: string()
    .matches(phoneNumberRegex, "Is not a number")
    .label("Phone Number"),
  email: string()
    .email()
    .required()
    .matches(/@[^.]*\./)
    .label("Your email"),
  comment: string().trim().required().min(3).label("Your message"),
};

const ContactForm = memo(() => {
  const form = useRef(null);
  const rightAnimation = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.7 },
    },
  };

  const leftAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.7 },
    },
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(object().shape(contactSchema)),
  });

  const onSubmit = useCallback(() => {
    emailjs.sendForm('portfolio', 'contact_form', form.current, `${process.env.GATSBY_PUBLIC_KEY}`)
    reset();
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={flex_container_form} ref={form}>
      <motion.input
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        variants={rightAnimation}
        type="text"
        {...register("name", { required: true })}
        placeholder="Enter your full name"
      />
      {errors.text && <div style={{ color: "red" }}>Enter your name</div>}
      <motion.input
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        variants={leftAnimation}
        type="email"
        {...register("email", { required: true })}
        placeholder="Enter your email"
      />
      {errors.email && <div style={{ color: "red" }}>Enter your email</div>}
      <motion.input
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        variants={rightAnimation}
        type="number"
        {...register("phone", { minLength: 8, maxLength: 25 })}
        placeholder="Enter you phone number"
      />
      {errors.phone && <div style={{ color: "red" }}>Enter your number</div>}

      <motion.textarea
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        variants={leftAnimation}
        cols="30"
        rows="10"
        {...register("comment", { required: true })}
        placeholder="Leave your comment"
      ></motion.textarea>
      <button type="submit">SEND</button>
    </form>
  );
});

export default ContactForm;
