import React from 'react'
import Image from 'next/image'

const Card = ({imgsrc,service}) => {
  return (
    <div>          <div className="max-w-[1640px] mx-auto p-8 mt-0 py-12 mb-10 grid md:grid-cols-3 gap-6">
    {/* Card */}
    <div className="rounded-xl relative h-16 w-48">
      {/* Overlay */}
      <div className="absolute w-full bg-black/10 rounded-xl  text-white flex items-center justify-center">
        <p className="px-2 font-semibold bottom-4">{service}</p>
      </div>
      <div className="group">
        <Image
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
          src= {imgsrc}
          alt="/"
          width={100}
          height={100}
        />
      </div>
    </div>
  </div></div>
  )
}

export default Card