'use client'
import { useState } from 'react';
import { IoMdLock } from "react-icons/io";

const ContactNumber = () => {
    const [countryCode, setCountryCode] = useState('+91');
    const [phoneNumber, setPhoneNumber] = useState('');

    return (
        <div className='md:w-[87%]'>
            <div className="flex items-center space-x-2 mb-2">

                <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="border rounded-md p-2"
                >
                    <option value="+1">+1 (USA)</option>
                    <option value="+91">+91 (India)</option>

                </select>

                <div className="relative ">

                    <input
                        type="text"
                        placeholder="Enter your number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="border rounded-md p-2 w-full "
                    />
                    <IoMdLock className="absolute top-1/2 right-1 transform -translate-y-1/2 text-xl md:text-2xl text-gray-600" />

                </div>
            </div>
            <input
                type="text"
                placeholder="Enter mobile number 2 (optional)"
                
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="border rounded-md p-2 w-full mb-2"
            />
            <input
                type="text"
                placeholder="Enter mobile number 3 (optional)"
               
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="border rounded-md p-2 w-full mb-2"
            />
            <input
                type="text"
                placeholder="Enter Landline number 1 (optional)"
     
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="border rounded-md p-2 w-full mb-2"
            />
            <input
                type="text"
                placeholder="Enter Landline number 2 (optional)"
          
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="border rounded-md p-2 w-full mb-2"
            />
        </div>

    );
};

export default ContactNumber;
