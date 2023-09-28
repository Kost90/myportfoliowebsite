import React, { memo, useCallback } from "react";
import { useForm } from "react-hook-form";
import { string, object } from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import {flex_container_form} from './ContactForm.module.css'

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
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(object().shape(contactSchema)),
  });

  const onSubmit = useCallback((data) => {
    console.log(data);
    reset();
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={flex_container_form}>
      <input
        type="text"
        {...register("name", { required: true })}
        placeholder="Enter your full name"
      />
      {errors.text && <div style={{ color: "red" }}>Enter your name</div>}
      <input
        type="email"
        {...register("email", { required: true })}
        placeholder="Enter your email"
      />
      {errors.email && <div style={{ color: "red" }}>Enter your email</div>}
      <input
        type="number"
        {...register("phone", { minLength: 8, maxLength: 25 })}
        placeholder="Enter you phone number"
      />
      {errors.phone && <div style={{ color: "red" }}>Enter your number</div>}

      <textarea
        cols="30"
        rows="10"
        {...register("comment", { required: true })}
        placeholder="Leave your comment"
      ></textarea>
      <button type="submit">SEND</button>
    </form>
  );
});

export default ContactForm;
