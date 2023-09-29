import React from 'react'

const FaqCategoryButton = ({
    label
}) => {
  return (
    <button className='w-full col-span-1 bg-white border-x-[4px] border-y-[1px] border-blue-500 rounded-2xl text-center py-4 text-blue-500 font-medium text-lg'>
        {label}
    </button>
  )
}

export default FaqCategoryButton
