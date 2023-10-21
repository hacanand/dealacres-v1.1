import React from 'react'
import styles from "./page.module.css"
import ReadMore from '@/components/propertyListing/ReadMore/ReadMore'
import ExploreBuilder from '@/components/AllDevelopers/ExploreBuilder'
import SideContentContainer from '@/components/property/sidecontentcontainer/SideContentContainer'
import Sidebar from '@/components/AllDevelopers/Sidebar'
import Explore from '@/components/Homepage/explore/Explore'

const page = () => {
  return (
    <div>
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


        <div className={styles.sideBox}>
      <ReadMore />

      <Explore />
        </div>

    </div>
  )
}

export default page
