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
            imageUrl: 'https://media.canva.com/1/image-resize/1/200_200_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9hdGZfcy9NQUZfTHdhdGZfcy8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAAF99tzaOKW7EKljohVaDM_-L0nJBGnOFki3hDWaXc7jO&exp=1711398937&x-canva-quality=thumbnail&csig=AAAAAAAAAAAAAAAAAAAAALte7d49G6CE3MdPOutgtjTxvma92qBJUKn9mkzB8pP8',
            heading: 'Home Decor'
        },
        {
            imageUrl: 'https://media.canva.com/1/image-resize/1/200_200_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9hYU9jQS9NQUZfTDNhYU9jQS8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAAJyLd1VQECFwha-6VMkAYFpH-o9T3naSd956wwypUH2o&exp=1711014120&x-canva-quality=thumbnail&csig=AAAAAAAAAAAAAAAAAAAAALVIbw1PmSsT3ZpPqppAag7kuWtlwR1pxdVgOrST9RCF',
            heading: 'Home Interior'
        },
        {
            imageUrl: '/homePage/vastu_sastra.png',
            heading: 'Vastu Sartar'
        },
        {
            imageUrl: 'https://media.canva.com/1/image-resize/1/200_200_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS8wMHo3Zy9NQUZfTHkwMHo3Zy8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAAHsNsmvJpqVHg-H8rPOBxS-lGfianb1TAKrYDdTYomCu&exp=1710980203&x-canva-quality=thumbnail&csig=AAAAAAAAAAAAAAAAAAAAAPxVfOxGzK3mCxldz9S0mZv8yzVhc1532ZlebIKo8gqT',
            heading: 'Construction Contractor'
        },
        {
            imageUrl: 'https://media.canva.com/1/image-resize/1/200_200_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9NV0NYZy9NQUZfTUZNV0NYZy8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAAErVH8LeeUWalqZ-biz4zKyjXxnjB0MQAF-elDJaOfZg&exp=1711014948&x-canva-quality=thumbnail&csig=AAAAAAAAAAAAAAAAAAAAAE_y_bQ9uiNycMnHL-AV3YWK93IdDTxRHWm0l8BqvO_b',
            heading: 'Modular Kitchen'
        }
    ];
    return (
        <div className='bg-[#e3f4f4] p-16'>
        <h2 className='text-center font-semibold text-lg md:text-2xl mb-10'>LET'S START WITH EXPLORING REAL ESTATE OPTIONS</h2>
        <div className='flex justify-center'>
          <div className=' mx-auto  grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-6'>
            {cardData.map((card, index) => (
              <Card key={index} imageUrl={card.imageUrl} heading={card.heading} />
            ))}
          </div>
        </div>
      </div>
      


    )
}

export default ExploreServices