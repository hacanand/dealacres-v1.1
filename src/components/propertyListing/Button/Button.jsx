'use client';
import React, { useState } from "react";

const Button = ({ heading, onClick ,hashClick}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked); 
    if(hashClick) onClick(); 
  };

  return (
    <button
      onClick={handleClick}
      className={`py-1 px-6 mr-2 mb-2 rounded-xl border-solid border-y-4 border-x-2 ${
        isClicked ? "border-blue-700" : "border-blue-200"
      } hover:border-blue-700`}
    >
      {heading}
    </button>
  );
};
export default Button








