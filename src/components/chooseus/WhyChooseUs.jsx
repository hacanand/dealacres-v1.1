'use client'
import './WhyChooseUs.css';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const WhyChooseUs = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight) {
        container.classList.add('animate');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='container' ref={containerRef}>
      <h2 className='heading'>Why Choose Deal Acres for Property Search?</h2>
      <p className='subheading'>
        We provide top-notch services that make us stand out from the rest.
      </p>
      <div className='imagesContainer'>
        <div className='imageWrapper'>
          <Image
            src="/7.png"
            alt="Image 1"
            width={200}
            height={300}
            className=' image'
          />
        </div>
        <div className='imageWrapper'>
          <Image
            src="/8.png"
            alt="Image 2"
            width={200}
            height={300}
            className='image'
          />
        </div>
        <div className='imageWrapper'>
          <Image
            src="/9.png"
            alt="Image 3"
            width={200}
            height={300}
            className='image'
          />
        </div>
        <div className='imageWrapper'>
          <Image
            src="/10.png"
            alt="Image 4"
            width={200}
            height={300}
            className='image'
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
