'use client';
import { useState } from 'react';
import Image from 'next/image'
import Button from '@/components/propertyListing/Button/Button';
import Link from 'next/link';


const Info = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const getDynamicLink = () => {

    switch (selectedOption) {
      case 'owner':
        return 'owner/location-details';
      case 'agent':
        return 'agent/agent-details';
      case 'builder':
        return 'builder/location-details';
      default:
        return '#';
    }
  };

  return (
    <section className='flex flex-col md:flex-row px-4 items-start justify-center gap-10 md:gap-20 container mx-auto md:my-10 overflow-auto'>

      <div className='h-full w-full  md:w-[450px] md:mt-20  p-5 border-t-4 border-r-2 border-l-2 border-[#dcf0fd] border-b-4 max-md:border-none max-md:w-[80%] mx-auto flex flex-col max-md:gap-4 '>
        <h1 className="font-medium md:font-bold md:text-2xl text-xl md:mt-16">
          To Continue Please let us Know what you are?
        </h1>
        <div className='flex flex-row items-center justify-between md:my-10 overflow-x-auto'>
          <Button heading={'An Owner'} onClick={() => handleOptionSelect('owner')} hashClick={true} size={"small"}> </Button>
          <Button heading={'A Agent'} onClick={() => handleOptionSelect('agent')} hashClick={true} size={"small"}> </Button>
          <Button heading={'A Builder'} onClick={() => handleOptionSelect('builder')} hashClick={true} size={"small"}> </Button>
        </div>
        <p className='w-[85%] text-lg md:text-xl md:mb-10'>Please choose correctly, if you want to change in the future, it done through profile section</p>
        <Link href={getDynamicLink()} scroll={false}>
          <button className='w-full bg-blue-600 rounded-xl px-8 py-3 font-bold text-white md:mb-16  hover:bg-white hover:border-2 hover:border-blue-600 hover:text-blue-600' >Continue</button>
        </Link>
      </div>

      <div className='h-full w-full md:w-[400px] rounded-xl bg-[#c9e0ee] p-4 flex flex-row md:flex-col items-center -order-1 md:order-2
      
      relative max-md:after:content-[""] after:absolute after:bg-[#c9e0ee] after:w-screen after:-left-4 after:h-full after:-z-10 after:top-0 after:rounded-b-[2rem] rounded-b-[2rem] md:rounded-xl md:after:hidden after:max-w-screen-sm max-md:pb-0 pt-8 sm:pt-16 md:pt-0 '>
        <h1 className="text-base sm:text-xl md:mb-4 text-center md:mt-20 pt-8 pb-16 ">
          This information creates a transparency and build trust with buyers/tenants</h1>
        <Image src={'/propertyListing/assets/agent.png'} alt='authentication' height={280} width={280} className='md:mt-3 md:mb-10 max-w-[200px] max-h-[200px] min-w-[120px] min-h-[120px] w-1/2 max-md:self-end' />
        <div className='hidden md:block'>
          <h1 className='font-bold text-xl'>Need Help?</h1>
          <p className='text-lg'>You Can Email Us</p>
          <p className='text-lg text-blue-600 mb-20'>Contact@dealacres.com</p>
        </div>
      </div>

      <div className='block md:hidden text-center w-full'>
          <h1 className='font-bold text-xl'>Need Help?</h1>
          <p className='text-lg'>You Can Email Us</p>
          <p className='text-lg text-blue-600 mb-20'>Contact@dealacres.com</p>
        </div>
    </section>
  )
}

export default Info