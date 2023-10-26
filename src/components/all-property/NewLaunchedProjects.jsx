import React from "react";
import cityImage from "../../../public/locationCityWise/city.jpg";
import Image from "next/image";

const NewLaunchedProjects = () => {
  return (
    <div className="p-4 bg-[#FFD3A3]">
      <h2 className="text-2xl font-semibold mb-2">Newly Launched Projects</h2>
      <p className="font-semibold mb-2">
        Recently added projects and phases in Delhi / NCR (All)
      </p>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Repeat this block for each project */}
        <div className="flex flex-col items-center justify-center md:w-1/4 p-4">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
            <Image
              src={cityImage}
              alt="Your Image"
              className="object-cover w-full h-full"
            />
          </div>
          <p className="text-center font-semibold text-sm md:text-xs mt-2">
            Gulshan Avante
          </p>
          <p className="text-center text-gray-600 text-xs">Sector 93 Gurgaon</p>
          <p className="text-center font-semibold text-sm md:text-xs">
            ₹ 45 - 75 Lac
          </p>
        </div>
        <div className="flex flex-col items-center justify-center md:w-1/4 p-4">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
            <Image
              src={cityImage}
              alt="Your Image"
              className="object-cover w-full h-full"
            />
          </div>
          <p className="text-center font-semibold text-sm md:text-xs mt-2">
            Gulshan Avante
          </p>
          <p className="text-center text-gray-600 text-xs">Sector 93 Gurgaon</p>
          <p className="text-center font-semibold text-sm md:text-xs">
            ₹ 45 - 75 Lac
          </p>
        </div>
        <div className="flex flex-col items-center justify-center md:w-1/4 p-4">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
            <Image
              src={cityImage}
              alt="Your Image"
              className="object-cover w-full h-full"
            />
          </div>
          <p className="text-center font-semibold text-sm md:text-xs mt-2">
            Gulshan Avante
          </p>
          <p className="text-center text-gray-600 text-xs">Sector 93 Gurgaon</p>
          <p className="text-center font-semibold text-sm md:text-xs">
            ₹ 45 - 75 Lac
          </p>
        </div>
        <div className="flex flex-col items-center justify-center md:w-1/4 p-4">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
            <Image
              src={cityImage}
              alt="Your Image"
              className="object-cover w-full h-full"
            />
          </div>
          <p className="text-center font-semibold text-sm md:text-xs mt-2">
            Gulshan Avante
          </p>
          <p className="text-center text-gray-600 text-xs">Sector 93 Gurgaon</p>
          <p className="text-center font-semibold text-sm md:text-xs">
            ₹ 45 - 75 Lac
          </p>
        </div>
        {/* End of project block */}
      </div>
    </div>
  );
};

export default NewLaunchedProjects;
