import React from "react";

const BusinessWizardFormInput = ({ label, onChange }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full">
      <p className="whitespace-nowrap text-xl md:w-[30%]">{label}:</p>
      <input
        className="md:ml-10 w-full md:w-[70%] pl-3 py-2 border-2 border-blue-200 text-gray-600 rounded-md md:mr-8 focus:outline-blue-500"
        type="text"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default BusinessWizardFormInput;
