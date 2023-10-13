import React from "react";

const BusinessWizardFormInput2 = ({ label }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full space-y-2 md:space-y-0 md:space-x-4">
      <p className="whitespace-nowrap text-xl md:w-[30%]">{label}</p>
      <input
        className="w-full md:w-3/4 border-2 border-blue-200 text-gray-600 rounded-md focus:outline-blue-500 py-2 pl-3"
        type="text"
      />
    </div>
  );
};

export default BusinessWizardFormInput2;
