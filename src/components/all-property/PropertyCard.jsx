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
    <div className="p-4 border border-blue-600 rounded-xl bg-white max-sm:w-full max-md:w-[calc(50%-1rem)]">
      <div className="md:flex md:grid md:grid-cols-3 md:gap-4">
        <div className="md:col-span-1">
          <div className="rounded-2xl overflow-hidden w-full h-full">
            <img
              src={imageUrl}
              alt="Property Image"
              className="object-cover rounded-2xl w-full h-full md:h-full"
            />
          </div>
        </div>
        <div className="md:col-span-2 py-2">
          <p className="text-blue-600 text-md font-semibold">{price}</p>
          <p className="text-black text-lg font-bold">{name}</p>
          <p className="text-gray-600 text-xs mt-3 md:mt-0">{location}</p>
          <p className="text-gray-600 text-sm mt-1">{size} Sq.ft</p>
          <p className="text-gray-600 text-sm mt-1">{details}</p>

          <div className="mt-3 flex flex-row items-center justify-between w-full">
            <button className="bg-blue-700 hover:bg-blue-800 text-white py-1 px-4 rounded">
              Details
            </button>

            <div className="flex items-center">
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
