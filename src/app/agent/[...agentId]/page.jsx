import AgentHeroSection from '@/components/single-agent-page/AgentHeroSection'
import React from 'react'
import { singleAgentData } from './dummyAgentData'
import HeadingBorder from '@/components/single-agent-page/HeadingBorder';
import FeaturedService from '@/components/single-agent-page/FeaturedService';
import AgentContactForm from '@/components/single-agent-page/AgentContactForm';
import Image from 'next/image';
import AgentFeedback from '@/components/single-agent-page/AgentFeedback';

import feedbackBg from '../../../../public/single-agent/feedback.webp'
import AgentServices from '@/components/single-agent-page/AgentServices';
import AgentListings from '@/components/single-agent-page/AgentListings';
const SingleAgentPage = () => {

  const { name, img, contacts, languages, address, agentInfo, services, forSaleListings, forRentListings } = singleAgentData;
  return (
    <div>
      <div className='max-w-screen-lg px-6 mx-auto py-4'>
        <AgentHeroSection img={img} name={name} contacts={contacts} languages={languages} address={address} />
      </div>

      <div className='max-w-screen-lg mx-auto px-6'>
        <h2 className='font-bold text-4xl inline-flex flex-col py-4'>

          About Agent
          <HeadingBorder />
        </h2>
        <p className='text-lg text-justify pb-4'>
          {agentInfo}
        </p>
      </div>

      <div className='max-w-screen-lg mx-auto px-6 py-4 '>
        <AgentListings forRentListings={forRentListings} forSaleListings={forSaleListings}/>

      </div>


      {/* services */}
      <div className='max-w-screen-lg mx-auto px-6'>
        <AgentServices services={services}/>
        
      </div>

      <div className=''>
        <FeaturedService />
      </div>

      <div className='max-w-screen-lg  px-6 flex flex-col sm:flex-row gap-8 mx-2 lg:mx-auto   overflow-hidden  py-4 my-4 rounded-[2rem] border-[3px] border-black'>
        <div className='w-full sm:w-1/2'>
          <AgentContactForm />
        </div>
        <div className='w-full sm:w-1/2  my-auto rounded-[2rem]  inline-flex items-center overflow-hidden shadow h-[400px] -order-1 sm:order-2'>
          <Image src={`/about-us/${img}`} className='rounded-[2rem] w-full h-auto object-center self-start ' width={300} height={300} />
        </div>

      </div>
      <div className='max-w-screen-lg mx-auto px-6  py-4 my-4 flex  flex-col md:flex-row gap-4 items-center '>
        <div className='w-full md:w-1/2'>
          <AgentFeedback />
        </div>
        <div className='h-1/2 -order-1 md:order-2 w-full sm:w-3/4 md:w-1/2 mx-auto md:mx-0 '>
          <Image src={feedbackBg} className='w-full h-full' />
        </div>

      </div>
    </div>
  )
}

export default SingleAgentPage
