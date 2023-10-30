import Image from 'next/image'
import React from 'react'

const ListingCard = ({
    title,
    img,
    price,
    date
}) => {
  return (
    <div className='flex p-2'>
        <div className='w-[30%]'>
            <Image src={`/single-agent/${img}`} className='rounded-xl' alt={title} width={300} height={100}/>
        </div>
        <div className='w-[70%] px-4 text-gray-500'>
            <h3 className='font-bold text-lg text-black'>
                {title}
            </h3>
            <p>
                RS {price}
            </p>
            <p>
                {date}
            </p>
        </div>
      
    </div>
  )
}

export default ListingCard
