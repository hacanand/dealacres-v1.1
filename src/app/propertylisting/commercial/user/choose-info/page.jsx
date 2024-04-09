'use client';
import { useState } from 'react';
import Image from 'next/image'
import Button from '@/components/propertyListing/Button/Button';
import Link from 'next/link';
import BannerLayout from '@/components/propertyListing/BannerLayout';
import HelpDetails from '@/components/propertyListing/HelpDetails';


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
        return '/choose-info';
    }
  };

  return (
    <section className='flex flex-col md:flex-row px-4 items-start justify-center gap-10 md:gap-20 container mx-auto md:my-10 overflow-auto'>

      <div className='h-full w-[90%] max-md:mx-auto md:w-[450px] md:mt-20 rounded-xl p-5 border-t-4 border-r-2 border-l-2 border-[#dcf0fd] border-b-4 max-md:border-none flex flex-col max-md:gap-4'>
        <h1 className="font-medium md:font-bold md:text-2xl text-xl md:mt-16">
          To Continue Please let us Know what you are?
        </h1>
        <div className='flex flex-row items-center justify-between md:my-10 overflow-x-auto'>
          <Button heading={'An Owner'} onClick={() => handleOptionSelect('owner')} hashClick={true} size={"small"}> </Button>
          <Button heading={'A Agent'} onClick={() => handleOptionSelect('agent')} hashClick={true} size={"small"}> </Button>
          <Button heading={'A Builder'} onClick={() => handleOptionSelect('builder')} hashClick={true} size={"small"}> </Button>
        </div>
        <p className='md:w-[85%] text-base md:text-xl md:mb-10 '>Please choose correctly, if you want to change in the future, it done through profile section</p>
        <Link href={getDynamicLink()}>
          <button className='w-full bg-blue-600 rounded-xl px-8 py-3 font-bold text-white md:mb-16 hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600' >Continue</button>
        </Link>
      </div>

      

      <BannerLayout startWithPic showContact imgSrc={'/propertyListing/assets/agent.png'} bannerText={'This information creates a transparency and build trust with buyers/tenants'}/>

      <HelpDetails showOnMobile/>
    </section>
  )
}

export default Info