'use client'
import styles from './page.module.css'
//  import { data } from './dummydata'
import Navbar02 from "@/components/property/navbar2/Navbar02"
import ImageContainer from '@/components/property/imagecontainer/ImageContainer'
import MainContentContainer from '@/components/property/maincontentcontainer/MainContentContainer'
import SideContentContainer from '@/components/property/sidecontentcontainer/SideContentContainer'
import FAQ from '@/components/property/maincontentcontainer/FAQ'
import LeaveReview from '@/components/property/maincontentcontainer/LeaveReview'
import PropertyBuilder from '@/components/property/PropertyBuilder'
import SimilarProject from '@/components/property/SimilarProject'
import ReadMoreProperty from '@/components/property/ReadMoreProperty'
import ReadMore from '@/components/propertyListing/ReadMore/ReadMore'
import AgentFeedback from '@/components/single-agent-page/AgentFeedback'
import axios from 'axios'
import { useEffect, useState } from 'react'

 const Property = (params) =>{
   const [fetchData, setFetchData] = useState();
   const [isLoading, setIsLoading] = useState(true);
   useEffect(() => {
     //fetching data from the api
     const fetchingData = async () => {
       try {
         const response = await axios(
           "https://dealacresbackend.onrender.com/api/newproperty",
           {
             caches: "force-cache",
           }
         );
         const data = response.data;
        //  console.log(data);
         setFetchData(data);
          setIsLoading(false);
       } catch (error) {
         console.log(error);
         isLoading(false);
       }
     };
     fetchingData();
   }, []);

  const id = params.params.propertyid

  return (
    <>
      <Navbar02 />
      <div className={styles.propertyContainer}>
        {isLoading ? (
          <span className=" self-center loading loading-dots loading-md"></span>
        ) : (
          <ImageContainer
            imageData={fetchData[id]?.mainContent}
            floorPlan={true}
            imageButtonPosition="imageButtonClass1"
          />
        )}
          <div className={styles.contentContainer}>
          {isLoading ? (
            <span className=" self-center loading loading-dots loading-md"></span>
          ) : (
              <>
            <div className={styles.leftColumn}>
              <MainContentContainer content={fetchData[id]} />
            </div>
          
            <div className={styles.rightColumn}>
               
                <SideContentContainer title={fetchData[id]?.mainContent?.title} />
                </div>
                </>
          )}
          </div>
        </div>
      <div className={styles.bottomContainer}>
        <div>
          <PropertyBuilder />
        </div>
        <div>
          <SimilarProject />
        </div>
        <div>
          <h2 className="text-xl sm:text-3xl lg:text-2xl font-bold  pt-2 pb-2 md:pb-5">
            Frequently Asked questions
          </h2>
          {isLoading ? (
            <span className="loading loading-dots loading-md"></span>
          ) : (
            <FAQ faqdata={fetchData[id]?.mainContent?.FaqData} />
          )}
        </div>
        <ReadMore isFullScreen={true} />

        <div>
          <h1 className="singleDevHeading">Leave a review</h1>
          <LeaveReview />
        </div>
        <p className="text-xs text-justify">
          The material and information contained herein is for general
          informational purposes only, and does not constitute an
          endorsement/warranty/ representation/offer from Dealacres.com.
          <br />
          Sources of Information {`:`} Project details presented on this page
          are collected from public sources including State RERA websites {`(`}
          wherever applicable{`)`}, project websites created by builder and
          authorized channel partners and official documentation shared by these
          authorized advertisers {`(`}project brochure, price list, payment
          plans{`)`}.
        </p>
      </div>
    </>
  );
}

export default Property