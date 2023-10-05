'use client'

import React, { useRef } from 'react'
import { allGuidesData } from './allGuidesData'
import GuideCard from '@/components/blog/guides/GuideCard'
import AllGuidesBanner from '@/components/all-guides/AllGuidesBanner'
import GuidesSlider from '@/components/all-guides/GuidesSlider'
import ManualCategorySlider from '@/components/all-guides/ManualCategorySlider'
import Tabularposts from '@/components/blog/tabularposts/Tabularposts'
import { useState } from 'react'
import { useCallback } from 'react'
import CheckList from '@/components/all-guides/CheckList'
import ManualCard from '@/components/all-guides/ManualCard'
import Explore from '@/components/Homepage/explore/Explore'
import { FaArrowUp } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import styles from './allguides.module.css'
import Link from 'next/link'

const allPostsData = [
  {
    "title": "Preparing Your Home for a Loved One with Alzheimer’s: A Caregiver’s Guide",
    "img": "article-thumb-1.jpg"
  }
  ,
  {
    "title": "Why is My House So Dusty? 5 Easy Ways to Eliminate Dust",
    "img": "article-thumb-2.webp"
  }
  ,
  {
    "title": "Preparing Your Home for a Loved One with Alzheimer’s: A Caregiver’s Guide",
    "img": "article-thumb-1.jpg"
  }
  ,
  {
    "title": "Why is My House So Dusty? 5 Easy Ways to Eliminate Dust",
    "img": "article-thumb-2.webp"
  }
  ,
  {
    "title": "Preparing Your Home for a Loved One with Alzheimer’s: A Caregiver’s Guide",
    "img": "article-thumb-1.jpg"
  }
  ,
  {
    "title": "Why is My House So Dusty? 5 Easy Ways to Eliminate Dust",
    "img": "article-thumb-2.webp"
  }
]

const articlesData = [
  {
    "title": "Solar Panels for Apartments: The Complete Guide for Renters",
    "img": "solar-panels.webp"
  },
  {
    "title": "Solar Panels for Apartments: The Complete Guide for Renters",
    "img": "solar-panels.webp"
  },
  {
    "title": "Solar Panels for Apartments: The Complete Guide for Renters",
    "img": "solar-panels.webp"
  },
  {
    "title": "Solar Panels for Apartments: The Complete Guide for Renters",
    "img": "solar-panels.webp"
  }
]

const page = () => {

  const [tab, setTab] = useState(0)
  const [cardsToShow, setCardsToShow] = useState(4)

  const cardsContRef = useRef(null);


  const scrollToCardContainer = () => {
    if (cardsContRef.current) {
      cardsContRef.current.scrollIntoView({
        behavior: 'smooth', // Add smooth scrolling behavior
        block: 'start',     // Scroll to the start of the container
      });
    }
  };

  const handleTabChange = useCallback((value) => {
    setTab(value)
  }, [tab])
  return (
    <div className={`scroll-smooth`}>

      {/* Banner */}
      <AllGuidesBanner />

      {/* Guides Slider */}
      <div className='max-w-screen-xl mx-auto px-8 py-8 my-6'>

        <GuidesSlider allGuides={allGuidesData} handleTabChange={handleTabChange} />
      </div>

      {/* Real Estate Made easy.... */}
      <div className='px-4 max-w-screen-xl mx-auto'>
        <h2 className='text-4xl font-bold py-2'>
          Real Estate Made Easy: Your Comprehensive Manual
        </h2>

        <p className='text-justify text-xl py-4'>
          Our real estate manuals are like helpful guides for buying and selling homes. They explain everything step by step, from finding the perfect property to signing the paperwork. These manuals are easy to understand, with clear explanations and tips to make real estate transactions smooth and simple.
        </p>
      </div>

      <div className='max-w-screen-xl mx-auto my-4 px-4'>
        <ManualCategorySlider allGuides={allGuidesData}
          handleTabChange={handleTabChange} tab={tab} />
      </div>




      <div className='max-w-screen-xl md:mx-auto px-8 my-6 flex flex-col md:flex-row justify-between gap-12'>
        <div className='w-full md:w-[35%]'>
          <CheckList />
        </div>
        <div className='w-full md:w-[65%]'>
          <h3 className='font-bold text-4xl py-2 text-center md:text-left'>
            {allGuidesData[tab].title}

          </h3>

          <div id="manualCards" ref={cardsContRef} className='flex flex-col gap-16 py-4 '>
            {[...Array(10).keys()].map((key) => {

              if(key < cardsToShow){

                return (<div className='sm:max-w-[350px] sm:mx-auto md:max-w-full' key={key}>
                <ManualCard />
              </div>
              )
              } 
            }

            )}
          </div>


          <div className='flex gap-4 items-center justify-center'>
          <button
            disabled={cardsToShow == 10}
            className=' bg-blue-500 text-white text-lg p-4 flex justify-center items-center
          rounded-lg shadow disabled:opacity-50
          disabled:pointer-events-none
          peer
          '
          onClick={() => setCardsToShow(prev => prev + 2)}
          >
            Show More
          </button>
          <span 
     
          onClick={() => {setCardsToShow(4)
          scrollToCardContainer()
          }}
          className= 'hidden peer-disabled:inline text-blue-400 animate-pulse'>
            <FaArrowUp size={40}/>
          </span>

          </div>
        </div>
      </div>


      {/* tabular posts */}

      <div className='py-4'>

        <Tabularposts
          posts={allPostsData}
          articles={articlesData} />
      </div>


      <Explore />


    </div>
  )
}

export default page
