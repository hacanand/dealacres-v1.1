'use client';
import React from 'react'
import Button from '../Button/Button'
import Image from 'next/image'
import { useState } from 'react';
import Link from 'next/link';
import FREE from '../../../../public/propertyListing/assets/free.png'
import BannerLayout from '../BannerLayout';


const Hero = () => {

    const [isResedentialClicked, setIsResedentialClicked] = useState(false);
    const [isCommercialClicked, setCommercialClicked] = useState(false);
    const [isFiveClicked, setIsFiveClicked] = useState(false);
    const [propertyType, setPropertyType] = useState('#');
    const [subType, setSubType] = useState('');

    const handleFive = () => {
        setIsFiveClicked(!isFiveClicked);
    }
    const handleResedential = () => {
        setIsResedentialClicked(!isResedentialClicked);
        setCommercialClicked(false)
        setPropertyType('resedential');
        setSubType('');
    }
    const handleCommercial = () => {
        setCommercialClicked(!isCommercialClicked);
        setIsResedentialClicked(false)
        setPropertyType('commercial');
        setSubType('');
    }
    const handleSubType = (subtype) => {
        setSubType(subtype.toLowerCase());
    };
    const generateDynamicPath = () => {

       
        let path = `propertylisting/${propertyType}`;

        if(propertyType === '#') return path;
        if (subType) {
          path += `/${subType}`;
        }
        path += '/login';
        return path;
    };
    
    return (
        <section className='flex flex-col md:flex-row  items-start justify-center gap-4 md:gap-10 md:container mx-auto md:mt-10 overflow-auto'>
            <div className='h-full md:mt-20 rounded-xl py-4 px-6 custom-border-hero max-md:mx-auto max-md:w-[90%] '>
                <h1 className="font-heading my-2 ">
                    Post Your Property for free
                </h1>
                <p>
                    Add Basic Details
                </p>
                <p className='py-2 font-bold'>
                    Looking For..........
                </p>
                <div className='flex gap-3 items-center mb-2'>
                    <Button heading={'Sell'} />
                    <Button heading={'Rent'} />
                </div>
                <p className='py-2 font-bold'>
                    Property Type
                </p>
                <div className='flex gap-3 items-center mb-2'>
                    <Button heading={'Residential'} onClick={handleResedential} hashClick={true} />
                    <Button heading={'Commercial'} onClick={handleCommercial} hashClick={true} />
                </div>
                {isResedentialClicked && (
                    <div className='flex flex-col'>
                        <div className='flex flex-row w-[50%]'>
                            <Button heading={'Flat/Apartment'} />
                            <Button heading={'villa'} />
                            <Button heading={'plot'} onClick={() => handleSubType('Plot')} hashClick={true} />

                        </div>
                        <div>
                            <Button heading={'Independent House'} />
                            <Button heading={'Builder Floor'} />
                        </div>
                    </div>
                )}
                {isCommercialClicked && (
                    <div className='flex flex-col'>
                        <div className='flex flex-row'>
                            <Button heading={'Commercial Shop'} />
                            <Button heading={'Commercial Office Space'} />

                        </div>
                        <div className='flex flex-row items-center'>
                            <Button heading={'Commercial Showroom'} />
                            <Button heading={'Commercial Land'} />
                            <p className='font-bold text-blue-600 cursor-pointer' onClick={handleFive}>+5</p>
                        </div>
                    </div>
                )}
                {isFiveClicked && (
                    <div className='flex flex-col'>
                        <div className='flex flex-row'>
                            <Button heading={'Warehouse/ Godown'} />
                            <Button heading={'Industrial Land'} />


                        </div>
                        <div className='flex flex-row items-center'>
                            <Button heading={'Industrial Building'} />
                            <Button heading={'Industrial Shed'} />
                            <Button heading={'Office in IT Park/ SEZ'} />
                        </div>
                    </div>
                )}
                <p className='py-2 font-bold'>
                    Add Contact Details
                </p>
                
                <input className='custom-border-2 px-4 py-2 rounded-xl' />
                <p className='text-xs mt-5 pb-1'>Are you a Registered user?<span className='text-blue-500'>Login</span> </p>
                <Link href={generateDynamicPath()} disabled={!isResedentialClicked && !isCommercialClicked} scroll={false}>
                    <button className='w-full bg-blue-600 rounded-xl px-8 py-3 font-bold text-white  mb-10 hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600 disabled:pointer-events-none disabled:bg-blue-600/40 disabled:hover:cursor-not-allowed' disabled={!isResedentialClicked && !isCommercialClicked}>Start Now</button>
                </Link>
            </div>
            <div className='h-full w-full md:w-[400px] bg-[#D3E3F9] md:bg-[#F1F6FD] md:p-4 flex flex-col items-center -order-1 md:order-1  max-md:gap-4 max-md:py-2 rounded-b-[2rem]'>
                <div className='flex flex-row gap-2 md:mt-20 md:mb-10'>
                    <h1 className="text-lg md:mt-2 font-semibold md:mb-6 max-sm:text-center">
                        Post property Ad to <br className='hidden md:block' />
                        sell or rent online for</h1>
                    <h1 className='hidden md:block text-7xl font-bold italic uppercase '>Free</h1>
                </div>

                <ul className="list-disc pl-5 text-sm md:text-xl ">
                    <li className="mb-2">Advertise For FREE</li>
                    <li className="mb-2">Sell 10 X faster</li>
                    <li className="mb-2">Connect with genuine buyers</li>
                    <li className="mb-2">Get unlimited enquiries</li>
                </ul>
                <Image src={FREE} alt='free' height={280} width={280} className='md:mt-20 -order-1 md:order-2 max-md:max-w-[200px] max-md:max-h-[200px]' />
            </div>

        </section>
    )
}

export default Hero
