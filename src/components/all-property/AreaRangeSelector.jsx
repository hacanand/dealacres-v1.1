"use client";

import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import Select from "react-select";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

function valuetext(value) {
  return `${value} Sq. Ft`;
}

const AreaRangeSelector = () => {
  const [isAreaVisible, setIsAreaVisible] = useState(false);
  const [value, setValue] = useState([500, 5000]);

  const handleChange = (event, newValue) => {
    setValue(Array.isArray(newValue) ? newValue : [newValue]);
  };

  const toggleAreaVisibility = () => {
    setIsAreaVisible(!isAreaVisible);
  };

  return (
    <div>
      <div
        className="flex flex-row items-center justify-between cursor-pointer mt-6"
        onClick={toggleAreaVisibility}
      >
        <p className="text-gray-900 text-lg">Area Range</p>
        {isAreaVisible ? <FaChevronUp /> : <FaChevronDown />}
      </div>

      {isAreaVisible && (
        <div className="mt-6">
          <Slider
            value={value}
            onChange={handleChange}
            min={100}
            max={10000}
            step={100}
            valueLabelDisplay="auto"
            valueLabelFormat={valuetext}
            getAriaValueText={valuetext}
          />

          <div className="flex flex-row items-center justify-between mt-6">
            <Select placeholder="Min Area" />
            <Select placeholder="Max Area" />
          </div>
        </div>
      )}
    </div>
  );
};

export default AreaRangeSelector;
