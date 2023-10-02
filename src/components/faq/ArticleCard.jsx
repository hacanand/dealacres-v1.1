'use client'

import React from 'react'
import img  from '../../../public/faq/placeholder_article.png';
import Image from 'next/image';
import { useEffect } from 'react';
const ArticleCard = ({
    date,
    title,
    index
}) => {
   useEffect(() => {
   
   }, [])
  return (
    <div className=' relative m-4  max-w-[1/3] self-stretch min-h-[250px]'>
      <Image src={img} alt='artcle cover' className='w-full'/>
      <div className='px-4 py-2'>
      <p className='font-bold text-blue-500 py-2'>{title}</p>
      <p className='text-neutral-500 text-sm font-medium '>{date}</p>
      </div>
    </div>
  )
}

export default ArticleCard
