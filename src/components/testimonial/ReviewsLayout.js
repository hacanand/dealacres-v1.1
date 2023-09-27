"use client"
import Image from 'next/image'
import React, {useState} from 'react'
import data from "./data"
import styles from "./reviews.module.css"

const ReviewsLayout = () => {

  let [limit, setLimit] = useState(5)
  const filteredData = data["Review"].slice(0, limit);

  const toggleDisplay = () => {
    if (limit >= data.Review.length) {
      setLimit(-1);
    } else {
      setLimit(limit+4);
    }
  };

  return (
    <div>
      {filteredData.map((dt, index) => (
      <div key={dt.id} className={styles.reviewBlock}>
        {/* <div> */}
      <div className={styles.User}>
        <div className={styles.UserImg}>
        <Image
        src={dt.src}
        alt='User'
        />
      </div>
      <div className={styles.UserInfo}>
        <p>By <strong>{dt.name}</strong></p>
        <p>{dt.position}, {dt.company}</p>
      </div>
      </div>
    <div>
      <p>{dt.description}</p>
    </div>
    </div>
    // </div>
    ))}
    <div className="text-center">
    {limit >= data.Review.length ? '': 
      <button className={styles.MoreReviews} onClick={toggleDisplay}> Load More </button>}
      </div>
    </div>
  )
}

export default ReviewsLayout
