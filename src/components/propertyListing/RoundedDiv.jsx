import React, { useState } from 'react';

const RoundedDiv = ({ size, width, height, onClick }) => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (index) => {
    setSelectedButton(index);
    if (onClick) {
      onClick(index + 1); 
    }
  };

  return (
    <div className="flex justify-start gap-4 my-2">
      {Array.from({ length: size }, (v, index) => (
        <button
          key={index + 1}
          style={{
            minWidth: `${width}px`,
            height: `${height}px`,
            backgroundColor: selectedButton === index ? '#3498db' : 'white',
            color: selectedButton === index ? 'white' : '#3498db',
          }}
          className="rounded-[100%] flex items-center justify-center font-bold border border-blue-700 text-sm xs:text-base"
          onClick={() => handleButtonClick(index)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default RoundedDiv;
