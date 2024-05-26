'use client';

import NavigationBroker from '@/components/propertyListing/Navigation/NavigationBroker';
import PricingSection from '@/components/propertyListing/common/PricingSection';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaRupeeSign } from "react-icons/fa";
const Page = () => {

 const [expectedPrice,setExpectedPrice]= useState('');
  const [pricePerSqYd, setPricePerSqYd] = useState('');
  const [brokenCharge, setBrokenCharge] = useState('');

  const isContinueButtonDisabled =
        expectedPrice.trim() === '' ||
        pricePerSqYd.trim() === '' ;
       

  return (
<PricingSection/>
  )
}

export default Page

