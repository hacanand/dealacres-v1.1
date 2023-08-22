'use client'
import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import styles from './toparticles.module.css'
import Image from 'next/image'
import {GoLinkExternal} from 'react-icons/go'
import {data} from './data'

const Toparticles = () => {

  const [category,setCategory] = useState('News')
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

  const filteredData = screenWidth < 900 ? data[category].slice(0, 4) : data[category];

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
            {filteredData.map((dt,index)=>(
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

export default Toparticles