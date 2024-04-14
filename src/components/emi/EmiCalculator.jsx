'use client'
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { getMonthlyEmi } from '@/app/libs/getMonthlyEmi';
import { EmiPie } from './EmiPie';
import Link from 'next/link';
import { TextField } from '@mui/material';

const EmiCalculator = () => {
    const [monthlyEmi, setMonthlyEmi] = useState(null);
    const [pieData, setPieData] = useState([100, 0]); // Initial pie data

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const amt = watch('amt', '');
    const roi = watch('roi', '');
    const tenure = watch('tenure', '');

    useEffect(() => {
        const loanData = getMonthlyEmi(amt, roi, tenure);
        if (loanData) {
            console.log(loanData)
            setMonthlyEmi(loanData[0]);
            setPieData([loanData[1], loanData[2] - loanData[1]]);
        }
    }, [amt, roi, tenure]);

    return (
        <div className='grid grid-cols-2 gap-x-4 grid-rows-5 place-items-center border rounded-lg shadow border-gray-400 px-2 sm:px-8 py-4 max-w-[500px] md:max-w-none mx-auto md:mx-0 '>
            <div className='row-start-1 row-span-1  col-span-1 w-full flex justify-center my-1'>

            <TextField
                     className='border border-gray-400 py-2 px-4 rounded-lg w-full md:w-2/3 shadow text-sm sm:text-base md:text-lg'
                     placeholder='Loan Amount'
                     type='number'
                     label="Amount"
                     step='0.01'
                     id='amt'
                     {...register('amt', { required: "Please enter a valid loan amount" })}
                />
                
            </div>
            <div className='row-start-1 row-span-1  col-span-1 w-full flex justify-center my-1'>
                <TextField
                     type='number'
                     className='border border-gray-400 py-2 px-4 rounded-lg w-full md:w-2/3 shadow text-sm sm:text-base md:text-lg'
                     placeholder='Loan Tenure'
                     label="Tenure"
                     id='tenure'
                     {...register('tenure', { required: "Please enter a valid loan tenure." })}
                />
           
            </div>

            <div className='row-start-2 row-span-4 col-start-1  col-span-1 flex justify-center md:h-full md:w-[300px]  max-w-[200px] sm:max-w-none max-h-[300px] md:max-h-[600px]'>
                <EmiPie data={pieData} />
            </div>
            <div className='row-start-2 row-span-1 col-span-1 w-full flex justify-center my-1'>

                <TextField
                    type='number'
                    className='border border-gray-400 py-2 px-4 rounded-lg w-full md:w-2/3 shadow text-sm sm:text-base md:text-lg'
                    placeholder='Rate Of Interest'
                    label="ROI"
                    id='roi'
                    {...register('roi', { required: "Please enter a valid loan interest." })}
                />

            </div>
            <div className='row-start-3 row-span-3 col-span-1 h-full w-full flex justify-center'>
                <div className={`w-full md:w-2/3 rounded-lg shadow py-2 px-4 border-gray-400 border text-center h-full transition-all ${!!monthlyEmi ? 'flex visible scale-100' : 'invisible scale-0'} flex-col justify-around gap-y-2 `}>
                    <p className='font-bold text-sm md:text-base'>Monthly EMI</p>

                    <p className='font-bold text-lg md:text-xl'>₹ {monthlyEmi && !isNaN(monthlyEmi) && monthlyEmi.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>

                    <p className='text-sm md:text-base'>Total Payable Amount<br />₹ {(pieData[1] + pieData[0]).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>

                    <Link href={`/instant-loan?amount=${amt}&roi=${roi}&tenure=${tenure}`} className='bg-blue-600 text-xs xs:text-sm sm:text-base whitespace-nowrap text-white rounded shadow py-1 px-2 '>
                        Get Instant Loan
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default EmiCalculator;
