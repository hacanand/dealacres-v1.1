import React, { Fragment } from "react";

const delhiCities = [
  {
    name: "Explore Central Delhi Locality",
    imageUrl:
      "https://media.canva.com/1/image-resize/1/800_433_92_JPG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9hbUJkRS9NQUZzNTVhbUJkRS8xL3AuanBn?osig=AAAAAAAAAAAAAAAAAAAAAESC7pJ8ymR2eBAtL6OzZznqpYuyI_bP8IksBvZvrhFT&exp=1711450981&x-canva-quality=screen&csig=AAAAAAAAAAAAAAAAAAAAAF95052zahjiy0J2HO82YXt3QtFbl3b_4HYlMz1HME5u",
  },
  {
    name: "Explore East Delhi Locality",
    imageUrl:
      "https://media.canva.com/1/image-resize/1/800_488_92_JPG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9PTWpVNC9NQUZzNTlPTWpVNC8xL3AuanBn?osig=AAAAAAAAAAAAAAAAAAAAAPbQc7_3qDPt6Hr25NSL8HFEm9XOjLphwYTe5bQAXw3w&exp=1711448814&x-canva-quality=screen&csig=AAAAAAAAAAAAAAAAAAAAALT7Eqk-TF_hYSF5Hby9di4_uhBpfraGJMk6u0wtYsk3",
  },
  {
    name: "Explore North Delhi Locality",
    imageUrl:
      "https://media.canva.com/1/image-resize/1/800_574_92_JPG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9qdEwwWS9NQUZzNTlqdEwwWS8xL3AuanBn?osig=AAAAAAAAAAAAAAAAAAAAAAjcBeH0Xg30Znn33gttMqHpf6mQbmwK2R9iMS0RsQNQ&exp=1711448763&x-canva-quality=screen&csig=AAAAAAAAAAAAAAAAAAAAANQVBt-kdOxG3tx2lH2n-PKx2Wtys6SpmO606ze_OzWo",
  },
  {
    name: "Explore West Delhi Locality",
    imageUrl:
      "https://media.canva.com/1/image-resize/1/640_429_92_JPG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9FYjcxVS9NQUZzNXlFYjcxVS8xL3AuanBn?osig=AAAAAAAAAAAAAAAAAAAAAJ4AQwWcSA_mnUtwq_KxUnSTa_ENhCczM-nkwENRKQq3&exp=1711449543&x-canva-quality=screen&csig=AAAAAAAAAAAAAAAAAAAAALI9kV043EN6VQWOaa_eWG5LR8mUXl3dsv399ONwTIbR",
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
              src="https://media.canva.com/1/image-resize/1/800_530_92_JPG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9vQk9NNC9NQUZzNTRvQk9NNC8xL3AuanBn?osig=AAAAAAAAAAAAAAAAAAAAAL5L9Wv9W9J3bAAnkrChPZ88Q3UAooC3I7dLN4_bp-iA&exp=1711447753&x-canva-quality=screen&csig=AAAAAAAAAAAAAAAAAAAAAK7Qz1S22jFgf99PB6bvhVI4sF9mUOedM1tMu8mljx-s"
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
              src="https://media.canva.com/1/image-resize/1/800_530_92_JPG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9vQk9NNC9NQUZzNTRvQk9NNC8xL3AuanBn?osig=AAAAAAAAAAAAAAAAAAAAAL5L9Wv9W9J3bAAnkrChPZ88Q3UAooC3I7dLN4_bp-iA&exp=1711447753&x-canva-quality=screen&csig=AAAAAAAAAAAAAAAAAAAAAK7Qz1S22jFgf99PB6bvhVI4sF9mUOedM1tMu8mljx-s"
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
