import React from 'react'
import styles from './header.module.css'
import Image from 'next/image'
import background from '../../../public/background header.jpg'

const Header = () => {
  return (
    <div className={styles.headerContainer}>
        <Image 
            alt='background-img'
            src={background}
            className='IMG'
        />
        <div className={styles.headerContent}>
          <h1> Making your dream home a reality</h1>
          <div className={styles.TextWrap}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at dui auctor, pellentesque nibh nec, mattis lectus. Donec molestie erat et lorem tempor, sit amet gravida neque feugiat. Aliquam ut accumsan sapien. Fusce ut laoreet urna, quis egestas eros. Vestibulum ante ipsum.</p>
          </div>  
          <div className={styles.HeaderContentInput}>
            <input type='text' placeholder='Search properties in you area'/>
            <button type='button'>Get Started</button>
          </div>
        </div>
      </div>
  )
}

export default Header