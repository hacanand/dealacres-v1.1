
import React from 'react';

const PropertyCard = ({ title, description, price, imageSrc}) => {
  return (
    <div className="h-[352px] bg-white rounded-md shadow-md p-4 mb-4 ">
      <img src={imageSrc} alt={title} className=" w-full h-40 object-cover rounded-md mb-4" />
      <div >
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-2">{description}</p>
        <p className=" text-lg font-bold">{price}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
