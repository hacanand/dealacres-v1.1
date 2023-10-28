'use client'

import React, { useState } from 'react'
import { useRouter, useSearchParams} from 'next/navigation'
import { useForm } from 'react-hook-form'
import DateInput from './DateInput';

import { LiaGreaterThanSolid, LiaLessThanSolid } from 'react-icons/lia';
import { RiAccountCircleFill } from 'react-icons/ri';
import { AiFillYoutube } from 'react-icons/ai';



import { getNextDays } from '@/app/libs/getNextDays';
import FormStatus from './FormStatus';
import AppSelector from './AppSelector';
import { useEffect,useCallback } from 'react';
const TimeScheduler = () => {
  const params = useSearchParams()
  const mode = params.get('mode')

  const [showFullDate, setShowFullDate] = useState(false);
  const [modeParams, setModeParams] = useState(true);
  const [tab, setTab] = useState(0);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedMMode, setselectedMMode] = useState({
    inPerson: false,
    virtualMode: false,
  });


  const router = useRouter();
  const [selectedApp, setSelectedApp] = useState({
    gMeet: false,
    skype: false,
    zoom: false,
    whatsApp: false,
    gMeet_email: '',
    skype_id: '',
    zoom_email: '',
    whatsApp_number: ''
  });
  const [selectedTime, setSelectedTime] = useState('0:00 PM');

  const defaultAppValues = {gMeet: false,
    skype: false,
    zoom: false,
    whatsApp: false,
    gMeet_email: '',
    skype_id: '',
    zoom_email: '',
    whatsApp_number: ''}
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    setError,
    clearErrors,
    formState: {
      errors
    },
    reset
  } = useForm({
    defaultValues: {
      date: 0,
      meetingMode: {
        inPerson: false,
        virtualMode: false
      },
      time: '0:00',
      app: {
        ...defaultAppValues
      }
    }

  });

  // (new Date()).toString().split(' ').slice(1,4).join(' ')

  const date = watch('date')
  const app = watch('app')

  const today = new Date(); // Get the current date
  const nextFiveDays = getNextDays(today, 0, [today]);

  const tSlots = ['9:00 AM', '12: 00PM', '3:00 PM'];

  const onSubmit = (data) => {
    // console.log(errors)
    if (errors.date || errors.meetingMode || errors.time || errors.app) {
      console.log(errors)
    } else {
      alert("data submited succefully");

      console.log(data);
      setTimeout(() => {
        router.push('/');
      }, 3000)
    }

  }

  const setNewTab = (value) => {
    setTab(value)
    console.log("value is ", value)
  }



  const setCustomValue = (id, value) => {


    setValue(id, value, {
      shouldDirty: true,
      shouldValidate: true,
      shouldTouch: true
    })
  }

  const handleOnClick = useCallback((id, value) => {
    setCustomValue(id, value);
    if (id === 'date') {
      setSelectedDate(value);
    }
    if (id === 'meetingMode') {
      setselectedMMode(value)
    }
    if (id === 'time') {
      setSelectedTime(value)
    }
    if (id === 'app') {
      setSelectedApp(value)
    }



  }, [selectedDate, setSelectedDate, setselectedMMode, setSelectedTime, setSelectedApp ]
)
  // console.log(errors['date'])






  useEffect(() => {
    if(mode && modeParams){


      mode === 'inPerson' ? 
      setselectedMMode({
        inPerson: true,
        virtualMode: false,
      }) : setselectedMMode({
        inPerson: false,
        virtualMode: true,
      })
      setModeParams(false)
    }

    
    
    if (getValues('date') === ' ') {
      setError('date', { type: 'focus', message: 'date is not selected' })
    }
    if (getValues('meetingMode') === '-') {
      setError('meetingMode', { type: 'focus', message: 'meeting mode is not selected' })
    }
    if (getValues('time') === '0:00') {
      setError('time', { type: 'focus', message: 'time is not selected' })
    }

    const { gMeet, gMeet_email, skype, skype_id, zoom, zoom_email, whatsApp, whatsApp_number } = getValues('app')
    
    const appValues = [gMeet, skype, zoom, whatsApp];
    const trueValues = appValues.filter((value) => value === true).length;
    if (trueValues === 0) {
      setError('app', { type: 'focus', message: 'App is not selected' });
    }else {
      clearErrors('app')
    }
    

    console.log(trueValues)

  }, [getValues('app'), getValues('date'), getValues('time'), getValues('meetingMode')])


  return (
    <div className='relative overflow-hidden'>
      {tab === 0 && <div className='max-w-screen-xl mx-auto px-8 py-4'>
        <div>
          <h2 className='text-3xl font-bold py-4 '>Pick a Date</h2>
          <div className='flex flex-wrap gap-4 items-center'>
            {
              nextFiveDays.map((date, index) => {
             
                if (index > 4 && !showFullDate) {
                  return
                }
               
                console.log(selectedDate)
                return <span key={index}><DateInput
                  id="date"
                  selectedDate= {selectedDate}
                  handleOnClick={handleOnClick}
                  register={register}
                  isSelected = {selectedDate !== '' && selectedDate.getDate() === date.getDate()}
                  errors
                  required
                  date={date} /></span>
              })
            }

            {!showFullDate ? <span className='cursor-pointer' onClick={() => setShowFullDate(true)}>
              <LiaGreaterThanSolid size={50} />
            </span> : <span className='cursor-pointer' onClick={() => setShowFullDate(false)}>
              <LiaLessThanSolid size={50} />
            </span>}
          </div>

        </div>
        <div>
          <h2 className='text-3xl font-bold py-4 '>How would you like to meet?</h2>
          <div className='flex '>
            <span
              id="meetingMode"
              
              {...register('meetingMode', { required: true })}
              onClick={() => handleOnClick('meetingMode', {
                inPerson: true,
                virtualMode: false
              })}
              className={`transition-[color] cursor-pointer border  py-2 px-4 text-center text-xl inline-flex items-center gap-2 flex-col md:flex-row ${selectedMMode.inPerson === true ? 'border-2 border-black text-green-500 font-bold' : 'border-neutral-500'}`}>
              <RiAccountCircleFill size={33} /> Meet in Person
            </span>
            <span
              id='meetingMode'
              {...register('meetingMode', { required: true })}
              onClick={() => handleOnClick('meetingMode', {
                inPerson: false,
                virtualMode: true
              })}
              className={`transition-[color] cursor-pointer border border-black py-2 px-4 text-center text-xl border-l-0 flex flex-col md:flex-row items-center gap-2 ${selectedMMode.virtualMode === true ? 'border-2 border-black text-green-500 font-bold' : 'border-neutral-500'}`}>
              <span className='rounded-full flex p-1 items-center justify-center border border-black'>
                <AiFillYoutube size={25} />
              </span>
              Meet via Video Chat
            </span>

          </div>

        </div>
        <div>
          <h2 className='text-3xl font-bold py-4 '>Pick a Time</h2>
          <div className='flex flex-col md:flex-row '>
            {
              tSlots.map((slot, index) => {
                return (
                  <span
                  key={index}
                    id="time"
                    {...register('time', { required: true })}
                    onClick={(e) => handleOnClick('time', {
                      timeSlot: e.target.textContent
                    })}
                    className={`transition-[color] cursor-pointer border  py-2 px-4 text-center text-xl inline-flex items-center gap-2 ${slot == selectedTime.timeSlot ? 'border-2 border-black text-green-500 font-bold' : 'border-neutral-500'}`}>

                    {slot}
                  </span>
                )
              })
            }




          </div>

        </div>
      </div>}

      {

        <AppSelector
          selectedApp={selectedApp} setSelectedApp={setSelectedApp} setCustomValue={setCustomValue}
          register={register} required tab={tab} handleOnClick={handleOnClick} />
      }

      <button onClick={handleSubmit((data) => console.log(data))}>sub</button>
      <FormStatus meetingMode={selectedMMode.inPerson ? 'In Person' : 'Video Chat'}
        date={selectedDate !== '' && selectedDate.toString().split(' ').slice(1,4).join(' ')} time={selectedTime.timeSlot} handleSubmit={handleSubmit} onSubmit={onSubmit} tab={tab} setTab={setNewTab} errors={errors} />
    </div>
  )
}

export default TimeScheduler
