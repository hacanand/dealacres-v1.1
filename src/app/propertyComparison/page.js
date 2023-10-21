import Explore from '@/components/Homepage/explore/Explore'
import Comparison from '@/components/PropertyComparison/Comparison'
import ReadMore from '@/components/propertyListing/ReadMore/ReadMore'
import style from './page.module.css'
import React from 'react'

const page = () => {
  return (
    <div>
        <div className={style.Layout}>
        <Comparison />
        </div>
        <Explore />
        <ReadMore />
    </div>
  )
}

export default page
