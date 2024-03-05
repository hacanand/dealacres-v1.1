'use client'
import NavigationCOwner from '@/components/propertyListing/Navigation/NavigationCOwner';
import Image from 'next/image';

import Link from 'next/link';
import RoundedDiv from '@/components/propertyListing/RoundedDiv';
import { useState } from 'react';
import PropertyRadioButton from '@/components/propertyListing/PropertyRadioButton';
import DynamicRadio from '@/components/propertyListing/DynamicRadio';

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
    const [isContinueDisabled, setIsContinueDisabled] = useState(true);

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

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

        setIsContinueDisabled(
            !propertyDescription ||
            !carpetArea ||
            !entranceWidth 
    
        );
    };
    const handleInputChange = (setter, value) => {
        setter(value);
        checkContinueButtonState();
    };


    return (
        <section className='mt-12 container mx-auto lg:w-4/5'>
            <NavigationCOwner />
            <div className='flex flex-col md:flex-row px-4 items-start justify-center gap-10 md:gap-20 container mx-auto my-10 overflow-auto'>

                <div className='h-full md:w-[450px]  rounded-xl p-5 custom-border'>
                    <h1 className="font-medium md:font-bold md:text-2xl text-xl mt-2">
                        Now, tell us about your property
                    </h1>
                    <p className='font-medium md:text-lg text-md ' >Describe Your Property</p>
                    <p className='w-[85%]'>Write Several Thing which can describe your propety appropriately </p>

                    <textarea
                        id="myTextArea"
                        name="myTextArea"
                        rows={10}
                        cols={40}
                        className='my-6 custom-border-2 rounded-md'
                        value={propertyDescription}
                        onChange={(e) => handleInputChange(setPropertyDescription, e.target.value)}
                    />
                    <h1 className="font-medium md:font-bold text-xl mt-2">
                        Floor Number
                    </h1>
                    <RoundedDiv width={35} height={35} size={5} />
                    <h1 className="font-medium md:font-bold text-xl mt-2">
                        Number of Floors
                    </h1>
                    <RoundedDiv width={35} height={35} size={5} />

                    <h1 className="font-medium md:font-bold text-xl mt-4">
                        Furnished
                    </h1>
                    <div className='w-[70%] flex flex-wrap gap-2 my-2'>
                        <div className='h-full custom-border py-1 px-3 rounded-xl'>
                            Fully Furnished
                        </div>
                        <div className='h-full  custom-border py-1 px-3 rounded-xl'>
                            Unfurnished
                        </div>
                        <div className='h-full  custom-border py-1 px-3 rounded-xl'>
                            Semifurnished
                        </div>
                    </div>
                    <h1 className="font-medium md:font-bold text-xl mt-2">
                        Wash Room
                    </h1>
                    <RoundedDiv width={35} height={35} size={5} />

                    <PropertyRadioButton />
                    <h1 className="font-medium md:font-bold text-xl mt-2">
                        Area
                    </h1>

                    <div className='relative'>
                        <h1 className='text-sm font-bold my-3'>Carpet Area</h1>
                        <p className='absolute text-[8px] leading-3 font-extralight top-[16%] right-0 transform -translate-y-1/2 text-gray-500 w-[50%]'> Carpet area is the total usuable area  of your property within the walls</p>
                        <div className="flex items-center space-x-2 mb-2 ">
                            <input
                                type="text"
                                className="custom-border-2 rounded-xl px-2 py-1 w-[40%]"
                                value={carpetArea}
                                onChange={(e) => handleInputChange(setCarpetArea, e.target.value)}
                            />

                            <select className="custom-border-2 rounded-xl px-2 py-1">
                                <option value="+1">Sqft</option>
                                <option value="+91">Sq-yrd</option>
                                <option value="+91">Sq-m</option>
                                <option value="+91">Acre</option>
                                <option value="+91">Hectare</option>
                            </select>
                        </div>
                    </div>
                    <div className='relative'>
                        <h1 className='text-sm font-bold my-3'>Width of Entrance</h1>

                        <div className="flex items-center space-x-2 mb-2">
                            <input
                                type="text"
                                className="custom-border-2 rounded-xl px-2 py-1 w-[40%]"
                                value={entranceWidth}
                                onChange={(e) => handleInputChange(setEntranceWidth, e.target.value)}
                            />

                            <select className="custom-border-2 rounded-xl px-2 py-1">
                                <option value="+1">Sqft</option>
                                <option value="+91">Sq-yrd</option>
                                <option value="+91">Sq-m</option>
                                <option value="+91">Acre</option>
                                <option value="+91">Hectare</option>
                            </select>
                        </div>
                    </div>
                    <h1 className="font-medium md:font-bold text-xl mt-4">
                        Availability Status
                    </h1>
                    <div className='w-[80%] flex flex-row gap-2 my-2'>
                        <button className='h-full custom-border-2 py-1 px-2 rounded-xl hover:custom-border-2 hover:border-blue-600' onClick={() => handleReadyToMoveClick(false)}>
                            Ready To Move
                        </button>
                        <button className='h-full  custom-border-2 py-1 px-2 rounded-xl hover:custom-border-2 hover:border-blue-600' onClick={() => handleUnderConstructionClick(false)}>
                            Under Construction
                        </button>
                    </div>
                    {isReadyToMoveClicked && (
                        <>
                            <p className="font-medium text-gray-500  text-md mt-3">
                                Age of Property
                            </p>
                            <div className=' mt-2'>
                                {[0, 1, 2].map((index) => (
                                    <button key={index} className='custom-border h-full px-2 rounded-lg mr-2 mb-2'>
                                        {index === 0 ? 'New Construction' : `${(index - 1) * 5}-${index * 5} years`}
                                    </button>
                                ))}

                                {isExpanded && [3, 4].map((index) => (
                                    <button key={index} className='custom-border h-full px-2 rounded-lg mr-2'>
                                        {`${(index - 1) * 5}-${index * 5} years`}
                                    </button>
                                ))}
                                <button className=' h-full rounded-lg' onClick={toggleVisibility}>
                                    {isExpanded ? '▲' : '▼'}
                                </button>
                            </div>
                        </>
                    )}
                    {isUnderConstructionClicked && (
                        <>
                            <p className='font-medium text-gray-500  text-md mt-3'>Available Form</p>
                            <div className='mt-2 flex flex-row gap-5 '>
                                <div className='flex flex-row gap-4 border-b-2'>
                                    <label htmlFor="month">Month:</label>
                                    <select id="month" value={selectedMonth} onChange={handleMonthChange}>
                                        {months.map((month, index) => (
                                            <option key={index} value={index + 1}>{month}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className='flex flex-row gap-4 border-b-2'>
                                    <label htmlFor="year">Year:</label>
                                    <select id="year" value={selectedYear} onChange={handleYearChange}>
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
                </div>
                <div className='flex flex-col gap-5'>
                    <div className='h-full w-[400px] rounded-xl bg-[#cee8f8] p-4 flex flex-col items-center'>
                        <h1 className="text-xl mb-4 text-center px-4 mt-20">
                            Describe your property in brief so the buyer or tenant can easily get to know how your property is what makes your property different from others.</h1>
                        <Image src={'/propertyListing/assets/store.png'} alt='home' height={150} width={150} className='mt-6 mb-10' />
                        <h1 className='font-bold text-xl'>Need Help?</h1>
                        <p className='text-lg'>You Can Email Us</p>
                        <p className='text-lg text-blue-600 mb-20'>Contact@dealacres.com</p>
                    </div>
                    <div className='h-full w-[400px] rounded-xl bg-[#c9e0ee] p-4 flex flex-col items-center'>
                        <Image src={'/propertyListing/assets/smiley.png'} alt='smiley' height={100} width={100} className='mt-3 mb-2' />
                        <h1 className='text-2xl'>You are Almost There</h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page;