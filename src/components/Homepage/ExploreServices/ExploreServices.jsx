'use client';
import Image from 'next/image';
import React from 'react';

const Card = ({ index, imageUrl, heading }) => {


    return (
        <div key={index} className=" w-28 flex flex-col items-center justify-center gap-3 p-2 rounded-xl bg-white text-black">
            <p className='font-bold text-center'>{heading}</p>
            <Image src={imageUrl} width={50} height={80} alt={heading} />

        </div>
    );
};


const ExploreServices = () => {

    const cardData = [
        
        {
            imageUrl: 'https://media-public.canva.com/N3bz0/MAFi_QN3bz0/1/t.png',
            heading: 'Rent Agreement'
        },
        {
            imageUrl: 'https://media-public.canva.com/nB8Ek/MAFfqznB8Ek/1/t.png',
            heading: 'Home Loan'
        },
        {
            imageUrl: 'https://media-public.canva.com/FX_B4/MAFaqXFX_B4/1/t.png',
            heading: 'Property Valuer'
        },
        {
            imageUrl: 'https://media-public.canva.com/zLeFA/MAFKtnzLeFA/1/t.png',
            heading: 'Legal Services'
        },
        {
            imageUrl: 'https://media-public.canva.com/iA9GI/MAERBHiA9GI/1/t.png',
            heading: 'Chartered Accountant'
        },
        {
            imageUrl: 'https://media.canva.com/1/image-resize/1/200_200_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9hdGZfcy9NQUZfTHdhdGZfcy8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAAG7nY1VllUHOtienx68xW0A17EWsrVDhfKYcPEa3wXAw&exp=1711452937&x-canva-quality=thumbnail&csig=AAAAAAAAAAAAAAAAAAAAAFJMztft6Vd3mEtRMy3wLw9eBHl_22xdZlSAoibGngk5',
            heading: 'Home Decor'
        },
        {
            imageUrl: 'https://media.canva.com/1/image-resize/1/200_200_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9hYU9jQS9NQUZfTDNhYU9jQS8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAACWa77Bi6j-0Jgeh-ppTGBgPnNL3GdqfC02m9O0ljOHf&exp=1711449720&x-canva-quality=thumbnail&csig=AAAAAAAAAAAAAAAAAAAAALU2dFmQ_aiAIT2WhGMs8Q6Y6TwDEN-meFVc1meTQUgb',
            heading: 'Home Interior'
        },
        {
            imageUrl: '/homePage/vastu_sastra.png',
            heading: 'Vastu Sartar'
        },
        {
            imageUrl: 'https://media.canva.com/1/image-resize/1/200_200_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS8wMHo3Zy9NQUZfTHkwMHo3Zy8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAALFwRkphHr9yoMD7oOBQYbY45ZceHRj0TQDz0OY8CedI&exp=1711451803&x-canva-quality=thumbnail&csig=AAAAAAAAAAAAAAAAAAAAACqotp7YaidiYjaIBSgeCiXAzq5uwItV54IfprfZKr85',
            heading: 'Construction Contractor'
        },
        {
            imageUrl: 'https://media.canva.com/1/image-resize/1/200_200_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9NV0NYZy9NQUZfTUZNV0NYZy8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAAE02JtSLQYPzFwJI-43dZ3FccRwMq4Y36J-MliIrex9r&exp=1711450548&x-canva-quality=thumbnail&csig=AAAAAAAAAAAAAAAAAAAAAAzHuQhWHDO8JYEnMkNAx_4SqgE2LB30JmdwdbdcE_0V',
            heading: 'Modular Kitchen'
        }
    ];
    return (
        <div className='bg-[#e3f4f4] p-16'>
        <h2 className='text-center font-semibold text-lg md:text-2xl mb-10'>LET'S START WITH EXPLORING REAL ESTATE OPTIONS</h2>
        <div className='flex justify-center'>
          <div className=' mx-auto  grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-6 cursor-pointer'>
            {cardData.map((card, index) => (
              <Card key={index} imageUrl={card.imageUrl} heading={card.heading} />
            ))}
          </div>
        </div>
      </div>
      


    )
}

export default ExploreServices