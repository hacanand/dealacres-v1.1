import Image from 'next/image';
import React from 'react'

const ArticleCard = ({
    title,
    img
}) => {
  return (
    <div className='flex flex-col items-center '>
      <div className='w-full  h-[100px] md:h-[200px] relative'>

      <Image alt={title}   src={`/blog/${img}`}
      fill 
      className='object-cover '/>
      </div>

        <div className='w-full font-semibold text-base md:text-lg bg-neutral-300 text-center py-2'>
            {title}
        </div>
    </div>

  )
}

export default ArticleCard
