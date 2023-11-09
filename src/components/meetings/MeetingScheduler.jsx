'use client'

import React, { useState } from 'react'
import Calendar from 'react-calendar'
import MeetCalendar from './new/MeetCalendar'
import MeetAgentInfo from './new/MeetAgentInfo'
import MeetTime from './new/MeetTime'
import ContactDetails from '../ContactUs/ContactDetails'
import AgentContactForm from '../single-agent-page/AgentContactForm'
import MeetAttendeForm from './new/MeetAttendeForm'

const MeetingScheduler = () => {

  const [selectedDate, setSelectedDate] = useState(new Date().toString());
  const [time, setTime] = useState(null)
 
  const triggerDateChange = (value) => {
    setSelectedDate(value.toString())
    
  }
  console.log(selectedDate + "from parent")

  const handleTimeChange = (value) => {
    setTime(value);
}

  return (
    <div className='grid md:grid-cols-12 max-w-screen-lg mx-auto py-4 gap-4 md:gap-0 border bg-white border-gray-400 rounded-xl shadow'>
        <div className='md:col-span-3 px-4 transition-all col-span-1'>
            <MeetAgentInfo selectedDetails={(selectedDate && time) && {date: selectedDate, time}}/>
        </div>
        {!time && <div className='md:col-span-6 px-4 flex justify-center transition-all col-span-1'>
            <MeetCalendar triggerDateChange={triggerDateChange}/>
        </div>}
       
        {!time && <div className='md:col-span-3 px-4 transition-all col-span-1' >
            <MeetTime selectedDate={selectedDate && selectedDate.split(' ').slice(0,4).join(' ')}
            triggerTimeSelected={handleTimeChange}
            />
        </div>}

        {
          <div className={`transition-all duration-500 col-span-1 md:col-span-9 ${(time && selectedDate)  ? 'scale-100 opacity-100 visible static': 'scale-0 opacity-0 invisible absolute'}`}>
            <MeetAttendeForm goBack={() => setTime(null)}/>
          </div>
        }
    </div>
  )
}

export default MeetingScheduler
