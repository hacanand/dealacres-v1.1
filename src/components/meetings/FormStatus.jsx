'use client'

import { ErrorOutline } from '@mui/icons-material'
import React from 'react'
import { useCallback } from 'react'

const FormStatus = (
    {tab,
    meetingMode,
    date,
    time,
    handleSubmit,
    onSubmit,
    errors,
setTab}
) => {

    const handleNextClick = () => {
       
       if(tab === 0){
            if(errors['date'] || errors['time'] || errors['meetingMode']){
                console.log(errors);
                return
            }
           setTab(1);
       }else {
        console.log('hello')
            if(errors['app']){
                console.log(errors);
                return
            }
        handleSubmit(onSubmit)
     
       }
       
    }
    return (
        <div className='
        w-screen
        
        bg-blue-600 text-white py-8 px-16  flex justify-between items-center'>
            <div className='flex gap-16 items-center'>
                <div className='flex flex-col text-xl'>
                    <span className='font-bold text-2xl'>
                        MEETING
                    </span>
                    {meetingMode}
                </div>
                <div className='flex flex-col text-xl'>
                    <span className='font-bold text-2xl'>
                        DATE
                    </span>
                    {date}
                </div>
                <div className='flex flex-col text-xl'>
                    <span className='font-bold text-2xl'>
                        TIME
                    </span>
                    {time}
                </div>
            </div>

            <div>
               { tab === 0 ? <button
                className='text-blue-500 font-bold text-4xl bg-white rounded shadow px-16 py-3 '
                onClick={handleNextClick}>
                    Next
                </button> : <button
                className='text-blue-500 font-bold text-4xl bg-white rounded shadow px-16 py-3 '
                onClick={handleSubmit(onSubmit)}>
                    Submit
                </button> }
            </div>
        </div>
    )
}

export default FormStatus
