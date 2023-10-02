import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'

const NextArrow = ({
    style, onClick, className
}) => {
  return (
    <div className={` ${className}`}
    onClick={onClick}
    style={{...style}}
    >

        <span className=' bg-sky-500 text-white w-[35px] h-[35px] rounded-full inline-flex items-center justify-center'>

        <AiOutlineArrowRight color="white" size={20}/>
        </span>
    </div>
  )
}

export default NextArrow
