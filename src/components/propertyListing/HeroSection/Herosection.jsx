'use client';
import React from 'react'
import Button from '../Button/Button'
import Image from 'next/image'
import { useState } from 'react';
import Link from 'next/link';
import FREE from '../../../../public/propertyListing/assets/free.png'


const Herosection = () => {

    const [isResedentialClicked, setIsResedentialClicked] = useState(false);
    const [isCommercialClicked, setCommercialClicked] = useState(false);
    const [isFiveClicked, setIsFiveClicked] = useState(false);
    const [propertyType, setPropertyType] = useState('');
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
        if (subType) {
          path += `/${subType}`;
        }
        path += '/login';
        return path;
    };
    
    return (
        <section className='flex flex-col md:flex-row px-4 items-start justify-center gap-10 container mx-auto mt-10 overflow-auto'>
            <div className='h-full md:mt-20 rounded-xl p-4 custom-border-hero'>
                <h1 className="font-heading my-2">
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
                <Link href={generateDynamicPath()}>
                    <button className='w-full bg-blue-600 rounded-xl px-8 py-3 font-bold text-white  mb-10 hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600'>Start Now</button>
                </Link>
            </div>
            <div className='h-full w-[400px] rounded-xl bg-[#e9f6fe] p-4 flex flex-col items-center'>
                <div className='flex flex-row gap-2 mt-20 mb-10'>
                    <h1 className="text-lg mt-2 font-semibold mb-6">
                        Post property Ad to <br />
                        sell or rent online for</h1>
                    <h1 className='text-7xl font-bold italic uppercase '>Free</h1>
                </div>

                <ul className="list-disc pl-5 text-xl">
                    <li className="mb-2">Advertise For FREE</li>
                    <li className="mb-2">Sell 10 X faster</li>
                    <li className="mb-2">Connect with genuine buyers</li>
                    <li className="mb-2">Get unlimited enquiries</li>
                </ul>
                <Image src={FREE} alt='free' height={280} width={280} className='mt-20' />
            </div>
        </section>
    )
}

export default Herosection