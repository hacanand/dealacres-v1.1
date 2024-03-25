'use client'

import { useState } from 'react';


const Card = ({ index, selectedCity }) => {
     const imageUrl = '/office-image.jpg'; 
   
  
    return (
      <div key={index} className="relative">
        <div
          className="bg-cover bg-center w-full h-36 rounded-lg"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="absolute bottom-0 left-0 p-4 text-left text-sm text-white">
            <p>DLF The Arbour</p>
            <p className='text-xs'>3/4 BHK Apartment, Sector 57, {selectedCity}</p>
            <p className='font-bold'>1.46 Cr *</p>
          </div>
        </div>
      </div>
    );
  };

  const TopProject = () => {
    const [selectedCity, setSelectedCity] = useState('Navi Mumbai');
  
    const cities = [
      'Navi Mumbai',
      'Bangalore',
      'Hyderabad',
      'Pune',
      'Chennai',
      'New Delhi',
      'Gurgaon',
      'Noida',
      'Kolkata',
      'Ahmedabad',
    ];
  
    const changeCards = (city) => {
      setSelectedCity(city);
    };
  
    const imageUrl = '/topProject2.jpg'; 
  
    return (
      <div >
        <div
          className="bg-cover bg-center p-4 relative"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
        
          <div className="absolute inset-0 bg-blue-700 opacity-60"></div> 
  
          <div className='lg:ml-40 ml-10 mt-5 mb-10 relative '> {/* Content with higher z-index */}
            <h2 className="font-bold mb-4 text-yellow-300 text-5xl">Top Projects</h2>
            <p className='text-2xl text-white'>Explore the top projects in top cities</p>
          </div>
          <div className="flex justify-center relative "> 
            <div className="lg:w-1/6 w:1/4 p-4 ml-5 "> 
              <ul>
                {cities.map((city) => (
                  <li
                    key={city}
                    className={`cursor-pointer mb-2 font-semibold px-4 py-2 rounded-lg ${
                      selectedCity === city
                        ? 'bg-white text-blue-700'
                        : ' text-white'
                    }`}
                    onClick={() => changeCards(city)}
                  >
                    {city}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-3/5 w-3/4 grid grid-cols-3 gap-4 p-4 "> 
              {[...Array(9)].map((_, index) => (
                <Card key={index} index={index + 1} selectedCity={selectedCity} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default TopProject;
  
