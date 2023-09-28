"use client"
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import styles from "./details.module.css"

const ContactForm = () => {
    const {register, handleSubmit} = useForm();
  return (
    <div className={styles.ContactForm}>
      <form onSubmit={handleSubmit((data) => {
        console.log(data);
      })}>
        <h2 className={styles.contactHead}>Contact Us</h2> 
        <input type="text" {...register("name")} placeholder='Enter Your Name' />
        <input type="mail" {...register("email")} placeholder='Enter Your Mail Id' />
        <input type="tel" {...register("phone")} placeholder='Enter Your Phone No.' />

        <select type="text" {...register("iam")} placeholder='I am' >
            <option value="I am" selected className={styles.iamInput}>I am</option> 
            <option value="An Existinng Client of Square Yards or Square Capital">An Existinng Client of Square Yards or Square Capital</option>
            <option value="Looking to buy/invest in property">Looking to buy/invest in property</option>
            <option value="Looking for a Loan">Looking for a Loan</option>
            <option value="A Real Estate Agent/Financial Advisor looking for Partnership">A Real Estate Agent/Financial Advisor looking for Partnership</option>
            <option value="A Developer/Real Estate Builder Looking for Partnership">A Developer/Real Estate Builder Looking for Partnership</option>
            <option value="Looking for Job">Looking for Job</option>
            <option value="Others">Others</option>
            </select>

        <input type="text" {...register("Message")} placeholder='Enter Your Mesage' />
        <button type="submit" > Submit</button>
        </form>
    </div>
  )
}

export default ContactForm;
