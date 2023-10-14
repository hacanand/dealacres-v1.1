import React from 'react'

const SingleContactForm = () => {
  return (
    <div className='bg-[#1C2956] '>
      <div className='max-w-screen-lg mx-auto py-4 px-4 flex flex-col items-start gap-8 py-8'>
            <div className='self-center'>
                <h2 className='text-6xl font-bold text-white py-6 '>
                    Contact Us
                </h2>
            </div>

            <div className='flex  justify-between min-w-full gap-8 py-4 '>
                <input className='w-full py-2 px-4 rounded ' placeholder='Your Name *' type="text" />
                <input className='w-full py-2 px-4 rounded ' placeholder='Your Phone Number *' type="text" />
                <input className='w-full py-2 px-4 rounded ' placeholder='Your Email *' type="text" />
            </div>

            <div className='flex h-[200px] w-full '>
                <textarea placeholder="Enter Your Message" className='w-full h-full px-4 py-2'/>
            </div>

            <div className='self-center'>
                <button className='border border-white py-2 px-8 text-white text-xl'>
                    Send
                </button>
            </div>
      </div>
    </div>
  )
}

export default SingleContactForm
