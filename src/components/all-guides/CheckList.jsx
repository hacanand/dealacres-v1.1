// CheckList.js

import React, { useState, useEffect } from 'react';
import styles from './allguides.module.css';

const dummyCheckList = [
  "What to Buy?",
  "When to Buy?",
  "Where to Buy?",
  "How to Buy?",
  "Financials",
  "Home Loan",
  "Legal & Tax",
  "Tips and Tricks",
  "Moving in",
  "All about RERA",
  "NRI Homebuyers",
  "Distressed property",
  "Disputed property",
  "Buying a home under PMAY",
  "Theme-based Homes",
  "Real Estate Technology",
];

const CheckList = ({ tab }) => {
  const [selectedGuide, setSelectedGuide] = useState(tab);

  useEffect(() => {
    setSelectedGuide(tab);
  }, [tab]);

  const handleGuideClick = (index) => {
    setSelectedGuide(index);
    console.log('Clicked on item:', dummyCheckList[index],selectedGuide);
  };

  return (
    <div className={`${styles.checkListContainer} max-w-[400px] md:max-w-full mx-auto md:mx-0 px-4 py-4`}>
      <ul className={`${styles.checkList} `}>
        {dummyCheckList.map((item, index) => (
          <li
            key={index}
            className={`font-bold text-lg min-[920px]:text-2xl min-[920px]:py-4 flex items-center gap-2 cursor-pointer`}
            style={{ color: selectedGuide === index ? 'blue' : 'black' }}
            onClick={() => handleGuideClick(index)}
          >
            <span className='w-[50px] inline-flex'>{index + 1} </span>
            <span className={`ml-2 py-2 min-[920px]:py-4`}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheckList;
