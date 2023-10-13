import React from "react";
import Image from "next/image";
import uploadImage from "../../../public/businessListing/upload-logo.png";

const BusinessWizardFormPage4 = ({ onPreviousClick }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4 sm:p-6 md:p-10">
      <div>
        <h1 className="text-2xl font-semibold text-center mb-2 sm:text-lg">
          Add Media
        </h1>
        <div className="flex flex-row items-center justify-center space-x-4 sm:space-x-6 text-blue-600  mb-2">
          <p>Logo</p>
          <p>Image</p>
          <p>Video</p>
        </div>
        <div className="h-[2px] w-[60%] bg-gray-700 mb-2"></div>
        <div className="flex flex-col items-center justify-center bg-blue-100 w-auto h-auto p-4 sm:p-8 rounded-lg shadow-lg">
          <Image
            src={uploadImage}
            className="h-10 w-auto mb-4"
            alt="upload image"
          />
          <h2 className="text-lg font-semibold text-center mb-1 sm:text-md">
            Drag & Drop Upload Image Here
          </h2>
          <p className="text-gray-600 text-md text-center">
            Uploaded photo size should not exceed 2MB
          </p>
          <div className="mt-3 sm:mt-5">
            <input type="file" id="fileInput" className="hidden" />
            <label
              htmlFor="fileInput"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              Upload Media
            </label>
          </div>
        </div>
        <p className="text-gray-600 text-md text-center mt-3">
          At least add 4 images of your property for good visibility
          <br /> and high response.
        </p>

        <div className="w-full mt-4 sm:mt-5 flex items-center justify-center">
          <button className="px-10 sm:px-16 py-2 font-semibold text-white bg-blue-600 rounded-lg text-lg w-full">
            List Your Business
          </button>
        </div>
      </div>

      <div className="w-full mt-5 flex justify-center sm:justify-start pr-[1rem] sm:pr-[2rem]">
        <button
          className="font-semibold text-lg bg-blue-600 px-4 py-2 text-white rounded-md text-center"
          onClick={onPreviousClick}
        >
          Previous
        </button>
      </div>
    </div>
  );
};

export default BusinessWizardFormPage4;
