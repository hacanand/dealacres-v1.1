import React from "react";

const ServiceExplore = () => {
  return (
    <div className="p-5 bg-blue-800 rounded-xl">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        <p className="text-white text-2xl font-bold text-center md:text-left">
          Explore Our Services..
        </p>

        {/* Repeat this block for each service */}
        <div className="relative rounded-xl border-2 border-white">
          <div className="overflow-hidden h-40 md:h-28">
            <img
              src="https://img.freepik.com/premium-photo/house-human-hands-isolated-white-background_564276-6323.jpg"
              className="object-cover h-full w-full rounded-xl"
            />
          </div>

          <div className="rounded-full -bottom-1 absolute flex items-center justify-center w-full md:w-[110%] -right-2  px-4 py-1 bg-gray-300">
            <p className="text-xs md:text-base">Home Loan</p>
          </div>
        </div>
        {/* End of service block */}

        {/* Repeat this block for each service */}
        <div className="relative rounded-xl border-2 border-white">
          <div className="overflow-hidden h-40 md:h-28">
            <img
              src="https://img.freepik.com/premium-photo/house-human-hands-isolated-white-background_564276-6323.jpg"
              className="object-cover h-full w-full rounded-xl"
            />
          </div>

          <div className="rounded-full -bottom-1 absolute flex items-center justify-center w-full md:w-[110%] -right-2  px-4 py-1 bg-gray-300">
            <p className="text-xs md:text-base">Home Loan</p>
          </div>
        </div>
        {/* End of service block */}

        {/* Repeat this block for each service */}
        <div className="relative rounded-xl border-2 border-white">
          <div className="overflow-hidden h-40 md:h-28">
            <img
              src="https://img.freepik.com/premium-photo/house-human-hands-isolated-white-background_564276-6323.jpg"
              className="object-cover h-full w-full rounded-xl"
            />
          </div>

          <div className="rounded-full -bottom-1 absolute flex items-center justify-center w-full md:w-[110%] -right-2  px-4 py-1 bg-gray-300">
            <p className="text-xs md:text-base">Home Loan</p>
          </div>
        </div>
        {/* End of service block */}
      </div>
    </div>
  );
};

export default ServiceExplore;
