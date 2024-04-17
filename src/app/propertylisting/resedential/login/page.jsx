'use client';
import { useState } from 'react'
import Image from 'next/image'


import { TiPencil } from "react-icons/ti";
import Link from 'next/link';


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
        <section className='flex flex-col md:flex-row items-start justify-center gap-10 md:gap-20 md:container mx-auto md:my-10 overflow-auto'>
            <div className='h-full w-full md:w-[400px] rounded-xl bg-[#D3E3F9] md:bg-[#e9f6fe] p-4 flex flex-row md:flex-col items-center 
            
            relative  after:absolute after:bg-[#D3E3F9] after:w-screen after:-left-4 after:h-full after:-z-10 after:top-0 after:rounded-b-[2rem] rounded-b-[2rem] md:rounded-xl md:after:hidden after:max-w-screen-sm
            
            max-md:pb-0 max-md:pt-[3rem] max-md:justify-center
            '>
                <div className='flex flex-row items-center gap-2 mt-20 mb-5 max-md:m-0'>
                    <Image src={'/propertyListing/assets/thumbsup.png'} alt='authentication' height={40} width={40} className='mt-3 mb-10' />
                    <h1 className=" whitespace-nowrap text-sm sm:text-lg mb-4">
                        Your Phone number gives<br /> access to your account.</h1>
                </div>
                <Image src={'/propertyListing/assets/authentication.png'} alt='authentication' height={280} width={280} className='md:mt-3 md:mb-10 w-1/2 max-w-[200px] max-h-[200px] min-w-[140px] min-h-[140px] self-end m-0' />
                <div className='hidden md:block'>

                    <h1 className='font-bold text-xl'>Need Help?</h1>
                    <p className='text-lg'>You Can Email Us</p>
                    <p className='text-lg text-blue-600 mb-20'>Contact@dealacres.com</p>
                </div>
            </div>
            <div className='h-full w-full md:w-[400px] md:mt-20 rounded-xl p-5 border-t-4 border-r-2 border-l-2 border-[#dcf0fd] border-b-4 max-md:border-none flex flex-col justify-end '>
                <div className='inline mx-auto'>
                    <h1 className="font-bold md:font-bold md:text-2xl text-xl  mt-2">
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
                                className="w-12 h-12 mr-2 text-3xl text-center border-2 border-gray-300 focus:border-blue-500 outline-none focus:outline-none"
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
                
            </div>
        </section>
    )
}

export default Login