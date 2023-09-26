import SafetyBanner from '@/components/safety/SafetyBanner'
import React from 'react'
import safetyData from './safetyData.json'
import bannerBg from '../../../public/safety/banner.webp'
import SafetyInro from '@/components/safety/SafetyIntro'
import SafetySection from '@/components/safety/SafetySection'
import ContactStrip from '@/components/safety/ContactStrip'
import Guides from '@/components/blog/guides/Guides'


const guidesData = [
  {
      "title": "Buyer's Guide",
      "img": "buyers-guide.png",
      "theme": "orange"
  },
  {
      "title": "Seller's Guide",
      "img": "sellers-guide.png",
      "theme": "yellow"
  },
  {
      "title": "Rental Guide",
      "img": "rental-guide.png",
      "theme": "green"
  },
  {
      "title": "Home Interior",
      "img": "home-interior-guide.png",
      "theme": "purple"
  },
  {
      "title": "Home Vastu",
      "img": "home-vastu-guide.png",
      "theme": "blue"
  }
]


const SafetyGuide = () => {

  
  return (
    <div className='overflow-x-hidden'>


    <div className='px-4 max-w-screen-2xl mx-auto'>
      <SafetyBanner img={bannerBg} heading="Safety Guide" />

      <div className='py-8'>

        <SafetyInro title={safetyData.intro.title} content={safetyData.intro.content} />
      </div>

      <div>
        {
          safetyData.sections.map((section, index) => (
            <SafetySection key={index} title={section.title}
              content={section.content}
              hasList={section.has_list}
              listHeader={section.list_header}
              lists={section.lists}
              img={section.img}
              order={index === 2 ? 'reverse' : 'normal'}
            />
          ))
        }
      </div>
  
    </div>

    <div className='my-4'>
    <ContactStrip/>
    </div>

    <div className='max-w-screen-2xl mx-auto py-4'>
      {/* <div className='px-4 md:pl-12 '>
        <p className='font-bold text-3xl'></p>
        <p className='font-light text-xl'></p>
      </div> */}
        <Guides showHeading guides = {guidesData} heading="Explore Our More Guides" subheading="Know all that you need to know before you start."/>
    </div>
    </div>
  )
}

export default SafetyGuide
