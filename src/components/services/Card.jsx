import React from "react";
import Image from "next/image";
import Link from 'next/link'

const Card = ({ imgsrc, service }) => {
  return (
    <div>
      <Link href='#'>
      <div className="max-w-[1640px] mx-auto p-8 mt-0 py-12 mb-4 grid md:grid-cols-3 gap-6">
        {/* Card */}
        <div className="rounded-xl  h-16 w-48">
          {/* Overlay */}
          <div className="group">
            <Image
              className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
              src={imgsrc}
              alt="/"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
      <div className="text-gray-500 mb-1">
        <p className="px-2 font-semibold py-3  hover:text-black text-center">{service}</p>
      </div>
      </Link>
    </div>
  );
};

export default Card;
