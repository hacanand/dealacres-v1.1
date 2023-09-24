import Link from "next/link";
import React, { useState } from "react";
import TagsContainer from "../TagsContainer/TagsContainer";
import house from "../../../../public/propertyListing/house.png";
import Image from "next/image";
import "./hero.css"

const Hero = () => {
  const [lookingFor, setLookingFor] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleLookingFor = (tag) => {
    setLookingFor(tag);
  };

  const handlePropertyType = (type) => {
    setPropertyType(type);
  };

  const handleNumber = (number) => {
    setPhoneNumber(number);
  };

  return (
    <section className="flex flex-col lg:flex-row items-center justify-center py-5 space-y-6 lg:space-x-16 self-center">
      <div className="self-center p-6 border-4 border-blue-100 rounded-lg lg:w-1/3 property-form">
        <p className="text-2xl lg:text-3xl font-bold">
          Post Your Property for free
        </p>
        <p className="text-lg text-gray-400">Add Basic Detail</p>

        <section className="mt-3">
          <p className="text-lg font-semibold">Looking for....</p>
          <TagsContainer
            tags={["Sell", "Rent"]}
            onTagClick={handleLookingFor}
            currentlySelected={lookingFor}
          />
        </section>

        <section className="mt-3">
          <p className="text-lg font-semibold">Property Type</p>
          <TagsContainer
            tags={[
              "Resident",
              "commercial",
              "Flat/Apartment",
              "Villa",
              "Plot",
              "Independent House",
              "Builder Floor",
            ]}
            onTagClick={handlePropertyType}
            currentlySelected={propertyType}
          />
        </section>

        <p className="text-lg font-semibold mt-3">Add Your Contact Detail</p>
        <input
          placeholder="Phone Number"
          className="pl-5 py-3 text-sm lg:text-base text-gray-400 border-2 border-blue-200 w-full rounded-lg mt-1"
          type="tel"
          onChange={handleNumber}
        />

        <p className="mt-3 text-gray-400 text-sm lg:text-base">
          Are you a Registered User?{" "}
          <Link className="text-blue-400" href="/login">
            Login
          </Link>
        </p>
        <button className="mt-1 lg:mt-2 font-bold text-white text-center py-3 lg:py-4 bg-[#0061DF] w-full rounded-lg">
          Start Now
        </button>
      </div>

      <div className="bg-blue-200 rounded-lg lg:w-1/3 property-ad">
        <div className="property-ad-details">
        <div className="flex  items-center lg:items-start">
          <span className="text-xl lg:text-2xl font-bold me-7 property-ad-title">
            Post property Ad to sell or rent online for
          </span>
          <span className="text-4xl lg:text-5xl italic font-bold free">Free</span>
        </div>

        <ul className="list-disc pl-8 text-lg lg:text-base mt-6">
          <li>Advertise For FREE</li>
          <li>Sell 10 X faster</li>
          <li>Connect with genuine buyers</li>
          <li>Get unlimited enquiries</li>
        </ul>
        </div>

        <div className="flex items-center justify-center property-ad-image">
          <Image src={house} className="h-48 lg:h-64 w-48 lg:w-64" />
        </div>

      </div>
    </section>
  );
};

export default Hero;
