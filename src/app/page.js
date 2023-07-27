
import Testimonial from '@/components/testimonials/Testimonial'
import Options from '@/components/options/Options'
import Card from '@/components/options/card'
import Explore from '@/components/explore/Explore'
import Cities from '@/components/Cities/Cities'
import Header from '../components/header/Header'
import Services from '@/components/services/Services'
import Postercard from '@/components/postercard/Postercard'
import Toparticles from '@/components/toparticles/Toparticles'
import Staticcardleft from '@/components/staticcard/Staticcardleft'
import Staticcardright from '@/components/staticcard/Staticcardright'
import Services2 from '@/components/services2/Services2'
import src1 from '../../public/postercardimg1.jpg'
import src2 from '../../public/postercardimg2.jpg'
import src3 from '../../public/postercardimg3.jpg'

export default function Home() {
  return (
    <div>
      <Header/>
      <Services/>
      <Postercard
        title = 'Find Better Places to Live Work and Wonder...'
        src = {src1}
        alt = 'src1'
        sidecontent1 = 'BUY A HOME'
        sidecontent2 = 'Search, Buy & Own Your Dream Home'
        sidecontent3 = 'Explore from apartments, land, builders, floor, villas and more'
        buttontext='Find a Home'
      />
      <Postercard
        title = 'Sell or Rent your property faster with DealAcres'
        src = {src2}
        alt = 'src2'
        sidecontent1 = 'POST YOUR PROPERTY'
        sidecontent4 = 'Register to post your property for '
        s2spantext = 'FREE'
        sidecontent3 = 'Sell or rent your residential/commercial property'
        buttontext='Post your property FREE'
      />
      <Postercard
        src = {src3}
        alt = 'src3'
        sidecontent1 = 'RENT A HOME'
        sidecontent4 = 'Rental Homes for Everyone '
        sidecontent3 = 'Explore from Apartments, builder homes, villas and more'
        buttontext='Find a home for RENT'
      />
      <Staticcardleft/>
      <Staticcardright/>
      <Services2/>
      <Toparticles/>
      <Options/>
      <Cities/>
      {/* <Card/> */}
      <Explore/>
      <Testimonial/>
    </div>
  )
}