import React from 'react';
import Link from 'next/link';

const LinkSection = ({ data }) => {
  return (

      <div className="grid grid-cols-2 md:grid-cols-4  ">
        {data.map((item, index) => (
    
            <Link href={item.link} className='text-xs lg:text-sm px-4 hover:text-blue-600'>
              
                {item.name}
              
            </Link>
       
        ))}
      </div>
   
  );
};

export default LinkSection;





