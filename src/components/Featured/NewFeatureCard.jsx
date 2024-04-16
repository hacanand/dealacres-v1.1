import Image from 'next/image'
import React from 'react'

const NewFeatureCard = ({
    img,
    text,
    variant
}) => {
  return (
    <div className={`border-1 shadow-lg transition-all overflow-hidden  hover:bg-neutral-200 cursor-pointer    h-full max-h-full flex flex-col  `}>
            <div className="flex-grow md:overflow-clip max-w-full    ">
              <Image
                src={img}
                alt="card"
                className="w-full h-full scale-100 transition-all object-cover hover:scale-[1.3]"
                width={600}
                height={1800}
              />
            </div>
            <div className={`flex  justify-center text-center text-xs  md:text-base  font-bold   py-2 px-1 shadow border border-t-0 border-gray-400 ${variant === "small" && 'max-md:text-[8px] max-md:py-0 max-md:px-0'}`}>
              {text}
            </div>
          </div>
  )
}

export default NewFeatureCard
