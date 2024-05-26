'use client';
import LocationInput from '@/app/propertylisting/commercial/user/agent/location-details/LocationInput';
import LocationDetails from '@/components/propertyListing/common/LocationDetails';
import Navigation from '@/components/propertyListing/Navigation/Navigation';
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
