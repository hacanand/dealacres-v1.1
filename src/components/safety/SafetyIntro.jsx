import React from 'react'

const SafetyInro = ({
    title,
    content
}) => {
  return (
    <div>
        <p className='font-bold text-2xl md:text-xl'>{title}</p>
        <p className='text-justify text-lg font-normal'>{content}</p> 
    </div>
  )
}

export default SafetyInro
