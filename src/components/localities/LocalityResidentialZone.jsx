import React, { Fragment } from "react";

const delhiCities = [
  {
    name: "Explore Central Delhi Locality",
    imageUrl:
      "https://media.canva.com/1/image-resize/1/800_433_92_JPG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9hbUJkRS9NQUZzNTVhbUJkRS8xL3AuanBn?osig=AAAAAAAAAAAAAAAAAAAAAJcOxeU_gkhSj1vDqde2rHf7QlKOzFItqkRH5rS1aVuX&exp=1696500181&x-canva-quality=screen&csig=AAAAAAAAAAAAAAAAAAAAACfiQ8HWdGItZYUKual7yaKPLkH82GBFk5M9M8d-qVR-",
  },
  {
    name: "Explore East Delhi Locality",
    imageUrl:
      "https://media.canva.com/1/image-resize/1/800_488_92_JPG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9PTWpVNC9NQUZzNTlPTWpVNC8xL3AuanBn?osig=AAAAAAAAAAAAAAAAAAAAABKimnj6MN4ues_e07ej-aIR-0dAhleGC-xajNp4ndXA&exp=1696501614&x-canva-quality=screen&csig=AAAAAAAAAAAAAAAAAAAAAPL_G20EqcJhkjlwzls_2QKmc3LqJdqUaIM_FbDGpoYS",
  },
  {
    name: "Explore North Delhi Locality",
    imageUrl:
      "https://media.canva.com/1/image-resize/1/800_574_92_JPG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9qdEwwWS9NQUZzNTlqdEwwWS8xL3AuanBn?osig=AAAAAAAAAAAAAAAAAAAAAMsBCPGJUeLqcRISONfNAGRDmNb6LsVQTc925-mtMqyn&exp=1696501563&x-canva-quality=screen&csig=AAAAAAAAAAAAAAAAAAAAAGOzSyI9QM0Z1nEvXa6-b3HJcIpcwadv9DH8a1SDa3Bn",
  },
  {
    name: "Explore West Delhi Locality",
    imageUrl:
      "https://media.canva.com/1/image-resize/1/640_429_92_JPG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9FYjcxVS9NQUZzNXlFYjcxVS8xL3AuanBn?osig=AAAAAAAAAAAAAAAAAAAAAIWzyawoMK7A6G0Zh3pFf-cANoEiUPyBpLNrK-bHGfWn&exp=1696502343&x-canva-quality=screen&csig=AAAAAAAAAAAAAAAAAAAAACQDPP7XQQyxlIzzM5LlBEqVpGJQMoDZ3t0-4QNogFDh",
  },
];

const LocalityResidentialZone = () => {
  return (
    <Fragment>
      <div className="mt-5 mb-5 px-[6rem] max-lg:hidden">
        <h2 className="text-4xl">Leading Residential Zones</h2>
        <p className="text-gray-500">In Delhi</p>

        <div className="grid grid-cols-3 gap-6 mt-3">
          <div className="col-span-1 rounded-lg overflow-hidden flex-1 items-center flex flex-col justify-between">
            <img
              src="https://media.canva.com/1/image-resize/1/800_530_92_JPG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9vQk9NNC9NQUZzNTRvQk9NNC8xL3AuanBn?osig=AAAAAAAAAAAAAAAAAAAAACqdOVSPHEtebakIo5FyddWlHfy-AUZoKWSqs3lE2Jwi&exp=1710446953&x-canva-quality=screen&csig=AAAAAAAAAAAAAAAAAAAAAEvD6sgAaK5CKQJ73Ojx0FjiqJcQzwxb3QUsZpsJd579"
              alt="Qutub Minar"
              className="rounded-lg h-full"
            />
            <div className="p-2 text-center">
              <h3 className="text-md font-semibold underline">
                Explore Delhi south Delhi localities
              </h3>
            </div>
          </div>
          <div className="col-span-2 grid grid-cols-2 grid-rows-2 gap-6">
            {delhiCities.map((town, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden flex-1 items-center flex flex-col justify-between"
              >
                <img
                  src={town.imageUrl}
                  alt="Qutub Minar"
                  className="rounded-lg object-cover h-[100%]"
                />
                <div className="p-2 text-center">
                  <h3 className="text-md font-semibold underline">
                    {town.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex items-center justify-end py-3">
          <button class="font-bold text-lg rounded-md bg-blue-600 px-3 py-1 text-white">
            View All
          </button>
        </div>
      </div>

      <div className="mt-10 mb-5 px-4 sm:px-6 md:px-8 lg:px-12 lg:hidden">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl">
          Leading Residential Zones
        </h2>
        <p className="text-gray-500">In Delhi</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-3">
          <div className="col-span-1 rounded-lg overflow-hidden flex flex-col justify-between">
            <img
              src="https://media.canva.com/1/image-resize/1/800_530_92_JPG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9vQk9NNC9NQUZzNTRvQk9NNC8xL3AuanBn?osig=AAAAAAAAAAAAAAAAAAAAAK4kd10FjwIy5fFLuCEmarzhYOLR-Nl3uvWLv_REwl9l&exp=1696500553&x-canva-quality=screen&csig=AAAAAAAAAAAAAAAAAAAAAMrrLxLAE92Ze71uldMY7Em7n_447Jxt3tFNzmpxTGj4"
              alt="Qutub Minar"
              className="rounded-lg h-auto sm:h-full"
            />
            <div className="p-2 text-center">
              <h3 className="text-md font-semibold underline">
                Explore Delhi South Delhi localities
              </h3>
            </div>
          </div>
          {delhiCities.map((town, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden flex flex-col justify-between"
            >
              <img
                src={town.imageUrl}
                alt="Qutub Minar"
                className="rounded-lg object-cover h-auto sm:h-full"
              />
              <div className="p-2 text-center">
                <h3 className="text-md font-semibold underline">{town.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex items-center justify-center sm:justify-end py-3">
          <button className="font-bold text-lg rounded-md bg-blue-600 px-3 py-1 text-white">
            View All
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default LocalityResidentialZone;
