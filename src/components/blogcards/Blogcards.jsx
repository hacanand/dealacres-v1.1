// components/CardWithHeading.js
import React from "react";
import "./Blogcard.css";
import Link from "next/link";
import Image from "next/image";
import background from "../../../public/home.jpg";
import loan1 from "../../../public/all blog/loan1.webp";
import loan2 from "../../../public/all blog/loan2.webp";
import loan3 from "../../../public/all blog/loan3.jpg";
import FeatureCard from "../Featured/FeatureCard";

const Blogcards = () => {
  return (
    <div className="my-12 md:my-8">
      <div className="flex gap-1  py-4 mb-4 w-full   text-black bg-white items-start">
        <div className="min-w-[30%] md:min-w-0 max-w-[30%]">
          <h2 className=" inline-flex flex-col
          text-2xl md:text-3xl lg:text-4xl font-[Poppins]">Loan Assistance
          <span className="self-end text-base font-normal">
            Stay Informed
          </span>
          </h2>
          
        </div>
        <div className=" inline self-center  border-t-4 border-black min-w-[50%] md:min-w-[68%] "></div>
        <h2 className="self-center max-w-[20%] md:max-w-[12%] text-right ">
          <Link className="text-blue-600 font-bold break-keep  text-base md:text-lg block w-full lg:text-xl" href="/">
            Read More
          </Link>
        </h2>
      </div>
      <div className="flex gap-4 flex-wrap md:flex-nowrap justify-center  md:justify-normal    ">
        <FeatureCard img={loan1} text={"Mastering Mortgage Basics: 10 Key Concepts Every"} />
        <FeatureCard img={loan2} text={"Mastering Mortgage Basics: 10 Key Concepts Every"} />
        <FeatureCard img={loan3} text={"Mastering Mortgage Basics: 10 Key Concepts Every"} />
        
      </div>
      

    </div>
  );
};

export default Blogcards;
