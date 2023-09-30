import {useState} from "react"
import styles from './insightReview.module.css'

import helpful from "../../../../public/locationOverview/helpful.png"
import Image from 'next/image'

function InsightReview() {
  const [feedback, setFeedback] = useState(-1);
  const handleClickYes = () => (setFeedback(0));
  const handleClickNo = () => (setFeedback(1));
  return (
    <div>
      <div className={styles.InsightBox}>
        <div className={styles.InsightImgBox}>
          <Image
          src={helpful}
          className={styles.InsightImg}
          />
        </div>

        <div className={styles.ReviewBox}>
          <h2>Are These Insights helpful for You?</h2>
          {(feedback == -1)?
          <div>
             <button onClick={handleClickYes}>Yes</button>
             <button onClick={handleClickNo}>No</button> 
          </div>: (feedback == 0)? <span>Thanks For Your Support</span>: <span>Sorry to hear, We are progressively working on it to make your experience better</span>
          } 
        </div>
      </div>

    </div>
  )
}

export default InsightReview