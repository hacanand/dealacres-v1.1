import React, { Fragment } from "react";

const delhiCities = [
  {
    name: "Mohan Corporative Area, Delhi",
    imageUrl:
      "https://media.canva.com/1/image-resize/1/800_450_92_JPG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9sZkY4SS9NQUZzNkZsZkY4SS8xL3AuanBn?osig=AAAAAAAAAAAAAAAAAAAAAPfI5yoWRGQ3lwlzT5oM7RHBmVP-SFVkCf9J_z6DHL6H&exp=1711450234&x-canva-quality=screen&csig=AAAAAAAAAAAAAAAAAAAAAFgDRbUKjJpoFCAExyHlN9jSJK06AQBRsqyIqgChENp4",
  },
  {
    name: "Connaught Place, Delhi",
    imageUrl:
      "https://media.canva.com/1/image-resize/1/1000_667_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS92Zk00dy9NQUZzNkp2Zk00dy8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAAKyrbx0ZBa8emTYQtrtP6rD6OaTYoWzHLrdlQvv9rix5&exp=1711448283&x-canva-quality=screen_2x&csig=AAAAAAAAAAAAAAAAAAAAAAJuteabBCkyWiZzwfZM6Bnjzf94-MBWc-XUN7BJYks9",
  },
  {
    name: "Khan Market",
    imageUrl:
      "https://media.canva.com/1/image-resize/1/600_337_92_JPG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9aa3J6US9NQUZzNklaa3J6US8xL3AuanBn?osig=AAAAAAAAAAAAAAAAAAAAADvgRdT1uHi3LPZWigfLk2LZm2JpjUPLB1mwjSNdIZCp&exp=1711451257&x-canva-quality=screen&csig=AAAAAAAAAAAAAAAAAAAAALZ_82voNKMGbfFPbt6e4XwEiBQuuTVVLdWqMwWbX_8_",
  },
  {
    name: "Nehru Place, Delhi",
    imageUrl:
      "https://media.canva.com/1/image-resize/1/550_300_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9ZRkV1VS9NQUZzNkhZRkV1VS8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAAAr4W_hdqO8U5ovUFUa0G-ZWXGWHq17hAcstd1wlxyvH&exp=1711448653&x-canva-quality=screen&csig=AAAAAAAAAAAAAAAAAAAAACEJZ4ppqxR97TBFmxWsBmRosBGGYPZZGQ9GsmyHzwUx",
  },
  {
    name: "Sarojini Nagar, Delhi",
    imageUrl:
      "https://media.canva.com/1/image-resize/1/800_450_92_JPG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9PLU4xOC9NQUZzNktPLU4xOC8xL3AuanBn?osig=AAAAAAAAAAAAAAAAAAAAAD6P3NbDYgHSbArBo2qmRkcsRZ-1aJ-c1CuqoVw_UKDe&exp=1711452075&x-canva-quality=screen&csig=AAAAAAAAAAAAAAAAAAAAAPfuwL3DO4WxMs4kQbohLglBfzF19531Z3wZqWJTFEof",
  },
  {
    name: "Karol Bhag, Delhi",
    imageUrl:
      "https://media.canva.com/1/image-resize/1/750_400_92_JPG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9hc2tnay9NQUZzNkthc2tnay8xL3AuanBn?osig=AAAAAAAAAAAAAAAAAAAAAIxCwZs96Bj_qPR5GYzPzRsotgKPE_CqrgS0aCLY-ZBo&exp=1711449741&x-canva-quality=screen&csig=AAAAAAAAAAAAAAAAAAAAAEyLqKmoanmEib_Nw5Fw52dlgs5iyEY129eX4_wYEKNJ",
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
