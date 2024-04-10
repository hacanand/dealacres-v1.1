'use client'

import React, { useEffect } from 'react'
import PostSection, { PostSectionProps } from './PostSection';
import PostHeader from './PostHeader';
import PublishedOn from './PublishedOn';
import Image from 'next/image';



const BlogPost = ({
  postData, topicsData
}) => {

  const { heading, postIntro, publishedOn, img, sections, } = postData;




  return (

    <div className='px-2 xs:px-4 py-2 flex flex-col font-light  '>
      <PostHeader heading={heading} align='left' size='large' />
      <div className='flex flex-row md:hidden overflow-x-auto pb-2 gap-4'>
        {topicsData.map((topic, index) => {
          return (
            <span className='text-sm whitespace-nowrap capitalize ' key={index}>
              #{topic}
            </span>
          )
        })}
      </div>
      <PublishedOn date={publishedOn} align='left' />

      <div className="text-justify text-sm md:text-base" dangerouslySetInnerHTML={{ __html: postIntro }}></div>

      <div className='py-4'>
        <Image src={`/blog/${img}`} alt='post cover' width={200} height={100} className='w-full max-w-full' />
      </div>


      <div>
        {sections.map((section, index) => {
          return (
            <PostSection
              title={section.title}
              content={section.content}
              img={section.img}
              isList={section.isList}
              isItalic={section.isItalic}
              lists={section.lists}
              key={index}
            />
          )
        })}
      </div>
    </div>
  )
}

export default BlogPost
