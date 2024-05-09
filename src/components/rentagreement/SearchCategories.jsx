"use client"
import React, { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";

const SearchCategories = (props) => {
  const categories = Object.keys(props.category);

  const [show, setShow] = useState(false);

  return (
    <div className='flex flex-col items-center'>
      <h2 className='flex gap-1 items-center  whitespace-nowrap'>Most Searched Categories in {props.city} <span className={`${show ? 'rotate-180' : 'rotate-0'} transition-all`} onClick={() => setShow(prev => !prev)}><RiArrowDropDownLine size={40}/></span></h2>
      <ul className={`list-group ${show ? 'block': 'hidden'}`}>
        {categories.map((category, index) => (
          <li key={index} className="my-2  whitespace-nowrap">{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchCategories;
