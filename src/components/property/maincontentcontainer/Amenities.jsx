'use client'
import { useState } from 'react';
import Image from 'next/image';
import { aData } from './AmenitiesData.jsx';
import styles from './amenities.module.css';

const Amenities = (props) => {
  const [showAll, setShowAll] = useState(false);
  const itemsToShow = showAll ? props.ameData.length : 11;

  return (
    <div className={styles.amenitiesContainer}>
      {props.ameData.slice(0, itemsToShow).map((dt, index) => (
        <div key={index} className={styles.amenitiesContent}>
          <Image src={aData[dt].src} alt={aData[dt].name} height={40} width={40} />
          {aData[dt].name}
        </div>
      ))}
      {props.ameData.length > 11 && (
        <div className={styles.amenitiesContent} style = {{backgroundColor:'#E5EFFF',color:'#0061df',borderRadius:'15px',width:'100%',height:'80px'}}>
          <button onClick={() => setShowAll(!showAll)}>
            {showAll ? 'Show Less' : 'Show all'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Amenities;