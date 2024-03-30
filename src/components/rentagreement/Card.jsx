import React from "react";

import { IoShareSocialOutline } from "react-icons/io5";

function NewsCard({ title, text, imageSrc, date, handleShare }) {
  return (
    <div className="bg-white max-w-[250px] lg:max-w-[100%] rounded-lg overflow-hidden shadow-lg w-full  h-[300px]  grid grid-rows-[_repeat(10,1fr)]  min-h-[230px] min-w-[210px] md:min-w-[250px]">
      <div className="row-span-4">
        <img
          src={imageSrc}
          alt="Manual"
          className=" object-cover w-full h-full"
          
        />
      </div>
      <div className="p-2 items-center grid grid-rows-4 row-span-6 ">
        <h3 className="font-semibold row-span-1">{title}</h3>
        <p className="text-gray-700 text-sm md:text-base text-justify row-span-2">{text}</p>
        <div className="flex justify-between items-center row-span-1">
          <div className="flex items-center space-x-2">
            <span className="text-gray-400 text-xs sm:text-sm">{date}</span>
          </div>
          <div>
            <button
              onClick={handleShare}
              className="text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              <IoShareSocialOutline size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
