import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


const BrandBanner = ({
    img,
    url
}) => {
  return (
    <div className='w-5/6 mx-auto p-4 relative'>

    <Link href={url}>
      <Image src={img} alt="multipurpose banner" 
      className="w-full object-cover"/>
    </Link>
    </div>
  )
}

export default BrandBanner
