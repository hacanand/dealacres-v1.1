"use client";

import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const AmenitiesSelector = () => {
  const [isMainVisible, setIsMainVisible] = useState(false);
  const [showAllAmenities, setShowAllAmenities] = useState(false);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const amenityOptions = [
    "Park",
    "Gym",
    "Swimming Pool",
    "Playground",
    "Tennis Court",
    "Spa",
    "Clubhouse",
    "Yoga Studio",
    "Sauna",
    "Basketball Court",
    "Library",
    "Fitness Center",
    "Business Center",
    "Cinema Room",
  ];
  const maxVisibleAmenities = 2;

  const toggleMainVisible = () => {
    setIsMainVisible(!isMainVisible);
  };

  const toggleShowAllAmenities = () => {
    setShowAllAmenities(!showAllAmenities);
  };

  const toggleAmenity = (amenity) => {
    if (selectedAmenities.includes(amenity)) {
      setSelectedAmenities(
        selectedAmenities.filter((selected) => selected !== amenity)
      );
    } else {
      setSelectedAmenities([...selectedAmenities, amenity]);
    }
  };

  return (
    <div>
      <div
        className="flex items-center justify-between cursor-pointer mt-6"
        onClick={toggleMainVisible}
      >
        <p className="text-gray-900 text-lg">Amenities</p>
        {isMainVisible ? <FaChevronUp /> : <FaChevronDown />}
      </div>

      {isMainVisible && (
        <div className="mt-2 flex flex-wrap gap-4">
          {amenityOptions
            .slice(
              0,
              showAllAmenities ? amenityOptions.length : maxVisibleAmenities
            )
            .map((amenity) => (
              <div
                key={amenity}
                onClick={() => toggleAmenity(amenity)}
                className={`cursor-pointer px-4 py-1 border rounded-full w-fit ${
                  selectedAmenities.includes(amenity)
                    ? "bg-blue-500 text-white"
                    : "text-gray-600 border-[1px] border-gray-600"
                }`}
              >
                + {amenity}
              </div>
            ))}

          {amenityOptions.length > maxVisibleAmenities && (
            <div
              className="cursor-pointer py-1 text-blue-600"
              onClick={toggleShowAllAmenities}
            >
              {showAllAmenities
                ? "Show Less"
                : `+${amenityOptions.length - maxVisibleAmenities} more`}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AmenitiesSelector;
