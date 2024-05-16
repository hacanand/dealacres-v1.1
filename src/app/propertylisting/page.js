"use client"

import About from "@/components/propertyListing/About/About";
import Guide from "@/components/propertyListing/Guide/Guide";
import FAQ from "@/components/property/maincontentcontainer/FAQ.jsx";
import { data } from './dummydata'
import React, { Fragment } from "react";
import ReadMore from "@/components/propertyListing/ReadMore/ReadMore";
import Hero from "@/components/propertyListing/HeroProperty/Hero";

import './listingpage.css'

const page = () => {
  return (
    <Fragment>
      <Hero />
      <div className=" hidden md:block">
      <Guide />
      </div>
      <About />
      
      <div>
        
      </div>
      <div className='w-[90%] xs:w-[80%] md:w-full mx-auto my-4  md:px-16 lg:px-32   md:py-5'>
        <h2 class="singleDevHeading">Frequently Asked Questions</h2>
        <FAQ faqdata={data.mainContent.FaqData} />
      </div>
      <ReadMore subheader={"Read realty, news, guides & articles."} />
    </Fragment>
  );
};

export default page;
