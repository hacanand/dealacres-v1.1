import ReadMore from '@/components/propertyListing/ReadMore/ReadMore'
import AboutRentAgreement from '@/components/rentagreement/AboutRentAgreement'
import DownloadMaterial from '@/components/rentagreement/DownloadMaterial'
import EstateService from '@/components/rentagreement/EstateService'
import Experts from '@/components/rentagreement/Experts'
import ServiceBanner from '@/components/rentagreement/ServiceBanner'
import React from 'react'

const page = () => {
  return (
    <div>
      <ServiceBanner />
      <Experts />
      <AboutRentAgreement />
      <h2>Frequently Asked Quetion</h2>
      <DownloadMaterial />
      <EstateService />
      <ReadMore />
    </div>
  )
}

export default page;
