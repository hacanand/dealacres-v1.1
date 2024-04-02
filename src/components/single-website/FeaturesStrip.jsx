import Image from 'next/image'
import React from 'react'
import { IoIosHome } from 'react-icons/io'
import { BsDiamondFill } from 'react-icons/bs'
import houseSecure from '../../../public/single-website/house-secure.png'
import { FaLocationDot, FaLocationPin } from 'react-icons/fa6'

const Feature = ({ logo, title }) => {
    return (
        <div className='flex flex-col gap-4  items-center w-[80px]'>
            <span className="rounded-[80px] flex justify-center items-center p-4 border-2 border-white w-[60px] h-[60px] min-[440px]:w-[80px] min-[440px]:h-[80px]">

                {logo}
            </span>
            <span className='text-center text-sm min-[400px]:text-base md:text-lg'>
                {title}
            </span>


        </div>
    )
}

const FeaturesStrip = () => {
    return (
        <div className='bg-[#1A4789] z-10 w-[90%] mx-auto md:w-[100%] md:mx-0 rounded-[1.5rem] md:rounded-none'>
            <div className="max-w-screen-lg mx-auto text-white font-bold text-xl md:text-2xl flex justify-around py-4  ">

                <Feature logo={<BsDiamondFill size={80}  />} title={"Luxury House"} />
                <Feature logo={<FaLocationDot size={80}  />} title={"Best Location"} />
                <Feature logo={<IoIosHome size={80} />} title={"Good Price"} />
                <div className='flex flex-col gap-4  items-center w-[80px]'>
                    <span className="rounded-[80px] flex justify-center items-center p-4 border-2 border-white max-w-[80px] w-[60px] h-[60px] min-[440px]:w-[80px] min-[440px]:h-[80px]  ">

                       <Image src={houseSecure} width={50} height={50} className=''/>
                    </span>
                    <span className='text-center text-sm min-[400px]:text-base md:text-lg'>
                        Home Caring
                    </span>


                </div>






            </div>

        </div>
    )
}

export default FeaturesStrip
