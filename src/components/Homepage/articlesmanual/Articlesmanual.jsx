'use client'
import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import styles from './articlesmanual.module.css'
import Image from 'next/image'
import {GoLinkExternal} from 'react-icons/go'
import {data} from './data'

const Articlesmanual = () => {

    const [category,setCategory] = useState('Buyer Manual')
    const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {

    if(typeof window === 'undefined') return;
    
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
        <h3>Articles and Manuals for property owners</h3>
        <p className={styles.subtitle}>
          {" "}
          Read from Beginners check-list to Pro Tips
        </p>
        <div className={styles.subtopics}>
          <p
            onClick={() => setCategory("Buyer Manual")}
            className={category === "Buyer Manual" ? styles.selected : ""}
          >
            Buyer Manual
          </p>
          <p
            onClick={() => setCategory("Seller Manual")}
            className={category === "Seller Manual" ? styles.selected : ""}
          >
            Seller Manual
          </p>
          <p
            onClick={() => setCategory("Rental Manual")}
            className={category === "Rental Manual" ? styles.selected : ""}
          >
            Rental Manual
          </p>
        </div>
        <div className={styles.line}></div>
        <div className={styles.content}>
          {filteredData.map((dt, index) => (
            <Link href={`/blog/${index + 1}`}   key={dt.id}>
              <div className={`${styles.contentBlock} cursor-pointer`}>
                <div className={styles.imgContainer}>
                  <Image src={dt.src} alt="image" className={styles.img} />
                </div>
                <div
                  className={`${styles.texts} ${
                    index < 3 ? styles.withLine : ""
                  }`}
                >
                  <h6>{dt.title}</h6>
                  <p>{dt.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* <Link href='#articles'>Know more about reality news, guides and articles <GoLinkExternal style={{display:'inline'}}/> </Link> */}
      </div>
    );
}

export default Articlesmanual