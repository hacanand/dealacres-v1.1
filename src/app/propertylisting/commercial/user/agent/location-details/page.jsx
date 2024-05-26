'use client';
import LocationInput from '@/app/propertylisting/commercial/user/agent/location-details/LocationInput';
import BannerLayout from '@/components/propertyListing/BannerLayout';
import HelpDetails from '@/components/propertyListing/HelpDetails';
import InnerWrapper from '@/components/propertyListing/InnerWrapper';
import NavigationBroker from '@/components/propertyListing/Navigation/NavigationBroker';
import OuterWrapper from '@/components/propertyListing/OuterWrapper';
import PageWrapper from '@/components/propertyListing/PageWrapper';
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
    houseNo: '',
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
