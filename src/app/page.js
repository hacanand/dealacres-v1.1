import Header from '../components/header/Header'
import Services from '@/components/services/Services'
import Testimonial from '@/components/testimonials/Testimonial'
import Options from '@/components/options/Options'
import Card from '@/components/options/card'
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
    </div>
  )
}
