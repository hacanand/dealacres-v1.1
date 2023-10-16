import React from 'react'

const BlogHeadCard = ({
    title,
    description,
    color,

}) => {
  return (
    <div className={` hover:bg-white/60 cursor-pointer transition-all py-2 px-4 rounded shadow-lg bg-black/30`}>
      <p className={`${color} text-xl font-bold`}>
        {title}
      </p>
      <p className='text-lg'>
        {description}
      </p>
    </div>
  )
}

export default BlogHeadCard
