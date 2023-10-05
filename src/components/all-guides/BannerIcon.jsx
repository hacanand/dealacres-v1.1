import Image from 'next/image'
import React from 'react'
import styles from './allguides.module.css'
const BannerIcon = ({
    img,
    hasThread,
    rightThread,
    leftThread
}) => {
  return (
    <div className={` ${hasThread && styles.bannerIcons } ${rightThread && styles.rightThread } ${leftThread && styles.leftThread} `}>
        <div className='border-4 border-white rounded-full h-[80px] w-[80px] flex items-center justify-center z-10 bg-blue-300 relative'>
      <Image src={img} alt='banner icons' />

        </div>
    </div>
  )
}

export default BannerIcon;
