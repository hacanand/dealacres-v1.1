import Image from 'next/image';
import React from 'react'


const PostCard= ({
    title,
    img
}) => {
  return (
    <div className='p-2 border border-b-gray-700 '>
      
      <div className='flex items-center'>
        
            <Image alt={title} width={100} height={50} className=' w-[150px]' src={`/blog/${img}`} />
       

        <div className='p-2'>
        {title}
        </div>
      </div>
    </div>
  )
}

export default PostCard
