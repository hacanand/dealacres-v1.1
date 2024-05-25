'use client';
import BannerLayout from '@/components/propertyListing/BannerLayout';
import NavigationCOwner from '@/components/propertyListing/Navigation/NavigationCOwner';
import LocationDetails from '@/components/propertyListing/common/LocationDetails';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Page = () => {

  const [formData, setFormData] = useState({
    state: '',
    city: '',
    projectName: '',
    area: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const isFormValid = () => {
    const { state, city, projectName, area } = formData;
    return state && city && projectName && area;
  };

  return (
    <LocationDetails/>
  );
};

export default Page;
