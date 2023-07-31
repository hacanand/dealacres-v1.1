"use client"
import React,{useState} from 'react'
import styles from './postercard.module.css'
import Image from 'next/image'

const Postercard = (props) => {

    const [showInputField,setShowInputField] = useState(false)

    return (
          <div className={styles.postercardContainer}>
              <div className={styles.imgContainer}>
                  <Image
                      src = {props.src}
                      alt = {props.alt}
                      className={styles.img}
                  />
              </div>
              <div className={styles.sideContent}>
                  <div className={styles.title}>{props.title}</div>
                  <p>{props.sidecontent1}</p>
                  <h3>{props.sidecontent2}</h3>
                  <span><h4>{props.sidecontent4}<span>{props.s2spantext}</span></h4></span>
                  <h6>{props.sidecontent3}</h6>
                  {showInputField && (
                    <div className={styles.inputField}>
                      <input placeholder={props.buttontext}/>
                      <button className={styles.btn2}>Submit</button>
                    </div>
                  )}
                  {!showInputField && (
                    <button className={styles.btn1} onClick={()=>setShowInputField(true)}>{props.buttontext}</button>
                  )}
              </div>
          </div>
    )
}

export default Postercard