import React, { useState } from "react";
import TimePicker from "react-time-picker";
import { FaTimes } from "react-icons/fa";

import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import DayTimeSelector from "./DayTimeSelector";

const BusinessWizardFormPart3Mobile = () => {
  const [is24Hours, setIs24Hours] = useState(true);

  return (
    <div className="flex flex-col items-start lg:hidden">
      <div class="flex flex-row items-center space-x-2 mt-4 mb-6">
        <div
          className={`h-6 w-6 ${
            !is24Hours ? "border-[1px] border-gray-600" : ""
          }  rounded-full flex items-center justify-center`}
          onClick={() => setIs24Hours(!is24Hours)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`${
              is24Hours ? "" : "hidden"
            } text-blue-600 w-full h-full`}
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <p className="text-gray-600">Open 24 Hours</p>
      </div>
      {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((day, index) => {
        return <DayTimeSelector key={index} day={day} />;
      })}
    </div>
  );
};

export default BusinessWizardFormPart3Mobile;
