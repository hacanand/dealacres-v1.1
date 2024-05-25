'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactNumber from '@/components/propertyListing/ContactNumber';
import OuterWrapper from '@/components/propertyListing/OuterWrapper';
import PageWrapper from '@/components/propertyListing/PageWrapper';
import InnerWrapper from '@/components/propertyListing/InnerWrapper';
import BannerLayout from '@/components/propertyListing/BannerLayout';
import HelpDetails from '@/components/propertyListing/HelpDetails';
import PostModal from '@/components/propertyListing/PostModal';
import FeedbackModal from '@/components/propertyListing/FeedbackModal';


const Page = () => {
    const [companyName, setCompanyName] = useState('');
    const [companyAddress1, setCompanyAddress1] = useState('');
    const [city, setCity] = useState('');
    const [companyDescription, setCompanyDescription] = useState('');
    const [contactNumber, setContactNumber] = useState([]);

    const [reraRegistered, setReraRegistered] = useState('');


    const [isGDPRChecked, setIsGDPRChecked] = useState(false);


    const [isPostModalOpen, setIsPostModalOpen] = useState(false);
    const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

    const handleGDPRCheckboxChange = () => {
        setIsGDPRChecked((prevChecked) => !prevChecked);
    };

    const openPostModal = () => {
        setIsPostModalOpen(true);
    };

    const closePostModal = () => {
        setIsPostModalOpen(false);
    };
    const handlePostSubmit = (e) => {
        e.preventDefault();
        openFeedbackModal();
        closePostModal();
    };
    const openFeedbackModal = () => {
        setIsFeedbackModalOpen(true);
    };

    const closeFeedbackModal = () => {
        setIsFeedbackModalOpen(false);
    };

    return (
        <PageWrapper>
            <OuterWrapper>
  
        
                    <InnerWrapper>
                    <h1 className="text-xl md:text-2xl text-gray-500 font-bold">
                        Before listing your property<br /> buyer should know about you?
                    </h1>
                        <p className="text-md font-semibold text-gray-500 my-2">Are You RERA registered? </p>
                        <div className="flex flex-row items-center gap-2 mb-2 whitespace-nowrap">
                            <button className={`h-full rounded-full border hover:border hover:border-gray-800 px-3 py-1 text-gray-500 text-xs xs:text-sm md:text-base ${reraRegistered.i === 0 && 'border-black'}`}
                             onClick={() => setReraRegistered({i: 0, value: "yes"})}>yes</button>
                            <button className={`h-full rounded-full border hover:border hover:border-gray-800 px-3 py-1 text-gray-500 text-xs xs:text-sm md:text-base ${reraRegistered.i === 1 && 'border-black'}`}

                             onClick={() => setReraRegistered({i: 1, value: "I have applied"})}
                            >I have applied</button>
                            <button className={`h-full rounded-full border hover:border hover:border-gray-800 px-3 py-1 text-gray-500 text-xs xs:text-sm md:text-base ${reraRegistered.i === 2 && 'border-black'}`}
                             onClick={() => setReraRegistered({i: 2, value: "Not Applicable"})}
                            >Not Applicable</button>
                        </div>
                        <p className="text-sm font-semibold text-gray-500">RERA Number</p>
                        <input type="text" className="border p-2 mb-2" />
                        <p className="text-sm font-semibold text-gray-500 mb-1">Type of Firm</p>
                        <div className="flex flex-row items-center gap-2 mb-4">
                            <button className="h-full rounded-md border-r-2 border-l-2 border-t border-b border-gray-800 hover:border hover:border-gray-800 px-3 text-gray-500 text-xs xs:text-sm md:text-base py-1">Partnership</button>
                            <button className="h-full rounded-md border-r-2 border-l-2 border-t border-b border-gray-800 border hover:border hover:border-gray-800 px-3 text-gray-500 text-xs xs:text-sm md:text-base py-1">Proprietor</button>
                            <button className="h-full rounded-md border-r-2 border-l-2 border-t border-b border-gray-800 border hover:border hover:border-gray-800 px-3 text-gray-500 text-xs xs:text-sm md:text-base py-1">Company</button>
                        </div>
                        <p className="text-md font-semibold text-gray-500 my-2">Company Details </p>
                        <div className="md:w-[80%]">
                            <input
                                placeholder="Company Name"
                                type="text"
                                className="p-2 w-full mb-2 border"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                            />
                            <input placeholder="Company URL (optional)" type="text" className="p-2 w-full mb-2 border" />
                            <input
                                placeholder="Company Address 1"
                                type="text"
                                className="p-2 rounded-lg w-full mb-2 border"
                                value={companyAddress1}
                                onChange={(e) => setCompanyAddress1(e.target.value)}
                            />
                            <input placeholder="Company Address 2 (optional)" type="text" className="p-2 w-full mb-2 border" />
                            <input
                                placeholder="City"
                                type="text"
                                className="p-2 w-full mb-2 border"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </div>
                        <p className="text-md font-semibold text-gray-500 mb-2">Describe Your Company</p>
                        <textarea
                            className="border h-[150px] md:h-[250px]"
                            placeholder="What makes your company unique? "
                            cols={30}
                            value={companyDescription}
                            onChange={(e) => setCompanyDescription(e.target.value)}
                        />
                        <p className="text-md font-semibold text-gray-500 mb-2">Contact Details</p>
                        <ContactNumber onContactNumberChange={(newnumber) => setContactNumber(prev => [...prev, newnumber] )} />

                       
                    <PostModal isOpen={isPostModalOpen} onSubmit={handlePostSubmit} />
                    <FeedbackModal isOpen={isFeedbackModalOpen} onClose={closeFeedbackModal} />
              
                    </InnerWrapper>



                <BannerLayout bannerText={"This information helps buyer to connect with you easily"} imgSrc={"/propertyListing/assets/broker.webp"} showContact startWithPic />
            </OuterWrapper>

            <div className="w-[90%] xs:w-[80%]  md:w-full max-md:mx-auto px-5 pb-5 md:px-4 md:container">
                    <h1 className=" font-heading mb-2">GDPR Agreement *</h1>
                    <div className="flex flex-row justify-center my-2 gap-2 items-center">
                        <input
                            type='checkbox'
                            className='input-checkbox'
                            checked={isGDPRChecked}
                            onChange={handleGDPRCheckboxChange}
                        />
                        <p className="text-sm sm:text-base md:text-xl">I agree to this website &quot;Deal Acres&quot; storing my submitted information; see more details below.</p>
                    </div>
                    <div className="bg-[#f3f3f3] p-2  mt-4 text-sm md:text-base rounded-lg md:mb-8">
                        <p>The data based on a search query on Deal Acres has been made available for information/advertisement purposes. No warranty is implied for its accuracy. Nothing contained herein will be deemed to constitute any sort of legal advice, solicitation, marketing, offer of sale, an invitation to offer, or an invitation to get by the developer/builder or any other entity. You are advised to visit the relevant RERA website. And get more information about the builder and property directly. Before deciding on the project content displayed on dealacres.com. If you have any queries contact Deal Acres at contact@dealacres.com.</p>
                    </div>
                    <button
                        onClick={openPostModal}
                        className={`w-full bg-blue-600 rounded-xl px-8 py-3 font-bold text-white mt-5 mb-10  hover:bg-white hover:border-2 hover:border-blue-600 hover:text-blue-600 ${!isGDPRChecked ? 'cursor-not-allowed bg-gray-400' : ''
                            }`}
                        disabled={!isGDPRChecked}
                    >
                        Post Property
                    </button>
                    <PostModal isOpen={isPostModalOpen} onSubmit={handlePostSubmit} />
                    <FeedbackModal isOpen={isFeedbackModalOpen} onClose={closeFeedbackModal} />

                    <HelpDetails showOnMobile/>

                </div>
        </PageWrapper>
    );
};

export default Page;
