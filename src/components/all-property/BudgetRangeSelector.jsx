"use client";

import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import Select from "react-select";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

function valuetext(value) {
  return `${value} Cr`;
}

const BudgetRangeSelector = () => {
  const [isBudgetVisible, setIsBudgetVisible] = useState(false);
  const [value, setValue] = useState([1, 100]);

  const handleChange = (event, newValue) => {
    setValue(Array.isArray(newValue) ? newValue : [newValue]);
  };

  const toggleBudgetVisibility = () => {
    setIsBudgetVisible(!isBudgetVisible);
  };

  return (
    <div>
      <div
        className="flex flex-row items-center justify-between cursor-pointer"
        onClick={toggleBudgetVisibility}
      >
        <p className="text-gray-900 text-lg">Budget</p>
        {isBudgetVisible ? <FaChevronUp /> : <FaChevronDown />}
      </div>

      {isBudgetVisible && (
        <div className="mt-6">
          <Slider
            value={value}
            onChange={handleChange}
            min={1}
            max={100}
            step={1}
            valueLabelDisplay="auto"
            valueLabelFormat={valuetext}
            getAriaValueText={valuetext}
          />

          <div className="flex flex-row items-center justify-between mt-6">
            <Select placeholder="Min" />
            <Select placeholder="Max" />
          </div>
        </div>
      )}
    </div>
  );
};

export default BudgetRangeSelector;
