'use client'

import Navigation from '@/components/propertyListing/Navigation/Navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import RoundedDiv from '@/components/propertyListing/RoundedDiv';
import BannerLayout from '@/components/propertyListing/BannerLayout';
import HelpDetails from '@/components/propertyListing/HelpDetails';
import Button from '@/components/propertyListing/Button/Button';
import OuterWrapper from '@/components/propertyListing/OuterWrapper';
import InnerWrapper from '@/components/propertyListing/InnerWrapper';
import { useDeviceType } from '@/hooks/useDeviceType';
import LocationInput from '@/app/propertylisting/commercial/user/agent/location-details/LocationInput';
const Page = () => {

    const [formData, setFormData] = useState({
        propertyDescription: '',
        totalFloors: '',
        propertyOnFloor: '',
        propertyTitle: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const isFormValid = () => {
        const { propertyDescription, totalFloors, propertyOnFloor } = formData;
        return propertyDescription && totalFloors && propertyOnFloor;
    };

    const [deviceType, setDeviceType] = useState("desktop")
    const { deviceType: devType } = useDeviceType();

    useEffect(() => {
        setDeviceType(devType)
    }, [devType])


    return (
        <section className='md:mt-12 md:container mx-auto lg:w-4/5'>
            <Navigation />
            <OuterWrapper>

                <InnerWrapper>
                    <h1 className="font-bold md:text-2xl text-lg xs:text-xl  mt-2">
                        Now, tell us about your property
                    </h1>
                    <p className='font-medium md:text-lg text-base  ' >Describe Your Property</p>
                    <p className='md:w-[85%] mt-2 md:text-lg text-base '>Write Several Thing which can describe your propety appropriately </p>

                    <textarea
                        id="myTextArea"
                        name="propertyDescription"
                        rows={10}
                        cols={40}
                        className='mt-3 sm:mt-4 md:my-6 border-t-4 border-r-2 border-l-2 border-[#c7deee] border-b-4 rounded-md w-full max-md:max-h-[150px]'
                        onChange={handleInputChange}
                    />
                    <h1 className="font-medium md:font-bold text-lg xs:text-xl mt-3 sm:mt-4">
                        Property Title
                    </h1>
                    <LocationInput
                        key={"title"}
                        inputName={"title"}
                        onInputChange={handleInputChange}
                    />
                    <h1 className="font-medium md:font-bold text-lg xs:text-xl md:mt-4 ">
                        Add Room Details
                    </h1>
                    <RoundedDiv width={deviceType === "phone" ? 25 : deviceType === "smallphone" ? 20 : 35} height={deviceType === "phone" ? 25 : deviceType === "smallphone" ? 20 : 35} size={8} />
                    <h1 className="font-medium md:font-bold  text-lg xs:text-xl mt-1 sm:mt-2">
                        Number of Bathrooms
                    </h1>
                    <RoundedDiv width={deviceType === "phone" ? 25 : deviceType === "smallphone" ? 20 : 35} height={deviceType === "phone" ? 25 : deviceType === "smallphone" ? 20 : 35} size={8} />
                    <h1 className="font-medium md:font-bold  text-lg xs:text-xl mt-1 sm:mt-2">
                        Number of Balconies
                    </h1>
                    <RoundedDiv width={deviceType === "phone" ? 25 : deviceType === "smallphone" ? 20 : 35} height={deviceType === "phone" ? 25 : deviceType === "smallphone" ? 20 : 35} size={8} />
                    <h1 className="font-medium md:font-bold text-lg xs:text-xl mt-1 sm:mt-2">
                        Other Rooms
                    </h1>
                    <div className='w-full grid grid-cols-2 gap-1 md:gap-2 mt-2'>

                        <Button heading={"Pooja Room"} variant={"secondary"} size={"small"} />
                        <Button heading={"Study Room"} variant={"secondary"} size={"small"} />
                        <Button heading={"Servent Room"} variant={"secondary"} size={"small"} />
                        <Button heading={"Store Room"} variant={"secondary"} size={"small"} />

                    </div>
                    <h1 className="font-medium md:font-bold text-lg xs:text-xl mt-1 sm:mt-2">
                        Furnished
                    </h1>
                    <div className='w-full flex flex-row gap-2 mt-2 overflow-x-auto'>
                        <Button heading={"Fully Furnished"} variant={"secondary"} size={"small"} />
                        <Button heading={"Unfurnished"} variant={"secondary"} size={"small"} />


                    </div>
                    <h1 className="font-medium md:font-bold text-lg xs:text-xl mt-1 sm:mt-2">
                        Reserve Parking <span className='text-sm font-light'>(optional)</span>
                    </h1>
                    <div className='flex flex-col'>
                        <div className='grid grid-cols-2 items-center  gap-x-4  '>
                            <p className='text-md'>Covered Parking</p>
                            <RoundedDiv width={25} height={25} size={2} />
                        </div>
                        <div className='grid grid-cols-2 items-center  gap-x-4  '>
                            <p className='text-md'>Open Parking</p>
                            <RoundedDiv width={25} height={25} size={2} />
                        </div>

                    </div>
                    <h1 className="font-medium md:font-bold text-lg xs:text-xl mt-3 sm:mt-4">
                        Flooring Details
                    </h1>
                    <p className='text-md'>Total No of Floor</p>

                    <div className='max-md:pt-2'>
                        <LocationInput
                            inputName='totalFloors'
                            inputPlaceholder='Total Floors'
                            onInputChange={handleInputChange}
                        />
                        <LocationInput
                            inputName='propertyOnFloor'
                            inputPlaceholder='Property on Floor'
                            onInputChange={handleInputChange}
                        />
                    </div>

                    <h1 className="font-medium md:font-bold text-lg xs:text-xl mt-1 sm:mt-2">
                        Availability Status
                    </h1>
                    <div className='w-[100%] flex flex-row gap-2 my-2 overflow-x-auto'>
                        <Button heading={"Ready To Move"} variant={"secondary"} size={"small"} />
                        <Button heading={"Under Construction"} variant={"secondary"} size={"small"} />

                    </div>
                    <h1 className="font-medium md:font-bold text-lg xs:text-xl mt-1 sm:mt-2">
                        Age of Property
                    </h1>
                    <div className='flex flex-row  gap-2 mt-2 overflow-x-auto'>
                        <Button heading={"0-1 years"} size={"extrasmall"} />
                        <Button heading={"1-5 years"} size={"extrasmall"} />
                        <Button heading={"5-10 years"} size={"extrasmall"} />
                        <Button heading={"10+ years"} size={"extrasmall"} />



                    </div>


                    <Link href={isFormValid() ? 'photos' : '#'}>
                        <button
                            className={`w-full bg-blue-600 rounded-xl px-8 py-3 font-bold text-white my-3  hover:bg-white hover:border-2 hover:border-blue-600 hover:text-blue-600 
              ${!isFormValid() ? 'cursor-not-allowed opacity-50' : ''}`}
                            disabled={!isFormValid()}
                        >
                            Continue
                        </button>
                    </Link>
                </InnerWrapper>


                <BannerLayout bannerText={" Describe your property in brief so the buyer or renter can easily get to know how your property is what makes your property different from others."} imgSrc={"/propertyListing/assets/aboutPropertyBanner.webp"} showContact startWithPic showSmiley />


                <HelpDetails showOnMobile />
            </OuterWrapper>
        </section>
    );
};

export default Page;