"use client";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./testimonial.css";
import { testimonialData } from "./tdata";
import Link from "next/link";
import Image from "next/image";

const Testimonial = () => {
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
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
      slidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 2,
    },
  };
  return (
    <div className="pt-6 pb-8 bg-indigo-50 mt-0">
      <div className=" max-w-full mx-auto px-12 ">
        <div className="text-center">
          <h2 className="text-3xl font-bold font-[Poppins] mb-4">
            Testimonials
          </h2>
          <p className="text-gray-600 mb-5">
            See what our happy buyers, tenants, owners, and dealers have to say!
          </p>
        </div>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          // ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={deviceType !== "mobile" ? true : false}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={deviceType}
          focusOnSelect={true}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-30-px"
        >
          {testimonialData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white shadow-black shadow-2xl rounded-xl p-6 mx-4 mt-3 mb-2 pb-3 "
              style={{
                boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.4)'
              }}
            >
              <p className="text-gray-800 text-base mb-4">
                {testimonial.testimonial}
              </p>
              <div className="flex items-center mb-4">
                <Image src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full mr-3" 
                    width={40} height={40}
                  />
                <div className="testimonial-info w-full">
                  <h3 className="text-xl font-bold mt-3 mb-2">{testimonial.name}</h3>
                  {/* <p className="text-gray-600">{testimonial.designation}</p> */}
                </div>
              </div>
              <div><p className="text-gray-600">{testimonial.designation}</p></div>
            </div>
          ))}
        </Carousel>
        <div className=" text-center pt-4 ">
        <p>
          <Link
            href="#"
            className=" font-semibold hover:underline-offset-1 hover:text-blue-500 text-gray-800"
          >
            View More Testimonials
          </Link>
        </p>
      </div>
      </div>
    </div>
  );
};
export default Testimonial;
