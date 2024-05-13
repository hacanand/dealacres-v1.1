'use client'

import Navigation from '@/components/propertyListing/Navigation/Navigation';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import RoundedDiv from '@/components/propertyListing/RoundedDiv';
import BannerLayout from '@/components/propertyListing/BannerLayout';
import HelpDetails from '@/components/propertyListing/HelpDetails';
import Button from '@/components/propertyListing/Button/Button';
const Page = () => {

    const [formData, setFormData] = useState({
        propertyDescription: '',
        totalFloors: '',
        propertyOnFloor: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const isFormValid = () => {
        const { propertyDescription, totalFloors, propertyOnFloor } = formData;
        return propertyDescription && totalFloors && propertyOnFloor;
    };


    return (
        <section className='md:mt-12 md:container mx-auto lg:w-4/5'>
            <Navigation />
            <div className='flex flex-col md:flex-row md:px-4 items-start justify-center md:gap-10 lg:gap-20 md:container mx-auto md:my-10 overflow-auto'>

                <div className='h-full w-[80%] md:max-w-[50%] max-md:mx-auto md:w-[450px]  rounded-xl p-5 custom-border max-md:border-none'>
                    <h1 className="font-medium md:font-bold md:text-2xl text-xl mt-2">
                        Now, tell us about your property
                    </h1>
                    <p className='font-medium md:text-lg text-md ' >Describe Your Property</p>
                    <p className='w-[85%]'>Write Several Thing which can describe your propety appropriately </p>

                    <textarea
                        id="myTextArea"
                        name="propertyDescription"
                        rows={10}
                        cols={40}
                        className='my-6 custom-border-2 rounded-md w-full'
                        onChange={handleInputChange}
                    />
                    <h1 className="font-medium md:font-bold text-xl mt-2">
                        Add Room Details
                    </h1>
                    <RoundedDiv width={35} height={35} size={8} />
                    <h1 className="font-medium md:font-bold  text-xl mt-2">
                        Number of Bathrooms
                    </h1>
                    <RoundedDiv width={35} height={35} size={8} />
                    <h1 className="font-medium md:font-bold  text-xl mt-2">
                        Number of Balconies
                    </h1>
                    <RoundedDiv width={35} height={35} size={8} />
                    <h1 className="font-medium md:font-bold text-xl mt-2">
                        Other Rooms
                    </h1>
                    <div className='w-full grid grid-cols-2 gap-2 my-2'>

                        <Button heading={"Pooja Room"} variant={"secondary"} size={"small"} />
                        <Button heading={"Study Room"} variant={"secondary"} size={"small"} />
                        <Button heading={"Servent Room"} variant={"secondary"} size={"small"} />
                        <Button heading={"Store Room"} variant={"secondary"} size={"small"} />

                    </div>
                    <h1 className="font-medium md:font-bold text-xl mt-4">
                        Furnished
                    </h1>
                    <div className='w-full flex flex-row gap-2 my-2 overflow-x-auto'>
                        <Button heading={"Fully Furnished"} variant={"secondary"} size={"small"} />
                        <Button heading={"Unfurnished"} variant={"secondary"} size={"small"} />


                    </div>
                    <h1 className="font-medium md:font-bold text-xl mt-4">
                        Reserve Parking <span className='text-sm font-light'>(optional)</span>
                    </h1>
                    <div className='flex flex-col'>
                        <div className='grid grid-cols-2 items-center py-2 gap-4'>
                            <p className='text-md'>Covered Parking</p>
                            <RoundedDiv width={25} height={25} size={2} />
                        </div>
                        <div className='grid grid-cols-2 items-center py-2 gap-4'>
                            <p className='text-md'>Open Parking</p>
                            <RoundedDiv width={25} height={25} size={2} />
                        </div>

                    </div>
                    <h1 className="font-medium md:font-bold text-xl mt-4">
                        Flooring Details
                    </h1>
                    <p className='text-md'>Total No of Floor</p>
                    <input
                        name='totalFloors'
                        className='custom-border py-4 px-2 my-2 rounded-xl'
                        placeholder='Total Floors'
                        onChange={handleInputChange}
                    />
                    <input
                        name='propertyOnFloor'
                        className='custom-border py-4 px-2 mb-2 rounded-xl'
                        placeholder='Property on Floor'
                        onChange={handleInputChange}
                    />
                    <h1 className="font-medium md:font-bold text-xl mt-4">
                        Availability Status
                    </h1>
                    <div className='w-[100%] flex flex-row gap-2 my-2 overflow-x-auto'>
                        <Button heading={"Ready To Move"} variant={"secondary"} size={"small"} />
                        <Button heading={"Under Construction"} variant={"secondary"} size={"small"} />

                    </div>
                    <h1 className="font-medium md:font-bold text-xl mt-3">
                        Age of Property
                    </h1>
                    <div className='flex flex-row  gap-2 mt-2 overflow-x-auto'>
                        <Button heading={"0-1 years"}  size={"small"} />
                        <Button heading={"1-5 years"}  size={"small"} />
                        <Button heading={"5-10 years"}  size={"small"} />
                        <Button heading={"10+ years"}  size={"small"} />



                    </div>


                    <Link href={isFormValid() ? 'photos' : '#'}>
                        <button
                            className={`w-full bg-blue-600 rounded-xl px-8 py-3 font-bold text-white mt-5 mb-10  hover:bg-white hover:border-2 hover:border-blue-600 hover:text-blue-600 
              ${!isFormValid() ? 'cursor-not-allowed opacity-50' : ''}`}
                            disabled={!isFormValid()}
                        >
                            Continue
                        </button>
                    </Link>
                </div>


                <BannerLayout bannerText={" Describe your property in brief so the buyer or renter can easily get to know how your property is what makes your property different from others."} imgSrc={"/propertyListing/assets/aboutPropertyBanner.webp"} showContact startWithPic showSmiley />
               

                <HelpDetails showOnMobile />
            </div>
        </section>
    );
};

export default Page;