import React from 'react'
import Image from 'next/image';
import testimony from "../../../public/testimonial/testimony.webp"
import styles from "./banner.module.css"

import { BIZ_UDGothic } from 'next/font/google';
const biz = BIZ_UDGothic({
  subsets: ['latin'],
  weight: ['400','700']
})

const Banner = () => {
  return (
    <div  className={`relative h-[200px] md:h-[350px] flex items-center justify-end   ${styles.Banner}`} >
      <Image 
      src={testimony}
      width={400}
      height={400}

      className='absolute inset-0 w-full h-full -z-10'
      />

      <h1 className={styles.Title} style={biz.style}>TESTIMONIAL</h1>
    </div>
  )
}

export default Banner
