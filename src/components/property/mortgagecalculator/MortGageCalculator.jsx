'use client'

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { Button, Checkbox, Grid, InputAdornment, OutlinedInput, Stack, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useLayoutEffect } from 'react';
import DoughNut from './DoughNut';

import {ClipLoader} from 'react-spinners'


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export default function MortgageCalculator({
  
}) {

  const params = useSearchParams()
 
  

  const [mortgage, setMortgage] = useState()
  const [valuesFilled, setValuesFilled] = useState(false)

  

  const { control, register, handleSubmit,setValue, getValues, watch, formState: { errors, dirtyFields } } = useForm();

  const [isLoading, setIsLoading] = useState(true)
  const onSubmit = (data) => {
    console.log(data);
   
  }

  console.log(mortgage)
  const amount = watch('amount', '')
  const downpayment = watch('downpayment', '')
  const insurance = watch('insurance', '')
  const pTax = watch('pTax', '')
  const r  = watch('roi', '')
  const n  = watch('tenure', '')
  const pmi  = watch('pmi', '')
  
 

  useEffect(() => {
    if (amount && downpayment && insurance && pTax && r && n && pmi) {
      // Convert input values to numbers
      console.log("all values")
      const amountNum = Number(amount);
      const downpaymentNum = Number(downpayment);
      const insuranceNum = Number(insurance);
      const pTaxNum = Number(pTax);
      const rNum = Number(r);
      const nNum = Number(n);
      const pmiNum = Number(pmi);
  
      // Validate input values
      if (!isNaN(amountNum) && !isNaN(downpaymentNum) && !isNaN(insuranceNum) && !isNaN(pTaxNum) && !isNaN(rNum) && !isNaN(nNum) && !isNaN(pmiNum)) {

        setValuesFilled(true);
        let rMonthly = ( rNum / 100 )/12;
        let nInMonths = nNum * 12;
        const mortgageValue =
          (amountNum - downpaymentNum + insuranceNum + pTaxNum + pmiNum) *
          ((rMonthly * (1 + rMonthly) ** nInMonths) / ((1 + rMonthly) ** nInMonths - 1));
  
        // Round the result to two decimal places (adjust as needed)
        const roundedMortgageValue = parseFloat(mortgageValue.toFixed(2));
  
        setMortgage(roundedMortgageValue);
      } else {
        // Handle invalid input values
        console.error("Invalid input values");
        setMortgage(null); // or setMortgage(0) or any other appropriate default value
      }
    }
  }, [amount, downpayment, insurance, pTax, r, n]);

  const dProps = {
    amount,
    downpayment,
    r,
    n,
    pTax,
    insurance,
    pmi
  }
  
  

 
  

 
  return (

    <div className='border border-black rounded-xl shadow p-4 relative'>

      {isLoading && <div className="absolute inset-0 bg-black/20 z-10 flex items-center justify-center">
          <ClipLoader size={100}/>
        </div>}

        <div className={`py-4 border-b border-b-gray-400`}>
            <DoughNut setIsLoading={(value) => setIsLoading(value)} mortgage={mortgage} dProps={dProps}/>
        </div>

   
      <form className='py-4' >


        <Stack justifyContent={"center"} alignItems={"center"} >
          <Grid container spacing={2} >

            <Grid item md={4} xs={12} sm={6} >
              <FormControl fullWidth>
              <InputLabel htmlFor="amount">Total Amount</InputLabel>
                <OutlinedInput
                  {...register('amount', { required: "Please fill this field." })}
                  id="amount"
                  type="number"
                  startAdornment={<InputAdornment position="start"><span className="font-bold text-lg" > ₹ </span></InputAdornment>}
                  label="Total Amount"
                  value={amount.toLocaleString('en-IN')}
                  error={errors.amount && !!errors.amount}
                  helperText={errors.amount && errors.amount.message}
                />
              </FormControl>
            </Grid>
            
       
          
            <Grid item md={4} xs={12} sm={6} >
            <FormControl fullWidth>
              <InputLabel htmlFor="downpayment">Down Payment</InputLabel>
                <OutlinedInput
                  {...register('downpayment', { required: "Please fill this field." })}
                  id="downpayment"
                  startAdornment={<InputAdornment position="start"><span className="font-bold text-lg" > ₹ </span></InputAdornment>}
                  label="Down Payment"
                  error={errors.downpayment && !!errors.downpayment}
                  helperText={errors.downpayment && errors.downpayment.message}
                />
              </FormControl>
            </Grid>
           
            <Grid item md={4} xs={12} sm={6} >
            <FormControl fullWidth>
              <InputLabel htmlFor="roi">Interest Rate</InputLabel>
                <OutlinedInput
                  {...register('roi', { required: "Please fill this field." })}
                  id="roi"
                  type="number"
                  startAdornment={<InputAdornment position="start"><span className="font-bold text-lg" > ₹ </span></InputAdornment>}
                  label="Loan roi"
                  error={errors.roi && !!errors.roi}
                  helperText={errors.roi && errors.roi.message}
                />
              </FormControl>
            </Grid>
         
            <Grid item md={4} xs={12} sm={6} >
              <FormControl fullWidth>
                <TextField
                  {...register('tenure', { required: "Please fill this field." })}
                  type="number"
                  label="Loan Terms(Years)"
                  error={errors.tenure && !!errors.tenure}
                  helperText={errors.tenure && errors.tenure.message}
                />
              </FormControl>
            </Grid>
            <Grid item md={4} xs={12} sm={6} >
              <FormControl fullWidth>

                <TextField
                  {...register('pTax', {
                    required: 'Please enter a valid property tax.'
                    
                  })}

                  label="Property Tax"
                  error={errors.pTax && !!errors.pTax}
                  helperText={errors.pTax && errors.pTax.message}
                />
              </FormControl>
            </Grid>
            <Grid item md={4} xs={12} sm={6} >
              <FormControl fullWidth>

                <TextField
                  {...register('insurance', {
                    required: "Please fill this field.",
                   
                  })}

                  label="Insurance"
                  error={errors.insurance && !!errors.insurance}
                  helperText={errors.insurance && errors.insurance.message}
                />

              </FormControl>
            </Grid>
            <Grid item md={4} xs={12} sm={6} >
              <FormControl fullWidth>

                <TextField
                  {...register('pmi', {
                    required: "Please fill this field.",
                   
                  })}

                  label="PMI"
                  error={errors.pmi && !!errors.pmi}
                  helperText={errors.pmi && errors.pmi.message}
                />

              </FormControl>
            </Grid>
          </Grid>

          

          <button className="bg-blue-500 text-white text-lg py-2 px-8 inline-flex items-center justify-center rounded shadow   disabled:bg-blue-300 self-start my-4 "
            onClick={handleSubmit(onSubmit)} >
            Submit Details
          </button>

        </Stack>

      </form>


    </div>
  );
}
