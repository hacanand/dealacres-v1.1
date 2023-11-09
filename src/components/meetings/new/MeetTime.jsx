'use client'
import React, { useRef, useState } from 'react'



/*

    0 i+i 0  0
    0 i+1 1  1

    1 i+i 1  2
    1 i+1 2  3

    2 i 2  4
    2 i+1 3  5

*/
const MeetTime = ({
    selectedDate,
    triggerTimeSelected
}) => {
    let count = 0;
    let availStart = 9;
    let availEnd = 17;

    const [showFull, setShowFull] = useState(false)
    const [selectedTime, setSelectedTime] = useState(null)

 
    const buttonRefs = [...Array(48)].map(() => useRef());
    // console.log(buttonRefs)
    
    const handleTimeChange = (e, i) => {


    
        setSelectedTime(e.target.textContent)
        console.log(buttonRefs[e.target.value])

        setTimeout(() => {
            triggerTimeSelected(selectedTime)
        }, 400)
    }

    console.log(selectedTime);
    return (


        <div className=''>

            <div className='font-bold text-lg'>
                {selectedDate}
            </div>

            <div className=' py-2 flex flex-col gap-4'>


                {[...Array(24)].map((_, time) => {

                    if (count === 4 && !showFull) {
                        return
                    }

                    if (time + 1 >= availStart && time + 1 <= availEnd) {

                        count += 1
                        return (
                            <div>
                                <button
                                key={time + time}
                                ref = {buttonRefs[time + time]}
                                className={`w-full flex items-center justify-center rounded-lg shadow transition hover:bg-blue-100 font-semibold border border-gray-400 py-2 
                                ${buttonRefs[time + time].current && buttonRefs[time + time].current.textContent === selectedTime && 'bg-black hover:bg-black text-white'}
                                `}
                                value={time + time}

                                
                                onClick={(e) => handleTimeChange(e, time)}
                                >
                                    {
                                        time < 12 ? time + 1 + ":00" + (time + 1 === 12 ? ' PM' : ' AM') : (time % 24) - 12 + 1 + ":00" + ((time % 24) - 12 + 1 === 12 ? ' PM' : ' AM')
                                    }
                                </button>{
                                    
                                    time + 1 !== availEnd && <button
                                    key={time + time + 1}
                                    ref={buttonRefs[time + time + 1]}
                                    className={`w-full mt-4 flex items-center justify-center rounded-lg shadow transition hover:bg-blue-100 font-semibold border border-gray-400 py-2
                                    ${buttonRefs[time + time].current && buttonRefs[time + time + 1].current.textContent === selectedTime && 'bg-black hover:bg-black text-white'}
                                    `}
                                    onClick={(e) => handleTimeChange(e, time)}

                                    value={time + time + 1}
                                    >
                                        {
                                            time < 12 ? time + 1 + ":30" + (time + 1 === 12 ? ' PM' : ' AM') : (time % 24) - 12 + 1 + ":30" + ((time % 24) - 12 + 1 === 12 ? ' PM' : ' AM')
                                        }
                                    </button>}
                            </div>
                        )
                    }


                })}

                <div className='w-full text-center '>
                    <span className='font-bold text-blue-500 text-lg cursor-pointer' onClick={() => setShowFull(prev => !prev)}>
                        View {showFull ? 'Less' : 'More'} Timings
                    </span>
                </div>
            </div>
        </div>
    )
}

export default MeetTime
