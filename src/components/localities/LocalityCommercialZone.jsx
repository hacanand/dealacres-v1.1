import React, { Fragment } from "react";

const delhiCities = [
  {
    name: "Mohan Corporative Area, Delhi",
    imageUrl:
      "https://media.canva.com/1/image-resize/1/800_450_92_JPG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9sZkY4SS9NQUZzNkZsZkY4SS8xL3AuanBn?osig=AAAAAAAAAAAAAAAAAAAAABZ7kt3DQR8Us1C8H8nPSWMI8f_Nir6wuyeh5MU9pZpZ&exp=1696506634&x-canva-quality=screen&csig=AAAAAAAAAAAAAAAAAAAAALLG8qvSQmX_izm_rSdQ0xm0R4SjNB5Z2pWxlmRbNleP",
  },
  {
    name: "Connaught Place, Delhi",
    imageUrl:
      "https://media.canva.com/1/image-resize/1/1000_667_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS92Zk00dy9NQUZzNkp2Zk00dy8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAAD32L6YMMEkC52MK1P0ipHKTZvPjxZg6v7EtrS7WYBud&exp=1696508283&x-canva-quality=screen_2x&csig=AAAAAAAAAAAAAAAAAAAAAElyTqmh3ZDanHh_KC22m3JUk7SG5czy-2lAU9fHVZ9i",
  },
  {
    name: "Khan Market",
    imageUrl:
      "https://media.canva.com/1/image-resize/1/600_337_92_JPG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9aa3J6US9NQUZzNklaa3J6US8xL3AuanBn?osig=AAAAAAAAAAAAAAAAAAAAAM5MdHJCd2Ed7bnnZe6PqsTp410-hNYxvVY0mT5zoHKu&exp=1696507657&x-canva-quality=screen&csig=AAAAAAAAAAAAAAAAAAAAAGERRlHR8jWUp0jBIzshKIRxD80TD8nuXQNo3-E4PX4j",
  },
  {
    name: "Nehru Place, Delhi",
    imageUrl:
      "https://media.canva.com/1/image-resize/1/550_300_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9ZRkV1VS9NQUZzNkhZRkV1VS8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAAPjudndc2RE8WCMz6q0AY80gO_0M8_XiA8AyuzIL-0RX&exp=1696505053&x-canva-quality=screen&csig=AAAAAAAAAAAAAAAAAAAAANqrFZqGMTQy5ajSokiPhKX02lKcuEoeWz3flVxV_lrJ",
  },
  {
    name: "Sarojini Nagar, Delhi",
    imageUrl:
      "https://media.canva.com/1/image-resize/1/800_450_92_JPG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9PLU4xOC9NQUZzNktPLU4xOC8xL3AuanBn?osig=AAAAAAAAAAAAAAAAAAAAAIH0O8VSyD_aeQDzd6gB09oAZzpq5vQMuZQxB7z4ZE1V&exp=1696508475&x-canva-quality=screen&csig=AAAAAAAAAAAAAAAAAAAAAHUc827M74mvTA6X7MXam0uoW1Fz4yeGLKizuk-gXfIx",
  },
  {
    name: "Karol Bhag, Delhi",
    imageUrl:
      "https://media.canva.com/1/image-resize/1/750_400_92_JPG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9hc2tnay9NQUZzNkthc2tnay8xL3AuanBn?osig=AAAAAAAAAAAAAAAAAAAAAKj91V-DTSEuDQjKT_sAAVXvEtP_zAzQi7SYt40VUNjU&exp=1696506141&x-canva-quality=screen&csig=AAAAAAAAAAAAAAAAAAAAAMG7XaLbzaTRmo-ncjudeQQEAb2KJr0WF31b_vaOtEGx",
  },
];

const LocalityCommercialZone = () => {
  return (
    <Fragment>
      {/* Large Screen Layout */}
      <div className="mt-5 mb-5 px-[6rem] max-lg:hidden">
        <h2 className="text-4xl">Leading Commercial Zones</h2>
        <p className="text-gray-500">In Delhi</p>

        <div className="grid grid-cols-3 gap-6 mt-3">
          {delhiCities.map((town, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden flex-1 items-center flex flex-col justify-between ${
                index === 1 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={town.imageUrl}
                alt={town.name}
                className="rounded-lg object-cover h-[100%]"
              />
              <div className="p-2 text-center">
                <h3 className="text-md font-semibold underline">{town.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex items-center justify-end py-3">
          <button className="font-bold text-lg rounded-md bg-blue-600 px-3 py-1 text-white">
            View All
          </button>
        </div>
      </div>

      {/* Small Screen Layout */}
      <div className="p-4 sm:p-6 lg:p-8 lg:hidden mt-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl">
          Leading Residential Zones
        </h2>
        <p className="text-gray-500">In Delhi</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {delhiCities.map((town, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden">
              <img
                src={town.imageUrl}
                alt={town.name}
                className="w-full h-48 sm:h-60 lg:h-72 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold mb-2 underline">
                  {town.name}
                </h3>
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

export default LocalityCommercialZone;
