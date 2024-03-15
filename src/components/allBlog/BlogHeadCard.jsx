import React from 'react'

const BlogHeadCard = ({
    title,
    description,
    color,

}) => {
  return (
    <div className={` hover:bg-white/20 cursor-pointer transition-all py-2 px-4 rounded shadow-lg bg-black/60`}>
      <p className={`${color} text-xl font-bold`}>
        {title}
      </p>
      <p className='text-lg hover:text-black'>
        {description}
      </p>
    </div>
  )
}

export default BlogHeadCard
