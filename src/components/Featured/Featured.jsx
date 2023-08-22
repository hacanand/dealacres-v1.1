import React from "react";
import Image from "next/image";
import background from "../../../public/home loan.jpg";

const Featured = () => {
  return (
    <div className="my-4 space-y-16 mt-20 mx-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 sm:gap-y-28 sm:gap-6 my-12">
        <div className="col-span-1 md:col-span-2 lg:col-span-2 max-h-[450px]">
          <div className="flex justify-start my-4">
            <h2 className="text-3xl underline underline-offset-2 font-[Poppins]">
              Featured
            </h2>
          </div>
          <div className="border-1 shadow-md hover:shadow-lg hover:shadow-slate-700  shadow-slate-500 sm:h-full flex flex-col">
            <div className="flex-grow overflow-hidden ">
              <Image
                src={background}
                alt="card"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex  justify-center text-center text-lg font-bold mb-2 p-3">
              Text
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-2 min-h-[450px]">
          <div className="flex justify-center my-4">
            <h2 className="text-3xl underline underline-offset-2 font-[Poppins]">
              New Updates
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-0 h-full">
            <div className="border-1 shadow-md hover:shadow-lg hover:shadow-slate-700 h-44 w-2/3 justify-center item-center ml-14 sm:ml-0 sm:w-full shadow-slate-500 sm:h-52 flex flex-col">
              <div className="flex-grow relative">
                <Image src="/RP.jpg" layout="fill" alt="card" />
              </div>
              <div className="flex justify-center text-xs items-center text-center text-black  px-4 py-2">
                Text
              </div>
            </div>
            <div className="border-1 shadow-md hover:shadow-lg hover:shadow-slate-700 h-44 w-2/3 justify-center item-center ml-14 sm:ml-0 sm:w-full shadow-slate-500 sm:h-52 flex flex-col">
              <div className="flex-grow relative">
                <Image
                  src="/RP.jpg"
                  layout="fill"
                  objectFit="cover"
                  alt="card"
                />
              </div>
              <div className="flex justify-center text-xs items-center text-center text-black  px-4 py-2">
                Text
              </div>
            </div>
            <div className="border-1 shadow-md hover:shadow-lg hover:shadow-slate-700 h-44 w-2/3 justify-center item-center ml-14 sm:ml-0 sm:w-full shadow-slate-500 sm:h-52 flex flex-col">
              <div className="flex-grow relative">
                <Image
                  src="/RP.jpg"
                  layout="fill"
                  objectFit="cover"
                  alt="card"
                />
              </div>
              <div className="flex justify-center text-xs items-center text-center text-black  px-4 py-2">
                Text
              </div>
            </div>
            <div className="border-1 shadow-md hover:shadow-lg hover:shadow-slate-700 h-44 w-2/3 justify-center item-center ml-14 sm:ml-0 sm:w-full shadow-slate-500 sm:h-52 flex flex-col">
              <div className="flex-grow relative">
                <Image
                  src="/RP.jpg"
                  layout="fill"
                  objectFit="cover"
                  alt="card"
                />
              </div>
              <div className="flex justify-center text-xs items-center text-center text-black  px-4 py-2">
                Text
              </div>
            </div>

            {/* Repeat the above structure for the other New Updates items */}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="my-6 border-1 ml-8 md:ml-0 shadow-md hover:shadow-lg hover:shadow-slate-700 shadow-slate-500 w-72 max-h-[275px]">
            <div>
              <Image
                src={background}
                alt="card"
                className="w-full h-56 object-cover"
              />
            </div>
            <div className="flex justify-center text-center">
              <span className="p-2">Text</span>
            </div>
          </div>
        </div>
        <div className="md:col-span-3">
          <div className="my-6 border-1 shadow-md hover:shadow-lg hover:shadow-slate-700 shadow-slate-500 w-full h-[275px]">
            <Image
              src={background}
              alt="card"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
