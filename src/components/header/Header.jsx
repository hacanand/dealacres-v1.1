"use client"
import React,{useState} from 'react'
import HeaderInput from './HeaderInput'
import styles from './header.module.css'
import Image from 'next/image'
import background from '../../../public/background header.jpg'

const Header = () => {
  
  const [category,setCategory] = useState('Buy')

    
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
<<<<<<< HEAD
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at dui auctor, pellentesque nibh nec, mattis lectus. Donec molestie erat et lorem tempor, sit amet gravida neque feugiat. Aliquam ut accumsan sapien. Fusce ut laoreet urna, quis egestas eros. Vestibulum ante ipsum.</p>
          </div>  
          <div className={styles.HeaderContentInput}>
            <input type='text' placeholder='Search properties in you area'/>
            <button type='button'>Get Started</button>
=======
              <p 
                onClick={()=>setCategory('Buy')}
                className={category==='Buy'?styles.selected:''}>
                  Buy
              </p>
              <p 
                onClick={()=>setCategory('Sell')}
                className={category==='Sell'?styles.selected:''}>
                  Sell
              </p>
              <p 
                onClick={()=>setCategory('Rent')}
                className={category==='Rent'?styles.selected:''}>
                  Rent</p>

              <p 
                onClick={()=>setCategory('Mortgage')}
                className={category==='Mortgage'?styles.selected:''}>
                  Mortgage
              </p>
>>>>>>> 8695cf93e29230f34c8ae193652a3c6a2689aa62
          </div>
          <HeaderInput type = {category}/>
        </div>
      </div>
  )
}

export default Header