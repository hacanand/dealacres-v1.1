import React, { useState } from "react";
import Slider from "@mui/material/Slider";

const Budgetslider = ({ heading, minValue, maxValue,unit }) => {
  const [value, setValue] = useState(minValue); 

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const valuetext = (value) => {
    const roundedValue = value >= 100000 ? (Math.round(value / 100000 * 100) / 100).toFixed(2) : value;
    return `${roundedValue} `;
};
  const maxDisplayedValue = maxValue >=1000000?(maxValue/100000) :maxValue;

  return (
    <div>
      <div className="flex flex-row items-center justify-between cursor-pointer">
        <p className="text-gray-900 text-md">{heading}</p>
        <p className="text-sm">{unit !== 'Years' ? '₹ ' : ''}{valuetext(value)}</p>
      </div>

      <div >
        <Slider
          value={value}
          onChange={handleChange}
          min={minValue}
          max={maxValue}
          step={1}
          valueLabelDisplay="auto"
          valueLabelFormat={valuetext}
          getAriaValueText={valuetext}
        />
      </div>

      <div className="flex justify-between -mb-4">
        <p className="text-sm text-gray-600">{minValue} </p>
        <p className="text-sm text-gray-600">{unit !== 'Years' ? '₹ ' : ''}{maxDisplayedValue} {unit}</p>
      </div>
    </div>
  );
};

export default Budgetslider;
