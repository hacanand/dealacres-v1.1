"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Cities.css";
import Card from './Card'
import Link from 'next/link'

const Cities = () => {
  
  const citiesData = [
    { title: "Mumbai", content: "This is the content of City 1" },
    { title: "pune", content: "This is the content of City 2" },
    { title: "gurgram", content: "This is the content of City 3" },
    { title: "HISAR", content: "This is the content of City 4" },
    { title: "LUCKNOW", content: "This is the content of City 5" },
    { title: "PUNJAB", content: "This is the content of City 6" },
    { title: "DELHI", content: "This is the content of City 7" },
    { title: "FARIDABAD", content: "This is the content of City 9" },
    { title: "City 10", content: "This is the content of City 10" },
    { title: "City 11", content: "This is the content of City 11" },
    { title: "City 12", content: "This is the content of City 12" },
    { title: "City 13", content: "This is the content of City 13" },
    { title: "City 14", content: "This is the content of City 14" },
    { title: "City 15", content: "This is the content of City 15" },
  ];

   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 2,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
       breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1
        }},
    ],
  };

  return (
    <div className="cities-carousel bg-white mb-6">
      <Slider {...settings} className="card-grid" >
        {citiesData.map((city, index) => (
          <Link href='#' key={index} className="mb-12"><Card  title={city.title} content={city.content} /></Link>
        ))}
      </Slider>
    </div>
  );
};

export default Cities;
