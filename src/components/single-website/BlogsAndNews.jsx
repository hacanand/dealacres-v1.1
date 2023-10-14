'use client'

import React from 'react'
import SingleBlogCard from './SingleBlogCard'
import { useState } from 'react'
const BlogsAndNews = () => {
    
    const [showFull, setShowFull] = useState(false)
    const dummyBlogData = {
        title: "Luxurious Living",
        excrept: "Welcome to a world of opulence and comfort! Smart World Orchard Gurgaon, sector 61, a residential development by Smart.",
        img: 'room.webp',
        tags: 'Business, Luxury, Real Estate'
    }
    return (
        <div className='py-8'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-4'>
            {
                [...Array(9)].map((_, index) => {


                   
                    if(index < 3 || showFull){
                    return <div key={index} className='col-span-1'> 
                            <SingleBlogCard img={dummyBlogData.img}
                        title={dummyBlogData.title}
                        tags={dummyBlogData.tags}
                        excrept={dummyBlogData.excrept}/>
                        </div>
                        
                    }
                  
                })
            }

            

        </div>
        <div className='text-center'>
            <button className='bg-black p-4 text-white text-xl shadow rounded'
            onClick={() => setShowFull(prev => !prev)}
            >
                View {showFull ? 'Less': 'More'}
            </button>
        </div>
        </div>
    )
}

export default BlogsAndNews
