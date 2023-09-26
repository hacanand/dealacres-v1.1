import React from 'react'
import ReviewsLayout from './ReviewsLayout';
import style from "./reviews.module.css"

const Reviews = () => {
  return (
    <div className={style.ReviewMargin}>
      <p>Welcome to our Testimonial Page, where our valued customers share their experiences and thoughts about our products and services. We take pride in providing top-notch solutions that make a positive impact on the lives of our clients. Don't just take our word for it – read what our customers have to say:</p>
      <ReviewsLayout />
      <div className={style.ReviewLayout}></div>
      <div className="text-center">
      <button className={style.MoreReviews}>Read More</button>
      </div>
    </div>
  )
}

export default Reviews;
