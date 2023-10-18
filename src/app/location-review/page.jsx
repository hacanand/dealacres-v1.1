"use client";

import React, { useState } from "react";
import { GoLocation } from "react-icons/go";
import RateLocation from "@/components/location-review/RateLocation";
import RoleTag from "@/components/location-review/RoleTag";

const roles = ["Owner", "Tenant", "Real Estate Agent", "Formal Residence"];

const LocationReview = () => {
  const [serviceRatings, setServiceRatings] = useState([
    { facility: "Public Transport", rating: 0 },
    { facility: "Education", rating: 0 },
    { facility: "Healthcare", rating: 0 },
    { facility: "Shopping", rating: 0 },
    { facility: "Entertainment", rating: 0 },
  ]);

  const [currentRole, setCurrentRole] = useState("");

  const handleRate = ({ facility, rating }) => {
    const updatedServiceRatings = [...serviceRatings];
    const facilityIndex = updatedServiceRatings.findIndex(
      (item) => item.facility === facility
    );

    if (facilityIndex !== -1) {
      updatedServiceRatings[facilityIndex].rating = rating;
      setServiceRatings(updatedServiceRatings);
    }
  };

  const [locationInput, setLocationInput] = useState("");
  const [locationSuggestions, setLocationSuggestions] = useState([]);

  const fakeLocationSuggestions = [
    "Delhi",
    "Mumbai",
    "Bangalore",
    "Chennai",
    "Kolkata",
    "Hyderabad",
    "Pune",
    "Jaipur",
    "Lucknow",
    "Ahmedabad",
  ];

  const handleLocationInputChange = (event) => {
    const inputValue = event.target.value;
    setLocationInput(inputValue);

    const filteredSuggestions = fakeLocationSuggestions.filter((location) =>
      location.toLowerCase().includes(inputValue.toLowerCase())
    );

    setLocationSuggestions(filteredSuggestions);
  };

  const handleLocationSelect = (selectedLocation) => {
    setLocationInput(selectedLocation);
    setLocationSuggestions([]);
  };

  return (
    <div className="w-full py-5 px-4 md:px-8 lg:px-[15rem] xl:px-[20rem] mt-10 mb-10">
      <div className="flex flex-col items-start border-2 border-blue-300 p-6">
        <h2 className="block text-center text-2xl md:text-3xl font-bold w-full">
          Write Your Reviews ✍
        </h2>

        <div className="w-full md:w-auto">
          <div className="space-y-4 md:space-y-2 mt-8">
            <p className="text-lg md:text-xl font-semibold">
              What describes you the best?
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              {roles.map((role, index) => (
                <RoleTag
                  key={index}
                  role={role}
                  isSelected={role === currentRole}
                  onRoleClick={(role) => setCurrentRole(role)}
                />
              ))}
            </div>
          </div>

          <div className="space-y-4 md:space-y-2 mt-8 w-full">
            <p className="text-lg md:text-xl font-semibold">
              Select your locality / society to Review
            </p>
            <div className="relative">
              <input
                className="py-2 md:py-1 border-2 border-blue-300 w-full rounded-md pl-10 md:pl-7 focus:outline-none focus:border-blue-400"
                value={locationInput}
                onChange={handleLocationInputChange}
              />
              <GoLocation className="absolute left-3 top-3 md:left-2 md:top-2" />
              <ul className="w-full rounded-md max-h-[200px] overflow-y-auto">
                {locationSuggestions.map((location, index) => (
                  <li
                    key={index}
                    onClick={() => handleLocationSelect(location)}
                    className="cursor-pointer py-1 px-3 hover:bg-blue-200"
                  >
                    {location}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <button className="bg-[#0061DF] font-bold text-md md:text-md py-3 px-6 md:px-4 rounded-md text-center text-white mt-8">
            Write Review
          </button>

          <div className="space-y-4 md:space-y-2 mt-8 w-full">
            <p className="text-lg md:text-xl font-semibold">
              What do you like about the locality?
            </p>
            <textarea
              type="text"
              className="pl-5 md:pl-2 pt-2 pb-12 md:pb-24 border-2 border-blue-300 w-full rounded-md"
            ></textarea>
          </div>

          <div className="space-y-4 md:space-y-2 mt-8 w-full">
            <p className="text-lg md:text-xl font-semibold">
              What do you Dislike about the locality?
            </p>
            <textarea
              type="text"
              className="pl-5 md:pl-2 pt-2 pb-12 md:pb-24 border-2 border-blue-300 w-full rounded-md"
            ></textarea>
          </div>

          <div className="space-y-4 mt-10 w-full">
            <p className="text-lg md:text-xl font-semibold">
              Rate This - What you Thought
            </p>
            {serviceRatings.map((service, index) => (
              <RateLocation
                key={index}
                facility={service.facility}
                onRate={handleRate}
              />
            ))}
          </div>

          <button className="bg-[#0061DF] font-bold text-md md:text-md py-3 px-6 md:px-4 rounded-md text-center text-white mt-8">
            Post Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationReview;
