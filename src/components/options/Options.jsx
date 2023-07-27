"use client"
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./card";
import { options } from "./data";
const Options = () => {
    const [deviceType, setDeviceType] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let newDeviceType = "";

      if (width >= 1024) {
        newDeviceType = "desktop";
      } else if (width >= 600) {
        newDeviceType = "tablet";
      } else {
        newDeviceType = "mobile";
      }

      setDeviceType(newDeviceType);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 0, 
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 3,
      slidesToSlide: 3, 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 2, 
    },
  };
  return (
    <div className="bg-white">
      <div className="w-full text-lg sm:text-xl lg:text-2xl font-semibold font-[Poppins] flex justify-center">
        <h2 className="mt-6 text-gray-700 px-6 sm:px-4">
        GET STARTED WITH EXPLORING REAL ESTATE OPTIONS
        </h2>
      </div>

      <Carousel
        swipeable={deviceType !== ["tablet", "mobile"]? true : false}
        draggable={deviceType !== ["tablet", "mobile"]? true : false}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={10000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile" , 'desktop']}
        deviceType={deviceType}
        focusOnSelect={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-30-px"
      >
        {options.map((src) => (
          <div key={src.name}>
            <Card imgsrc={src.link} service={src.name} />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Options