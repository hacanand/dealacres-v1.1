"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import React from 'react'
import Card from "./Card";
import styles from "./imgslider.module.css"

const ImgSlider = () => {
    const ManualData = [
        {
          id: 1,
          imageSrc: "https://via.placeholder.com/250x140",
        },
        {
          id: 2,
          imageSrc: "https://via.placeholder.com/250x140",
        },
        {
          id: 3,
          imageSrc: "https://via.placeholder.com/250x140",
        },
        {
          id: 4,
          imageSrc: "https://via.placeholder.com/250x140",
        },
        {
          id: 5,
          imageSrc: "https://via.placeholder.com/250x140",
        },
        {
          id: 6,
          imageSrc: "https://via.placeholder.com/250x140",
        },
      ];
    
  return (
    <div>
      <div className={styles.slider}>
      <Swiper
        spaceBetween={46}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          798: {
            slidesPerView: 2.5,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 50,
          },
        }}
      >
        {ManualData.map((ManualItem) => (
          <SwiperSlide key={ManualItem.id}>
            <Card
              imageSrc={ManualItem.imageSrc}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  )
}

export default ImgSlider
