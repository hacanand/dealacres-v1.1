import React from 'react'



const SectionList = ({
    title,
    content
}) => {
  return (
    <li className='py-2'>
        <div className='font-medium text-2xl'>
            {title}
        </div>
        <div className='text-xl text-justify'>
            {content}
        </div>
      
    </li>
  )
}

export default SectionList
