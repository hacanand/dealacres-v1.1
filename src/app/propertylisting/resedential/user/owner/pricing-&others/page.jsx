'use client';


import Navigation from '@/components/propertyListing/Navigation/Navigation';
import { useState } from "react";
import Image from "next/image";
import AmenitiesList from '@/components/propertyListing/Amenities';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import FileDropzone from '@/components/propertyListing/FileDropZone';
import { propertyFacing } from '@/components/propertyListing/constants';
import Button from '@/components/propertyListing/Button/Button';
import PostModal from '@/components/propertyListing/PostModal';
import FeedbackModal from '@/components/propertyListing/FeedbackModal';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import BannerLayout from '@/components/propertyListing/BannerLayout';
import OuterWrapper from '@/components/propertyListing/OuterWrapper';
import InnerWrapper from '@/components/propertyListing/InnerWrapper';

const Page = () => {

  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
  const [expectedPrice, setExpectedPrice] = useState('');
  const [pricePerSqYd, setPricePerSqYd] = useState('');
  const [isGDPRChecked, setIsGDPRChecked] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [selectedPropertyFacing, setSelectedPropertyFacing] = useState([]);

  const handleFilesDrop = (acceptedFiles) => {
    setUploadedFiles(acceptedFiles);
  };
  const handleExpectedPriceChange = (e) => {
    setExpectedPrice(e.target.value);
  };

  const handlePricePerSqYdChange = (e) => {
    setPricePerSqYd(e.target.value);
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

  const handleGDPRCheckboxChange = () => {
    setIsGDPRChecked((prevChecked) => !prevChecked);
  };

  const handlePropertyFacingChange = (face) => {
    setSelectedPropertyFacing((prevFacing) => {
      const updatedFacing = new Set(prevFacing);
      if (updatedFacing.has(face)) {
        updatedFacing.delete(face);
      } else {
        updatedFacing.add(face);
      }
      return [...updatedFacing];
    });
  };


  return (
    <DndProvider backend={HTML5Backend}>
      <section className='md:mt-12 md:container mx-auto lg:w-4/5'>

        <Navigation />
        <OuterWrapper>

          <InnerWrapper>
            <h1 className="font-medium md:font-bold md:text-2xl text-xl">
              Price Details
            </h1>
            <input
              type="text"
              className="custom-border-2 px-2 py-3 rounded-xl  mt-2 w-[80%]"
              placeholder="Expected Price"
              value={expectedPrice}
              onChange={handleExpectedPriceChange}
            />
            <input
              type="text"
              className="custom-border-2 px-2 py-3 rounded-xl w-[50%] mt-2"
              placeholder="Price per Sq.Yd"
              value={pricePerSqYd}
              onChange={handlePricePerSqYdChange}
            />
            <div className='flex flex-wrap gap-2 md:gap-4 my-2 md:my-6 text-sm xs:text-base'>
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
            <h1 className="font-medium md:font-bold md:text-2xl text-xl my-4">Add Amenties and Features</h1>
            <AmenitiesList />
            <div className="flex flex-row items-center">
              <p className="text-xl text-blue-600">More</p>
              <MdKeyboardDoubleArrowDown size={20} color="blue" />
            </div>

            <div className=''>
              <h1 className="font-medium md:font-bold md:text-2xl text-xl my-4">
                Property Facing
              </h1>
              <div className='grid grid-cols-3 gap-2 xs:gap-4 '>
              {propertyFacing.map((face, idx) => (
                <Button
                  key={idx}
                  heading={face}
                  onClick={() => handlePropertyFacingChange(face)}
                  selected={selectedPropertyFacing.includes(face)}
                  size={"extrasmall"}
                />
              ))}
              </div>
            </div>
            <h1 className="font-medium md:font-bold md:text-2xl text-xl my-4">
              Upload Floor Plan
            </h1>
            <FileDropzone onFilesDrop={handleFilesDrop} description={'Uploaded photo is maximum is of 5MB'} />
          </InnerWrapper>



          <BannerLayout lists={["Mention attractive amenities and appealing details of your property.",
            "Add property proximity to transit Shopping, Market Areas, and more..."]} imgSrc={"/propertyListing/assets/amenities.webp"} showContact startWithPic />
        </OuterWrapper>
        <div className="w-[90%] xs:w-[80%]  md:w-full max-md:mx-auto px-5 pb-5 md:px-24">
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
            className={`w-full bg-blue-600 rounded-xl px-8 py-3 font-bold text-white mt-5 mb-10  hover:bg-white hover:border-2 hover:border-blue-600 hover:text-blue-600 ${!isGDPRChecked || uploadedFiles.length === 0 || expectedPrice.trim() === '' || pricePerSqYd.trim() === '' ? 'cursor-not-allowed bg-gray-400' : ''
              }`}
            disabled={!isGDPRChecked || uploadedFiles.length === 0 || expectedPrice.trim() === '' || pricePerSqYd.trim() === ''}
          >
            Post Property
          </button>
          <PostModal isOpen={isPostModalOpen} onSubmit={handlePostSubmit} />
          <FeedbackModal isOpen={isFeedbackModalOpen} onClose={closeFeedbackModal} />

        </div>


      </section>
    </DndProvider>)

}


export default Page


