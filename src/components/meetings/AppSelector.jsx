'use client'
import { useForm } from 'react-hook-form';
import './meetings.css'
import React, { useState } from 'react'
import { useCallback } from 'react';
import { BsSkype, BsWhatsapp } from 'react-icons/bs';
import { SiGooglemeet } from 'react-icons/si';
import { BiLogoZoom } from 'react-icons/bi';
import gMeetLogo from '../../../public/single-agent/gMeet.webp'
import Image from 'next/image';
const AppSelector = ({

  tab,
  handleOnClick,
  register,
  required,
  selectedApp,
  setSelectedApp,
  setCustomValue
}) => {


  const [appInput, setAppInput] = useState({
    gMeet_email: {value: '', inputError: false},
    zoom_email: {value: '', inputError: false},
    skype_id: {value: '', inputError: false},
    whatsApp_number: {value: '', inputError: false}
  });

  // console.log(tab)

  const handleOnChange = (e) => {
    setAppInput(prev => ({ ...prev , [e.target.name]: {
      inputError: false,
      value: e.target.value
    }}));
  }

  const defaultApp = {
    gMeet: false,
    skype: false,
    zoom: false,
    whatsApp: false,
    gMeet_email: '',
    skype_id: '',
    zoom_email: '',
    whatsApp_number: ''
  }

  const handleAppSelector =(value, name) => {
    if(!appInput[name].value){
      setAppInput(prev => ({
        ...prev,
        [name]: {
          inputError: true,
          value: ''
        }
      }))

      return
    }
    handleOnClick('app', value)
    console.log(value);
  } 


  return (

    <div className={`max-w-screen-md hidden  mx-auto transition-all translate-x-[300%] ${tab == 1 ? 'slideIn' : 'translate-x-[300%] '}`}>

      <h1 className='text-4xl font-bold text-center py-4 '>
        Which video chat app would you like to use for the meeting?
      </h1>
      <div className='text-2xl p-4 '>
        <span className={`flex items-center justify-center  cursor-pointer border border-black p-4 text-center ${selectedApp.gMeet && 'text-green-600 bg-green-200 flex items-center justify-center'}`} id="app"  onClick={() => handleAppSelector({...defaultApp, gMeet:true, gMeet_email: appInput.gMeet_email.value}, 'gMeet_email') } >
         
          <span className='w-20 h-20'>
          {/* <SiGooglemeet size={40}/> */}
          <Image src={gMeetLogo} alt='google meet logo' className=''/>
          </span>
            <span>Google Meet</span>
    
          

        </span>
        <div className='bg-blue-200 text-xl flex flex-col justify-center gap-4 items-center py-4'>
            <label htmlFor="gMeet">
              Email
            </label>
            
            <input placeholder={`${appInput.gMeet_email.inputError ? 'Please Fill this input field': ' '}`} name='gMeet_email'
            
            className={`p-2 border ${appInput.gMeet_email.inputError ? 'border-2 border-rose-600 placeholder:text-rose-600': 'border-black'} w-2/3  rounded-md shadow`} type='text'  onChange={(e) => handleOnChange(e)} value={appInput.gMeet_email.value}  />
        </div>
        <span className={`flex items-center justify-center gap-4 cursor-pointer border border-black p-4 text-center ${selectedApp.zoom && 'text-green-600 bg-green-200 flex items-center justify-center'}`} id="app"  onClick={() => handleAppSelector({...defaultApp, zoom:true, zoom_email: appInput.zoom_email}, 'zoom_email') } >
           <span className='text-blue-500'>
           <BiLogoZoom size={40}/>
           </span>
            <span>Zoom</span>
    
          

        </span>
        <div className='bg-blue-200 text-xl flex flex-col justify-center gap-4 items-center py-4'>
            <label htmlFor="gMeet">
              Zoom Email
            </label>
            <input placeholder={`${appInput.zoom_email.inputError ? 'Please Fill this input field': ' '}`} name='zoom_email' className={`p-2 border ${appInput.zoom_email.inputError ? 'border-2 border-rose-600 placeholder:text-rose-600': 'border-black'} w-2/3  rounded-md shadow`} type='text'  onChange={(e) => handleOnChange(e)} value={appInput.zoom_email.value}  />
        </div>
        <span className={`flex items-center justify-center gap-4 cursor-pointer border border-black p-4 text-center ${selectedApp.skype && 'text-green-600 bg-green-200 flex items-center justify-center'}`} id="app"  onClick={() =>  handleAppSelector({...defaultApp, skype:true, skype_id: appInput.skype_id}, 'skype_id') } >

        <span className='text-sky-400'>
        <BsSkype size={40}/>
        </span>
           <span>Skype</span>
        </span>
        <div className='bg-blue-200 text-xl flex flex-col justify-center gap-4 items-center py-4'>
            <label htmlFor="gMeet">
              skype_id
            </label>
            <input placeholder={`${appInput.skype_id.inputError ? 'Please Fill this input field': ' '}`} name='skype_id' className={`p-2 border ${appInput.skype_id.inputError ? 'border-2 border-rose-600 placeholder:text-rose-600': 'border-black'} w-2/3  rounded-md shadow`} type='text'  onChange={(e) => handleOnChange(e)} value={appInput.skype_id.value}  />
        </div>
        <span className={`flex items-center justify-center gap-4 cursor-pointer border border-black p-4  ${selectedApp.whatsApp && 'text-green-600 bg-green-200  '}`} id="app"  onClick={() => handleAppSelector({...defaultApp, whatsApp:true, whatsApp_number: appInput.whatsApp_number}, 'whatsApp_number') } >
           <span className='text-green-500'><BsWhatsapp size={40}/></span>
           <span>WhatsApp</span>
        </span>
        <div className='bg-blue-200 text-xl flex flex-col justify-center gap-4 items-center py-4'>
            <label htmlFor="gMeet">
              Whatsapp Number
            </label>
            <input 
            pattern='/[0-9]{3}-[0-9]{2}-[0-9]{3}/i'
            placeholder={`${appInput.whatsApp_number.inputError ? 'Please Fill this input field': ' '}`} name='whatsApp_number' className={`p-2 border ${appInput.whatsApp_number.inputError ? 'border-2 border-rose-600 placeholder:text-rose-600': 'border-black'} w-2/3  rounded-md shadow`} type='text'  onChange={(e) => handleOnChange(e)} value={appInput.whatsApp_number.value}  />
        </div>
       
      </div>

    </div>


  )
}

export default AppSelector
