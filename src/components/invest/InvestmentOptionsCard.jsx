import Image from 'next/image'
import React from 'react'

const InvestmentOptionsCard = ({
    title,
    src,
    bgColor
}) => {
  return (
    <div className={`flex  flex-col p-2 rounded-xl overflow-hidden  mx-0  h-[140px] shadow ${bgColor} cursor-pointer transition-all justify-between hover:shadow-lg hover:scale-[1.1]`}>
      <p className='font-bold text-base min-[440px]:text-lg pt-1'>
        {title}
      </p>
      <div className='flex  justify-end'>
        <div>

        <Image src={src} alt={title} className='w-[60px] min-[440px]:w-[80px] '/>
        </div>
      </div>
    </div>
  )
}

export default InvestmentOptionsCard
