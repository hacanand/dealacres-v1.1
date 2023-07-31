'use client'
import React,{useState} from 'react'
import Link from 'next/link'
import styles from './articlesmanual.module.css'
import Image from 'next/image'
import {GoLinkExternal} from 'react-icons/go'
import {data} from './data'

const Articlesmanual = () => {

    const [category,setCategory] = useState('Buyer Manual')

    return (
      <div className={styles.toparticlesContainer}>
          <h3>Articles and Manuals for property owners</h3>
          <p className={styles.subtitle}> Read from Beginners check-list to Pro Tips</p>
          <div className={styles.subtopics}>
              <p
              onClick={()=>setCategory('Buyer Manual')} 
              className={category==='Buyer Manual'?styles.selected:''}>
                  Buyer Manual
              </p>
              <p
              onClick={()=>setCategory('Seller Manual')} 
              className={category==='Seller Manual'?styles.selected:''}>
                  Seller Manual
              </p>
              <p
              onClick={()=>setCategory('Rental Manual')} 
              className={category==='Rental Manual'?styles.selected:''}>
                  Rental Manual
              </p>
          </div>
          <div className={styles.line}></div>
          <div className={styles.content}>
              {data[category].map((dt,index)=>(
                  <div key={dt.id} className={styles.contentBlock}>
                      <div className={styles.imgContainer}>
                          <Image
                              src={dt.src}
                              alt='image'
                              className={styles.img}
                          />
                      </div>
                      <div className={`${styles.texts} ${index < 3 ? styles.withLine : ''}`}>
                          <h6>{dt.title}</h6>
                          <p>{dt.date}</p>
                      </div>
                  </div>
              ))}
          </div>
          <Link href='#articles'>Know more about reality news, guides and articles <GoLinkExternal style={{display:'inline'}}/> </Link>
      </div>
    )
}

export default Articlesmanual