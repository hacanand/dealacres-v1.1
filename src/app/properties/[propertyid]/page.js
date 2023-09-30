import styles from './page.module.css'
import {data} from './dummydata'
import Navbar02 from "@/components/property/navbar2/Navbar02"
import ImageContainer from '@/components/property/imagecontainer/ImageContainer'
import MainContentContainer from '@/components/property/maincontentcontainer/MainContentContainer'
import SideContentContainer from '@/components/property/sidecontentcontainer/SideContentContainer'

async function Property(params) {
  
  const id = params.params.propertyid

  return (
    <>
        <Navbar02/>
        <div className={styles.propertyContainer}>
            <ImageContainer imageData = {data.imageContainer} floorPlan = {true} imageButtonPosition = "imageButtonClass1"/>
            <div className={styles.contentContainer}>
                <MainContentContainer content = {data.mainContent}/>
                <SideContentContainer title = {data.mainContent.title}/>
            </div>
        </div>
    </>
  )
}

export default Property