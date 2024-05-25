'use client';
import { useState } from 'react';
import Image from 'next/image'
import Button from '@/components/propertyListing/Button/Button';
import Link from 'next/link';
import BannerLayout from '@/components/propertyListing/BannerLayout';
import HelpDetails from '@/components/propertyListing/HelpDetails';
import ChooseInfo from '@/components/propertyListing/common/ChooseInfo';


const Info = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const getDynamicLink = () => {

    switch (selectedOption) {
      case 'owner':
        return 'owner/location-details';
      case 'agent':
        return 'agent/agent-details';
      case 'builder':
        return 'builder/location-details';
      default:
        return '/choose-info';
    }
  };

  return (  
    <ChooseInfo/>
  )
}

export default Info