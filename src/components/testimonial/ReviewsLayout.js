"use client"
import Image from 'next/image'
import React, {useState,useEffect} from 'react'
import data from "./data"
import styles from "./reviews.module.css"

const ReviewsLayout = () => {

  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    setScreenWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const filteredData = screenWidth < 900 ? data["Review"].slice(0, 4) : data["Review"];
  return (
    <div>
      {filteredData.map((dt, index) => (
      <div key={dt.id} className={styles.reviewBlock}>
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
    ))}
    </div>
  )
}

export default ReviewsLayout
