import styles from './category.module.css'
import Image from 'next/image'

function Category() {
  return (
    <div className={styles.categoryContainer}>
        <h1>Explore Magnificent Project By <span> M3M India Pvt. Ltd</span></h1>
        <div className={styles.categoryImagesWrapper}>
        <div className={styles.categoryContentContainer}>
            <div className={styles.categoryImgContainer}>
                <Image
                    src='/singleDeveloper/CommercialProjectsImg.webp'
                    alt='Commercial Projects'
                    layout='fill'
                    style={{objectFit:'cover'}}
                />
            </div>
            <h6>Commercial Projects</h6>
        </div>
        <div className={styles.categoryContentContainer}>
            <div className={styles.categoryImgContainer}>
                <Image
                    src='/singleDeveloper/ResidentialProjectsImg.webp'
                    alt='Residential Projects'
                    layout='fill'
                    style={{objectFit:'cover'}}
                />
            </div>
        <h6>Residential Projects</h6>
        </div>
        </div>
    </div>
  )
}

export default Category