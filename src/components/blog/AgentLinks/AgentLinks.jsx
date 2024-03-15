import React from 'react';
import LinkSection from './LinkSection';
import { gurugaon, hariyana } from './Menu';

const AgentLinks = () => {
  return (
    <div className='flex flex-col gap-5 mb-5'>
      <div className='py-2'>
        <h2 className='font-bold text-xl py-3 uppercase'>Search for homes by city </h2>
        <LinkSection data={hariyana} />
      </div>
      <div className='py-2'>
        <h2 className='font-bold text-xl py-3 uppercase'>Seach for home by districts</h2>
        <LinkSection data={gurugaon} />
      </div>

  
      <div className='flex items-center justify-center'>
        <button
          className='bg-blue-500 text-white px-4 py-2 rounded-xl'
        
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default AgentLinks;
