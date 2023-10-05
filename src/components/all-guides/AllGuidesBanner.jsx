import React from 'react'
import skyscrappers from '../../../public/all-guides/skyscrappers.webp'
import handshakes from '../../../public/all-guides/handshake.webp'
import Image from 'next/image'
import styles from './allguides.module.css'
import BannerIcon from './BannerIcon'

const AllGuidesBanner = () => {
  return (
    <div className='min-h-[300px] bg-[#BDD5FF] flex flex-col md:flex-row justify-around items-center pt-8'>
      <div className={` ${styles.bannerText} md:w-[35%]  font-bold text-white md:pl-8 z-10 flex justify-end `}>
        <div className='text-center md:text-left md:justify-self-end'>
        <span className='text-5xl text-right'>
          Real Estate
        </span>
        <br />
        <span className='text-6xl text-right'>
          Manuals
        </span>
        </div>
      </div>
      <div  className={`md:w-[30%]  max-w-[400px] flex flex-col p-4 $`}>
        <div className='flex w-full justify-center'>
            <BannerIcon img={handshakes}/>
        </div>
        <div className=' flex justify-around'>
        <BannerIcon hasThread rightThread img={handshakes}/>
        <BannerIcon hasThread leftThread img={handshakes}/>

        </div>
      </div>

      <div className='md:w-[35%] md:self-end '>
        <Image src={skyscrappers} alt="Skyscrapper image" />
      </div>
    </div>
  )
}

export default AllGuidesBanner
