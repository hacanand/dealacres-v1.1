'use client'
import React,{useState} from 'react'
import Link from 'next/link'
import styles from './toparticles.module.css'
import Image from 'next/image'
import {data} from './data'

const Toparticles = () => {

  const [category,setCategory] = useState('News')

  return (
    <div className={styles.toparticlesContainer}>
        <h3>Top articles on home buying</h3>
        <p className={styles.subtitle}> Read from Beginners check-list to Pro Tips</p>
        <div className={styles.subtopics}>
            <p
            onClick={()=>setCategory('News')} 
            className={category==='News'?styles.selected:''}>
                News
            </p>
            <p
            onClick={()=>setCategory('Taxlegal')} 
            className={category==='Taxlegal'?styles.selected:''}>
                Tax & Legal
            </p>
            <p
            onClick={()=>setCategory('Helpguides')} 
            className={category==='Helpguides'?styles.selected:''}>
                Help Guides
            </p>
            <p
            onClick={()=>setCategory('Investment')} 
            className={category==='Investment'?styles.selected:''}>
                Investment
            </p>
        </div>
        <div className={styles.line}></div>
        <div className={styles.content}>
            {data[category].map((dt)=>(
                <div key={dt.id} className={styles.contentBlock}>
                    <div className={styles.imgContainer}>
                        <Image
                            src={dt.src}
                            alt='image'
                            className={styles.img}
                        />
                    </div>
                    <div className={styles.texts}>
                        <h6>{dt.title}</h6>
                        <p>{dt.date}</p>
                    </div>
                </div>
            ))}
        </div>
        <Link href='#articles'>Know more about reality news, guides and articles</Link>
    </div>
  )
}

export default Toparticles