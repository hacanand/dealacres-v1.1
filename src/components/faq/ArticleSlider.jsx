'use client'

import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArticleCard from './ArticleCard';
import {GrLinkNext} from 'react-icons/gr'
import './slider.css'
import NextArrow from './NextArrow';

const ArticleSlider = () => {

    const articlesData = [
        {
            title: "How NRI can apply for home loan in India?",
            date: "Aug 11, 2023"
        },
        {
            title: "Option to switch fixed interest rate soon.",
            date: "Aug 11, 2023"
        },
        {
            title: "All you should know about MCLR",
            date: "Aug 11, 2023"
        },
        {
            title: "How NRI can apply for home loan in India?",
            date: "Aug 11, 2023"
        },
        {
            title: "How NRI can apply for home loan in India?",
            date: "Aug 11, 2023"
        },
        {
            title: "How NRI can apply for home loan in India?",
            date: "Aug 11, 2023"
        },
    ]

    const settings = {
        dots: false,

        infinite: true,
        speed: 200,
        slidesToScroll: 1,
        slidesToShow: 3,
        autoplay: false,
        rows: 1,
        centerMode: true,
        centerPadding: '0px',
        className: '',
        nextArrow: <NextArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                rows:1,
                arrows:false,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                rows:1,
                arrows:false,
                dots: true
              }
            }
          ],
    }
  return (
    <div className=" py-8  mx-auto">
        <h3 className='font-bold text-3xl py-4 px-4'>
          Articles
        </h3>
      <Slider {...settings} className="flex flex-nowrap justify-center items-stretch " >
      
        {articlesData.map((article, index) => (
            <ArticleCard key={index} index={index} title={article.title} date={article.date} />
        ))}
      </Slider>
    </div>
  )
}

export default ArticleSlider
