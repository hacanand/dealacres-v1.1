import styles from './maincontent2.module.css'
import {Lato} from 'next/font/google'
import Cities from '@/components/Homepage/Cities/Cities'
import InsightReview from './InsightReview'
import Hotspots from './Hotspots'
import Photos from './Photos'
import Topdev from './Topdev'
import Guides from '@/components/blog/guides/Guides'

const lato = Lato({
  subsets: ['latin'],
  weight: ['300','400','700','900']
})

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

function MainContent2() {
  return (
    <div className={styles.mainContainer2} style={lato.style}>
        <div>
            <h5>Explore nearby localities</h5>
            <Cities/>
        </div>
        <InsightReview/>
        <div>
            <h5>Hotspots in Gurgaon</h5>
            <Hotspots/>
        </div>
        <div>
            <h5>Photos</h5>
            <Photos/>
        </div>
        <div>
            <h5>Top Developers in Sector 37D</h5>
            <Topdev/>
        </div>
        <div>
            <h5>Start with these guides</h5>
            <Guides guides={guidesData}/>
        </div>
    </div>
  )
}

export default MainContent2