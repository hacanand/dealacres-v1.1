'use client';
import { useState } from 'react'
import Image from 'next/image'


import { TiPencil } from "react-icons/ti";
import Link from 'next/link';
import HelpDetails from '@/components/propertyListing/HelpDetails';
import LoginScreen from '@/components/propertyListing/common/LoginScreen';


const Login = () => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [isEdit, setIsEdit] = useState(false);
    const [phone, setPhone] = useState('8767608383');

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
      <LoginScreen/>
    )
}

export default Login