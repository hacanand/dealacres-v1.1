import Image from 'next/image'
import Header from '../components/header/Header'
import Services from '@/components/services/Services'
import Testimonial from '@/components/testimonials/Testimonial'
import Options from '@/components/options/Options'
import Card from '@/components/options/card'

export default function Home() {
  return (
    <div>
      <Header/>
      <Services/>
      <Options/>
      {/* <Card/> */}
      <Testimonial/>
    </div>
  )
}
