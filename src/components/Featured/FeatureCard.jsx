import Image from 'next/image'
import React from 'react'

const FeatureCard = ({
    img,
    text
}) => {
  return (
    <div className="border-1 shadow-lg transition-all    h-full flex flex-col">
            <div className="flex-grow overflow-hidden  ">
              <Image
                src={img}
                alt="card"
                className="w-full h-full object-cover"
                width={600}
                height={1800}
              />
            </div>
            <div className="flex  justify-center text-center text-lg font-bold   py-4 px-2 shadow border border-t-0 border-gray-400 ">
              {text}
            </div>
          </div>
  )
}

export default FeatureCard
