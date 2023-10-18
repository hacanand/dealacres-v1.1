import React from 'react'
import GuideCard from '@/components/blog/guides/GuideCard'
import Link from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'

const LocationGuides = ({
    guides
    
}) => {
    return (
        <div className='font-bold text-2xl p-4 my-4 '>
            

            <div className={``}>

            

            <div className={`flex gap-4 w-full justify-between `}>

                {
                    guides.map((guide, index) => {
                        return (
                            <div key={index} className='w-[8rem] min-[1220px]:w-[10rem] min-[1220px]:h-[15rem] min-[1420px]:w-[12rem] min-[1420px]:h-[18rem]
                            min-[1520px]:w-[15rem] min-[1520px]:h-[21rem]'>


                                <GuideCard
                                variableWidth
                                title={guide.title} img={guide.img} bgColor={guide.bgColor} textColor={guide.textColor} borderColor={guide.borderColor} key={index} />
                            </div>
                        )
                    })
                }

            </div>
            <div className='flex flex-col py-4 justify-self-end'>

                <span className='md:self-end text-blue-500 font-normal text-xl flex items-center justify-center gap-2'>
                    <Link href='/guides' className=''>View More</Link>
                    <FaExternalLinkAlt size={20} />
                </span>

            </div>



            </div>
           
            

        </div>
    )
}

export default LocationGuides
