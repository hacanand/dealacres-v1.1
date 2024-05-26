import React from 'react'
import PostHeader from './PostHeader'



const SectionList = ({
  title,
  content
}) => {
  return (
    <li className='py-2'>

      <div className='text-sm xs:text-base  md:text-3xl font-[500]'>
        {title}
      </div>

      <div className='text-sm sm:text-base text-justify'>
        {content}
      </div>

    </li>
  )
}

export default SectionList
