import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({ imgsrc, service }) => {
  return (
    <div className="text-center p-8 mt-0 py-12 mb-4">
    <Link href='#'>
    <div className="block relative ">
      <Image
        src={imgsrc}
        alt="Card Image"
        className="object-cover rounded-xl transition-transform duration-300 transform hover:scale-105"
        width={250}
        height={160}
      />
    </div>
    <div className="mt-2 block max-w-[250px]">
      <p className="px-2 py-3 text-center font-semibold font-[Poppins] text-gray-500 hover:text-black">{service}</p>
    </div>
    </Link>
  </div>
  );
};

export default Card;
