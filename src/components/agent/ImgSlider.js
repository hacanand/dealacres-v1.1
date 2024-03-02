"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import React from "react";
import Card from "./Card";
import styles from "./imgslider.module.css";

const ImgSlider = () => {
  const ManualData = [
    {
      id: 1,
      imageSrc: "/Agent/housing.webp",
    },
    {
      id: 2,
      imageSrc: "/Agent/housing2.jpg",
    },
    {
      id: 3,
      imageSrc: "/Agent/housing3.jpg",
    },
    {
      id: 4,
      imageSrc: "/Agent/housing4.jpg",
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
              <Card imageSrc={ManualItem.imageSrc} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImgSlider;
