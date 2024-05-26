'use client'
import NavigationCOwner from '@/components/propertyListing/Navigation/NavigationCOwner';
import Image from 'next/image';

import Link from 'next/link';
import RoundedDiv from '@/components/propertyListing/RoundedDiv';
import { useEffect, useState } from 'react';
import PropertyRadioButton from '@/components/propertyListing/PropertyRadioButton';
import DynamicRadio from '@/components/propertyListing/DynamicRadio';
import BannerLayout from '@/components/propertyListing/BannerLayout';
import HelpDetails from '@/components/propertyListing/HelpDetails';
import Button from '@/components/propertyListing/Button/Button';
import PageWrapper from '@/components/propertyListing/PageWrapper';
import OuterWrapper from '@/components/propertyListing/OuterWrapper';
import InnerWrapper from '@/components/propertyListing/InnerWrapper';
import LocationInput from '../../agent/location-details/LocationInput';
import { useDeviceType } from '@/hooks/useDeviceType';

const Page = () => {

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;

    const [isExpanded, setIsExpanded] = useState(false);
    const [isReadyToMoveClicked, setIsReadyToMoveClicked] = useState(false);
    const [isUnderConstructionClicked, setIsUnderConstructionClicked] = useState(false);
    const [selectedMonth, setSelectedMonth] = useState(currentMonth);
    const [selectedYear, setSelectedYear] = useState(currentYear);
    const [propertyDescription, setPropertyDescription] = useState('');
    const [carpetArea, setCarpetArea] = useState('');
    const [entranceWidth, setEntranceWidth] = useState('');

    const [carpetUnit, setCarpetUnit] = useState('sqft')
    const [widthUnit, setWidthUnit] = useState('sqft')
    const [isContinueDisabled, setIsContinueDisabled] = useState(true);

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const otherRooms = [
        "Pooja Room", "Study Room", "Store Room", "Servant Room"
    ]

    const years = Array.from({ length: 10 }, (_, index) => currentYear + index);


    const handleMonthChange = (event) => {
        setSelectedMonth(parseInt(event.target.value, 10));
    };

    const handleYearChange = (event) => {
        setSelectedYear(parseInt(event.target.value, 10));
    };

    const toggleVisibility = () => {
        setIsExpanded((prevIsExpanded) => !prevIsExpanded);
    };
    const handleReadyToMoveClick = () => {
        setIsReadyToMoveClicked(!isReadyToMoveClicked);
    };
    const handleUnderConstructionClick = () => {
        setIsUnderConstructionClicked(!isUnderConstructionClicked);
    };
    const checkContinueButtonState = () => {
        console.log(propertyDescription, carpetArea, entranceWidth);
        setIsContinueDisabled(
            !propertyDescription ||
            !carpetArea ||
            !entranceWidth

        );
    };
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        switch (name) {
            case "propertyDescription":
                console.log("description..")
                setPropertyDescription(value);
                break;
            case "carpetArea":
                setCarpetArea(value);
                break;
            case "entranceWidth":
                setEntranceWidth(value);
                break;
            default:
                break;
        }

        checkContinueButtonState();
    };

    
    const [deviceType, setDeviceType] = useState("desktop")
    const { deviceType: devType } = useDeviceType();

    useEffect(() => {
        setDeviceType(devType)
    }, [devType])


    return (
        <PageWrapper>
            <div className='hidden md:block'>
            <NavigationCOwner />

            </div>
            <OuterWrapper>

                <InnerWrapper>
                <h1 className="font-bold md:text-2xl text-lg xs:text-xl  mt-2">
                        Now, tell us about your property
                    </h1>
                    <p className='font-medium md:text-lg text-base  ' >Describe Your Property</p>
                    <p className='md:w-[85%] mt-2 md:text-lg text-base '>Write Several Thing which can describe your propety appropriately </p>

                    <textarea
                        id="myTextArea"
          
                        rows={10}
                        cols={40}
                        className='mt-3 sm:mt-4 md:my-6 border-t-4 border-r-2 border-l-2 border-[#c7deee] border-b-4 rounded-md w-full max-md:max-h-[150px]'
                        value={propertyDescription}
                        name="propertyDescription"
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

                    <h1 className="font-medium md:font-bold text-xl mt-2">
                        Floor Number
                    </h1>

                    <div className='flex flex-row  gap-1 sm:gap-2 mt-2 mb-1 overflow-x-auto'>
                        <Button heading={"Lower Basement"} size={"extrasmall"} />
                        <Button heading={"Upper Basement"} size={"extrasmall"} />
                        <Button heading={"Ground"} size={"extrasmall"} />
                        



                    </div>
                    
                    <RoundedDiv width={deviceType === "phone" ? 25 : deviceType === "smallphone" ? 20 : 35} height={deviceType === "phone" ? 25 : deviceType === "smallphone" ? 20 : 35} size={8} />
                    <h1 className="font-medium md:font-bold text-xl mt-2">
                        Number of Floors
                    </h1>
                    <RoundedDiv width={deviceType === "phone" ? 25 : deviceType === "smallphone" ? 20 : 35} height={deviceType === "phone" ? 25 : deviceType === "smallphone" ? 20 : 35} size={8} />

                 
                    <h1 className="font-medium md:font-bold text-lg xs:text-xl mt-1 sm:mt-2">
                        Furnished
                    </h1>
                    <div className='w-full flex flex-row gap-2 mt-2 overflow-x-auto'>
                        <Button heading={"Fully Furnished"} variant={"secondary"} size={"small"} />
                        <Button heading={"Unfurnished"} variant={"secondary"} size={"small"} />


                    </div>
                    <h1 className="font-medium md:font-bold text-xl mt-2">
                        Wash Room
                    </h1>
                    <RoundedDiv width={deviceType === "phone" ? 25 : deviceType === "smallphone" ? 20 : 35} height={deviceType === "phone" ? 25 : deviceType === "smallphone" ? 20 : 35} size={8} />

                    <PropertyRadioButton />
                   

                    
                    <h1 className="font-medium md:font-bold text-lg xs:text-xl mt-1 sm:mt-2">
                        Area
                    </h1>
                    <div className='relative'>
                        <h1 className='text-sm font-bold my-3'>Carpet Area</h1>
                        <p className='absolute text-[8px] leading-3 font-extralight top-[1.55rem]  right-0 transform -translate-y-1/2 text-gray-500 w-[50%]'> Carpet area is the total usuable area  of your property within the walls</p>
                        <div className="flex items-center space-x-2 mb-2 ">
                            <input type="text" className="custom-border-2 rounded-xl px-2 py-1 w-[40%]"
                            name={"carpetArea"}
                            onChange={handleInputChange}
                            />

                            <select className="custom-border-2 rounded-xl px-2 py-1 bg-white"
                            value={carpetUnit}
                            onChange={(e) => setCarpetUnit(e.target.value)}
                            >
                                <option value="sqft">Sqft</option>
                                <option value="sqyrd">Sq-yrd</option>
                                <option value="sqm">Sq-m</option>
                                <option value="acre">Acre</option>
                                <option value="hectare">Hectare</option>
                            </select>
                        </div>
                    </div>
                    <div className='relative'>
                        <h1 className='text-sm font-bold my-3'>Width of Entrance</h1>

                        <div className="flex items-center space-x-2 mb-2">
                            <input type="text" className="custom-border-2 rounded-xl px-2 py-1 w-[40%]"
                            name='entranceWidth'
                            onChange={handleInputChange}
                             />

                            <select className="custom-border-2 rounded-xl px-2 py-1 bg-white"
                            value={widthUnit}
                            onChange={(e) => setWidthUnit(e.target.value)}
                            >
                            <option value="sqft">Sqft</option>
                                <option value="sqyrd">Sq-yrd</option>
                                <option value="sqm">Sq-m</option>
                                <option value="acre">Acre</option>
                                <option value="hectare">Hectare</option>
                            </select>
                        </div>
                    </div>
                    
                    <h1 className="font-medium md:font-bold text-xl mt-4">
                        Availability Status
                    </h1>
                    <div className='w-full md:w-[80%] flex flex-row gap-2 my-2 whitespace-nowrap text-sm sm:text-base'>
                        <button className='h-full custom-border-2 py-1 px-2 rounded-xl hover:custom-border-2 hover:border-blue-600' onClick={() => handleReadyToMoveClick(false)}>
                            Ready To Move
                        </button>
                        <button className='h-full  custom-border-2 py-1 px-2 rounded-xl hover:custom-border-2 hover:border-blue-600' onClick={() => handleUnderConstructionClick(false)}>
                            Under Construction
                        </button>
                    </div>
                    {isReadyToMoveClicked && (
                        <>
                            <h1 className="font-medium md:font-bold text-lg xs:text-xl mt-1 sm:mt-2">
                        Age of Property
                    </h1>
                    <div className='flex flex-row  gap-2 mt-2 overflow-x-auto'>
                        <Button heading={"0-1 years"} size={"extrasmall"} />
                        <Button heading={"1-5 years"} size={"extrasmall"} />
                        <Button heading={"5-10 years"} size={"extrasmall"} />
                        <Button heading={"10+ years"} size={"extrasmall"} />



                    </div>
                        </>
                    )}
                    {isUnderConstructionClicked && (
                        <>
                            <p className='font-medium text-gray-500  text-md mt-3'>Available Form</p>
                            <div className='mt-2 flex flex-row gap-5 '>
                                <div className='flex flex-row gap-4 border-b-2 items-center'>
                                    <label htmlFor="month">Month:</label>
                                    <select className='bg-white py-1 md:py-2' id="month" value={selectedMonth} onChange={handleMonthChange}>
                                        {months.map((month, index) => (
                                            <option key={index} value={index + 1}>{month}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className='flex flex-row gap-4 border-b-2 items-center'>
                                    <label htmlFor="year">Year:</label>
                                    <select className='bg-white py-1 md:py-2' id="year" value={selectedYear} onChange={handleYearChange}>
                                        {years.map((year) => (
                                            <option key={year} value={year}>{year}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </>
                    )}
                    <DynamicRadio />
                    <h1 className="font-medium md:font-bold md:text-2xl text-xl mt-3">
                        Price Details
                    </h1>
                    <input type="text" className="custom-border-2 px-2 py-3 rounded-xl w-[80%] mt-2" placeholder="Expected Price" />
                    <input type="text" className="custom-border-2 px-2 py-3 rounded-xl w-[60%] mt-2" placeholder="Price per Sq.Yd" />

                    <Link href={'photos'}>
                        <button
                            className={`w-full bg-blue-600 rounded-xl px-8 py-3 font-bold text-white mt-5 mb-10 hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600 ${isContinueDisabled ? 'cursor-not-allowed opacity-50' : ''}`}
                            disabled={isContinueDisabled}
                        >
                            Continue
                        </button>
                    </Link>
                </InnerWrapper>

                <BannerLayout startWithPic showContact bannerText={' Describe your property in brief so the buyer or tenant can easily get to know how your property is what makes your property different from others.'} imgSrc={'/propertyListing/assets/shop.webp'} showSmiley/>

                <HelpDetails showOnMobile />
            </OuterWrapper>
        </PageWrapper>
    );
};

export default Page;