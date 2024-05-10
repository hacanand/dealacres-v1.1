'use client'

import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './slider.css'

import GuideCard from '../blog/guides/GuideCard';
import GuidesCustomArrow from './GuidesCustomArrow';
import { AiOutlineRight } from 'react-icons/ai';

const GuidesSlider = ({
    allGuides,
    handleTabChange
}) => {


    const settings = {
        className: "slider variable-width",
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        nextArrow: <GuidesCustomArrow icon={AiOutlineRight} isNext/>,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                rows:1,
                arrows:false,
                dots: true,

                infinite: true,

              }
            },
            {
              breakpoint: 350,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                rows:1,
                arrows:false,
                dots: true,

                infinite: true,

              }
            },
            
          ],

    };

    function handleGuideClick(index) {
        if(handleTabChange){
            handleTabChange(index)
        }
    }
    return (
        <div className='mb-8 px-1 py-1'>
            <Slider {...settings} className='px-1'>
                {
                    allGuides.map((guide, index) => {
                        return (
                            <div key={index} className=' w-full h-full' onClick={() => handleTabChange(index)}>

                                <GuideCard  title={guide.title} bgColor={guide.bgColor} textColor={guide.textColor} borderColor={guide.borderColor} img={guide.img} variableWidth={true} isAllGuide={true}  />
                            </div>
                        )
                    })
                }
            </Slider>

        </div>
    )
}

export default GuidesSlider