import Image from 'next/image'
import React from 'react'

const EmiFeatureListItem = ({
    label,
    text,
    img
}) => {
  return (
    <div className='w-full h-full flex gap-4 items-center'>
      <div className='min-w-[150px] min-h-[150px] max-h-full w-[150px] h-[150px]  self-start'>
        <Image width={150} height={150} src={`/emi/${img}`} alt={label} className='w-full  h-full max-h-full max-w-full '/>
      </div>
      <div className='text-base xs:text-lg text-justify'>
        <h3 className='inline font-bold '>
            {label}{": "}
        </h3>
        <p className='inline  '>
            {text}
        </p>
      </div>
    </div>
  )
}

export default EmiFeatureListItem
