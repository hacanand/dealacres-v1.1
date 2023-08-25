import Image from "next/image";
import React from "react";
import background from "../../../public/bloghead.jpg";

const Bloghead = () => {
  return (
    <div className="relative  h-screen">
      <Image
        src={background}
        alt="Header Background"
        layout="fill"
        className="w-full h-full"
        objectFit="cover"
      />
      <div className="absolute top-0 left-0 p-4 space-y-16 w-full text-white">
        <div className="mt-4 flex justify-start">
          <h1 className="text-3xl drop-shadow-xl font-bold">
            Information{" "}
            <span className="bg-white text-black p-1 rounded-sm">HUB</span>
          </h1>
        </div>
        <div className=" flex mt-2 justify-center">
          <input
            type="text"
            placeholder="Search..."
            className=" bg-transparent border-2 sm:w-[300px] md:w-[400px] lg:w-[900px] text-xl text-black px-4 py-2 rounded-sm placeholder-black"
          />
        </div>
        <div className="mt-4 flex justify-center">
          <h2 className="bg-black/20 sm:w-[300px] md:w-[400px] lg:w-[1200px] p-3  text-4xl font-bold text-center">
            Deal Acres is your ultimate destination for valuable insights and
            knowledge in the ever-evolving world of real estate.
          </h2>
        </div>
        <div className="flex justify-center space-x-6">
          <div className="bg-black/80 px-4 w-52 h-36 transition hover:bg-white/60 group hover:text-black">
            <h2 className="mt-4 text-xl uppercase font-semibold text-custompink group-hover:text-pink-700">
              Infocus Rera
            </h2>
            <p className="text-sm mt-3">
              Decoding the Real Estate (Regulation and Development) Act, 2016
            </p>
          </div>

          <div className="bg-black/80 px-4 w-52 h-36 transition hover:bg-white/60 group hover:text-black">
            <h2 className="mt-4 text-xl uppercase font-semibold text-custompurple group-hover:text-purple-700">
              Infocus Rera
            </h2>
            <p className="text-sm mt-3">
              Decoding the Real Estate (Regulation and Development) Act, 2016
            </p>
          </div>
          <div className="bg-black/80 px-4 w-52 h-36 transition hover:bg-white/60 group hover:text-black">
            <h2 className="mt-4 text-xl uppercase font-semibold text-customgreen group-hover:text-green-700">
              Infocus Rera
            </h2>
            <p className="text-sm mt-3">
              Decoding the Real Estate (Regulation and Development) Act, 2016
            </p>
          </div>
          <div className="bg-black/80 px-4 w-52 h-36 transition hover:bg-white/60 group hover:text-black">
            <h2 className="mt-4 text-xl uppercase font-semibold text-custommustard group-hover:text-yellow-700">
              Infocus Rera
            </h2>
            <p className="text-sm mt-3">
              Decoding the Real Estate (Regulation and Development) Act, 2016
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bloghead;
