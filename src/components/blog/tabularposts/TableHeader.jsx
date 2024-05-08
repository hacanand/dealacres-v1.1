import React from 'react'

const TableHeader = ({
    header
}) => {
  return (
    <div className='font-semibold md:font-[400] text-xl md:text-2xl lg:text-[30px] text-left pl-2 py-4 border border-b-black border-t-black bg-white border-x-0 '>
      {header}
    </div>
  )
}

export default TableHeader
