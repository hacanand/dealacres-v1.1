import React from 'react'
import styles from './header.module.css'

const HeaderInput = (props) => {
  return (
    <div className={styles.HeaderContentInput}>
        <input type='email' placeholder={`${props.type} properties in you area`}/>
        <button type='button'>Get Started</button>
    </div>
  )
}

export default HeaderInput