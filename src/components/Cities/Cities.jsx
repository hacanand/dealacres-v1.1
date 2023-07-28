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
    centerPadding: "60px",
    slidesToShow: 3,
    className: "center",
    slidesToScroll: 3,
    arrows:false,
    rows: 2,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows:1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
  };

  return (
    <div className="bg-white mt-32 ml-10 mb-5 ">
      <Slider {...settings} className="" >
        {citiesData.map((city, index) => (
          <Link href='#' key={index} className="mb-4"><Card  title={city.title} content={city.content} /></Link>
        ))}
      </Slider>
    </div>
  );
};

export default Cities;