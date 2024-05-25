import React from 'react'
import styles from "./page.module.css"
import ReadMore from '@/components/propertyListing/ReadMore/ReadMore'
import ExploreBuilder from '@/components/AllDevelopers/ExploreBuilder'
import SideContentContainer from '@/components/property/sidecontentcontainer/SideContentContainer'
import Sidebar from '@/components/AllDevelopers/Sidebar'
import Explore from '@/components/Homepage/explore/Explore'
import Link from 'next/link'

const page = () => {
  return (
    <div className=''>
      <div className="px-4 sm:px-8 md:px-0">
      <p className={styles.heading}>
        <Link href="/">Home</Link> {' > '}
        <Link href="/allDevelopers">Top Builder in Gurgaon</Link>
      </p>
      <h2 id="pageTitle" className={styles.title}>Explore Top Builders in Gurgaon</h2>
      </div>

      <div className={`${styles.Layout} px-4 py-4 sm:px-8 md:px-0 bg-[#f3f3f3]`}>
        <div className={styles.mainContainer}>
          <ExploreBuilder />
        </div>
        <div className={`${styles.Sidebar} hidden md:block`}>
          <SideContentContainer Addbox={true} />
          <Sidebar />
        </div>
      </div>


      <div  className='pb-4 md:max-lg:max-w-screen-md md:mx-auto lg:mx-[8rem] px-4 sm:px-8 md:px-0 ' >
        <ReadMore isFullScreen={true} />

        <Explore isFullScreen={true} />
      </div>

    </div>
  )
}

export default page
