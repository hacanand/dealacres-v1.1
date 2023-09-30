"use client"
import React, {useState} from 'react';
import Image from 'next/image';
import Expert from "../../../public/rentagreement/Expert.webp"
import styles from "./expert.module.css"
import { Rating } from '@mui/material';

const ExpertLayout = () => {
    const [fvt, setFvt] = useState(false)
  return (
    <div>
      
      <div className={styles.parentLayout}> 
      <div className={styles.ExpertLayout}>

    <div>
        <Image
            src={Expert}
            alt='Experts'
            className={styles.ExpertImg}
        />
    </div>

    <div className={styles.ExpertInfo}>
        <h3 className={styles.ExpertName}>Harvey Long</h3>
        <Rating value={4} />
        <p className={styles.ExpertPosition}>Dabra Chowk Hissar HO</p>
        <div className={styles.ExpertStatus}>
            <span> Property Dealer in Hisar </span>
            <span> Property Dealer in Hisar </span>
            <span> Property Dealer in Hisar </span>
        </div>
        <p className={styles.ExpertTime}>Open untill 8:00 PM</p>
        <div className={styles.ExpertContact}>
            <button>Contact</button>
            <button>Send Enquiry</button>
        </div>
    <div className={styles.featured}>
        <button>Featured</button>
        <span onClick={()=> {
            setFvt(!fvt);
        }}>
        {fvt? "❤️" : "🤍"}
        </span>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default ExpertLayout
