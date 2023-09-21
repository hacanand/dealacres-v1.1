'use client'
import {useState} from 'react';
import Image from 'next/image';
import {BsMap} from 'react-icons/bs'
import { RiCloseLine} from "react-icons/ri";
import {IoCameraOutline} from 'react-icons/io5';
import ImageCarasouel from './ImageCarasouel';
import styles from './imagecontainer.module.css';

function ImageContainer(props) {

    const [Carasouel,setCarasouel] = useState(false);

    return (
      <div className={styles.container}>
        <div className={styles.mainImgContainer}>
            <Image
              src={props.imageData.mainPic}
              alt="Big Image"
              layout="fill"
              objectFit="cover"
            />
        </div>
        <div className={styles.sideImgContainer}>
          <div className={styles.sideImage}>
            <Image
              src={props.imageData.sidePic1}
              alt="Side Image 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles.sideImage}>
            <Image
              src={props.imageData.sidePic2}
              alt="Side Image 2"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        {props.floorPlan && <button className={styles.floorPlanButton}><BsMap style={{display:'inline'}}/> Floor Plan</button>}
        <button className={`${styles.viewImagesButton} ${styles[props.imageButtonPosition]}`} onClick={() => {setCarasouel(true)}}><IoCameraOutline style={{display:'inline'}}/> View Images</button>
        {Carasouel &&
            <div className= {styles.imageCarasouelContainer}>
                <RiCloseLine
                    color="#fff"
                    size={40}
                    className={styles.close}
                    onClick={() => {
                      setCarasouel(false);
                    }}
                />
                <ImageCarasouel data = {props.imageData.imageCarasouel}/>
            </div> 
        }
      </div>
    );
}

export default ImageContainer;
