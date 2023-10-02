import Image from 'next/image'
import React from 'react'

const InvestmentOptionsCard = ({
    title,
    src,
    bgColor
}) => {
  return (
    <div className={`flex  flex-col p-2 rounded-xl  w-4/5 mx-auto sm:mx-0 sm:w-[250px] h-[140px] shadow ${bgColor} cursor-pointer transition-all justify-between hover:shadow-lg hover:scale-[1.1]`}>
      <p className='font-bold text-lg pt-1'>
        {title}
      </p>
      <div className='flex  justify-end'>
        <div>

        <Image src={src} alt={title} className='w-[80px] '/>
        </div>
      </div>
    </div>
  )
}

export default InvestmentOptionsCard
