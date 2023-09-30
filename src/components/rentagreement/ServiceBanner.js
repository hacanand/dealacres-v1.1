import React from 'react'
import styles from "./servicebanner.module.css"

const ServiceBanner = () => { 
  return (
    <div>
      <div className={styles.BannerBg}>
      <div className={styles.BannerDetails}>
      <p>Get a <span className={styles.Agree}>Rent Agreement!</span> <br />  available for FREE <br />
      <span className={styles.Protect}> 100% Protection from </span>  <br />
       Legal Disputes</p>

      <select>
        <option value="Madhya Pradesh">Madhya Pradesh</option>
        <option value="Uttar Pradesh">Madhya Pradesh</option>
      </select>
      
      <select>
        <option value="Ujjain">Ujjain</option>
        <option value="Indore">Indore</option>
      </select>

      </div>
      </div>
    </div>
  )
}

export default ServiceBanner;
