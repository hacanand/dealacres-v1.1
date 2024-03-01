'use client';

import Navigation from "@/components/propertyListing/Navigation/Navigation";
import { useState } from "react";
import Image from "next/image";
import AmenitiesList from "@/components/propertyListing/Amenities";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import FileDropzone from "@/components/propertyListing/FileDropZone";
import { propertyFacing } from "@/components/propertyListing/constants";
import Button from "@/components/propertyListing/Button/Button";
import PostModal from "@/components/propertyListing/PostModal";
import FeedbackModal from "@/components/propertyListing/FeedbackModal";
import { FaRupeeSign } from "react-icons/fa";

const Page = () => {
  const handleFilesDrop = (acceptedFiles) => {
    console.log('Dropped files:', acceptedFiles);
  };
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

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
    <section className='mt-12 container mx-auto lg:w-4/5'>

      <Navigation />
      <div className='flex flex-col md:flex-row px-4 items-start justify-center gap-10 md:gap-20 container mx-auto my-10 overflow-auto'>

        <div className='h-full md:w-[450px] rounded-xl p-5 border-t-4 border-r-2 border-l-2 border-[#dcf0fd] border-b-4'>
          <h1 className="font-medium md:font-bold md:text-2xl text-xl">
            Price Details
          </h1>
          <input type="text" className="custom-border-2 px-2 py-3 rounded-xl w-[80%] mt-2" placeholder="Expected Price" />
          <input type="text" className="custom-border-2 px-2 py-3 rounded-xl w-[60%] mt-2" placeholder="Price per Sq.Yd" />
          <div className='flex flex-wrap gap-4 my-6'>
            <div className='flex flex-row items-center gap-2'>
              <input
                type="checkbox"
                width={12}
                height={24}
                className='input-checkbox'
              />
              <p>All Inclusive Price</p>
            </div>
            <div className='flex flex-row items-center gap-2'>
              <input
                type="checkbox"
                width={12}
                height={24}
                className='input-checkbox'
              />
              <p>Price Negoiable</p>
            </div>
            <div className='flex flex-row items-center gap-2'>
              <input
                type="checkbox"
                width={12}
                height={24}
                className='input-checkbox'
              />
              <p>Tax and Govt. Charges Excluded</p>
            </div>
          </div>
          <h1 className="font-medium md:font-bold md:text-2xl text-xl my-4">Booking/Token Amount</h1>
          <div className="relative">
          <input type="text" className="custom-border-2 px-5 py-3 rounded-xl w-[80%] mt-2 " />
          <FaRupeeSign  className="absolute top-[40%] left-2"/>
          </div>
          
          <h1 className="font-medium md:font-bold md:text-2xl text-xl my-4">Add Amenties and Features</h1>
          <AmenitiesList />
          <div className="flex flex-row items-center">
            <p className="text-xl text-blue-600">More</p>
            <MdKeyboardDoubleArrowDown size={20} color="blue" />
          </div>
          <h1 className="font-medium md:font-bold md:text-2xl text-xl my-2">
            Property Facing
          </h1>
          {propertyFacing.map((face,idx) => (

            <Button heading={face} key={idx} />

          ))}
          <h1 className="font-medium md:font-bold md:text-2xl text-xl my-2">
            Upload Floor Plan
          </h1>
          <FileDropzone onFilesDrop={handleFilesDrop} description={'Uploaded photo is maximum is of 5MB'} />
        </div>

        <div className='h-full w-[400px] rounded-xl bg-[#c9e0ee] p-4 flex flex-col items-center mt-5'>
          <ul className="list-disc pl-12 text-xl mt-16">
            <li className="mb-2">Mention attractive amenities and appealing details of your property.</li>
            <li className="mb-2">Add property proximity to transit Shopping, Market Areas, and more...</li>
          </ul>
          <Image src={'/propertyListing/assets/amenities.png'} alt='amenities' height={200} width={200} className='mt-3 mb-10' />
          <h1 className='font-bold text-xl'>Need Help?</h1>
          <p className='text-lg'>You Can Email Us</p>
          <p className='text-lg text-blue-600 mb-20'>Contact@dealacres.com</p>
        </div>
      </div>
      <div className="md:px-24">
        <h1 className=" font-heading">GDPR Agreement *</h1>
        <div className="flex flex-row items-center my-2 gap-2">
          <input type="checkbox" className="input-checkbox " />
          <p className="text-xl">I agree to this website &quot;Deal Acres&quot; storing my submitted information; see more details below.</p>
        </div>
        <div className="bg-[#e1dff8] p-2 rounded-lg mb-8">
          <p>The data based on a search query on Deal Acres has been made available for information/advertisement purposes. No warranty is implied for its accuracy. Nothing contained herein will be deemed to constitute any sort of legal advice, solicitation, marketing, offer of sale, an invitation to offer, or an invitation to get by the developer/builder or any other entity. You are advised to visit the relevant RERA website. And get more information about the builder and property directly. Before deciding on the project content displayed on dealacres.com. If you have any queries contact Deal Acres at contact@dealacres.com.</p>
        </div>
        <button onClick={openPostModal} className='w-full bg-blue-600 rounded-xl px-8 py-3 font-bold text-white mt-5 mb-10  hover:bg-white hover:border-2 hover:border-blue-600 hover:text-blue-600'>Post Property</button>
        <PostModal isOpen={isPostModalOpen} onSubmit={handlePostSubmit} />
        <FeedbackModal isOpen={isFeedbackModalOpen} onClose={closeFeedbackModal} />

      </div>


    </section>)

}


export default Page


