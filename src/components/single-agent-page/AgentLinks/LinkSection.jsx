import React from 'react';
import Link from 'next/link';

const LinkSection = ({ data }) => {
  return (

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  ">
        {data.map((item, index) => (
    
            <Link key={index} href={item.link} className='text-xs lg:text-sm  hover:text-blue-600'>
              
                {item.name}
              
            </Link>
       
        ))}
      </div>
   
  );
};

export default LinkSection;





