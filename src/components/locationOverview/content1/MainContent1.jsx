'use client'
import {useState} from 'react'
import styles from './mainContent1.module.css'
import {Lato} from 'next/font/google'

const lato = Lato({
  subsets: ['latin'],
  weight: ['300','400','700','900']
})

function mainContent1() {

  const [showFull,setShowFull] = useState(false)
  const about = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur a erat nam at lectus urna duis. Felis eget velit aliquet sagittis id consectetur purus ut faucibus. Enim ut sem viverra aliquet eget. Facilisis mauris sit amet massa. Ultrices dui sapien eget mi proin sed. Sapien nec sagittis aliquam malesuada bibendum. Suspendisse interdum consectetur libero id faucibus. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Eu sem integer vitae justo eget. Eu scelerisque felis imperdiet proin fermentum leo vel orci porta. Enim praesent elementum facilisis leo. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Leo vel fringilla est ullamcorper eget nulla. Libero volutpat sed cras ornare arcu dui vivamus. Ipsum dolor sit amet consectetur. Ultrices vitae auctor eu augue ut lectus arcu. Urna duis convallis convallis tellus id interdum velit laoreet. Tincidunt augue interdum velit euismod in pellentesque massa placerat duis. Viverra tellus in hac habitasse."

  return (
    <div className={styles.mainContainer} style={lato.style}>
      <div className={styles.mainContainerHead}>
        <h1>Sector 37D, Gurgaon</h1>
        <h6>Pin Code: 122505</h6>
      </div>
      <div className = {styles.mainContainerLine}></div>
      <div className={styles.mainContainerContent}>
        <h5>About Locality</h5>
        <p>{showFull?about:`${about.substring(0,600)}`}</p>
        <h6 onClick={()=>setShowFull(!showFull)}>{showFull? 'Show Less':'Show More'}</h6>
      </div>
    </div>
  )
}

export default mainContent1