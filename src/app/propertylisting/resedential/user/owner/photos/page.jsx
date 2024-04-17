'use client';

import { useState } from 'react';
import Navigation from '@/components/propertyListing/Navigation/Navigation';
import Image from 'next/image';
import Link from 'next/link';
import FileDropzone from '@/components/propertyListing/FileDropZone';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import BannerLayout from '@/components/propertyListing/BannerLayout';

const Page = () => {
  const [droppedFiles, setDroppedFiles] = useState([]);

  const handleFilesDrop = (acceptedFiles) => {

    setDroppedFiles(acceptedFiles);
  };

  const isFilesDropped = () => {
    return droppedFiles.length > 0;
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <section className='md:mt-12 md:container mx-auto lg:w-4/5'>
        <Navigation />
        <div className='flex flex-col md:flex-row md:px-4 items-start justify-center gap-10 md:gap-20 md:container mx-auto md:my-10 overflow-auto'>

          <BannerLayout bannerText={" Click Perfect pictures of your property so the renter or buyer can see the best images of your property."}
          imgSrc={"/propertyListing/assets/camera.png"} showContact />
          <div className='h-full w-[90%] max-md:mx-auto md:w-[50%]  md:mt-20 rounded-xl p-5 border-t-4 border-r-2 border-l-2 border-[#dcf0fd] border-b-4 max-md:border-none'>
            <h1 className="font-medium md:font-bold md:text-2xl text-xl  my-2">
              Add Media
            </h1>
            <FileDropzone onFilesDrop={handleFilesDrop} description={'Uploaded photo is a maximum of 2MB'} />
            <p className='text-sm mb-5'>At least add 3 images of your property for good visibility and a high response.</p>
            <Link href={isFilesDropped() ? 'pricing-&others' : '#'}>
              <button
                className={`w-full bg-blue-600 rounded-md px-8 py-3 font-bold text-white my-3 hover:bg-white hover:border-2 hover:border-blue-600 hover:text-blue-600 ${!isFilesDropped() ? 'cursor-not-allowed bg-gray-400' : ''
                  }`}
                disabled={!isFilesDropped()}
              >
                Continue
              </button>
            </Link>
          </div>
        </div>
      </section>
    </DndProvider>
  );
};

export default Page;
