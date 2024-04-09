'use client';
import { useState } from 'react'
import Image from 'next/image'


import { TiPencil } from "react-icons/ti";
import Link from 'next/link';
import BannerLayout from '@/components/propertyListing/BannerLayout';
import HelpDetails from '@/components/propertyListing/HelpDetails';


const Login = () => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const handleChange = (index, value) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        if (value !== '' && index < otp.length - 1) {
            document.getElementById(`otp-input-${index + 1}`).focus();
        }
        setOtp(newOtp);
        setIsButtonDisabled(newOtp.some(digit => digit === ''));
    };

    return (
        <section className='flex flex-col md:flex-row px-4 items-start justify-center gap-10 md:gap-20 container mx-auto md:my-10 overflow-auto'>
         

            <BannerLayout showContact showThumps bannerText={"   Your Phone number gives access to your account."} imgSrc={'/propertyListing/assets/authentication.png'} bgColor={"bg-['#eaf6ff']"} />
            <div className='h-full w-[80%] max-md:mx-auto md:w-[400px] md:mt-20 rounded-xl p-5 border-t-4 border-r-2 border-l-2 border-[#dcf0fd] border-b-4 max-md:border-none'>
                <h1 className="font-bold md:text-2xl text-xl  mt-2">
                    Welcome back,</h1>
                <p className='text-xl font-medium '>
                    your number is registered with us.
                </p>
                <p className='pb-2 text-xl font-medium'>
                    Please login to continue
                </p>
                <div className='flex gap-3 items-center mb-2'>
                    <p>+91-xxxxxxxxxx</p>
                    <TiPencil size={30} color='blue' />
                </div>
                <p className='text-2xl md:text-3xl font-light pb-2'>
                    Enter Your OTP
                </p>
                <div className="flex ">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            type="text"
                            id={`otp-input-${index}`}
                            value={digit}
                            maxLength="1"
                            onChange={(e) => handleChange(index, e.target.value)}
                            className="w-12 h-12 mr-2 text-3xl text-center border-2 border-gray-500 focus:border-blue-500 outline-none focus:outline-none"
                        />
                    ))}
                </div>
                <p className='text-sm text-blue-400 mt-1 pb-10'>Resend OTP</p>
                <Link href={'user/choose-info'}>
                    <button
                        className={`w-full bg-blue-600 rounded-md px-8 py-3 font-bold text-white mb-3 hover:bg-white hover:text-blue-600 hover:border hover:border-blue-700 ${isButtonDisabled ? 'cursor-not-allowed opacity-50' : ''}`}
                        disabled={isButtonDisabled}
                    >Verify & Login</button>
                    <button className='w-full bg-white rounded-xl px-8 py-3 font-bold border-4 border-blue-600 text-blue-600 mb-4  hover:border-none'>Login via - E-mail</button>
                </Link>
            </div>

            <HelpDetails showOnMobile/>
        </section>
    )
}

export default Login