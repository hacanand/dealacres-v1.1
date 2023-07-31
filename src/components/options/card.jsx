import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({ imgsrc, service }) => {
  return (
    <div className="text-center max-w-[200px] mt-0 mb-4">
      <div className="image-container rounded-xl overflow-hidden w-[200px] h-[160px] transition-transform duration-300 transform hover:scale-105">
        <Image src={imgsrc} alt="Card Image" layout="fill" objectFit="cover" />
      </div>
      <div className="mt-2 block max-w-[200px]">
        <p className="text-center font-semibold font-[Poppins] text-gray-500 hover:text-black">
          {service}
        </p>
      </div>
    </div>
  );
};

export default Card;
