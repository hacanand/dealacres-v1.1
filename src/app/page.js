import Image from 'next/image'
import Header from '../components/header/Header'
import Services from '@/components/services/Services'
import Testimonial from '@/components/testimonials/Testimonial'
import Options from '@/components/options/Options'
import Card from '@/components/options/card'
import Explore from '@/components/explore/Explore'
import Cities from '@/components/Cities/Cities'

export default function Home() {
  return (
    <div>
      <Header/>
      <Services/>
      <Options/>
      <Cities/>
      {/* <Card/> */}
      <Explore/>
      <Testimonial/>
    </div>
  )
}
