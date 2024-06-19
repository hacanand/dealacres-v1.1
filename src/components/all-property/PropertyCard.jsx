import React from "react";
import { FaCheck } from "react-icons/fa";
import { useCompareProperty } from "@/context/ComparePropertyContext";

const PropertyCard = ({
  imageUrl,
  price,
  name,
  location,
  size,
  details,
  id,
}) => {
  const { addToCompare, removeFromCompare, isAddedToCompare } =
    useCompareProperty();

  const handleAddToCompare = () => {
    if (isAddedToCompare({ id })) {
      removeFromCompare({ id });
    } else {
      addToCompare({ id, imageUrl, price, name, location, size, details });
    }
  };

  return (
    <div className="md:p-4 p-3 border border-blue-600 rounded-2xl bg-white max-sm:w-full max-md:w-full shadow-md">
      <div className="grid  grid-cols-3  gap-4 max-md:w-full">
        <div className="col-span-1 ">
          <div className="rounded-2xl py-2   overflow-hidden w-full h-full">
            <img
              src={imageUrl}
              alt="Property Image"
              className="object-cover rounded-2xl w-full !max-sm:aspect-square h-full   "
            />
          </div>
        </div>
        <div className="col-span-2 py-2 flex flex-col justify-between ">
          <p className="text-blue-600 md:text-md font-semibold max-sm:leading-5">
            {price}
          </p>
          <p className="text-black md:text-lg text-[0.9rem] font-bold max-sm:leading-5">
            {name}
          </p>
          <p className="text-gray-600 text-sm max-sm:text-sm  sm:mt-1 md:mt-0">
            {location}
          </p>
          <p className="text-gray-600 text-sm sm:mt-1">{size} Sq.ft</p>
          <p className="text-gray-600 md:text-sm   max-sm:leading-[0.85rem] max-sm:text-[0.1rem] whitespace-nowrap text-ellipsis w-full overflow-hidden sm:mt-1">
            {details}
          </p>

          <div className="md:mt-3 mt-1 flex flex-row items-center justify-between w-full">
            <button className="bg-blue-700 hover:bg-blue-800 text-white py-1 px-4 rounded">
              Details
            </button>

            <div className="flex items-center max-sm:hidden">
              <div className="h-4 w-4 border-2 border-gray-600 mr-2 flex items-center justify-center">
                {isAddedToCompare({ id }) && (
                  <FaCheck className="text-green-500 text-xs" />
                )}
              </div>
              <span
                className="text-gray-600 py-1 rounded cursor-pointer"
                onClick={handleAddToCompare}
              >
                {isAddedToCompare({ id })
                  ? "Added to Compare"
                  : "Add to Compare"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
