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
          </div>
          <HeaderInput type = {category}/>
        </div>
      </div>
  )
}

export default Header