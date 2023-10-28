'use client'
import React, {useCallback} from 'react'

const DateInput = ({
    id,
    register,
    disabled,
    required,
    date,
    handleOnClick,
    selectedDate,
    isSelected,
    errors
    
}) => {

  const handleDateClick = useCallback((id, date) => {
    handleOnClick(id, date)
  }, [handleOnClick])

  return (
    <span onClick={(e) => {
      handleDateClick(id, date)
    }} {...register(id, {required})} className={`transition-all cursor-pointer inline-flex justify-center items-center w-[80px] h-[80px] border  text-4xl ${isSelected ? 'border-2 border-black bg-green-100' : 'border-neutral-500 '}`}>
      {date.getDate()}
    </span>
  )
}

export default DateInput
