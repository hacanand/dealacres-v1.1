'use client';
import React, { useState } from "react";

const Button = ({ heading, onClick ,hashClick, size, variant, isOption}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked); 
    if(hashClick) onClick(); 
  };

  return (
    <button
      onClick={handleClick}
      className={`py-1 px-6 mr-2 mb-2 rounded-xl border-solid border-y-4 border-x-2 hover:border-blue-700 whitespace-nowrap  ${size == "small" && "max-sm:text-sm whitespace-nowrap"} ${variant === "secondary" && 'bg-[#cbdbff] text-black max-sm:text-base whitespace-nowrap rounded-lg'}  ${
        isClicked ? "border-blue-700" : "border-blue-200"
      } ${isOption && 'text-xs'}`}
    >
      {heading}
    </button>
  );
};
export default Button








