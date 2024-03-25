"use client";
import "./WhyChooseUs.css";
import Image from "next/image";
import { useEffect, useRef } from "react";

const WhyChooseUs = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight) {
        container.classList.add("animate");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-center">
      <div className="container" ref={containerRef}>
        <h2 className="heading">Why Choose Deal Acres for Property Search?</h2>
        <p className="subheading">
          We provide top-notch services that make us stand out from the rest.
        </p>
        <div className="imagesContainer">
          <div className="imageWrapper">
            <Image
              src="/77.png"
              alt="Image 1"
              width={200}
              height={300}
              className="image"
            />
            <div className="textWrapper">We offer an extensive inventory of properties, providing diverse options for potential buyers or investors.</div>
          </div>
          <div className="imageWrapper">
            <Image
              src="/78.png"
              alt="Image 2"
              width={200}
              height={300}
              className="image"
            />
            <div className="textWrapper">We offer an easy-to-use website or app, enhancing the user experience and simplifying property searches.</div>
          </div>
          <div className="imageWrapper ">
            <Image
              src="/79.png"
              alt="Image 3"
              width={200}
              height={300}
              className="image"
            />
            <div className="textWrapper">We prioritize transparency in property deals, ensuring secure and trustworthy transactions. to the clients </div>
          </div>
          <div className="imageWrapper">
            <Image
              src="/80.png"
              alt="Image 4"
              width={200}
              height={300}
              className="image"
            />
            <div className="textWrapper">We provide tailored property recommendations based on individual preferences and investment goals.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
