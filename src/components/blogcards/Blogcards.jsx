// components/CardWithHeading.js
import React from "react";
import "./Blogcard.css";
import Link from "next/link";
import Image from "next/image";
import background from "../../../public/home.jpg";

const Blogcards = () => {
  return (
    <div className="my-4">
      <div className="flex mx-10 h-28 py-8 m-8  w-screen text-black bg-white">
        <div>
          <h2 className="text-5xl mr-2 font-[Poppins]">Finance</h2>
          <p className="text-xs mt-0 font-[Poppins] text-black block text-end">
            stay informed
          </p>
        </div>
        <div className=" flex mt-7 border-t-2 border-black w-[1015px]"></div>
        <h2 className="text-black font-medium text-base ml-2 mt-4">
          <Link className="text-blue-600" href="/">
            Show more
          </Link>
        </h2>
      </div>
      <div className="flex mx-10 space-x-10">
        <div className="my-6 border-1 shadow-md hover:shadow-lg hover:shadow-slate-700 shadow-slate-500 w-72 h-[275px]">
          <div>
            <Image src={background} alt="card" className="w-full h-52" />
          </div>
          <div className="flex justify-center text-center">
            <span className="p-3">
              Mastering Mortgage Basics: 10 Key Concepts Every
            </span>
          </div>
        </div>
        <div className="my-6 border-1 shadow-md hover:shadow-lg hover:shadow-slate-700 shadow-slate-500 w-72 h-[275px]">
          <div>
            <Image src={background} alt="card" className="w-full h-52" />
          </div>
          <div className="flex justify-center text-center">
            <span className="p-3">
              Mastering Mortgage Basics: 10 Key Concepts Every
            </span>
          </div>
        </div>
        <div className="my-6 border-1 shadow-md hover:shadow-lg hover:shadow-slate-700 shadow-slate-500 w-72 h-[275px]">
          <div>
            <Image src={background} alt="card" className="w-full h-52" />
          </div>
          <div className="flex justify-center text-center">
            <span className="p-3">
              Mastering Mortgage Basics: 10 Key Concepts Every
            </span>
          </div>
        </div>
        <div className="my-6 border-1 shadow-md hover:shadow-lg hover:shadow-slate-700 shadow-slate-500 w-72 h-[275px]">
          <div>
            <Image src={background} alt="card" className="w-full h-52" />
          </div>
          <div className="flex justify-center text-center">
            <span className="p-3">
              Mastering Mortgage Basics: 10 Key Concepts Every
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogcards;
