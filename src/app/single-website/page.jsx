"use client"
import HeroSection from '@/components/single-website/HeroSection'
import WelcomeSection from '@/components/single-website/WelcomeSection'
import React from 'react'
import src1 from '../../../public/single-website/parking.webp'
import src2 from '../../../public/single-website/hall.webp'
import FindYourPerfectHome from '@/components/single-website/FindHome'
import FindHome from '@/components/single-website/FindHome'

import { CiLocationOn } from 'react-icons/ci'

import { RiHomeSmile2Fill } from 'react-icons/ri'
import Image from 'next/image'
import BlogsAndNews from '@/components/single-website/BlogsAndNews'
import ProjectListings from '@/components/single-website/ProjectListings'
import SingleContactForm from '@/components/single-website/SingleContactForm'
import MobileFindHome from '@/components/single-website/MobileFindHome'
import FeaturesStrip from '@/components/single-website/FeaturesStrip'
const SingleWebsite = () => {
  return (
    <div>
      <div className=''>
        <HeroSection />
      </div>

      <div className='max-w-screen-lg mx-auto px-4 pt-12 pb-16'>
        <WelcomeSection />
      </div>

      <div className='hidden md:block'>
        <FindHome img={src1} />
        <FeaturesStrip/>
      </div>
      <div className='block md:hidden'>
      <MobileFindHome img={src1}/>
      </div>

      <div className='max-w-screen-lg mx-auto px-4 py-4'>
        <div className='text-center py-16'>
          <h2 className='font-bold text-4xl md:text-6xl p-4'>
            Recommended Project
          </h2>
          <p className='text-lg'>
            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire.
          </p>
        </div>
        <ProjectListings />
      </div>

      <FindHome img={src2} />

      <div className='max-w-screen-lg mx-auto px-4'>
        <BlogsAndNews />
      </div>

      <SingleContactForm />
    </div>
  )
}

export default SingleWebsite
