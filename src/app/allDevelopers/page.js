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
    <div>
      <p className={styles.heading}>
        <Link href="/">Home</Link> {' > '}
        <Link href="/allDevelopers">Top Builder in Gurgaon</Link>
      </p>
      <h2 className={styles.title}>Explore Top Builders in Gurgaon</h2>
      <div className={styles.Layout}>
        <div className={styles.mainContainer}>
          <ExploreBuilder />
        </div>
        <div className={styles.Sidebar}>
          <SideContentContainer Addbox={true} />
          <Sidebar />
        </div>
      </div>


      <div >
        <ReadMore />

        <Explore />
      </div>

    </div>
  )
}

export default page
