import React from "react";

const CalculatedData = ({ downpayment, pTax, insurance, pmi }) => {
  return (
    <div className="flex flex-col justify-between w-full ">
      <div className="flex gap-4 items-center justify-between ">
        <div className="h-4 w-4 bg-pink-300 rounded-full" />
        <h2 className="flex-1">Principal Interest</h2>
        <h2>₹{downpayment}</h2>
      </div>
      <hr />
      <div className="flex gap-4 items-center justify-between ">
        <div className="h-4 w-4 bg-blue-300 rounded-full" />
        <h2 className="flex-1">Property Tax</h2>
        <h2>₹{pTax}</h2>
      </div>
      <hr />
      <div className="flex gap-4 items-center justify-between ">
        <div className="h-4 w-4 bg-lime-300 rounded-full" />
        <h2 className="flex-1">Home Insurance</h2>
        <h2>₹{insurance}</h2>
      </div>
      <hr />
      <div className="flex gap-4 items-center justify-between ">
        <div className="h-4 w-4 bg-orange-300 rounded-full" />
        <h2 className="flex-1">PMI</h2>
        <h2>₹{pmi}</h2>
      </div>
      <hr />
    </div>
  );
};

export default CalculatedData;
